import React, { useState } from 'react';
import OffCanvasLeft from '../header/OffCanvasLeft';
import { HiBars3 } from 'react-icons/hi2';
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { LuChevronLeft } from "react-icons/lu";


const LeftSidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [overlayBackground, setOverlayBackground] = useState(false);
    const [zIndex, setZIndex] = useState('');
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);


    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        setOverlayBackground(isMenuOpen ? '' : 'rgba(0, 0, 0, 0.8)');
        setZIndex(isMenuOpen ? '' : '12');
    };

    const handleClick = (event) => {
        event.stopPropagation();
        handleMenuToggle();
    };
    const menuItems = [
        { id: 1, icon: <MdOutlineDashboard />, label: 'Dashboard', path: '/dashboard' },
        { id: 2, icon: <IoLocationOutline />, label: 'Locations', path: '/locations' },
        { id: 3, icon: <LiaFileInvoiceDollarSolid />, label: 'POS Invoices', path: '/pos-invoices' },
    ];



    const handleSettingsClick = () => {
        setIsSettingsModalOpen(true);
    };

    const handleSettingsModalClose = () => {
        setIsSettingsModalOpen(false);
    };




    return (
        <>
            <button className="bt__left__bars" onClick={handleClick}>
                <HiBars3 />
            </button>
            {
                isMenuOpen && <div
                    className={`overlay ${isMenuOpen ? 'open' : ''}`}
                    style={{ background: overlayBackground, zIndex: zIndex }}
                >
                    <OffCanvasLeft isOpen={isMenuOpen} onClose={handleMenuToggle}>
                        <div className="bg__canvas">
                            <div className="offcanvas__header">
                                <img src={Logo} alt="logo" loading="lazy" />
                            </div>
                            <p className="txt__loc">Location:</p>
                            <h4>Los Asngeles, California</h4>
                        </div>

                        <div className="offcanvas-body">
                            <div className="left__menu">
                                <ul className="list-unstyled">
                                    {menuItems.map((item) => (
                                        <li key={item.id}>
                                            <Link to={item.path} className="text-decoration-none nav-link"><span className="me-3"> {item.icon}</span>{item.label}</Link>
                                        </li>
                                    ))}

                                    <li><Link className="text-decoration-none nav-link" onClick={handleSettingsClick}><span className="me-3"><IoSettingsOutline /></span>Settings</Link></li>
                                </ul>
                            </div>
                            <div className="logout__btn__area">
                                <button className="btn__logout">Logout</button>
                            </div>
                        </div>
                    </OffCanvasLeft>

                    {isSettingsModalOpen && (
                        <div className="settings__modal">
                            <div className="modal__content">
                                <div className="py-2">
                                    <h4><span className="text-start"><LuChevronLeft /></span><span className="txt__setting">Settings</span></h4>
                                    <span className="close__setting" onClick={handleSettingsModalClose}>
                                        &times;
                                    </span>
                                </div>
                                <div className="modal__tab__area">
                                    <ul className="nav nav-pills mb-3 left__setting__modal__tab" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-taxOn-tab" data-bs-toggle="pill" data-bs-target="#pills-taxOn" type="button" role="tab" aria-controls="pills-taxOn" aria-selected="true">Tax On</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-taxType-tab" data-bs-toggle="pill" data-bs-target="#pills-taxType" type="button" role="tab" aria-controls="pills-taxType" aria-selected="false">Tax Type</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-taxOn" role="tabpanel" aria-labelledby="pills-taxOn-tab" tabindex="0">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                                <label className="form-check-label txt__normal" for="flexRadioDefault1">
                                                    After Discount
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                <label className="form-check-label txt__normal" for="flexRadioDefault2">
                                                    Before Discount
                                                </label>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-taxType" role="tabpanel" aria-labelledby="pills-taxType-tab" tabindex="1">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                <label className="form-check-label txt__normal" for="exampleRadios1">
                                                    Exclusive
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                <label className="form-check-label txt__normal" for="exampleRadios2">
                                                    Inclusive
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-3">
                                    <button className="modal__btn__update">Update</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            }
        </>
    );
};

export default LeftSidebar;

