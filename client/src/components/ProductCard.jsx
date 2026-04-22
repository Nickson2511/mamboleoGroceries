import React from "react";
import { assets } from "../assets/mamboleoImages/greencart_assets/assets";
import { useAppContext } from "../context/useAppContext";

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

    return product && (
        <div
            onClick={() => {
                navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                window.scrollTo(0, 0);
            }}
            className="border border-gray-500/20 rounded-md p-3 bg-white w-full flex flex-col justify-between"
        >
            {/* IMAGE */}
            <div className="group cursor-pointer flex items-center justify-center h-[120px] sm:h-[140px] md:h-[160px]">
                <img
                    className="group-hover:scale-105 transition object-contain h-full"
                    src={product.image[0]}
                    alt={product.name}
                />
            </div>

            {/* CONTENT */}
            <div className="text-gray-500/60 text-sm mt-2 flex flex-col flex-1">
                <p className="text-xs sm:text-sm">{product.category}</p>

                <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg line-clamp-2">
                    {product.name}
                </p>

                {/* RATING */}
                <div className="flex items-center gap-0.5 mt-1">
                    {Array(5).fill("").map((_, i) => (
                        <img
                            key={i}
                            src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                            alt="star"
                            className="w-3 sm:w-3.5"
                        />
                    ))}
                    <p className="text-xs">(4)</p>
                </div>

                {/* PRICE + BUTTON */}
                <div className="flex items-end justify-between mt-3 gap-2">
                    <p className="text-sm sm:text-base md:text-lg font-medium text-indigo-500">
                        {currency}{product.offerPrice}
                        <span className="block text-gray-500/60 text-xs line-through">
                            {currency }{product.price}
                        </span>
                    </p>

                    <div className="text-indigo-500 shrink-0">
                        {!cartItems[product._id] ? (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(product._id);
                                }}
                                className="flex items-center justify-center gap-1 
                                bg-indigo-100 border border-indigo-300 
                                px-2 sm:px-3 h-[32px] sm:h-[34px] 
                                rounded text-indigo-600 text-xs sm:text-sm font-medium"
                            >
                                <img src={assets.cart_icon} alt="cart_icon" className="w-3 sm:w-4" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 
                                px-2 h-[32px] sm:h-[34px] 
                                bg-indigo-500/25 rounded select-none text-xs sm:text-sm"
                            >
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFromCart(product._id);
                                    }}
                                    className="px-1"
                                >
                                    -
                                </button>

                                <span className="w-4 text-center">
                                    {cartItems[product._id]}
                                </span>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToCart(product._id);
                                    }}
                                    className="px-1"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;



