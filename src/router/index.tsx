import React from 'react';
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import Home from '../views/home';
import About from '../views/about/about';
import ErrorPage404 from '../views/errorPage/404';
import Layout from '../layout';

const constantRoutes = [
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: '',
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: '/about',
        element: <Layout />,
        children: [
            {
                path: '',
                index: true,
                element: <About />
            }
        ]
    },
    {
        path: '/404',
        element: <ErrorPage404 />
    },
    {
        path: '*',
        element: <Navigate to='/404' />
    }
];

type RouterPropsType = {
    children: JSX.Element | JSX.Element;
}

const Router: React.FC<RouterPropsType> = ({ children }) => {
    const RouterWaiter = () => {
        const element = useRoutes(constantRoutes);

        return element;
    };

    return (
        <BrowserRouter>
            <RouterWaiter></RouterWaiter>
            {children}
        </BrowserRouter>  
    );
};

export default Router;