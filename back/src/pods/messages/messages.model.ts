import { Socket } from 'socket.io';

export type MessageType = 'message' | 'error';

export interface SocketInfo {
  socket: Socket;
  io: Socket;
  connectionId: string;
}

export interface Action {
  type: string;
  payload?: any;
  messageType?: MessageType;
}

export interface InputEstablishConnectionTrainer {
  room: string;
  trainertoken: string;
}
