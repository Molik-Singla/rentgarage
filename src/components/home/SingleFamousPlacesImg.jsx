const SingleFamousPlacesImg = ({ imgSrc, placeName }) => {
    return (
        <div
            className="group relative flex h-full w-full items-center justify-center transition-all duration-500 hover:h-[200%] hover:scale-110 md:hover:h-full md:hover:w-[200%]"
            style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.4)]">
                <div className="absolute text-center text-3xl font-bold text-white opacity-0 transition-all delay-300 duration-500 group-hover:opacity-100 lg:text-5xl">
                    {placeName}
                </div>
            </div>
        </div>
    );
};
export default SingleFamousPlacesImg;
