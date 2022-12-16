import { useState } from "react";
import { useForm } from "react-hook-form";

const servicesAdvise = [
    { id: 1, name: 'tư vấn mua xe cũ' },
    { id: 2, name: 'tư vấn bảo dưỡng xe' },
    { id: 3, name: 'Đăng kiểm xe' },
]

const servicesCar = [
    { id: 1, name: "kiểm tra xe định kỳ" },
    { id: 2, name: "rửa xe" },
    { id: 3, name: "sơn xe" },
    { id: 4, name: "bảo dưỡng xe" },
    { id: 5, name: "thay lốp xe" },
]

export default function Checkbox() {
    const { register, handleSubmit } = useForm();
    const [complete, setComplete] = useState(false);

    const onSubmit = (data) => {
        const items = Object.keys(data);
        items.forEach(item => {
            console.log(data[item]);
            if (data[item] == true) return setComplete(true);
            return setComplete(false)
        })
        console.log(complete) ; 
    }

    return (
        <div>
            <form>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <fieldset>
                        <legend className="text-lg font-medium text-gray-900 ">Dịch vụ xe hơi</legend>
                        <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
                            {servicesCar.map((person, personIdx) => (
                                <div key={personIdx} className="relative flex items-start py-4">
                                    <div className="min-w-0 flex-1 text-sm">
                                        <label htmlFor={`person-${person.id}`} className="select-none font-medium text-gray-700 block first-letter:uppercase">
                                            {person.name}
                                        </label>
                                    </div>
                                    <div className="ml-3 flex h-5 items-center">
                                        <input
                                            id={`person-${person.id}`}
                                            name={`person-${person.id}`}
                                            {...register(`box1-${person.id}`)}
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset >
                        <legend className="text-lg font-medium text-gray-900">Dịch vụ tư vấn</legend>
                        <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
                            {servicesAdvise.map((person, personIdx) => (
                                <div key={personIdx} className="relative flex items-start py-4">
                                    <div className="min-w-0 flex-1 text-sm">
                                        <label htmlFor={`person-${person.id}`} className="select-none font-medium text-gray-700 first-letter:uppercase block">
                                            {person.name}
                                        </label>
                                    </div>
                                    <div className="ml-3 flex h-5 items-center">
                                        <input
                                            {...register(`box2-${person.id}`)}
                                            id={`person-${person.id}`}
                                            name={`person-${person.id}`}
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>
            </form>
            {/* <button onClick={handleSubmit(data => onSubmit(data))} className="rounded-lg text-lg tracking-tight capitalize text-white font-medium mt-2 sm:mt-4 bg-c-blue-1 py-1 px-2 ml-auto block hover:opacity-70">Bước tiếp</button> */}
        </div>


    )
}
