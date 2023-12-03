import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Category",
      // required: false,
    },
    username: {
      type: String,
      required: true,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "User",
      // required: false,
    },
  },
  {
    timestamps: true,
  }
);

//If the User collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", postSchema);
