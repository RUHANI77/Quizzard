import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Title from '../components/Title/Title';

const Main = () => {
    return (
        <div>
            <Title></Title>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;