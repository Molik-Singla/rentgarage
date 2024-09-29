const MapSection = () => {
    return (
        <section className="h-[min(440px,100vh)] w-full md:h-[min(100vh,760px)]">
            <iframe
                className="h-full w-full"
                data-src="https://maps.google.com/maps?t=m&amp;output=embed&amp;iwloc=near&amp;z=15&amp;q=17+Sylvia+Ln+New+Hyde+Park%2C+NY+11040"
                src="https://maps.google.com/maps?t=m&amp;output=embed&amp;iwloc=near&amp;z=15&amp;q=17+Sylvia+Ln+New+Hyde+Park%2C+NY+11040"
                title="Google Maps"
                data-load-mode="1"
            />
        </section>
    );
};
export default MapSection;
