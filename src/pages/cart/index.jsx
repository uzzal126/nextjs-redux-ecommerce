import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import {
    removeProduct,
    getTotalPrice,
    increaseProductQuantity,
    decreaseProductQuantity,
} from "../../service/cartSlice";

const CartView = () => {
    const dispatch = useDispatch();
    const { cart, totalPrice } = useSelector((state) => state.cart);

    const productRemoveHandler = (id) => {
        dispatch(removeProduct(id));
    };

    const increaseHandler = (id) => {
        dispatch(increaseProductQuantity(id));
    };

    const decreaseHandler = (id) => {
        dispatch(decreaseProductQuantity(id));
    };

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [cart]);

    return (
        <div className="cart-wrapper">
            <div className="container">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs border text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-5">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-5">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-5">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-5">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-5">
                                    Subtotal
                                </th>
                                <th scope="col" className="px-6 py-5">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product) => (
                                <tr
                                    className="bg-white border dark:bg-gray-800 dark:border-gray-700"
                                    key={product.id}
                                >
                                    <td className="px-6 py-4">
                                        <div className="w-24 h-20 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${product.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            type="button"
                                            className="text-2xl pr-2 cursor-pointer"
                                            onClick={() =>
                                                decreaseHandler(product.id)
                                            }
                                        >
                                            -
                                        </button>
                                        {product.qty}
                                        <button
                                            type="button"
                                            className="text-2xl pl-2 cursor-pointer"
                                            onClick={() =>
                                                increaseHandler(product.id)
                                            }
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        $
                                        {(product.price * product.qty).toFixed(
                                            2
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                productRemoveHandler(product.id)
                                            }
                                        >
                                            <BsTrash className="text-red-600 text-xl" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="cart-total mt-10">
                <div className="container">
                    <div className="grid grid-cols-12 gap-7">
                        <div className="col-span-4">
                            <div className="border p-5">
                                <h4 className="border-b mb-5 pb-5">
                                    Cart Total
                                </h4>
                                <div className="flex justify-between">
                                    <h6>Total price</h6>
                                    <h6>${totalPrice.toFixed(2)}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartView;
