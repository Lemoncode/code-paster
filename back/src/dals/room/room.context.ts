import { Document, model, Schema } from 'mongoose';
import { RoomInfo } from 'dals';
import { envConstants } from 'core';

const roomSchema = new Schema({
  room: Schema.Types.String,
  content: Schema.Types.String,
  expireAt: {
    type: Schema.Types.Date,
    default: Date.now,
    index: {
      expires: envConstants.MONGO_EXPIRATION_TIME,
    },
  },
});

export const RoomContext = model<RoomInfo & Document>('RoomInfo', roomSchema);
