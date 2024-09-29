import { famousPlacesData } from "../../utils/data";
import SectionMaxLayout from "../ui/SectionMaxLayout";
import SingleFamousPlacesImg from "./SingleFamousPlacesImg";

const FamousPlaces = () => {
    return (
        <section className="mt-4 flex w-full justify-center bg-white py-12 transition-all duration-500 md:py-24">
            <SectionMaxLayout>
                <section className="flex w-full flex-col items-center gap-3 font-primary">
                    <p className="text-3xl font-bold tracking-tight md:text-4xl">
                        <span className="text-[rgb(218,6,103)]">FAMOUS PLACES </span>
                        <span>TO VISIT</span>
                    </p>
                    <p className="font-secondary font-semibold text-gray-600">Dive into the world around Indore with us.</p>

                    <section className="FAMOUS_PLACES_IMG_CARDS mt-10 flex h-[420px] w-full flex-col overflow-hidden md:mt-16 md:flex-row">
                        {famousPlacesData.map((place) => {
                            return <SingleFamousPlacesImg key={place.id} imgSrc={place.imgSrc} placeName={place.placeName} />;
                        })}
                    </section>
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default FamousPlaces;
