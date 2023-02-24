import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../service/productSlice";

const NewArrivalProducts = () => {
    const { products, isLoading } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className="product-wrapper py-20">
            <div className="container">
                {isLoading && (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewArrivalProducts;
