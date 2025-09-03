import dragon from "../../assets/dragon.png";
import banner from "../../assets/scrollingBanner.png";

function Chapter() {
    return (
        <div className="w-full flex flex-col">
            <article className="bg-[url(./assets/smoke2.png)] h-full bg-cover bg-center bg-no-repeat">
                <div className="h-screen bg-black/75 backdrop-blur-sm text-white flex flex-col justify-center relative">
                    <div className='mt-auto px-12 mx-6 border-l-8 flex flex-col'>
                        <div className="text-center md:text-left text-6xl md:text-[9rem] font-extrabold">
                            CHAPTER ROSTER
                        </div>
                        <div className="text-center md:text-left text-3xl md:text-6xl font-extrabold md:-mt-2">
                            LAMBDA PHI EPSILON
                        </div>
                    </div>
                    <div className="w-full overflow-hidden mt-auto bg-white p-2">
                        <img
                            src={dragon}
                            alt={'dragon'}
                            className="absolute top-20 right-0 h-128 md:h-196 -z-20 opacity-25"
                        />
                        <ul className="flex w-max animate-infinite-scroll">
                            {[...Array(6)].map((_, i) => (
                                <li key={i} className="">
                                    <img
                                        src={banner}
                                        alt={`banner ${i}`}
                                        className="h-16 w-auto"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>

        </div>
    );
}

export default Chapter;