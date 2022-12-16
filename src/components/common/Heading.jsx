

const classNames = (...classes) => classes.filter(Boolean).join(' ');

function Heading({ classes , children }) {
    return (
        <h2 className={classNames("text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl", classes)}>{children}</h2>
    );
}

export default Heading; 