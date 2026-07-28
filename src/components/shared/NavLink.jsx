'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({href,children}) => {
    const path=usePathname();
    const isActive= href===path;
    return (
        <Link href={href} className={` ${isActive && " border-b-2 border-b-orange-500"}`}>{children}</Link>
    );
};

export default NavLink;