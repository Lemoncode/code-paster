import { processInputMessage } from './input-processor';
import { SocketInfo, Action  } from './messages.model';
import {InputMessageTypes} from './messages.consts';
import SocketIOClient, { Socket } from 'socket.io';
import { createApp } from 'express.server';
import {sessionRepository, RoomInfo, UserSession, ConnectSessionInfo} from 'dals'

describe('input processor messages specs', () => {
    it('socketInfo and action with minimun value, should return empty Action', async (): Promise<void>=> {
        // Arrange
        const app = createApp();

        let http = require('http').Server(app);
        let io: SocketIOClient.Socket = require('socket.io')(http);
        io.on('connection', async function (socket: Socket) {
            sessionRepository
            const { room, trainertoken } = socket.handshake.query;
            let socketInfo: SocketInfo = {
                socket: socket,
                io: io,
                connectionId: socket.conn.id,
            };
            let action: Action = {
                type: InputMessageTypes.ESTABLISH_CONNECTION_STUDENT,
                payload: {
                    room,
                },
            };
            let result: Action[] = [];

            

            // Act
            const data = await processInputMessage(socketInfo, action);

            // Assert
            expect(data).toEqual(result);
        }
    });
});
