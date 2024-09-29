import SingleDestination from "../components/destinations/SingleDestination";
import SectionMaxLayout from "../components/ui/SectionMaxLayout";
import { destinationsData } from "../utils/data";

const Destination = () => {
    return (
        <section className="mt-12 flex w-full justify-center py-12 md:py-24">
            <SectionMaxLayout>
                <section className="flex w-full flex-col gap-20">
                    {destinationsData.map((destination, ind) => {
                        return (
                            <SingleDestination
                                index={ind}
                                key={destination.id}
                                destImgSrc={destination.destImg}
                                destTitle={destination.destTitle}
                                destDesc={destination.destDesc}
                            />
                        );
                    })}
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default Destination;
