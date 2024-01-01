


import React from 'react';
import LeftSidebar from './LeftSidebar';
import "./Header.css";
import NoteModal from './NoteModal';
import ShippingModal from './ShippingModal';
import HoldOrdersModal from './HoldOrdersModal';
import AddNewItemsModal from './AddNewItemsModal';


const Header = () => {
    return (
        <>
            <div className="pt-3 mb-2">
                <div className="header__navbar">
                    <div className="me-2 mb-2"><LeftSidebar /></div>
                    <div className="me-2 mb-2"><NoteModal /></div>
                    <div className="me-2 mb-2"><ShippingModal /></div>
                    <div className="me-2 mb-2"><HoldOrdersModal /></div>
                    <div className="me-0 mb-2"><AddNewItemsModal /></div>
                </div>
            </div>
        </>
    );
};

export default Header;
