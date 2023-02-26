import { BsTrash, BsCartDash } from "react-icons/bs";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import Button from "../../components/elements/Button";
import { addToCart } from "../../service/cartSlice";
import { removeToWishlist } from "../../service/wishlistSlice";

const WishlistView = () => {
    const { wishlist } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
    };

    const productRemoveHandler = (id) => {
        dispatch(removeToWishlist(id));
    };

    return (
        <>
            <div className="cart-wrapper">
                <div className="container">
                    {wishlist.length === 0 ? (
                        <div className="empty-cart text-center py-section">
                            <BsCartDash className="text-[50px] mb-5 inline-block" />
                            <h3>No items found in wishlist</h3>
                        </div>
                    ) : (
                        <div className="cart-main">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs border text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-5"
                                            >
                                                Image
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-5"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-5"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-5"
                                            >
                                                Add to cart
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-5"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishlist.map((product) => (
                                            <tr
                                                className="bg-white border dark:bg-gray-800 dark:border-gray-700"
                                                key={product.id}
                                            >
                                                <td className="px-6 py-4">
                                                    <div className="w-24 h-20 overflow-hidden">
                                                        <Link href="/">
                                                            <img
                                                                src={
                                                                    product.thumbnail
                                                                }
                                                                alt={
                                                                    product.title
                                                                }
                                                            />
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {product.title}
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${product.price}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Button
                                                        clickHandler={() =>
                                                            addToCartHandler(
                                                                product
                                                            )
                                                        }
                                                    >
                                                        Add to cart
                                                    </Button>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            productRemoveHandler(
                                                                product.id
                                                            )
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
                    )}
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default WishlistView;
