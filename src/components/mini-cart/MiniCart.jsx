import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMiniCart, getTotalPrice } from "../../service/cartSlice";
import MiniCartProductItem from "./MiniCartProductItem";

const MiniCart = () => {
    const { isMiniCartOpen, cart, totalPrice } = useSelector(
        (state) => state.cart
    );

    const dispatch = useDispatch();

    const hideMiniCartHandler = () => {
        dispatch(toggleMiniCart(false));
    };

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [cart]);

    return (
        <div
            className={`w-80 bg-gray-100 fixed right-0 top-0 h-screen px-5 py-5 transition-all z-10 ${
                isMiniCartOpen
                    ? "opacity-100 visible translate-x-0"
                    : "opacity-0 invisible translate-x-full"
            }`}
        >
            <div className="header border-b mb-5 pb-5">
                <div className="flex justify-between items-center">
                    <h4 className="text-center">Cart</h4>
                    <button
                        type="button"
                        className="w-10 h-10 text-center text-white bg-red-800"
                        onClick={hideMiniCartHandler}
                    >
                        X
                    </button>
                </div>
            </div>
            <div className="product-list">
                {cart.map((product) => (
                    <MiniCartProductItem key={product.id} product={product} />
                ))}
            </div>
            <div className="flex justify-between">
                <h4>Total:</h4>
                <h4>${totalPrice.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default MiniCart;
