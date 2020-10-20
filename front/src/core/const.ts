// TODO: Add env variables
export const baseSocketUrl = 'http://localhost:3001';

export const baseApiUrl = 'http://localhost:8080';

export const SocketOuputMessageLiteral = {
  MESSAGE: 'message',
};

export const SocketEmitMessageTypes = {
  TRAINER_APPEND_TEXT: 'TRAINER_APPEND_TEXT', // Master creates a user story
  TRAINER_SAVE_CONTENT: 'TRAINER_SAVE_CONTENT', // Master saves current content
  STUDENT_REQUEST_FULL_CONTENT: 'STUDENT_REQUEST_FULL_CONTENT', // Student checks if there's previous content when first connecting
};

export const SocketReceiveMessageTypes = {
  CONNECTION_ACK: 'CONNECTION_ACK',
  APPEND_TEXT: 'APPEND_TEXT',
  REPLACE_FULL_TEXT: 'REPLACE_FULL_TEXT',
  STUDENT_GET_FULL_CONTENT: 'STUDENT_GET_FULL_CONTENT',
};

export const lineSeparator = '\n\n*********************************\n';
