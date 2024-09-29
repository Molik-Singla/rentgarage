import { useState, useRef, useEffect } from "react";

// Utils
import { TiPlus } from "react-icons/ti";
import { RiArrowDropRightLine } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";

const SingleFaq = ({ faqTitle, faqDesc, isOpenAccordian, onOpenAccordian }) => {
    const [maxHeight, setMaxHeight] = useState("0px");
    const contentRef = useRef(null);

    const handleToggleAccordion = () => {
        onOpenAccordian();
        setMaxHeight(isOpenAccordian ? "0px" : `${contentRef.current.scrollHeight + 24}px`);
    };

    useEffect(() => {
        if (isOpenAccordian) setMaxHeight(`${contentRef.current.scrollHeight + 24}px`);
        else setMaxHeight("0px");
    }, [isOpenAccordian]);

    return (
        <section className="h-full w-full">
            <section
                onClick={handleToggleAccordion}
                className="flex h-auto w-full cursor-pointer items-center justify-between gap-4 bg-[rgb(14,39,69)] p-2 px-4 py-2.5 text-white"
            >
                <section className="flex items-center gap-4 font-semibold">
                    <div className="w-5 min-w-5">{isOpenAccordian ? <TiMinus className="text-xl" /> : <TiPlus className="text-xl" />}</div>
                    <p className="font-primary text-lg md:text-xl">{faqTitle}</p>
                </section>
                <div className="flex w-8 min-w-8 justify-start">
                    <RiArrowDropRightLine
                        className={`text-3xl transition-all duration-200 md:text-4xl ${isOpenAccordian ? "rotate-90" : "rotate-0"}`}
                    />
                </div>
            </section>

            <section
                ref={contentRef}
                className={`transition-max-height overflow-hidden border-x duration-300`}
                style={{ maxHeight: maxHeight, height: maxHeight }}
            >
                <p className="p-4 font-secondary text-lg font-semibold md:text-xl">{faqDesc}</p>
            </section>
        </section>
    );
};

export default SingleFaq;
