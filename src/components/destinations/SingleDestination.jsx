const SingleDestination = ({ index, destImgSrc, destTitle, destDesc }) => {
    return (
        <section className={`SINGLE_DESTINATION flex flex-col gap-5 md:flex-row ${index % 2 !== 0 && "md:flex-row-reverse"}`}>
            <div className="w-full md:w-1/2">
                <img src={destImgSrc} alt="DESTINATION_IMAGE" />
            </div>

            <div className="flex w-full flex-col gap-4 md:w-1/2">
                <p className="font-primary text-2xl font-bold text-secondary-purple">{destTitle}</p>
                <p className="font-secondary text-lg font-semibold text-gray-800/60">{destDesc}</p>
            </div>
        </section>
    );
};
export default SingleDestination;
