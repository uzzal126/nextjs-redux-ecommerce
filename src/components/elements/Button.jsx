const Button = ({ className = "", children, clickHandler }) => {
    return (
        <button
            type="button"
            className={`font-medium border border-[#aaa] rounded-md px-5 h-10 hover:bg-black hover:text-white hover:border-black transition-all ${className}`}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};

export default Button;
