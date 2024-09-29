import SectionMaxLayout from "../ui/SectionMaxLayout";

const OurExperienceSection = () => {
    return (
        <section className="flex w-full justify-center bg-indigo-800 py-10 font-primary text-white md:py-28">
            <SectionMaxLayout>
                <section className="flex w-full flex-col items-center gap-12 text-center">
                    <p className="font-primary text-4xl font-bold md:text-6xl">Our experience</p>
                    <p className="font-secondary text-lg font-semibold text-gray-300 md:w-4/5">
                        At Travelnet Luxury Car Rentals, we pride ourselves in providing you with an unforgettable, extraordinary
                        experience. As such, we have developed a long-standing list of clientele who come to us for more than just an
                        opportunity to rent the world’s finest luxury cars. All of our chauffeurs have undertaken extensive training to
                        ensure the ultimate driving experience. Get in touch with one of our friendly, knowledgeable team members on
                        +919009648000 to discover M.P’s Finest range of luxurious vehicles. Start a conversation with us today and discover
                        how we could elevate driving to an art form.
                    </p>
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default OurExperienceSection;
