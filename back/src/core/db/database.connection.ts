import mongoose, { connect } from 'mongoose';
mongoose.set('strictQuery', false);

export const connectToDB = async (connectionString: string) => {
  const db = await connect(connectionString);

  console.log('Connected to DB');

  return db;
};
