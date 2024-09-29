import { howToRentData } from "../../utils/data";
import SectionMaxLayout from "../ui/SectionMaxLayout";
import SingleHowToRent from "./SingleHowToRent";

const HowToRentSection = () => {
    return (
        <section className="mt-12 flex w-full justify-center bg-gray-200 py-10 font-primary md:py-28">
            <SectionMaxLayout>
                <p className="text-sm font-bold uppercase text-green-400">HOW TO RENT</p>
                <p className="mt-2 text-center text-4xl font-bold tracking-wide text-secondary-purple md:w-3/5 lg:text-6xl lg:leading-[84px]">
                    Make 4 Simple Steps To Rent a Car!
                </p>

                <p className="mt-8 font-secondary text-base font-semibold text-gray-800/70 md:text-lg">
                    Rent luxury cars in Indore for outstations, intercity, tourism, events gold class experience
                </p>

                <section className="mt-12 grid w-full grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {howToRentData.map((how, ind) => {
                        return <SingleHowToRent key={how.id} index={ind} {...how} />;
                    })}
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default HowToRentSection;
