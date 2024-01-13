import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {publicRoutes} from "../routes";
import Menu from "../pages/menu";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((a) =>
                <Route key={a.path} path = {a.path} element={a.element} exact/>
            )}
            <Route path="*" element={<Menu/>} />
        </Routes>
    );
};

export default AppRouter;
