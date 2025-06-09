import mongoose from 'mongoose';

const globalWithMongoose = global as typeof globalThis & {
  mongoose?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async (MONGO_URL = process.env.MONGO_URL) => {
  if (cached.conn) return cached.conn;

  if (!MONGO_URL) throw new Error('MONGO_URL is missing');

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URL, {
      bufferCommands: false, // Optional: disables mongoose buffering if not connected
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
