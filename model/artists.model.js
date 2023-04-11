import { Schema, model } from "mongoose";

const artistSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: "Album",
    },
  ],
});

const Artist = model("Artist", artistSchema);

export default Artist;
