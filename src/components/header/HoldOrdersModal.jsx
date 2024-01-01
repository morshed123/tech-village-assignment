import React, { useState } from 'react';
import { PiClockCountdownBold } from "react-icons/pi";

const HoldOrdersModal = () => {
    const [isHoldOrdersModalOpen, setIsHoldOrdersModalOpen] = useState(false);
    const handleHoldOrdersClick = () => {
        setIsHoldOrdersModalOpen(true);
    };

    const handleHoldOrdersModalClose = () => {
        setIsHoldOrdersModalOpen(false);
    };

    return (
        <>
            <button type="button" className="btn__orderHold__modal" onClick={handleHoldOrdersClick}><PiClockCountdownBold /> <span className="ms-2">Hold Orders</span></button>

            {
                isHoldOrdersModalOpen && (
                    <div className="orderHold__modal">
                        <div className="orderHold__modal__content">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="">Order On Hold</h4>
                                <h4 className="close__orderHold" onClick={handleHoldOrdersModalClose}>
                                    &times;
                                </h4>
                            </div>
                            <hr className="customer__hr" />
                            <form action="" className="pt-3">
                                <div className="row mb-3">
                                    <label forHtml="colFormLabelSmOrderTitle" className="col-sm-3 col-form-label col-form-label-sm txt__label">Order Title</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmOrderTitle" placeholder="write title name..." />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label forHtml="colFormLabelSmOrderAmount" className="col-sm-3 col-form-label col-form-label-sm txt__label">Order Amount</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmOrderAmount" placeholder="write street..." />
                                    </div>
                                </div>
                                <div className="py-3">
                                    <button className="btn__orderHold__submit">Put on hold</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default HoldOrdersModal;