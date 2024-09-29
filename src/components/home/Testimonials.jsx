import { testimonialData } from "../../utils/data";
import SectionMaxLayout from "../ui/SectionMaxLayout";
import SingleTestimonial from "./SingleTestimonial";

const Testimonials = () => {
    return (
        <section className="mt-12 flex w-full justify-center bg-black py-12 md:py-24">
            <SectionMaxLayout>
                <section className="flex w-full flex-col items-center gap-6">
                    <p className="text-sm font-bold uppercase text-green-400">Testimonials</p>
                    <p className="text-3xl font-bold text-gray-100 lg:text-5xl">Clients About Us</p>

                    <section className="TESTIMONIALS_CARDS mt-8 grid grid-cols-1 justify-items-center md:mt-14 md:grid-cols-3">
                        {testimonialData.map((item, ind) => {
                            return (
                                <section key={item.id} className="flex flex-col md:flex-row">
                                    <SingleTestimonial
                                        testimonial={item.testimonial}
                                        personName={item.personName}
                                        personAge={item.personAge}
                                    />

                                    {testimonialData.length - 1 !== ind && (
                                        <div className="mx-5 hidden h-full w-[1px] bg-indigo-700/85 md:block"></div>
                                    )}
                                    {testimonialData.length - 1 !== ind && (
                                        <div className="my-9 mt-3 block h-[1px] w-full bg-indigo-700/85 md:hidden"></div>
                                    )}
                                </section>
                            );
                        })}
                    </section>

                    <section className="mt-14 flex w-full flex-col justify-between gap-5 gap-y-12 md:mt-28 md:flex-row">
                        <div className="text-center font-secondary">
                            <p className="text-5xl font-semibold text-neutral-yellow md:text-6xl">25</p>
                            <p className="mt-2 text-base text-gray-100">Years of establishment</p>
                        </div>
                        <div className="text-center font-secondary">
                            <p className="text-5xl font-semibold text-neutral-yellow md:text-6xl">100,000</p>
                            <p className="mt-2 text-base text-gray-100">Happy clients</p>
                        </div>
                        <div className="text-center font-secondary">
                            <p className="text-5xl font-semibold text-neutral-yellow md:text-6xl">200+</p>
                            <p className="mt-2 text-base text-gray-100">Luxury cars</p>
                        </div>
                        <div className="text-center font-secondary">
                            <p className="text-5xl font-semibold text-neutral-yellow md:text-6xl">100+</p>
                            <p className="mt-2 text-base text-gray-100">Destinations covered</p>
                        </div>
                    </section>
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default Testimonials;
