import { routes, switchRoutes } from './routes';

describe('routes spec', () => {
  it('"switchRoutes" should have expected value by default', () => {
    // Arrange
    interface SwitchRoutes {
      root: string;
      student: string;
      trainer: string;
    }

    const expectedValue: SwitchRoutes = {
      root: '/',
      student: '/student/:room',
      trainer: '/trainer/:room/:token',
    };

    // Act

    // Assert
    expect(switchRoutes).toEqual<SwitchRoutes>(expectedValue);
  });

  it('"routes.student" & "routes.trainer" should be functions by default', () => {
    // Arrange

    // Act

    // Assert
    expect(routes.student).toEqual(expect.any(Function));
    expect(routes.trainer).toEqual(expect.any(Function));
  });

  it('"routes.student" should return switchRoutes.student path with room name when called', () => {
    // Arrange
    const expectedResult: string = '/student/new-room';

    // Act
    const result: string = routes.student('new-room');

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('"routes.trainer" should return switchRoutes.trainer path with room name when called', () => {
    // Arrange
    const expectedResult: string = '/trainer/new-room/new-token';

    // Act
    const result: string = routes.trainer('new-room', 'new-token');

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
