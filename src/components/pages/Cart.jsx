import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegHandRock } from "react-icons/fa";
import { LuChevronLeft } from 'react-icons/lu';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiDiscount1 } from "react-icons/ci";
import PayNowMenuLeftSidebar from './PayNowMenuLeftSidebar';
import PayNowMenuContent from './PayNowMenuContent';
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaHandHoldingDollar, FaRegCreditCard } from "react-icons/fa6";
import { PiUserBold } from "react-icons/pi";
import { RiBookletLine } from "react-icons/ri";




const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    console.log("card items", items);
    if (isEmpty) return <h3 className="text-center pt-5">Your Cart is Empty</h3>;


    // Calculate the total price
    const cartTotal = items.reduce((total, cartItem) => {
        return total + (cartItem.price * cartItem.quantity);
    }, 0);
    // console.log("cartTotal", cartTotal);

    const [isEditNewItemsModalOpen, setIsEditNewItemsModalOpen] = useState(false);
    const handleEditNewItemsClick = () => {
        setIsEditNewItemsModalOpen(true);
    };

    const handleEditNewItemsModalClose = () => {
        setIsEditNewItemsModalOpen(false);
    };


    const [isHoldModalOpen, setIsHoldModalOpen] = useState(false);
    const handleHoldClick = () => {
        setIsHoldModalOpen(true);
    };

    const handleHoldModalClose = () => {
        setIsHoldModalOpen(false);
    };

    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const handleSettingsClick = () => {
        setIsSettingsModalOpen(true);
    };

    const handleSettingsModalClose = () => {
        setIsSettingsModalOpen(false);
    };

    const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
    const handleDiscountClick = () => {
        setIsDiscountModalOpen(true);
    };

    const handleDiscountModalClose = () => {
        setIsDiscountModalOpen(false);
    };

    const [isPayNowModalOpen, setIsPayNowModalOpen] = useState(false);
    const handlePayNowClick = () => {
        setIsPayNowModalOpen(true);
    };

    const handlePayNowModalClose = () => {
        setIsPayNowModalOpen(false);
    };

    const menuItems = [
        {
            name: "Cash",
            icons: <RiMoneyDollarBoxLine />,
        },
        {
            name: "Card",
            icons: <FaRegCreditCard />,
        },
        {
            name: "OnAccount",
            icons: <PiUserBold />,
        },
        {
            name: "Checque",
            icons: <RiBookletLine />,
        },
    ];

    const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0]);

    const handleMenuClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };


    let tax = 10;
    let shipping = 15;
    let discount = 5;

    let total = ((cartTotal + tax + shipping) - discount);


    return (
        <>
            <div className="cart__table">
                <div className="setup-card pt-3">
                    <div className="scroll-sidebar g-doc-scroll">

                        <div className="cart__table__area table-responsive">
                            <table className="table table-borderless">
                                <thead>
                                    <tr className="table-light">
                                        <th scope="col" className="table__th"></th>
                                        <th scope="col" className="table__th">Items</th>
                                        <th scope="col" className="table__th">Unit Price</th>
                                        <th scope="col" className="table__th">Quantity</th>
                                        <th scope="col" className="table__th">Total Price</th>
                                        <th scope="col" className="table__th"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((cartItem, i) => {
                                        const itemTotalPrice = cartItem.quantity * cartItem.price;

                                        return (
                                            <tr key={cartItem.id}>
                                                <td>
                                                    <div className="btn__edit" onClick={handleEditNewItemsClick}>
                                                        <FiEdit />
                                                    </div>
                                                </td>
                                                <td className="bordered__column__start">
                                                    <p className="cart__txt">{cartItem.name}</p>
                                                </td>
                                                <td className="bordered__column__middle">
                                                    <p className="cart__txt">$ {cartItem.price}</p>
                                                </td>
                                                <td className="bordered__column__middle">
                                                    <div className="d-flex align-items-center">
                                                        <FaMinusCircle className="btn__minus" onClick={() => updateItemQuantity(cartItem.id, cartItem.quantity - 1)} />
                                                        <span className="btn__quantity">{cartItem.quantity}</span>
                                                        <FaPlusCircle className="btn__plus" onClick={() => updateItemQuantity(cartItem.id, cartItem.quantity + 1)} />
                                                    </div>
                                                </td>
                                                <td className="bordered__column__end">
                                                    <p className="cart__txt">$ {itemTotalPrice}</p>
                                                </td>
                                                <td>
                                                    <div className="btn__delete" onClick={() => removeItem(cartItem.id)}>
                                                        <i className="fa-regular fa-trash-can"></i>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {isEditNewItemsModalOpen && (
                <div className="items__modal">
                    <div className="items__modal__content">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="">Edit item information</h4>
                            <h4 className="close__items" onClick={handleEditNewItemsModalClose}>
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
                                        <button className="btn__items__submit">Update Product</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div className="pt-2">
                <table className="table table-borderless">
                    <thead className="text-end">
                        <tr>
                            <td></td>
                            <td className="text-start border-top"><h6 className="subtxt__cart">Sub Total</h6></td>
                            <td className="text-end border-top"><h5 className="subtxt__price">${cartTotal}</h5></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-start border-top"><h6 className="subtxt__cart">Tax</h6></td>
                            <td className="text-end border-top"><h5 className="subtxt__price">${tax}</h5></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-start border-top"><h6 className="subtxt__cart">Shipping</h6></td>
                            <td className="text-end border-top"><h5 className="subtxt__price">${shipping}</h5></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-start border-top"><h6 className="subtxt__cart">Discount On Cart</h6></td>
                            <td className="text-end border-top"><h5 className="subtxt__price">${discount}</h5></td>
                        </tr>
                    </thead>
                    <thead>
                        <tr className="table-primary">
                            <th scope="col" className="text-start"><h6 className="products__counts__txt">Products Count <span className="fs-4">({totalItems})</span></h6></th>
                            <th scope="col" className="text-start "><h3 style={{ color: "#067AE2" }}>Total</h3></th>
                            <th scope="col" className="text-end"><h3 style={{ color: "#717374", fontWeight: "700" }}>${total}</h3></th>
                        </tr>
                    </thead>
                </table>

            </div>


            <div className="header__navbar pt-1 mb-3">
                <div className="me-3 mb-3">
                    <button className="btn__all__delete" onClick={() => emptyCart()}> <IoMdCloseCircleOutline /> Cancel</button>
                </div>

                <div className="me-3 mb-3">
                    <button type="button" className="btn__Settings__modal" onClick={handleSettingsClick}><IoSettingsOutline /> <span className="ms-2">Settings</span></button>
                </div>

                <div className="me-3 mb-3">
                    <button type="button" className="btn__orderHold__modal" onClick={handleHoldClick}><FaRegHandRock /> <span className="ms-2">Hold</span></button>
                </div>

                <div className="me-3 mb-3">
                    <button type="button" className="btn__orderDiscount__modal" onClick={handleDiscountClick}><CiDiscount1 /> <span className="ms-2">Discount</span></button>
                </div>

                <div className="me-0 mb-3">
                    <button type="button" className="btn__payNow__modal" onClick={handlePayNowClick}><FaHandHoldingDollar /> <span className="ms-2">Pay Now</span></button>
                </div>

                {isSettingsModalOpen && (
                    <div className="settings__modal">
                        <div className="modal__content">
                            <div className="py-2">
                                <h4>
                                    <span className="text-start"><LuChevronLeft /></span>
                                    <span className="txt__setting">Settings</span>
                                    <span className="close__settings" onClick={handleSettingsModalClose}>
                                        &times;
                                    </span>
                                </h4>
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
                                            <label className="form-check-label txt__normal" forHtml="flexRadioDefault1">
                                                After Discount
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label txt__normal" forHtml="flexRadioDefault2">
                                                Before Discount
                                            </label>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-taxType" role="tabpanel" aria-labelledby="pills-taxType-tab" tabindex="1">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                            <label className="form-check-label txt__normal" forHtml="exampleRadios1">
                                                Exclusive
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label className="form-check-label txt__normal" forHtml="exampleRadios2">
                                                Inclusive
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3">
                                <button className="btn__Settings__submit">Submit</button>
                            </div>
                        </div>
                    </div>
                )}

                {isHoldModalOpen && (
                    <div className="orderHold__modal">
                        <div className="orderHold__modal__content">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="">Order On Hold</h4>
                                <h4 className="close__orderHold" onClick={handleHoldModalClose}>
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
                                        <label className="form-control form-control-sm txt__label" id='colFormLabelSmOrderAmount' >$ {cartTotal}</label>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <button className="btn__orderHold__submit">Put on hold</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {isDiscountModalOpen && (
                    <div className="orderDiscount__modal">
                        <div className="orderDiscount__modal__content">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="">Discount</h4>
                                <h4 className="close__orderDiscount" onClick={handleDiscountModalClose}>
                                    &times;
                                </h4>
                            </div>
                            <hr className="customer__hr" />
                            <form action="" className="pt-3">
                                <div className="row mb-3">
                                    <label forHtml="colFormLabelDiscountType" className="col-sm-3 col-form-label col-form-label-sm txt__label">Discount Type</label>
                                    <div className="col-sm-9">
                                        <select id="colFormLabelDiscountType" className="form-select form-select-sm txt__label">
                                            <option selected>selected</option>
                                            <option>Flat</option>
                                            <option>Percentage</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label forHtml="colFormLabelSmOrderAmount" className="col-sm-3 col-form-label col-form-label-sm txt__label">Amount</label>
                                    <div className="col-sm-9">
                                        <div className="d-flex">
                                            <label className="form-control form-control-sm w-25 txt__label" id='colFormLabelSmOrderAmount' >%</label>
                                            <input type="text" className="form-control form-control-sm txt__label" id="colFormLabelSmOrderAmount" placeholder="write amount..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <button className="btn__orderDiscount__submit">Add Discount</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {isPayNowModalOpen && (
                    <div className="payNow__modal">
                        <div className="payNow__modal__content">

                            <div className="payNow__modal__orderAmount">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="txt__orderAmount">Order Amount</h4>
                                    <h3 className="txt__orderAmount__price">$ {total}</h3>
                                </div>
                            </div>

                            <div className="payNow__modal__completePayment">
                                <div className="table-responsive">
                                    <table className="table">

                                        <div className="setup-card">
                                            <div className="scroll-sidebar g-doc-scroll">
                                                <div style={{ display: 'flex' }}>
                                                    <div style={{ width: '170px', borderRight: '1px solid #ccc' }}>
                                                        <PayNowMenuLeftSidebar menuItems={menuItems} onMenuClick={handleMenuClick} />
                                                    </div>
                                                    <div style={{ flex: 1, padding: '10px' }}>
                                                        <PayNowMenuContent
                                                            selectedMenuItem={selectedMenuItem}
                                                            handlePayNowModalClose={handlePayNowModalClose}
                                                            total={total}
                                                            totalItems={totalItems}
                                                            cartTotal={cartTotal}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                )}

            </div>

        </>
    );
};

export default Cart;

