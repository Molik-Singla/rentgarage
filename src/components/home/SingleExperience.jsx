const SingleExperience = ({ imgSrc, title }) => {
    return (
        <section className="SINGLE_EXPERIENCE_CARD relative flex h-[230px] w-full items-end justify-start overflow-hidden rounded-3xl md:h-[280px] lg:h-[340px]">
            <img
                className="absolute left-0 top-0 h-full w-full transition-all duration-500 hover:-rotate-1 hover:scale-110"
                src={imgSrc}
                alt=""
            />
            <section className="relative z-20 space-y-3 p-2">
                <p className="text-xl font-bold text-white md:text-2xl">{title}</p>
                <button className="rounded-full bg-white px-6 py-2 text-center font-secondary text-sm font-semibold">Book Now</button>
            </section>
        </section>
    );
};
export default SingleExperience;
