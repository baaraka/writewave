import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    url: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//If the Category collection does not exist create a new one.
export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
