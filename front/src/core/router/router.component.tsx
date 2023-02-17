import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CreateSessionScene, TrainerScene, StudentScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<CreateSessionScene />} />
        <Route path={switchRoutes.trainer} element={<TrainerScene />} />
        <Route path={switchRoutes.student} element={<StudentScene />} />
      </Routes>
    </Router>
  );
};
