import { renderHook, act } from '@testing-library/react-hooks';
import { useLog } from './use-log.hook';

describe('use-log hook spec', () => {
  it('"log" state should be an empty string by default', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useLog());

    // Assert
    expect(result.current.log).toEqual<string>('');
  });

  it('"logRef.current" should be an empty string by default', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useLog());

    // Assert
    expect(result.current.logRef.current).toEqual<string>('');
  });

  it('"appendToLog" & "setLog" should be functions by default', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useLog());

    // Assert
    expect(result.current.appendToLog).toEqual(expect.any(Function));
    expect(result.current.setLog).toEqual(expect.any(Function));
  });

  it('"log" & "logRef.current" should return new content when calling "setLog"', () => {
    // Arrange
    const expectedResult: string = 'new-value';

    // Act
    const { result } = renderHook(() => useLog());
    act(() => {
      result.current.setLog('new-value');
    });

    // Assert
    expect(result.current.log).toEqual<string>(expectedResult);
    expect(result.current.logRef.current).toEqual<string>(expectedResult);
  });

  it('"log" & "logRef.current" should return old value when feed "setLog" with "undefined" parameter', () => {
    // Arrange
    const expectedResult: string = 'old-value';

    // Act
    const { result } = renderHook(() => useLog());

    act(() => {
      result.current.setLog('old-value');
    });

    act(() => {
      result.current.setLog(undefined);
    });

    // Assert
    expect(result.current.log).toEqual<string>(expectedResult);
    expect(result.current.logRef.current).toEqual<string>(expectedResult);
  });

  it('"log" & "logRef.current" should return old value when feed "setLog" with "null" parameter', () => {
    // Arrange
    const expectedResult: string = 'old-value';

    // Act
    const { result } = renderHook(() => useLog());

    act(() => {
      result.current.setLog('old-value');
    });

    act(() => {
      result.current.setLog(null);
    });

    // Assert
    expect(result.current.log).toEqual<string>(expectedResult);
    expect(result.current.logRef.current).toEqual<string>(expectedResult);
  });

  it('"log" & "logRef.current" should return new value with one space when calling "appendToLog" for the first time', () => {
    // Arrange
    const expectedResult: string = `new-value `;

    // Act
    const { result } = renderHook(() => useLog());

    act(() => {
      result.current.appendToLog('new-value');
    });

    // Assert
    expect(result.current.log).toEqual<string>(expectedResult);
    expect(result.current.logRef.current).toEqual<string>(expectedResult);
  });

  it('"log" & "logRef.current" should return log value with one space and new value with one space in a new line when calling "appendToLog" after first time', () => {
    // Arrange
    const expectedResult: string = `old-value \nnew-value `;

    // Act
    const { result } = renderHook(() => useLog());

    act(() => {
      result.current.appendToLog('old-value');
    });

    act(() => {
      result.current.appendToLog('new-value');
    });

    // Assert
    expect(result.current.log).toEqual<string>(expectedResult);
    expect(result.current.logRef.current).toEqual<string>(expectedResult);
  });

  it('"log" & "logRef.current" should return the same text after calling "setLog" with that text', () => {
    // Arrange
    const sessionLog: string = `first line

    *********************************
     
    second line
    
    *********************************
     
    third line
    
    *********************************`;

    // Act
    const { result } = renderHook(() => useLog());

    act(() => {
      result.current.setLog(sessionLog);
    });

    // Assert
    expect(result.current.log).toEqual<string>(sessionLog);
    expect(result.current.logRef.current).toEqual<string>(sessionLog);
  });
});
