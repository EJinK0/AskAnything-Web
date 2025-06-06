import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

interface RouteItem {
    path: string;
    element: React.ReactNode;
    isLogin: boolean;
}

const AppRoutes: React.FC = () => {
  const pathList: RouteItem[] = [
        {
            path: '/',
            element: <HomePage />,
            isLogin: true
        }
  ];

  return (
    <Routes>
        {pathList.map((v, idx) => (
            <Route key={idx} path={v.path} element={v.element} />
        ))}
    </Routes>
  );
};

export default AppRoutes;
