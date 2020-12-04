import { Document, model, Schema } from 'mongoose';
import { UserSession } from 'dals/session';

const userSessionSchema = new Schema({
  room: Schema.Types.String,
  trainerToken: Schema.Types.String,
  isTrainer: Schema.Types.Boolean,
  connectionId: Schema.Types.String
});

export const UserSessionContext = model<UserSession & Document>(
  'UserSession',
  userSessionSchema
);
