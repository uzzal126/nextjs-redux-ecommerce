import { useSelector, useDispatch } from "react-redux";
import { removeProduct, toggleMiniCart } from "../../service/cartSlice";

const MiniCart = () => {
    const { isMiniCartOpen, cart, totalPrice } = useSelector(
        (state) => state.cart
    );
    const dispatch = useDispatch();

    const hideMiniCartHandler = () => {
        dispatch(toggleMiniCart(false));
    };

    const productRemoveHandler = (id) => {
        dispatch(removeProduct(id));
    };

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
                <ul>
                    {cart.map((product) => (
                        <li
                            className="mini-cart-item relative mb-5 pb-5 border-b"
                            key={product.id}
                        >
                            <div className="flex ">
                                <div className="w-20 h-20 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </div>
                                <div className="pl-3 pr-7">
                                    <h5 className="mb-2">{product.title}</h5>
                                    <h6>1 x ${product.price}</h6>
                                </div>
                                <div className=" absolute right-0 top-1/2 -translate-y-1/2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            productRemoveHandler(product.id)
                                        }
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between">
                    <h4>Total:</h4>
                    <h4>${totalPrice.toFixed(2)}</h4>
                </div>
            </div>
        </div>
    );
};

export default MiniCart;
