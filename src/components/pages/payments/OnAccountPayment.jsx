import React from 'react';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const OnAccountPayment = (props) => {
    return (
        <div>
            <div>
                <h5 className="text-center">On Account Payment</h5>
                <form action="" className="customer__form">
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <label type="text" className="form-control form-control-sm txt__label" placeholder="Order Amount" >Order Amount: $ {props.total}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="text" className="form-control form-control-sm txt__label" placeholder="Paid" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="text" className="form-control form-control-sm txt__label" placeholder="Account Number" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <select className="form-select form-select-sm txt__label">
                                <option selected>Account Select</option>
                                <option>City Bank</option>
                                <option>Islami Bank</option>
                            </select>
                        </div>
                    </div>
                    <div className="py-3">
                        <div className="d-flex justify-content-start">
                            <button className="btn__all__delete me-3" onClick={props.handlePayNowModalClose}><IoMdCloseCircleOutline /> Cancel</button>
                            <button className="btn__payNow__submit"><FaHandHoldingDollar /> Complete Payment</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OnAccountPayment;