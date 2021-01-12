export const baseApiUrl = process.env.BASE_API_URL;
export const baseSocketUrl = process.env.BASE_SOCKET_URL;

export const SocketOuputMessageLiteral = {
  MESSAGE: 'message',
};

export const SocketEmitMessageTypes = {
  TRAINER_APPEND_TEXT: 'TRAINER_APPEND_TEXT', // Trainer add new text
  TRAINER_SET_FULL_TEXT: 'TRAINER_SET_FULL_TEXT', // Trainer send full session text
};

export const SocketReceiveMessageTypes = {
  CONNECTION_ACK: 'CONNECTION_ACK',
  APPEND_TEXT: 'APPEND_TEXT',
  TRAINER_GET_FULL_CONTENT: 'TRAINER_GET_FULL_CONTENT',
  STUDENT_GET_FULL_CONTENT: 'STUDENT_GET_FULL_CONTENT',
  UPDATE_FULL_CONTENT: 'UPDATE_FULL_CONTENT',
};

export const lineSeparator = '\n\n*********************************\n';
