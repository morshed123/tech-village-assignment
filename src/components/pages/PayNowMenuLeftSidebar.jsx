import React from 'react';

const PayNowMenuLeftSidebar = ({ menuItems, onMenuClick }) => {

    return (
        <div className="payment__menu">
            <ul className="list-unstyled">
                {menuItems.map((menuItem, i) => (
                    <li key={i} onClick={() => onMenuClick(menuItem)}>
                        <span className="me-2">{menuItem?.icons}</span> <span>{menuItem?.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PayNowMenuLeftSidebar;