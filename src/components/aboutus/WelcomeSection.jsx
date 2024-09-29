import SectionMaxLayout from "../ui/SectionMaxLayout";

import aboutWelcomeImg from "../../assets/images/about_welcome.webp";

const Welcome = () => {
    return (
        <section className="mt-12 flex w-full justify-center pt-10 font-primary md:h-[min(620px,100vh)] md:pt-16">
            <SectionMaxLayout>
                <section className="WELCOME flex h-fit flex-col justify-between gap-5 md:flex-row">
                    <section
                        className="IMG_SECTION h-full min-h-[280px] w-full md:w-2/5"
                        style={{
                            backgroundImage: `url(${aboutWelcomeImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></section>
                    <section className="mt-5 flex w-full flex-col gap-8 pb-6 md:mt-0 md:w-3/6">
                        <section>
                            <p className="text-sm font-bold uppercase text-green-400">WELCOME!</p>
                            <p className="mt-2 text-4xl font-bold text-secondary-purple md:w-4/5 lg:text-6xl">The Best Car Rental Deals</p>

                            <div className="mt-3 h-[3px] w-10 rounded-lg bg-green-500 md:mt-6"></div>
                        </section>

                        <p className="font-secondary text-base font-semibold text-gray-800/70 md:text-lg">
                            Our aim is to take the hassle and stress out of a normal rental process. We set ourselves apart by delivering
                            chauffer driven car to you. Whether it is the airport, hotel or a nominated location, we have our VIP Service
                            with your choice from the fleet. Enjoy and experience the comfort, elegance and style via our luxury car rental
                            service in Indore.
                        </p>

                        <section>
                            <button className="rounded-full bg-green-500/80 px-8 py-2 font-primary font-bold text-white transition-all duration-300 hover:bg-indigo-600 md:px-12 md:py-5">
                                Rent A Car
                            </button>
                        </section>
                    </section>
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default Welcome;
