import { Router } from "express";
import artistsRouter from "./routes/artists.routes.js";
import songsRouter from "./routes/songs.routes.js";
import albumsRouter from "./routes/albums.routes.js";

const router = Router();

router.use("/artists", artistsRouter);
router.use("/songs", songsRouter);
router.use("/albums", albumsRouter);

export default router;
