import React, { useState } from 'react';
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { LuChevronLeft } from 'react-icons/lu';
import { FaPlus, FaRegCircleUser } from "react-icons/fa6";

const AddNewCustomerModal = () => {
    const [isAddNewCustomerModalOpen, setIsAddNewCustomerModalOpen] = useState(false);
    const handleAddNewCustomerClick = () => {
        setIsAddNewCustomerModalOpen(true);
    };

    const handleAddNewCustomerModalClose = () => {
        setIsAddNewCustomerModalOpen(false);
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center btn__customer__modal" onClick={handleAddNewCustomerClick}>
                <h6 className="customer__modal__hd"><FaRegCircleUser /> <span className="ms-2">New Customer</span></h6>
                <h6 className="customer__modal__hd"><FiPlusCircle /></h6>
            </div>
            {
                isAddNewCustomerModalOpen && (
                    <div className="customer__modal">
                        <div className="customer__modal__content">
                            <div className="py-2">
                                <h4>
                                    <span className="text-start"><LuChevronLeft /></span>
                                    <span className="txt__setting">Add New Customer</span>
                                    <span className="close__newCustomer" onClick={handleAddNewCustomerModalClose}>
                                        &times;
                                    </span>
                                </h4>
                            </div>

                            <form action="" className="customer__form">
                                <div className="row mb-3">
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmItemName" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmItemName" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmItemName" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-12">
                                        <select id="colFormLabelTax" className="form-select form-select-sm txt__label">
                                            <option selected>Currency</option>
                                            <option>Bangladesh</option>
                                            <option>India</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmItemName" placeholder="Tax ID" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-12">
                                        <p className="customer__add__more"><FaPlus /> Add More Details</p>
                                    </div>
                                </div>

                                <div className="py-3">
                                    <button type="button" className="btn__customer__submit">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default AddNewCustomerModal;