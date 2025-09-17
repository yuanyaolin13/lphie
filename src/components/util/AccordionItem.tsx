import { useState } from "react";

interface AccordionItemProps {
    question: string;
    answer: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-neutral-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 text-left"
            >
                <span className="font-medium text-lg">{question}</span>
                <svg
                    className={`h-5 w-5 transform transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                >
                    <path d="M12 5v14M5 12h14" />
                </svg>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className={`overflow-hidden text-neutral-600 duration-800 ease-in-out pr-6 pb-4 ${isOpen ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-0"}`}>
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default AccordionItem;