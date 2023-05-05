import React from 'react';
import Header from '../Header/Header';
import Chefs from '../Chefs/Chefs';
import FindUs from '../FindUs/FindUs';
import Trending from '../Trending/Trending';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Chefs></Chefs>
            <Trending></Trending>
            <FindUs></FindUs>
        </div>
    );
};

export default Home;