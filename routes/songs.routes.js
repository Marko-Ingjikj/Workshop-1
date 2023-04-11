import { Router } from "express";
import SongsController from "../controller/songs.controller.js";

const router = Router();

router.get("/", SongsController.getAllSongs);

router.get("/:id", SongsController.getSongById);

router.post("/", SongsController.addNewSong);

router.put("/:id", SongsController.updateSong);

export default router;
