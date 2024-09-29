import { useState } from "react";

// Components
import SectionMaxLayout from "../ui/SectionMaxLayout";

const MailUsSection = () => {
    const [inputValues, setInputValues] = useState({ name: "", email: "", message: "", checkIt: false });

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;

        setInputValues((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    return (
        <section className="mt-12 flex w-full justify-center py-12 md:py-24">
            <SectionMaxLayout>
                <section className="flex w-full flex-col items-center">
                    <p className="text-sm font-bold uppercase text-green-400">MAIL US</p>
                    <p className="mt-2 text-4xl font-bold text-secondary-purple lg:text-6xl">Drop a Line</p>

                    <section className="MAIL_US_FORM mt-8 flex w-full max-w-[712px] flex-col gap-7 md:mt-16">
                        <section className="flex w-full flex-col gap-4 md:flex-row">
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                name="name"
                                value={inputValues.name}
                                onChange={handleOnChange}
                                className={`w-full rounded-full p-4 px-8 font-primary text-sm font-semibold text-gray-600 outline-none ring-indigo-700/80 placeholder:text-gray-500/70 focus-within:bg-transparent focus-within:ring-2 md:w-1/2 ${inputValues.name.length > 0 ? "bg-transparent ring-2" : "bg-[rgb(220,219,220)]"}`}
                            />
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                name="email"
                                value={inputValues.email}
                                onChange={handleOnChange}
                                className={`w-full rounded-full p-4 px-8 font-primary text-sm font-semibold text-gray-600 outline-none ring-indigo-700/80 placeholder:text-gray-500/70 focus-within:bg-transparent focus-within:ring-2 md:w-1/2 ${inputValues.email.length > 0 ? "bg-transparent ring-2" : "bg-[rgb(220,219,220)]"}`}
                            />
                        </section>

                        <section className="w-full">
                            <textarea
                                rows={10}
                                name="message"
                                value={inputValues.message}
                                onChange={handleOnChange}
                                placeholder="Enter your Message"
                                className={`w-full rounded-3xl p-4 px-8 font-primary text-sm font-semibold text-gray-600 outline-none ring-indigo-700/80 placeholder:text-gray-500/70 focus-within:bg-transparent focus-within:ring-2 ${inputValues.message.length > 0 ? "bg-transparent ring-2" : "bg-[rgb(220,219,220)]"}`}
                            ></textarea>
                        </section>

                        <section className="flex flex-col justify-between gap-y-8 md:flex-row">
                            <section className="flex items-start font-secondary text-lg font-semibold text-gray-500/80 md:w-3/5">
                                <section className="mr-2 flex items-center">
                                    <input
                                        checked={inputValues.checkIt}
                                        id="checkIt"
                                        name="checkIt"
                                        onChange={handleOnChange}
                                        type="checkbox"
                                        className="relative top-[6px] h-4 w-4"
                                    />
                                </section>
                                <label htmlFor="checkIt">
                                    By using this form you agree with the storage and handling of your data by this website.
                                </label>
                            </section>
                            <section>
                                <button className="min-w-fit rounded-full bg-indigo-800/90 px-8 py-2 font-primary font-semibold text-white transition-all duration-300 hover:bg-green-500/80 md:px-12 md:py-4">
                                    Send Message
                                </button>
                            </section>
                        </section>
                    </section>
                </section>
            </SectionMaxLayout>
        </section>
    );
};
export default MailUsSection;
