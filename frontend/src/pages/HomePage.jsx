import CategoriesPage from './components/Categories/CategoriesPage';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Policy from './components/Layout/Policy/Policy';
import Products from './components/Products/ProductsPage';
import Slider from './components/Slider/Sliders';
import { Campaigns } from './components/Campaigns/Campaigns';
import { Blogs } from './components/Blogs/Blogs';
import { Brands } from './components/Brands/Brands';
import { CampaignSingle } from './components/CampaignSingle/CampaignSingle';
import React from 'react';


export const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <Slider />
            <CategoriesPage />
            <Products />
            <Campaigns />
            <Products />
            <Blogs />
            <Brands />
            <CampaignSingle />
            <Policy />
            <Footer />
        </React.Fragment>

    )
}
