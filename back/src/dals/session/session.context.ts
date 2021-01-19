import { Document, model, Schema } from 'mongoose';
import { UserSession } from 'dals/session';
import { envConstants } from 'core/constants';

const userSessionSchema = new Schema({
  room: Schema.Types.String,
  trainerToken: Schema.Types.String,
  isTrainer: Schema.Types.Boolean,
  connectionId: Schema.Types.String,
  expireAt: {
    type: Schema.Types.Date,
    default: Date.now,
    index: {
      expires: envConstants.MONGO_EXPIRATION_TIME,
    },
  },
});

export const UserSessionContext = model<UserSession & Document>(
  'UserSession',
  userSessionSchema
);
