import SectionMaxLayout from "../ui/SectionMaxLayout";
import SingleCarCard from "./SingleCarCard";

// Utils
import { carsData } from "../../utils/data";

const WhatWeOffer = () => {
    return (
        <section className="flex w-full justify-center">
            <SectionMaxLayout>
                <section className="flex w-full flex-col items-center py-8 font-primary">
                    <p className="text-sm font-bold uppercase text-green-400">WHAT WE OFFER</p>
                    <p className="text-3xl font-bold text-secondary-purple lg:text-6xl">Explore the Car Range</p>

                    <section className="ALL_CARS_CARDS grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                        {carsData.map((car) => {
                            return <SingleCarCard key={car.id} imgSrc={car.imgSrc} name={car.name} features={car.features} />;
                        })}
                    </section>
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default WhatWeOffer;
