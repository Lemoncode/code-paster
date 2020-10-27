import { generateNewRoomName, generateNewTrainerToken } from './room-name-generator.business';

describe('Room name generator business spec', () => {
  it('Newly generated room name generator should contain a name followed by a number of 4 digits separated by a - ', () => {
    const newRoomName = generateNewRoomName();
    const regexForMatchRoomName = /[a-z]*-[0-9]{4}/i;
    const resultMatchRoomName = regexForMatchRoomName.test(newRoomName);
    expect(resultMatchRoomName).toBe(true);
  });
  it('Newly generated trainer token generator should contain a name followed by a number of 4 digits separated by a - ', () => {
    const newTrainerToken = generateNewTrainerToken();
    const regexForMatchTrainerToken = /[a-z]*-[0-9]{4}/i;
    const resultMatchTrainerToken = regexForMatchTrainerToken.test(newTrainerToken);
    expect(resultMatchTrainerToken).toBe(true);
  });
});
