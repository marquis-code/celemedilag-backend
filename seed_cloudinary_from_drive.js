const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const folderPath = process.argv[2] || '/tmp/drive_images';

if (!fs.existsSync(folderPath)) {
  console.error(`Folder ${folderPath} does not exist.`);
  process.exit(1);
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function uploadFolder() {
  try {
    const files = fs.readdirSync(folderPath);
    let count = 1;
    
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      
      if (fs.lstatSync(filePath).isFile()) {
        console.log(`Uploading ${count}/${files.length}: ${file}...`);
        try {
          const result = await cloudinary.uploader.upload(filePath, {
            folder: 'celemedilag_gallery', // Adjust as needed
            use_filename: true,
            unique_filename: false,
          });
          console.log(`Successfully uploaded ${file} to ${result.secure_url}`);
        } catch (uploadError) {
          console.error(`Failed to upload ${file}:`, uploadError.message || uploadError);
        }
        count++;
        await delay(500); // Prevent rate limiting
      }
    }
    console.log('Upload process completed!');
  } catch (error) {
    console.error('Error reading folder:', error);
  }
}

uploadFolder();
