import dragon from "../../assets/dragon.webp";
import banner from "../../assets/scrollingBanner.jpg";
import RushCover from "../../assets/rush/Fall25RushCover.png";
import rushChair1 from "../../assets/brothers/active/StevenRoster.png"
import rushChair2 from "../../assets/brothers/active/JamesRoster.png"
import AccordionItem from "../util/AccordionItem.tsx";

function Rush() {

    const faqs = [
        {
            question: "What is Rush?",
            answer: "Rush, also known as recruitment, is a period at the beginning of either Fall or Spring" +
                " semester when anyone interested in Greek life can attend Rush events " +
                "to meet our brothers and learn more about Lambda Phi Epsilon. " +
                "It is intended to be a fun way to socialize with brothers in a non-binding environment. " +
                "Moreover, Rush usually lasts about 2 weeks, with events held every day to showcase various " +
                "aspects of our fraternity.",
        },
        {
            question: "Am I Required To Attend All Rush Events?",
            answer: "No. However, if you are serious about joining Lambda Phi Epsilon, you are highly encouraged " +
                "to attend all Rush events from beginning to end. Rush is designed to give " +
                "interested individuals a glimpse into real fraternity life, so the more you" +
                " experience and see for yourself, the better idea you will have of whether " +
                "the fraternity is something you want to be a part of.",
        },

        {
            question: "Do Rush Events Cost Money?",
            answer: "No. All Rush events are free as they are funded by the Chapter. " +
                "Moreover, rides to all events are provided.",
        },
        {
            question: "Do I have to pledge if I attend Rush?",
            answer:
                "No, there is no obligation for you to take action after Rush has concluded." +
                " Rush is simply an opportunity for you to introduce yourself and become more " +
                "familiar with the fraternity and the brothers.",
        },
        {
            question: "Do I have to be Asian to be a Member?",
            answer: "No. While Lambda Phi Epsilon is an Asian-interest Fraternity, it is NOT " +
                "Asian-exclusive. In other words, you do NOT need to be Asian to Rush nor do you" +
                " need to be Asian to join the Fraternity",
        },
        {
            question: "Who are you looking for?",
            answer: "The diversity of our fraternity is due to the individual personalities" +
                " that make up the house. However, our motto, “Leaders Among Men,” applies" +
                " to each and every brother. We are looking for the leaders among the crowd, " +
                "who will ultimately become the faces of our fraternity.",
        },
        {
            question: "Do I have to live at the house?",
            answer: "No. Living in the Lambda House is completely optional. Our brotherhood is not " +
                "confined within four walls. However, the Lambda house offers a “home away from home,” " +
                "furthering academic and social growth, and provides much of the comfort and support of a family environment. " +
                "Regardless, we understand and respect the choice of any brother and his " +
                "personal living preferences.",
        },

    ];

    return (
        <div className="w-full flex flex-col">
            <article className="bg-[url(./assets/smoke2.png)] h-full bg-cover bg-center bg-no-repeat">
                <div className="h-screen bg-black/75 backdrop-blur-sm text-white flex flex-col justify-center relative">
                    <div className='mt-auto px-4 mx-6 border-l-8 flex flex-col'>
                        <div className="text-center lg:text-left text-5xl lg:text-[9rem] font-extrabold">
                            RUSH
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
            <article className="bg-[url(./assets/graintexture.webp)]">
                <svg viewBox="0 0 1440 223"
                     fill="#FFFFFF"
                     xmlns="http://www.w3.org/2000/svg"
                     className="block w-full h-auto -mt-px">
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
                <div className='h-full text-center mb-20'>
                    <div className='flex flex-col mt-6 mb-12 space-y-4'>
                        <div className='text-5xl lg:text-8xl font-bold px-4'>
                            FALL 2025 RUSH
                        </div>
                        <div className='text-3xl'>
                            - CHI CLASS -
                        </div>
                    </div>
                    <div className='flex flex-col px-8 space-y-4 items-center'>
                        <a
                            className='flex flex-col items-center w-full'
                            href='https://www.instagram.com/p/DNhL5shASO5/'
                        >
                            <img
                                src={RushCover}
                                alt={'rush cover'}
                                className="border-4 border-white md:w-1/2"
                            />
                        </a>
                        <div className='my-4 text-lg'>
                            Interested? Fill out our General Interest Form or contact our Rush Chairs!
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='text-4xl lg:text-7xl font-bold px-4 my-6 md:my-10'>
                            RUSH CHAIRS
                        </div>
                        <div className='flex flex-col md:flex-row md:space-x-30 space-y-8 md:space-y-16'>
                            <div className='flex flex-col items-center'>
                                <img
                                    src={rushChair1}
                                    alt={'Steven Chen'}
                                    className='w-36 h-36 md:w-80 md:h-80 rounded-full object-cover object-top border-2 border-white'
                                />
                                <div className='flex flex-col items-center mt-4'>
                                    <div className='text-2xl lg:text-5xl font-bold mb-4'>
                                        Steven Chen
                                    </div>
                                    <div>loading@unc.edu | (919) - 724 - 6953</div>
                                    <div>IG: @steven_c302</div>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img
                                    src={rushChair2}
                                    alt={'James MA'}
                                    className='w-36 h-36 md:w-80 md:h-80 rounded-full object-center object-cover border-2 border-white'
                                />
                                <div className='flex flex-col items-center mt-4'>
                                    <div className='text-2xl lg:text-5xl font-bold mb-4'>
                                        James Ma
                                    </div>
                                    <div>jyma@unc.edu | (919) - 271 - 3518 </div>
                                    <div>IG: @_james_ma_</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg viewBox="0 0 1440 247" fill="none" xmlns="http://www.w3.org/2000/svg"  className="block -mb-px">
                    <path d="M1443 657.273V0.381409L1397.96 55.1293L1349.59 44.8945L1317.01 69.1004L1273.15 88.2703L1259.61 119.381L1238.22 141.8L1191.02 134.327L1167.96 170.148L1133.62 190.699L1097.02 183.226L1040.2 227.901L962.687 215.798L939.039 249.346L903.519 254.463L863.582 232.125L825.412 227.008L812.46 194.435L752.311 160.401L714.533 174.372L680.877 172.504L657.72 122.224L611.602 108.252L559.302 118.975L509.259 78.9291L476.683 70.9687L412.51 81.6908L364.135 115.725L321.354 102.16L273.568 67.7195L225.781 82.1782L190.359 77.5482L175.15 54.2357L149.834 30.9232H125.107L87.9183 16.952L60.9344 33.7662L31.6937 22.5568L0 0.381409V657.273L1443 657.273Z" fill="#FFFFFF"/>
                </svg>
            </article>

            <article className="h-full bg-white">
                <div className='flex flex-col text-black mx-8'>
                    <div className="flex flex-col md:flex-row md:mt-16 mt-12">
                        <div className="flex flex-col mx-auto">
                            <div className="font-bold md:-rotate-90 text-right text-6xl mb-auto md:mt-30 lg:text-9xl text-blue-700">
                                FAQ
                            </div>
                        </div>
                        <div className="md:w-2/3 mx-auto p-2 text-left">
                            {faqs.map((faq, idx) => (
                                <AccordionItem key={idx} {...faq} />
                            ))}
                        </div>
                    </div>
                    <div className="text-lg my-8 flex flex-col">
                        <span>Have more Questions? Contact us through Email or Instagram!</span>
                        <span>unclambdas@gmail.com | @unclambdas</span>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Rush;