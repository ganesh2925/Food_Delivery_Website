import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";


const foodRounter = express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({
    storage: storage
});

foodRounter.post("/add",upload.single('image') ,addFood);
foodRounter.get("/list", listFood);
foodRounter.post("/remove", removeFood);


export default foodRounter;