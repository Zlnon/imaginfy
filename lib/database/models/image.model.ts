import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; // Assuming URL is a string for simplicity
  width?: number;
  height?: number;
  config?: Object; // 'Object' type can be represented as a Record in TypeScript
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: { _id: string; firstName: string; lastName: string }; // Assuming ObjectId is represented as a string for the author's reference
  createdAt?: Date; // Default values don't need to be represented in the interface
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
