import Song from "../model/songs.model.js";

export default class SongService {
  static async getAllSongs() {
    const songs = await Song.find();

    return songs;
  }

  static async getSongsByQuery(query) {
    const songs = await Song.find(query);

    return songs;
  }

  static async getSongById(songId) {
    const song = await Song.findById(songId);

    return song;
  }

  static async addNewSong(songData) {
    const newSong = await new Song(songData);

    const response = await newSong.save();

    return response;
  }

  static async updateSong(songId, songData) {
    const song = await Song.findById(songId);

    if (!song) throw new Error(`Song with that ID not found`);

    const keys = Object.keys(songData);

    keys.forEach((key) => {
      if (key != "_id" && key != "_vv") {
        song[key] = songData[key];
      }
    });

    await song.save();

    return `Updated Succefully`;
  }
}
