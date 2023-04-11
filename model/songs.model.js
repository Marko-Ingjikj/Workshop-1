import { Schema, model } from "mongoose";

const songSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: "Album",
  },
});

const Song = model("Song", songSchema);

export default Song;
