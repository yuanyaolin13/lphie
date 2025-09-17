import banner from "../../assets/scrollingBanner.png";
import dragon from "../../assets/dragon.png";

// import noPhoto from "../../assets/brothers/active/anon.png";
// import StevenChen from "../../assets/brothers/active/StevenChen.png";
//
// interface Member {
//     image: string  | null;
//     name: string | null;
//     position: string | null;
//     year: string | null;
//     number: string | null;
//     contact: string | null;
// }

function Active() {

    // const activeHouse: Member[] = [
    //     {
    //         image: StevenChen,
    //         name: "Steven 'Ad Astra' Chen",
    //         position: "lowk everything",
    //         year: "2028",
    //         number: "#121",
    //         contact: "loading@unc.edu",
    //     },
    //     {
    //         image: noPhoto,
    //         name: "Khang 'Lucky Twice' Nguyen",
    //         position: "lowk fucking nothing",
    //         year: "2026",
    //         number: "#123",
    //         contact: "idk@unc.edu",
    //     },
    //     {
    //         image: noPhoto,
    //         name: "Yuanyao 'Entei' Lin",
    //         position: "Web Chair",
    //         year: "2026",
    //         number: "#122",
    //         contact: "loading@unc.edu",
    //     },
    //     {
    //         image: noPhoto,
    //         name: "Jonathan '1MP3RIOSO' Gregory",
    //         position: "lowk in the middle idk",
    //         year: "2028",
    //         number: "#120",
    //         contact: "idk@unc.edu",
    //     },
    // ]


    return (
        <div className="w-full flex flex-col">
            <article className="bg-[url(./assets/smoke2.png)] h-full bg-cover bg-center bg-no-repeat">
                <div className="h-screen bg-black/75 backdrop-blur-sm text-white flex flex-col justify-center relative">
                    <div className='mt-auto px-12 mx-6 border-l-8 flex flex-col'>
                        <div className="text-center lg:text-left text-6xl lg:text-[9rem] font-extrabold">
                            ACTIVE HOUSE
                        </div>
                        <div className="text-center lg:text-left text-3xl lg:text-6xl font-extrabold lg:-mt-2">
                            LAMBDA PHI EPSILON
                        </div>
                    </div>
                    <div className="w-full overflow-hidden mt-auto bg-white p-2">
                        <img
                            src={dragon}
                            alt={'dragon'}
                            className="absolute top-32 lg:top-20 right-0 h-128 lg:h-196 -z-20 opacity-25"
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

            <article className="h-full w-full flex flex-col bg-white relative">
                <div className="flex flex-col justify-center w-full my-6 lg:px-32 px-8 lg:my-12 space-y-8">
                    <div className='lg:text-8xl text-6xl font-extrabold text-blue-700'>
                        ABOUT US
                    </div>
                    <div className='text-md lg:text-lg text-black'>
                        Lambda Phi Epsilon at UNC Chapel Hill is an Asian-interest,
                        non-Asian-exclusive fraternity that aims to make leaders among men.
                        The organization was founded in the spring of 2013 by 18 young men.
                        We are a diverse group dedicated to increasing public awareness
                        about modern Asian and Asian-American issues through philanthropic
                        activities and services such as hosting bone marrow drives on behalf
                        of Be the Match, a subsidiary of the National Marrow Donor Program.
                    </div>
                    <div className='text-md lg:text-lg text-black'>
                        At the international scale, we have a total of 73 chapters all
                        united under the same goals. UNC Lambda Phi Epsilon strives to make
                        a strong impact on the Asian-American community and expand our
                        outreach on campus as well as the greater Triangle area. We hope to
                        develop young men into future leaders while making a positive and
                        lasting impact on society. The core values of are organization are
                        authenticity, courageous leadership, cultural heritage, love, and
                        wisdom.
                    </div>
                    <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between lg:mx-24'>
                        <div className="tabular-nums  text-blue-700 lg:text-7xl text-3xl font-bold animate-[dollarsRaisedCounter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                            <span className='sr-only'>$1,500</span><span className='not-sr-only'>$+</span>
                            <div className='text-sm lg:text-xl text-black w-full'>raised for other orgs.</div>
                        </div>
                        <div className="tabular-nums text-blue-700 lg:text-7xl text-3xl font-bold animate-[brothersCounter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                            <span className='sr-only'>10,000</span><span className='not-sr-only'>K+</span>
                            <div className='text-sm lg:text-xl text-black w-full'>brothers world-wide</div>
                        </div>
                        <div className="tabular-nums text-blue-700 lg:text-7xl text-3xl font-bold animate-[chapterCounter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                            <span className='sr-only'>100+</span><span className='not-sr-only'>+</span>
                            <div className='text-sm lg:text-xl text-black w-full'>brothers part of the chapter</div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="relative">
                <svg viewBox="0 0 1440 350" fill="none" xmlns="http://www.w3.org/2000/svg"  className="block -mt-1 -rotate-180">
                    <path d="M1443 657.273V0.381409L1397.96 55.1293L1349.59 44.8945L1317.01 69.1004L1273.15
                    88.2703L1259.61 119.381L1238.22 141.8L1191.02 134.327L1167.96 170.148L1133.62 190.699L1097.02
                    183.226L1040.2 227.901L962.687 215.798L939.039 249.346L903.519 254.463L863.582 232.125L825.412
                    227.008L812.46 194.435L752.311 160.401L714.533 174.372L680.877 172.504L657.72 122.224L611.602
                    108.252L559.302 118.975L509.259 78.9291L476.683 70.9687L412.51 81.6908L364.135 115.725L321.354
                    102.16L273.568 67.7195L225.781 82.1782L190.359 77.5482L175.15 54.2357L149.834 30.9232H125.107
                    L87.9183 16.952L60.9344 33.7662L31.6937 22.5568L0 0.381409V657.273L1443 657.273Z" fill="#FFFFFF"/>
                </svg>
            </article>

            <article className="relative my-12">
            </article>
        </div>
    );
}

export default Active;