import SongService from "../services/songs.service.js";

export default class SongsController {
  static async getAllSongs(req, res) {
    let query = {};

    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    if (req.query.artist) {
      query.artist = req.query.artist;
    }

    try {
      if (query) {
        const songs = await SongService.getSongsByQuery(query);

        res.status(200).send(songs);
      } else {
        const songs = await SongService.getAllSongs();

        res.status(200).send(songs);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getSongById(req, res) {
    try {
      const song = await SongService.getSongById(req.params.id);

      res.status(200).send(song);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addNewSong(req, res) {
    try {
      const newSong = await SongService.addNewSong(req.body);

      res.status(200).send(newSong);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async updateSong(req, res) {
    try {
      const updatedSong = await SongService.updateSong(req.params.id, req.body);

      res.status(200).send(updatedSong);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
