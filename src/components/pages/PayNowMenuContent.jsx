import React from 'react';
import CashPayment from './payments/CashPayment';
import CardPayment from './payments/CardPayment';
import OnAccountPayment from './payments/OnAccountPayment';
import ChecquePayment from './payments/ChecquePayment';

const PayNowMenuContent = (props) => {
    // console.log("selectedMenuItem", props.selectedMenuItem);
    const contentMap = {
        Cash: <CashPayment total={props.total} totalItems={props.totalItems} cartTotal={props.cartTotal} handlePayNowModalClose={props.handlePayNowModalClose} />,
        Card: <CardPayment total={props.total} totalItems={props.totalItems} cartTotal={props.cartTotal} handlePayNowModalClose={props.handlePayNowModalClose} />,
        OnAccount: <OnAccountPayment total={props.total} totalItems={props.totalItems} cartTotal={props.cartTotal} handlePayNowModalClose={props.handlePayNowModalClose} />,
        Checque: <ChecquePayment total={props.total} totalItems={props.totalItems} cartTotal={props.cartTotal} handlePayNowModalClose={props.handlePayNowModalClose} />
    };

    return (
        <div>
            <div>{contentMap[props.selectedMenuItem.name]}</div>
        </div>
    );
};

export default PayNowMenuContent;
