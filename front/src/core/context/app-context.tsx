import React from 'react';
import { Context } from './app-context.model';

const AppContext = React.createContext<Context>(null);

export const AppContextProvider: React.FC = props => {
  const [currentTrainerUrl, setCurrentTrainerUrl] = React.useState<string>('');
  const [currentStudentUrl, setCurrentStudentUrl] = React.useState<string>('');
  return (
    <>
      <AppContext.Provider
        value={{
          currentTrainerUrl,
          setCurrentTrainerUrl,
          currentStudentUrl,
          setCurrentStudentUrl,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export const useContext = (): Context => {
  const context = React.useContext(AppContext);
  return context;
};
