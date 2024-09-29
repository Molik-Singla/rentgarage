// Utils
import { FaChair } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { PiCarProfileFill } from "react-icons/pi";

const SingleCarCard = ({ imgSrc, name, features }) => {
    const { seater = null, ac = null, color = null } = features;

    return (
        <section className="SINGLE_CAR_CARD flex flex-col items-center">
            <div className="flex min-h-[360px] w-full items-center justify-center">
                <img className="w-4/5 transition-all duration-500 hover:scale-110" src={imgSrc} alt="CAR-1" />
            </div>
            <section className="CAR_DETAILS flex w-full flex-col items-center gap-3">
                <p className="text-3xl font-semibold text-green-500">{name}</p>

                <section className="mt-2 flex w-fit flex-wrap justify-center gap-y-4">
                    {Boolean(seater) && (
                        <div className={`flex w-fit items-center gap-2 px-7 ${!ac && "border-r-2 border-gray-300/70"}`}>
                            <FaChair className="fill-green-600" />
                            <p className="font-secondary text-lg font-semibold">{seater} Seater</p>
                        </div>
                    )}
                    {ac && (
                        <div className="flex w-fit items-center gap-2 border-x-2 border-gray-300/70 px-7">
                            <FaWind className="fill-green-600" />
                            <p className="font-secondary text-lg font-semibold">AC</p>
                        </div>
                    )}
                    {Boolean(color) && (
                        <div className="flex w-fit items-center gap-2 px-7">
                            <PiCarProfileFill className="fill-green-600 text-xl" />
                            <p className="font-secondary text-lg font-semibold">{color}</p>
                        </div>
                    )}
                </section>

                <div className="DIVIDER my-3 h-[1px] w-full bg-gray-600"></div>
                <button className="rounded-md bg-black px-6 py-1.5 font-secondary font-semibold text-green-500">Book Now</button>
            </section>
        </section>
    );
};
export default SingleCarCard;
