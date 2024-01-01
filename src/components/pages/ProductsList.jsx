import React, { useEffect, useState } from 'react';
import productsData from "../../MOCKDATA.json";
import ProductsItemCard from './ProductsItemCard';
import { BsThreeDotsVertical } from "react-icons/bs";


const ProductsList = () => {
    const [products, setProducts] = useState(productsData);
    console.log("products", products)

    const [selectedCategory, setSelectedCategory] = useState(null);
    const uniqueCategories = [...new Set(products.map(product => product.category))];

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    const handleCategoryClick = category => {
        setSelectedCategory(category);
    };

    const [searchQuery, setSearchQuery] = useState('');
    console.log("searchQuery", searchQuery);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        const searchList = products.filter((item) => {
            if (query.toLowerCase() === '') {
                return item;
            } else if (item.name.toLowerCase().includes(query)) {
                return item;
            }
        });
        setProducts(searchList);

        if (query.length < 1) {
            setProducts(productsData);
        }
    }

    const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
    const handleCategoriesClickOpen = () => {
        setIsCategoriesModalOpen(true);
    };

    const handleCategoriesModalClose = () => {
        setIsCategoriesModalOpen(false);
    };



    return (
        <div className="container">
            <div className="search__area pt-3 mb-3">
                <form className="nosubmit">
                    <input className="nosubmit"
                        type="text"
                        placeholder="Search Products..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </form>
            </div>

            <div className="d-flex justify-content-between">
                <div className="nav__category me-3">
                    <ul className="list-unstyled d-flex flex-wrap justify-content-start">
                        <li>
                            <button className={`me-2 mb-2 btn__category ${selectedCategory === null ? 'active' : ''}`}
                                onClick={() => { handleCategoryClick(null); handleCategoriesClickOpen() }}
                            >
                                All Categories
                            </button>
                        </li>
                        {uniqueCategories.map(category => (
                            <li key={category}>
                                <button className={`me-2 mb-2 btn__category ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => { handleCategoryClick(category); handleCategoriesClickOpen() }}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="three__dots" data-bs-toggle="tooltip" data-bs-placement="left" title="Click Categories Tabs">
                    <h3 onClick={handleCategoriesClickOpen}><BsThreeDotsVertical /></h3>
                </div>

                {isCategoriesModalOpen && (
                    <div className="categories__modal">
                        <div className="categories__modal__content">
                            <h4 className="close__categories" onClick={handleCategoriesModalClose}>
                                &times;
                            </h4>
                            <h4 className="text-center pt-4">Categories</h4>

                            <div className="nav__category pt-4">
                                <ul className="list-unstyled d-flex flex-wrap justify-content-start">
                                    <li>
                                        <button className={`me-2 mb-2 btn__category ${selectedCategory === null ? 'active' : ''}`}
                                            onClick={() => { handleCategoryClick(null); handleCategoriesModalClose(); }}
                                        >
                                            All Categories
                                        </button>
                                    </li>
                                    {uniqueCategories.map(category => (
                                        <li key={category}>
                                            <button className={`me-2 mb-2 btn__category ${selectedCategory === category ? 'active' : ''}`}
                                                onClick={() => { handleCategoryClick(category); handleCategoriesModalClose(); }}
                                            >
                                                {category}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="row g-3 mb-3">
                {filteredProducts !== undefined && filteredProducts.map(product => (
                    <div className="col-md-3" key={product.id}>
                        <ProductsItemCard item={product} />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;