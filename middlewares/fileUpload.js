import multer from 'multer';
import fs from 'fs';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = `public/upload/assets`;
    fs.mkdirSync(path, { recursive: true });
    cb(null, "public/upload/assets");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

export const uploadFile = multer({
  storage: storage,
});
