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
    const testResult: string = 'new-value';

    // Act
    const { result } = renderHook(() => useLog());
    act(() => {
      result.current.setLog('new-value');
    });

    // Assert
    expect(result.current.log).toEqual<string>(testResult);
    expect(result.current.logRef.current).toEqual<string>(testResult);
  });

  it('"log" & "logRef.current" should return old value when feed "setLog" with "undefined" parameter', () => {
    // Arrange
    const testResult: string = 'old-value';

    // Act
    const { result } = renderHook(() => useLog());

    act(() => {
      result.current.setLog('old-value');
    });

    act(() => {
      result.current.setLog(undefined);
    });

    // Assert
    expect(result.current.log).toEqual<string>(testResult);
    expect(result.current.logRef.current).toEqual<string>(testResult);
  });

  it('"log" & "logRef.current" should return old value when feed "setLog" with "null" parameter', () => {
    // Arrange
    const testResult: string = 'old-value';

    // Act
    const { result } = renderHook(() => useLog());

    act(() => {
      result.current.setLog('old-value');
    });

    act(() => {
      result.current.setLog(null);
    });

    // Assert
    expect(result.current.log).toEqual<string>(testResult);
    expect(result.current.logRef.current).toEqual<string>(testResult);
  });

  xit('"log" & "logRef.current" should return old value and new value after a new line when calling "appendToLog"', () => {
    // Arrange
    const testResult = `New-value `;

    // Act
    const { result } = renderHook(() => useLog());
    act(() => {
      result.current.appendToLog('New-value');
    });

    // Assert
    expect(result.current.log).toEqual(testResult);
    expect(result.current.logRef.current).toEqual(testResult);
  });
});
