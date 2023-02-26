import Link from "next/link";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { addToCart } from "../../service/cartSlice";
import { addToWishlist } from "../../service/wishlistSlice";
import Button from "../elements/Button";

import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    };

    const addToWishlistHandler = () => {
        dispatch(addToWishlist(product));
    };

    return (
        <div className="product-card border">
            <div className="p-5 h-72 overflow-hidden">
                <Link href={`/product/${product.id}`}>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full"
                    />
                </Link>
            </div>
            <div className="p-5">
                <h4 className="mb-1.5 hover:text-primary">
                    <Link href={`/product/${product.id}`}>{product.title}</Link>
                </h4>
                <h5 className="text-red-700 mb-2">${product.price}</h5>
                <div className="flex space-x-2">
                    <Button className="py-1.5" clickHandler={addToCartHandler}>
                        Add to cart
                    </Button>
                    <Button
                        className="py-1.5"
                        clickHandler={addToWishlistHandler}
                    >
                        Add to wishlist
                    </Button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
