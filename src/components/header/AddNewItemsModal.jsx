import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";

const AddNewItemsModal = () => {
    const [isAddNewItemsModalOpen, setIsAddNewItemsModalOpen] = useState(false);
    const handleAddNewItemsClick = () => {
        setIsAddNewItemsModalOpen(true);
    };

    const handleAddNewItemsModalClose = () => {
        setIsAddNewItemsModalOpen(false);
    };

    const [addData, setAddData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
    });

    const handleChange = () => {

    }


    return (
        <>
            <button type="button" className="btn__items__modal" onClick={handleAddNewItemsClick}><FaPlusCircle /> <span className="ms-2">New Items</span></button>

            {isAddNewItemsModalOpen && (
                <div className="items__modal">
                    <div className="items__modal__content">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="">Add New Custom Item</h4>
                            <h4 className="close__items" onClick={handleAddNewItemsModalClose}>
                                &times;
                            </h4>
                        </div>
                        <hr className="customer__hr" />
                        <div className="setup-card pt-3">
                            <div className="scroll-sidebar g-doc-scroll">
                                <form action="">
                                    <div className="row mb-3">
                                        <label forHtml="colFormLabelSmItemName" className="col-sm-2 col-form-label col-form-label-sm txt__label">Item Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmItemName" placeholder="write name..." />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="exampleFormControlTextareaDescription" className="col-sm-2 col-form-label col-form-label-sm txt__label">Description</label>
                                        <div className="col-sm-10">
                                            <textarea type="text" className="form-control form-control-sm pt-3 txt__label" id="exampleFormControlTextareaDescription" rows="3" placeholder="write text here..."></textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label forHtml="colFormLabelSmUnitPrice" className="col-sm-2 col-form-label col-form-label-sm txt__label">Unit Price</label>
                                        <div className="col-sm-10">
                                            <input type="number" className="form-control form-control-sm txt__label" id="colFormLabelSmUnitPrice" placeholder="write unit price..." />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label forHtml="colFormLabelSmQuantity" className="col-sm-2 col-form-label col-form-label-sm txt__label">Quantity</label>
                                        <div className="col-sm-10">
                                            <input type="number" className="form-control form-control-sm txt__label" id="colFormLabelSmQuantity" placeholder="write quantity..." />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label forHtml="colFormLabelSmDiscount" className="col-sm-2 col-form-label col-form-label-sm txt__label">Discount</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmDiscount" placeholder="write discount..." />
                                        </div>
                                        <div className="col-sm-4">
                                            <select id="colFormLabelSmDiscount" className="form-select form-select-sm txt__label">
                                                <option selected >selected</option>
                                                <option>Flat</option>
                                                <option>Percentage</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label forHtml="colFormLabelTax" className="col-sm-2 col-form-label col-form-label-sm txt__label">Tax</label>
                                        <div className="col-sm-10">
                                            <select id="colFormLabelTax" className="form-select form-select-sm txt__label">
                                                <option selected>nothing selected</option>
                                                <option>Import (1.500)</option>
                                                <option>Export (2.300)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="py-3">
                                        <button className="btn__items__submit">Add Product To Cart</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddNewItemsModal;