import { useState, useEffect } from "react";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            return window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={'fixed z-200 bottom-4 right-4 transition-all duration-500 ' +
                `${isVisible ? 'animate-fade-in-up' : 'animate-fade-out-down'}`
        }
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 640 640"
                 className={'w-12 h-12'}
                 fill={'#1447e6'}>
                <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64
                320C64 461.4 178.6 576 320 576zM337 199L417 279C426.4 288.4 426.4 303.6 417 312.9C407.6 322.2
                392.4 322.3 383.1 312.9L344.1 273.9L344.1 424C344.1 437.3 333.4 448 320.1 448C306.8 448 296.1
                437.3 296.1 424L296.1 273.9L257.1 312.9C247.7 322.3 232.5 322.3 223.2 312.9C213.9 303.5 213.8
                288.3 223.2 279L303.2 199C312.6 189.6 327.8 189.6 337.1 199z"/>
            </svg>
        </button>
    );
}

export default ScrollToTopButton;