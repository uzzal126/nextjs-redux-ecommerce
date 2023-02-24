import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../service/cartSlice";
import Button from "../elements/Button";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product, qty: 1 }));
    };

    return (
        <div className="product-card border">
            <div className="p-5 h-72 overflow-hidden">
                <Link href="/">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full"
                    />
                </Link>
            </div>
            <div className="p-5">
                <h4 className="mb-1.5 hover:text-primary">
                    <Link href="/">{product.title}</Link>
                </h4>
                <h5 className="text-red-700 mb-2">${product.price}</h5>
                <Button className="py-1.5" clickHandler={addToCartHandler}>
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
