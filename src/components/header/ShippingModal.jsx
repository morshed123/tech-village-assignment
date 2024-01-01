import React, { useState } from 'react';
import { MdOutlineLocalShipping } from "react-icons/md";

const ShippingModal = () => {
    const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
    const handleShippingClick = () => {
        setIsShippingModalOpen(true);
    };

    const handleShippingModalClose = () => {
        setIsShippingModalOpen(false);
    };

    return (
        <>
            <button type="button" className="btn__shipping__modal" onClick={handleShippingClick}><MdOutlineLocalShipping /> <span className="ms-2">Shipping</span></button>

            {
                isShippingModalOpen && (
                    <div className="shipping__modal">
                        <div className="shipping__modal__content">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="">Add shipping to the order</h4>
                                <h4 className="close__shipping" onClick={handleShippingModalClose}>
                                    &times;
                                </h4>
                            </div>
                            <hr className="customer__hr" />
                            <div className="setup-card pt-2">
                                <div className="scroll-sidebar g-doc-scroll">
                                    <form action="">
                                        <div className="row mb-3">
                                            <label forHtml="colFormLabelSmName" className="col-sm-2 col-form-label col-form-label-sm txt__label">Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmName" placeholder="write name..." />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label forHtml="colFormLabelSmEmail" className="col-sm-2 col-form-label col-form-label-sm txt__label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control form-control-sm txt__label" id="colFormLabelSmEmail" placeholder="write email..." />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label forHtml="colFormLabelSmStreet" className="col-sm-2 col-form-label col-form-label-sm txt__label">Street</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmStreet" placeholder="write street..." />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label forHtml="colFormLabelSmCity" className="col-sm-2 col-form-label col-form-label-sm txt__label">City</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmCity" placeholder="write city..." />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label forHtml="colFormLabelState" className="col-sm-2 col-form-label col-form-label-sm txt__label">State</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelState" placeholder="write state..." />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label forHtml="colFormLabelZipCode" className="col-sm-2 col-form-label col-form-label-sm txt__label">Zip Code</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelZipCode" placeholder="write zip code..." />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label forHtml="colFormLabelCountry" className="col-sm-2 col-form-label col-form-label-sm txt__label">Country</label>
                                            <div className="col-sm-10">
                                                <select id="colFormLabelCountry" className="form-select form-select-sm txt__label">
                                                    <option selected>choose country</option>
                                                    <option>Bangladesh</option>
                                                    <option>India</option>
                                                    <option>Pakistan</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="py-3">
                                            <button className="btn__shipping__submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ShippingModal;