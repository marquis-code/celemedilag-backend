const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Mongoose
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/celemedilag';
const AlbumSchema = new mongoose.Schema({
  albumName: String,
  photos: [{ url: String, caption: String, uploadedAt: Date }],
}, { timestamps: true });

const Album = mongoose.models.Album || mongoose.model('Album', AlbumSchema);

const DRIVE_DIR = '/Users/marquis/cele-medilag-website/drive_images';
const ALBUM_NAME = 'Google Drive Uploads';

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
    await mongoose.connect(MONGO_URI);

    if (!fs.existsSync(DRIVE_DIR)) {
        console.error(`Directory not found: ${DRIVE_DIR}`);
        process.exit(1);
    }

    let album = await Album.findOne({ albumName: ALBUM_NAME });
    if (!album) {
      album = new Album({ albumName: ALBUM_NAME, photos: [] });
      await album.save();
      console.log('Created new album:', ALBUM_NAME);
    } else {
      console.log('Found existing album:', ALBUM_NAME);
    }

    const files = fs.readdirSync(DRIVE_DIR).filter(f => fs.lstatSync(path.join(DRIVE_DIR, f)).isFile() && !f.startsWith('.'));
    console.log(`Found ${files.length} files to upload.`);

    const newPhotos = [];
    let count = 1;
    for (const file of files) {
      const filePath = path.join(DRIVE_DIR, file);
      console.log(`Uploading ${count}/${files.length}: ${file}...`);
      
      try {
        const result = await uploadToCloudinary(filePath);
        
        newPhotos.push({
            url: result.secure_url,
            caption: file,
            uploadedAt: new Date()
        });
        console.log(`Successfully uploaded ${file}`);
      } catch (uploadError) {
          console.error(`Failed to upload ${file}`, uploadError);
      }
      
      count++;
      await delay(500); // Prevent rate limiting
    }

    console.log('All uploads complete! Updating database...');
    album.photos = album.photos.concat(newPhotos);
    await album.save();
    console.log('Database updated successfully!');

  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    await mongoose.connection.close();
  }
}

run();
