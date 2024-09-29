// Utils
import { FaChair } from "react-icons/fa";

const SingleWhyChooseUsCard = ({ title = "", subTitle = "" }) => {
    return (
        <section className="SINGLE_WHY flex gap-7">
            <div className="flex h-16 w-16 min-w-16 items-center justify-center rounded-full bg-black">
                <FaChair className="text-xl" />
            </div>
            <section className="flex flex-col gap-1">
                <p className="text-2xl font-bold md:text-3xl">{title}</p>
                <p className="font-secondary font-semibold text-stone-400">{subTitle}</p>
            </section>
        </section>
    );
};
export default SingleWhyChooseUsCard;
