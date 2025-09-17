import dragon from "../../assets/dragon.png";
import banner from "../../assets/scrollingBanner.png";

function Chapter() {
    return (
        <div className="w-full flex flex-col overflow-hidden">
            <article className="bg-[url(./assets/smoke2.png)] h-full bg-cover bg-center bg-no-repeat">
                <div className="h-screen bg-black/75 backdrop-blur-sm text-white flex flex-col justify-center relative">
                    <div className='mt-auto px-12 mx-6 border-l-8 flex flex-col'>
                        <div className="text-center lg:text-left text-6xl lg:text-[9rem] font-extrabold">
                            CHAPTER ROSTER
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
            <article className='h-full bg-white'>
                <div className='text-blue-700 font-bold text-4xl lg:text-8xl text-nowrap flex flex-row -ml-20'>
                    CHAPTER ROSTER CHAPTER ROSTER CHAPTER ROSTER CHAPTER ROSTER CHAPTER ROSTER CHAPTER ROSTER
                </div>
            </article>
            <article className='h-full bg-black'>
                <svg viewBox="0 0 1440 223"
                     fill="#FFFFFF"
                     xmlns="http://www.w3.org/2000/svg"
                     className="block w-full h-auto">
                    <g clip-path="url(#clip0_118_37)">
                        <path d="M1483 0V223L1467.78 208.411L1448.83 206.029L1433.29 197.097L1402.85
                        200.075H1379.35L1357.94 206.238L1313.73 190.518L1307.41 169.2L1274.57
                        168.724L1265.54 146.87L1242.99 142.911L1239.01 129.93L1204.97 126.952L1178.19
                        114.835C1167.68 116.23 1157.61 118.283 1148.25 120.938C1137.77 124.511 1107.7
                        123.141 1107.7 123.141L1091.41 135.05L1065.32 143.595L1025.91 147.168L983.53
                        152.795L946.581 145.62L909.632 137.254L868.01 142.375L846.283 139.397L814.703
                        148.329L804.913 138.266L777.754 140.142L759.627 130.585L741.563 111.828L721.668
                        114.537L690.846 110.785L668.234 116.681L641.77 115.638L616.506 122.635L569.768
                        122.308L540.84 129.126L506.418 135.944L435.489 156.934L416.983 149.937L381.866
                        153.688L352.181 150.294C352.181 150.294 304.748 147.109 293.568 138.385C282.389
                        129.662 298.621 120.968 292.81 112.631C287 104.295 248.598 100.514 258.388
                        84.2874L211.334 76.3678L184.554 78.2435L169.332 68.865L125.878
                        75.1769L102.383 66.245L54.5704 79.0474L25.9589 75.6235L-0.442017 92.0284V0H1483Z" fill="#FFFFFF"/>
                    </g>
                </svg>
            </article>

            {/* !!!!!!!!!!!!!!! h-screen temporary*/}
            <article className='bg-black'>
                chapter roster goes here
                <svg viewBox="0 0 1440 350"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="block w-full h-auto -mb-px ">
                    <path d="M1443 657.273V0.381409L1397.96 55.1293L1349.59 44.8945L1317.01 69.1004L1273.15 88.2703L1259.61 119.381L1238.22 141.8L1191.02 134.327L1167.96 170.148L1133.62 190.699L1097.02 183.226L1040.2 227.901L962.687 215.798L939.039 249.346L903.519 254.463L863.582 232.125L825.412 227.008L812.46 194.435L752.311 160.401L714.533 174.372L680.877 172.504L657.72 122.224L611.602 108.252L559.302 118.975L509.259 78.9291L476.683 70.9687L412.51 81.6908L364.135 115.725L321.354 102.16L273.568 67.7195L225.781 82.1782L190.359 77.5482L175.15 54.2357L149.834 30.9232H125.107L87.9183 16.952L60.9344 33.7662L31.6937 22.5568L0 0.381409V657.273L1443 657.273Z" fill="#FFFFFF"/>
                </svg>
            </article>
            <article className='h-full bg-white'>
                <div className='text-blue-700 font-bold text-4xl lg:text-8xl text-nowrap flex flex-row -ml-20'>
                    CHAPTER ROSTER CHAPTER ROSTER CHAPTER ROSTER CHAPTER ROSTER CHAPTER ROSTER CHAPTER ROSTER
                </div>
            </article>
        </div>
    );
}

export default Chapter;