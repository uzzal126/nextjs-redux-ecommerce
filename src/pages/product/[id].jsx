import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../service/productSlice";

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch();
    const { product, isLoading } = useSelector((state) => state.products);
    const { image, title, price } = product;

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, []);

    return (
        <div className="product-details">
            <div className="container">
                <h3>This is product details page - {id}</h3>
                {isLoading && (
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <div className="thumb">
                                <img src={image} alt={title} />
                            </div>
                        </div>
                        <div className="col-span-6">
                            <h3>{title}</h3>
                            <h5>{price}</h5>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
