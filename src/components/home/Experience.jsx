import { experienceData } from "../../utils/data";
import SectionMaxLayout from "../ui/SectionMaxLayout";
import SingleExperience from "./SingleExperience";

const Experience = () => {
    return (
        <section className="mt-12 flex w-full justify-center">
            <SectionMaxLayout>
                <section className="flex w-full flex-col gap-6">
                    <p className="text-center font-secondary text-[42px] font-bold">
                        <span>Experience </span>
                        <span className="text-neutral-yellow">Luxury</span>
                    </p>
                    <section className="ALL_EXPERIENCE_CARDS grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 md:grid-cols-2">
                        {experienceData.map((experience) => {
                            return <SingleExperience key={experience.id} imgSrc={experience.imgSrc} title={experience.title} />;
                        })}
                    </section>
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default Experience;
