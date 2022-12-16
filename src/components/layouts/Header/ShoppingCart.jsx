import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import Link from "next/link";


function ShoppingCart(props) {
    return (
        <Link href={"/shoppingCart"} className='relative h-full text-primary hover:opacity-70'>
            <ShoppingCartIcon className="h-8 w-8 ml-auto" />
            <span className="absolute top-[-7px] right-[-8px] border-[2px] border-c-black-1 border-solid text-center h-5 w-5 rounded-full bg-white text-black text-[12px] font-medium leading-[16px]">
                0
            </span>
        </Link>
    );
}

export default ShoppingCart;