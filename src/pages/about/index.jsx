import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>About us</title>
            </Head>
            <div className="container">
                <div className="grid grid-cols-4 gap-5">
                    <h2>This is about page</h2>
                </div>
            </div>
        </>
    );
};

export default About;
