import express from "express";
import multer from "multer";
import path from "path";

import {
  handleUpdloadFile,
  handleUpdloadMultipleFile,
} from "../controllers/UploadController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

let uploadMultipleFiles = multer({
  storage: storage,
  fileFilter: imageFilter,
}).array("MultipleFiles", 3);

//Single file
router.post("/upload-single", upload.single("file"), handleUpdloadFile);

//Multiple files
router.post(
  "/upload-multiple",
  (req, res, next) => {
    uploadMultipleFiles(req, res, (err) => {
      if (
        err instanceof multer.MulterError &&
        err.code === "LIMIT_UNEXPECTED_FILE"
      ) {
        // handle multer file limit error here
        res.send("LIMIT_UNEXPECTED_FILE");
      } else if (err) {
        res.send(err);
      } else {
        // make sure to call next() if all was well
        next();
      }
    });
  },
  handleUpdloadMultipleFile
);

export default router;
