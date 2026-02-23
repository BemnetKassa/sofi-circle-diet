import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IOrder extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string; // Often needed for Chapa/Messaging
  age: number;
  gender: string;
  height: number;
  weight: number;
  goal: string;
  dietaryPreferences?: string;
  allergies?: string;
  budget: string;
  planType: string;
  amount: number;
  tx_ref: string;
  status: 'pending' | 'completed' | 'failed';
  paymentMethod?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Check if the model is already defined to prevent overwriting during hot reloads
const OrderSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  goal: { type: String, required: true },
  dietaryPreferences: { type: String },
  allergies: { type: String },
  budget: { type: String, required: true },
  planType: { type: String, default: 'standard' },
  amount: { type: Number, required: true },
  tx_ref: { type: String, required: true, unique: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  paymentMethod: { type: String },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
});

const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default Order;
