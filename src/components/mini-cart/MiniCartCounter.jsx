import { useDispatch, useSelector } from "react-redux";
import { toggleMiniCart } from "../../service/cartSlice";

const MiniCartCounter = () => {
    const dispatch = useDispatch();
    const { cart, totalPrice } = useSelector((state) => state.cart);

    const miniCartHandler = () => {
        dispatch(toggleMiniCart(true));
    };

    return (
        <button
            type="button"
            className="w-24 fixed right-0 top-1/2 -translate-y-1/2 bg-red-400 px-3 py-3 text-center"
            onClick={miniCartHandler}
        >
            <h6 className="mb-2 text-white">{cart.length} Items</h6>
            <h6 className="bg-white px-1.5 py-1 rounded-md">${totalPrice}</h6>
        </button>
    );
};

export default MiniCartCounter;
