import AlbumsService from "../services/albums.service.js";

export default class AlbumsController {
  static async getAllAlbums(req, res) {
    try {
      const albums = await AlbumsService.getAllAlbums();

      res.status(200).send(albums);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addNewAlbum(req, res) {
    try {
      const newAlbum = await AlbumsService.addNewAlbum(req.body);

      res.status(200).send(newAlbum);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
