import Head from "next/head";
import MiniCart from "../components/mini-cart/MiniCart";
import MiniCartCounter from "../components/mini-cart/MiniCartCounter";
import NewArrivalProducts from "../components/product/NewArrivalProducts";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <NewArrivalProducts />
            <MiniCart />
            <MiniCartCounter />
        </>
    );
};

export default Home;
