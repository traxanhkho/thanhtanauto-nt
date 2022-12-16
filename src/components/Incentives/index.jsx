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
    icon : () => <GearIcon className={"h-16 w-16"} />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate quidem culpa perspiciatis sed harum a ipsam",
  },
  {
    name: 'Nhân viên thân thiện',
    icon : () => <HeartIcon className={"h-16 w-16"} /> ,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate quidem culpa perspiciatis sed harum a ipsam",
  },
]

export default function Incentives() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-8 sm:px-2 sm:py-16 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Trung tâm bảo dưỡng sửa chữa ô tô Gara thanh tân auto
              </h2>
              <p className="mt-4 text-gray-500">
                Thanh Tân Auto được thành lập tháng 09/2014, Thanh Tân Auto đã quy tụ đội ngũ kỹ sư, kỹ thuật viên xuất thân từ Đại học Nha trang, Đại học Giao Thông Vận Tải….đã nhiều năm tham gia vào các hoạt động sửa chữa các loại ô tô hiện đại. Tập thể nhân viên và lãnh đạo Thanh Tân Auto luôn theo sát tình hình thị trường ô tô, phấn đấu học hỏi và hoàn thiện mình từng bước nâng cao các kỹ năng cần thiết nhằm phục vụ quý khách ngày một tốt hơn, hoàn thiện hơn.
              </p>
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/assets/images/bg-2.jpg"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
         <IncentiveList incentives={incentives} />
        </div>
      </div>
    </div>
  )
}
