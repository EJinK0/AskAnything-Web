import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';

const AppRoutes = () => {
    const pathList = [
        {
            path: '/',
            element: <Home />,
            isLogin: true
        }
    ];
    return (
        <Routes>
            {pathList.map((v, idx) => {
                return <Route key={idx} path={v?.path} element={v?.element} />;
            })}
        </Routes>
    )
}

export default AppRoutes;
