import React from 'react';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { IoMdCloseCircleOutline } from 'react-icons/io';


const CashPayment = (props) => {

    return (
        <div>
            <h5 className="text-center">Cash Payment</h5>
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
                        <input type="text" className="form-control form-control-sm txt__label" placeholder="Return" />
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
    );
};

export default CashPayment;