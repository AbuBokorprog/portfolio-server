import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
// import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: 'dphjei2ph',
  api_key: '311619775455299',
  api_secret: 'bcmTlnbMyl1-jA4s-1R813h-zKo', // Click 'View Credentials' below to copy your API secret
});

export const sendImageToCloudinary = (imageName, path) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      { public_id: imageName },
      function (error, result) {
        if (error) {
          reject(error);
        }
        resolve(result);
        // delete a file asynchronously
        // fs.unlink(path, (err) => {
        //   if (err) {
        //     console.log(err);
        //   } else {
        //     console.log("File is deleted.");
        //   }
        // });
      }
    );
  });
};

// Set up multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, process.cwd() + '/src/uploads/');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix);
//   },
// });
const newStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
});
export const upload = multer({ storage: newStorage });
