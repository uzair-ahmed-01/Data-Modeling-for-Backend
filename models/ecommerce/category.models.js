import mongoose from 'mongoose';

const catrgorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.Model('Category', catrgorySchema);
