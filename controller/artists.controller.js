import ArtistService from "../services/artists.service.js";

export default class ArtistsController {
  static async getAllArtists(req, res) {
    try {
      const artists = await ArtistService.getAllArtists();
      res.status(200).send(artists);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getArtistById(req, res) {
    try {
      const artist = await ArtistService.getArtistById(req.params.id);
      res.status(200).send(artist);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async addNewArtist(req, res) {
    try {
      const newArtist = await ArtistService.addNewArtist(req.body);

      res.status(200).send(newArtist);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async updateSongs(req, res) {
    try {
      const artistId = req.params.id;
      const songsIds = req.body.songsIds;

      const response = await ArtistService.updateSongs(artistId, songsIds);

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
