const SingleTestimonial = ({ testimonial, personName, personAge }) => {
    return (
        <section className="SINGLE_TESTIMONIAL flex w-full flex-col items-start justify-between gap-8 p-2 font-secondary text-gray-200">
            <p className="text-center text-base md:text-xl">{testimonial}</p>
            <section className="relative left-2">
                <p className="text-2xl font-semibold text-gray-100 md:text-3xl">{personName}</p>
                <p className="text-base font-bold uppercase text-green-400">{personAge}</p>
            </section>
        </section>
    );
};
export default SingleTestimonial;
