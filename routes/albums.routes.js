import { Router } from "express";
import AlbumsController from "../controller/albums.controller.js";

const router = Router();

router.get("/", AlbumsController.getAllAlbums);

router.post("/", AlbumsController.addNewAlbum);

export default router;
