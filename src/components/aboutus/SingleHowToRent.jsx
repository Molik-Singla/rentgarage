const SingleHowToRent = ({ index, imgSrc, howTitle, howDesc }) => {
    return (
        <section className="SINGLE relative flex h-72 w-full max-w-72 flex-col items-center justify-center rounded-full bg-white lg:h-60 lg:w-60 xl:h-72 xl:w-72">
            <section className="absolute left-6 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/80 font-semibold text-white">
                {index}
            </section>
            <img className="w-[20%]" src={imgSrc} alt="" />
            <section className="flex w-full flex-col items-center gap-2 p-2 px-4">
                <p className="w-4/5 text-center font-primary text-xl font-bold text-secondary-purple md:text-2xl">{howTitle}</p>
                <p className="w-4/5 text-center font-secondary text-base font-semibold text-gray-500">{howDesc}</p>
            </section>
        </section>
    );
};
export default SingleHowToRent;
