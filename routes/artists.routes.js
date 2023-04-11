import { Router } from "express";
import ArtistsController from "../controller/artists.controller.js";

const router = Router();

router.get("/", ArtistsController.getAllArtists);

router.get("/:id", ArtistsController.getArtistById);

router.post("/", ArtistsController.addNewArtist);

router.patch("/:id/songs", ArtistsController.updateSongs);

export default router;
