const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Manually parse .env
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf-8');
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let val = match[2].trim();
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      }
      process.env[key] = val;
    }
  });
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Mongoose
const MONGO_URI = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/celemedilag'; // Assuming default, adjust if different in .env
mongoose.connect(MONGO_URI);

const AlbumSchema = new mongoose.Schema({
  albumName: String,
  photos: [{ url: String, caption: String, uploadedAt: Date }],
}, { timestamps: true });

const Album = mongoose.model('Album', AlbumSchema);

const GALLERY_DIR = path.join(__dirname, '../frontend/public/gallery');
const ALBUM_ID = '6a747ca1d669564a10395ead'; // The ID provided by the user

const delay = ms => new Promise(res => setTimeout(res, ms));

async function uploadToCloudinary(filePath, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, { folder: 'celemedilag_gallery' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      });
    } catch (err) {
      console.error(`Upload failed, retrying (${i + 1}/${retries})...`, err.message);
      await delay(2000);
      if (i === retries - 1) throw err;
    }
  }
}

async function run() {
  try {
    console.log('Connecting to database...');
    const album = await Album.findById(ALBUM_ID);
    if (!album) {
      console.error('Album not found in DB!');
      process.exit(1);
    }
    console.log('Found Album:', album.albumName);

    const files = fs.readdirSync(GALLERY_DIR).filter(f => f.startsWith('photo') && f.endsWith('.jpg'));
    console.log(`Found ${files.length} photos to upload.`);

    const newPhotos = [];
    let count = 1;
    for (const file of files) {
      const filePath = path.join(GALLERY_DIR, file);
      console.log(`Uploading ${count}/${files.length}: ${file}...`);
      const result = await uploadToCloudinary(filePath);
      
      newPhotos.push({
        url: result.secure_url,
        caption: `Campus Fellowship Moment ${count}`,
        uploadedAt: new Date()
      });
      count++;
      await delay(500); // Prevent rate limiting / EPIPE
    }

    console.log('All uploads complete! Updating database...');
    album.photos = newPhotos;
    await album.save();
    console.log('Database updated successfully!');

  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    mongoose.connection.close();
  }
}

run();
