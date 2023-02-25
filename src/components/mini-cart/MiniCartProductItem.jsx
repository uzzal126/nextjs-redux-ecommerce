import { useDispatch } from "react-redux";
import { removeProduct } from "../../service/cartSlice";

const MiniCartProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const productRemoveHandler = (id) => {
        dispatch(removeProduct(id));
    };
    return (
        <div className="mini-cart-item relative mb-5 pb-5 border-b">
            <div className="flex ">
                <div className="w-20 h-20 overflow-hidden">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="pl-3 pr-10">
                    <h5 className="mb-2">{product.title}</h5>
                    <h6>
                        {product.qty} x ${product.price}
                    </h6>
                </div>
                <div className="absolute right-0 top-0">
                    <button
                        type="button"
                        onClick={() => productRemoveHandler(product.id)}
                        className="w-7 h-7 rounded-full text-center hover:bg-primary hover:text-white"
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MiniCartProductItem;
