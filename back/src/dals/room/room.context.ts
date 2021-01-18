import { Document, model, Schema } from 'mongoose';
import { RoomInfo } from 'dals';

const roomSchema = new Schema({
  room: Schema.Types.String,
  content: Schema.Types.String,
  expireAt: {
    type: Schema.Types.Date,
    default: Date.now,
    index: {
      expires: '2d',
    },
  },
});

export const RoomContext = model<RoomInfo & Document>('RoomInfo', roomSchema);
