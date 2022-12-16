import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Alerts from "../../../components/Alerts";
import Breadcrumb from "../../../components/Breakcrumb";
import ProductOverviews from "../../../components/ProductOverviews";

const pages = [
    { name: 'Sản phẩm', href: '/products', current: false },
    { name: 'Bộ Sửa Xe Ô Tô Cao Cấp', href: '#', current: true },
]

function ProductDetail() {
    return (
        <>
            <div className="max-w-7xl px-2 sm:px-4 lg:px-8">
                <div className="flex item-center justify-between mt-2 sm:mt-4 lg:mt-8">
                    <Breadcrumb pages={pages} />
                </div>
                <ProductOverviews />
            </div>

        </>
    );
}

export default ProductDetail;