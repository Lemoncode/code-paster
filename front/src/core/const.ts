export const baseApiUrl = process.env.BASE_API_URL;
export const baseSocketUrl = process.env.BASE_SOCKET_URL;

export const SocketOuputMessageLiteral = {
  MESSAGE: 'message',
};

export const SocketEmitMessageTypes = {
  TRAINER_APPEND_TEXT: 'TRAINER_APPEND_TEXT', // Master creates a user story
  STUDENT_REQUEST_FULL_CONTENT: 'STUDENT_REQUEST_FULL_CONTENT', // Student checks if there's previous content when connecting
};

export const SocketReceiveMessageTypes = {
  CONNECTION_ACK: 'CONNECTION_ACK',
  APPEND_TEXT: 'APPEND_TEXT',
  REPLACE_FULL_TEXT: 'REPLACE_FULL_TEXT',
  STUDENT_GET_FULL_CONTENT: 'STUDENT_GET_FULL_CONTENT',
};

export const lineSeparator = '\n\n*********************************\n';
