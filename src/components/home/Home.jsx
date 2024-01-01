import React from 'react';
import Cart from '../pages/Cart';
import ProductsList from '../pages/ProductsList';
import AddNewCustomerModal from '../header/AddNewCustomerModal';
import Header from "../header/Header"

const Home = () => {
    return (
        <>
            <div className="container container__div">
                <div className="row mb-4">
                    <div className="col-md-6">
                        <Header />
                        <AddNewCustomerModal />
                        <Cart />
                    </div>
                    <div className="col-md-6">
                        <div className="bg__search__area">
                            <ProductsList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

