import { Document, model, Schema } from 'mongoose';
import { RoomInfo } from 'dals';

const roomSchema = new Schema({
  room: Schema.Types.String,
  content: Schema.Types.String
});

export const RoomContext = model<RoomInfo & Document>(
  'RoomInfo',
  roomSchema
);
