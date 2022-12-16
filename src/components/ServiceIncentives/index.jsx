import IncentiveList from "../common/IncentiveList"
import { GearIcon, HeartIcon } from "../common/StoreIcons"

const incentives = [
    {
        name: 'Dịch vụ nhanh chóng',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate quidem culpa perspiciatis sed harum a ipsam",
    },
    {
        name: 'Hơn 10 năm kinh nghiệm',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate quidem culpa perspiciatis sed harum a ipsam",
    },
    {
        name: 'Dịch vụ chuyên nghiệp',
        icon: () => <GearIcon className={"h-16 w-16"} />,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate quidem culpa perspiciatis sed harum a ipsam",
    },
    {
        name: 'Nhân viên thân thiện',
        icon: () => <HeartIcon className={"h-16 w-16"} />,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate quidem culpa perspiciatis sed harum a ipsam",
    },
]

export default function ServiceIncentives() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-2 sm:py-4 lg:py-8 ">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl lg:mx-auto">
                        <h2 className="text-4xl font-bold capitalize lg:text-center tracking-tight text-gray-900">
                            tại sao chọn chúng tôi ?
                        </h2>
                        <p className="mt-4 lg:text-center text-gray-500">
                            Thanh Tân Auto được thành lập tháng 09/2014, Thanh Tân Auto đã quy tụ đội ngũ kỹ sư, kỹ thuật viên xuất thân từ Đại học Nha trang, Đại học Giao Thông Vận Tải….đã nhiều năm tham gia vào các hoạt động sửa chữa các loại ô tô hiện đại.
                        </p>
                    </div>
                    <IncentiveList incentives={incentives} />
                </div>
            </div>
        </div>
    )
}
