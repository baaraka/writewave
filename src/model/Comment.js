import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      unique: true,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//If the comment collection does not exist create a new one.
export default mongoose.models.Comment ||
  mongoose.model("Comment", commentSchema);
