import { baseNames } from './baseNames';
import { baseTrainerTokens } from './baseTrainerTokens';

const generateRandomNumberRange = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min;
};

// TODO Unit test this

const chooseRandomStringFromArray = (valueCollection: string[]) => {
  const maxNumber = valueCollection.length - 1;
  const randomNumber = generateRandomNumberRange(0, maxNumber);

  return valueCollection[randomNumber];
};

const generateRandomRoomSuffix = (): string => {
  const randomNumber = generateRandomNumberRange(0, 99999);

  return randomNumber.toString();
};

export const generateNewRoomName = () =>
  `${chooseRandomStringFromArray(baseNames)}-${generateRandomRoomSuffix()}`;

export const generateNewTrainerToken = () =>
  `${chooseRandomStringFromArray(
    baseTrainerTokens
  )}-${generateRandomRoomSuffix()}`;
