import React from 'react';
import { useCart } from 'react-use-cart';

const ProductsItemCard = (props) => {
    const { addItem } = useCart();
    // console.log("ProductsItemCard props card: ", props);

    const handleAddToCart = () => {
        const item = {
            id: props.item?.id,
            name: props.item?.name,
            price: parseFloat(props.item?.price),
        };
        addItem(item);
    };
    return (
        <>
            <div key={props.item?._id} className="order__card">
                <div className="card" onClick={handleAddToCart}>
                    <div className="card__img">
                        <img src={props.item?.image} className="img-fluid" alt={props.item?.name} />
                    </div>
                    <div className="price__area text-center p-2">
                        <h5 className="card__txt__color">$ {props.item?.price}</h5>
                    </div>
                    <div className="card-footer text-center">
                        <h6 className="card__txt__color">{props.item?.name}</h6>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsItemCard;