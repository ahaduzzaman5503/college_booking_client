import React from 'react';
import GroupGallary from '../HomePages/GroupGallary';
import CollageCard from '../HomePages/CollageCard';

const Home = () => {
    return (
        <div className='container mx-auto'>
            this is home page
            <CollageCard></CollageCard>
            <GroupGallary></GroupGallary>
        </div>
    );
};

export default Home;