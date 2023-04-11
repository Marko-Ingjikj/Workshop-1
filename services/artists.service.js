import Artist from "../model/artists.model.js";
import SongService from "./songs.service.js";

export default class ArtistService {
  static async getAllArtists() {
    const artists = Artist.find();

    return artists;
  }

  static async getArtistById(artistId) {
    const artist = Artist.findById(artistId);

    return artist;
  }

  static async addNewArtist(artistData) {
    const newArtist = await new Artist(artistData);

    const response = await newArtist.save();

    return response;
  }

  static async updateSongs(artistId, songsIds) {
    const artist = Artist.find(artistId);

    if (!artist) throw new Error(`Artist with that ID not found`);

    artist.songs = songsIds;

    for (const songId of songsIds) {
      await SongService.updateSong(songId, { artist: artistId });
    }

    await artist.save();
    return artist;
  }
}
