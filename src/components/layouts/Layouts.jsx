import React from 'react';
import { Outlet } from "react-router-dom";

const Layouts = ({ childdren }) => {
    return (
        <>
            <div>{childdren}</div>
            <div className="content">
                <Outlet />
            </div>
        </>
    );
};

export default Layouts;