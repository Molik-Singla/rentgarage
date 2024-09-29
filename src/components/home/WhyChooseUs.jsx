import SectionMaxLayout from "../ui/SectionMaxLayout";
import parallexImg from "../../assets/images/parallex.webp";
import { whyChooseUsData } from "../../utils/data";
import SingleWhyChooseUsCard from "./SingleWhyChooseUsCard";

const WhyChooseUs = () => {
    return (
        <section
            className="flex w-full justify-center"
            style={{
                backgroundImage: `url(${parallexImg})`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center top",
            }}
        >
            <section className="flex h-full w-full justify-center bg-[rgba(0,0,0,0.7)] py-8">
                <SectionMaxLayout>
                    <section className="w-full text-white">
                        <p className="font-secondary text-[42px] font-semibold">
                            <span>Why Choose </span>
                            <span className="text-neutral-yellow">Us</span>
                        </p>

                        <section className="WHY_CHOOSE_US_CARDS mt-7 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                            {whyChooseUsData.map((item) => {
                                return <SingleWhyChooseUsCard key={item.id} title={item.title} subTitle={item.subTitle} />;
                            })}
                        </section>
                    </section>
                </SectionMaxLayout>
            </section>
        </section>
    );
};
export default WhyChooseUs;
