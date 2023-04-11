import { Schema, model } from "mongoose";

const albumSchema = new Schema({
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
});

const Album = model("Albums", albumSchema);

export default Album;
