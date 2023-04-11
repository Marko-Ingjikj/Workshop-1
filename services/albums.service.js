import Album from "../model/albums.model.js";

export default class AlbumsService {
  static async getAllAlbums() {
    const albums = await Album.find();

    return albums;
  }

  static async addNewAlbum(songsAndArtist) {
    const newAlbum = new Album(songsAndArtist);

    const response = await newAlbum.save();

    return response;
  }
}
