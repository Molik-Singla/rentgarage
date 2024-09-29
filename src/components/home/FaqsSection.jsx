import { useState } from "react";
import { faqData } from "../../utils/data";
import SectionMaxLayout from "../ui/SectionMaxLayout";
import SingleFaq from "./SingleFaq";

const FaqsSection = () => {
    const [isOpenAccordianId, setIsOpenAccordianId] = useState(null);

    const handleToggleAccordian = (id) => {
        isOpenAccordianId === id ? setIsOpenAccordianId(null) : setIsOpenAccordianId(id);
    };

    return (
        <section className="flex w-full justify-center bg-white py-12 transition-all duration-500 md:py-24 md:pt-6">
            <SectionMaxLayout>
                <section className="w-full">
                    <p className="text-4xl font-bold text-secondary-purple lg:text-6xl">FAQs</p>
                </section>

                <section className="mt-2 flex h-auto w-full flex-col py-6 md:mt-6">
                    {faqData.map((faq) => {
                        return (
                            <SingleFaq
                                key={faq.id}
                                faqTitle={faq.faqTitle}
                                faqDesc={faq.faqDesc}
                                isOpenAccordian={faq.id === isOpenAccordianId}
                                onOpenAccordian={() => handleToggleAccordian(faq.id)}
                            />
                        );
                    })}
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default FaqsSection;
