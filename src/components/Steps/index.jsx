import { useState } from "react";
import Calendars from "../Calendars";
import Checkbox from "../Checkbox";
import PersonInfoForm from "../PersonInfoForm";


const stepsOrigin = [
    // { id: 'step1', label: "Bước 1", name: 'Loại dịch vụ', href: '#', status: 'complete', content: () => <Checkbox /> },
    { id: 'step1', label: "Bước 1", name: 'Loại dịch vụ', href: '#', status: 'current', content: (id) => <Checkbox key={id} /> },
    {
        id: 'step2', label: "Bước 2", name: 'Ngày phục vụ', href: '#', status: 'upcoming', content: (id) => (<Calendars key={id} />
        )
    },
    { id: 'step3', label: "Bước 3", name: 'Thông tin cá nhân', href: '#', status: 'upcoming', content: (id) => <PersonInfoForm key={id} /> },
]

export default function Steps() {

    const [steps, setSteps] = useState(stepsOrigin);

    const onChangeStep = (id) => {
        const newSteps = steps.map(step => step.id == id ? { ...step, status: 'current' } : { ...step, status: 'upcoming' });
        setSteps(newSteps);
    }

    return (
        <>
            <nav aria-label="Progress">
                <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
                    {steps.map((step) => (
                        <li key={step.id} className="md:flex-1">
                            {step.status === 'complete' ? (
                                <a
                                    href={step.href}
                                    className="group flex flex-col border-l-4 border-primary py-2 pl-4 hover:border-c-blue-1 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                                    onClick={() => onChangeStep(step.id)}
                                >
                                    <span className="text-sm font-medium text-c-blue-1 group-hover:text-c-blue-1">{step.label}</span>
                                    <span className="text-sm font-medium">{step.name}</span>
                                </a>
                            ) : step.status === 'current' ? (
                                <a
                                    href={step.href}
                                    className="flex flex-col border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                                    aria-current="step"
                                    onClick={() => onChangeStep(step.id)}
                                >
                                    <span className="text-sm font-medium text-c-blue-1">{step.label}</span>
                                    <span className="text-sm font-medium">{step.name}</span>
                                </a>
                            ) : (
                                <a
                                    href={step.href}
                                    className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                                    onClick={() => onChangeStep(step.id)}
                                >
                                    <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">{step.label}</span>
                                    <span className="text-sm font-medium">{step.name}</span>
                                </a>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
            <div>
                {steps.map(step => (
                    step.status === "current" ? step.content(step.id) : null
                ))}
            </div>
        </>

    )
}