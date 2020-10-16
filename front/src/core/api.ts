import * as ioClient from 'socket.io-client';
import { baseSocketUrl } from './const';
import SocketIOClient, { Socket } from 'socket.io';

export interface ConnectionSetup {
  room: string;
  trainertoken: string;
}

export const createSocket = (connectionSetup: ConnectionSetup): Socket => {
  const { room, trainertoken } = connectionSetup;
  const socketParams = {
    url: baseSocketUrl,
    options: {
      query: { room, trainertoken },
      timeout: 60000,
    },
  };

  // TODO Add channel (room)
  return ioClient(baseSocketUrl, socketParams.options);
};

export const getStorage = () => {
  // TODO connect to server, this is mocked storage
  const separation = '\n\n*********************************\n';
  const mockedStoredData =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed tempus urna. Proin quam leo, rutrum ut semper quis, mattis ac mi. Nunc in felis in lorem accumsan ultrices sed id sapien. Integer auctor ultricies libero nec dictum. Suspendisse non rutrum odio. Quisque commodo tincidunt enim, maximus accumsan nisl. Vestibulum metus mi, lacinia nec libero in, porttitor eleifend urna. Vivamus ante massa, faucibus sed nisl ac, maximus lacinia nunc. Donec commodo iaculis erat id dictum. Proin pellentesque tortor vitae leo porta, vitae vehicula risus laoreet.\n\nPellentesque pellentesque risus id nunc pulvinar bibendum. Sed ut mi dapibus, tristique purus sit amet, gravida nisl. Maecenas semper et orci vel viverra. In ornare iaculis purus, quis tempus metus egestas ut. Nulla ornare, dui at vulputate aliquet, est felis porttitor urna, venenatis auctor tortor magna nec erat. Nullam lacinia ex lacinia metus rutrum, a vestibulum justo mattis. Aliquam mauris orci, convallis sed ante at, vestibulum semper mauris. Aenean ut ipsum tempus, lacinia eros vel, viverra nisi. Aliquam id fringilla tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vel malesuada diam. Morbi placerat sapien sit amet dui condimentum, quis vulputate sem euismod.';

  return mockedStoredData + separation;
};
