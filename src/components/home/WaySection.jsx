// Components
import SectionMaxLayout from "../ui/SectionMaxLayout";

// Utils
import { RiFlowerFill } from "react-icons/ri";

import way1Img from "../../assets/images/way1.webp";
import way2Img from "../../assets/images/way2.webp";
import way3Img from "../../assets/images/way3.webp";
import way4Img from "../../assets/images/way4.webp";

const WaySection = () => {
    return (
        <section className="WAY flex h-auto w-full justify-center bg-black py-16">
            <SectionMaxLayout>
                <section className="flex w-full flex-col items-center bg-[rgb(18,16,16)] px-2 py-4 text-center text-gray-100">
                    <p className="font-primary text-3xl font-bold">
                        <span>MAKE WAY TO </span>
                        <span className="text-neutral-yellow">GOLD CLASS</span>
                    </p>

                    <p className="mt-2 font-secondary font-semibold text-gray-500">
                        Rent luxury cars in Indore for outstations, intercity, tourism, events gold class experience
                    </p>

                    <RiFlowerFill className="mt-5 fill-neutral-yellow text-3xl" />
                </section>

                <section className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-4">
                    <img src={way1Img} alt="WAY_1" />
                    <img src={way2Img} alt="WAY_2" />
                    <img src={way3Img} alt="WAY_3" />
                    <img src={way4Img} alt="WAY_4" />
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default WaySection;
