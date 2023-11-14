import Link from "next/link";

const Header = () => {
    return (
        <h2 className="header">
            <Link href="/" className="hover:underline">
                Home
            </Link>
            <Link href="/restaurants" className="hover:underline">
                Restaurants
            </Link>
            <Link href="/happy-hours" className="hover:underline">
                Happy Hours
            </Link>
        </h2>
    );
};

export default Header;
