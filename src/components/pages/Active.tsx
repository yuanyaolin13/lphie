import ActiveHouseItem from "../util/ActiveHouseItem";
import banner from "../../assets/scrollingBanner.png";
import dragon from "../../assets/dragon.png";

import noPhoto from "../../assets/brothers/active/anon.png";
import AlexRoster from "../../assets/brothers/active/AlexRoster.png";
import AllanRoster from "../../assets/brothers/active/AllanRoster.png";
import AndyRoster from "../../assets/brothers/active/AndyRoster.png";
import DylanRoster from "../../assets/brothers/active/DylanRoster.png";
import JamesRoster from "../../assets/brothers/active/JamesRoster.png";
import JerryRoster from "../../assets/brothers/active/JerryRoster.png";
import JohnnyRoster from "../../assets/brothers/active/JohnnyRoster.png";
import JonathanRoster from "../../assets/brothers/active/JonathanRoster.png";
import KenRoster from "../../assets/brothers/active/KenRoster.png";
import KylerRoster from "../../assets/brothers/active/KylerRoster.png";
import LorenzoRoster from "../../assets/brothers/active/LorenzoRoster.png";
import NathanRoster from "../../assets/brothers/active/nathanRoster.png";
import StevenRoster from "../../assets/brothers/active/StevenRoster.png";
import TianyiRoster from "../../assets/brothers/active/TianyiRoster.png";
import YuanyaoRoster from "../../assets/brothers/active/YuanyaoRoster.png";



function Active() {
    const activeHouse = [
        {
            image: KylerRoster,
            lineNumber: "#97",
            name: "Kyler “The 《Lord A.R.C.H.E.R.》” Chen",
            role: "External Events",
            contact: "kylerc@unc.edu",
            year: "2026",
        },
        // { ASSOCIATE / NO FORM
        //     image: noPhoto,
        //     lineNumber: "#102",
        //     name: "John “Whiplash” Dinh",
        //     role: "",
        //     contact: "",
        //     year: "",
        // },
        {
            image: LorenzoRoster,
            lineNumber: "#105",
            name: "Lorenzo “SeiTa” Santarina IV",
            role: "Rush, Fundraising, Reveal Coordinator",
            contact: "lnsiv@unc.edu",
            year: "2026",
        },
        // {  ASSOCIATE / NO FORM
        //     image: noPhoto,
        //     lineNumber: "#107",
        //     name: "Cooper “Dante” Klein",
        //     role: "Internal",
        //     contact: "",
        //     year: "",
        // },
        {
            image: TianyiRoster,
            lineNumber: "#108",
            name: "Tianyi “The Alchemist π‘Tranced” Zhou",
            role: "President",
            contact: "tianyiz@unc.edu",
            year: "2027",
        },
        {
            image: NathanRoster,
            lineNumber: "#109",
            name: "Nathan “rEnTgoKu” Luu",
            role: "Internal Events",
            contact: "nluu@unc.edu",
            year: "2027",
        },
        {
            image: JerryRoster,
            lineNumber: "#110",
            name: "Jerry “Gladiator” Zhang",
            role: "Professional Development",
            contact: "jerryzha@unc.edu",
            year: "2027",
        },
        {
            image: AndyRoster,
            lineNumber: "#111",
            name: "Andy “BRACKLIST” Choe",
            role: "Scribe",
            contact: "N/A",
            year: "2026",
        },
        {
            image: KenRoster,
            lineNumber: "#113",
            name: "Ken “ExcalibHer” Pham",
            role: "Rush, VPI",
            contact: "kpham7@unc.edu",
            year: "2027",
        },
        {
            image: AllanRoster,
            lineNumber: "#114",
            name: "Allan “Nception” Fan",
            role: "Treasurer, Secretary",
            contact: "afc@unc.edu",
            year: "2027",
        },
        {
            image: AlexRoster,
            lineNumber: "#116",
            name: "Alex “Graduate” Tang",
            role: "VPE",
            contact: "alextang@unc.edu",
            year: "2027",
        },
        {
            image: DylanRoster,
            lineNumber: "#117",
            name: "Dylan “HowL” Chin",
            role: "Judicial",
            contact: "dylchin@unc.edu",
            year: "2027",
        },
        {
            image: JamesRoster,
            lineNumber: "#118",
            name: "James “Anubis” Ma",
            role: "IGC Representative, Rush Chair",
            contact: "jyma@unc.edu",
            year: "2028",
        },
        {
            image: JohnnyRoster,
            lineNumber: "#119",
            name: "Johnny “Brack Tiger” Zhu",
            role: "Rush Chair, External Events",
            contact: "johnnyz@unc.edu",
            year: "2028",
        },
        {
            image: JonathanRoster,
            lineNumber: "#120",
            name: "Jonathan “1MP3RIOSO” Gregory",
            role: "Reveal Coordinator, Rush Chair",
            contact: "jgre@unc.edu",
            year: "2028",
        },
        {
            image: StevenRoster,
            lineNumber: "#121",
            name: "Steven “Ad Astra” Chen",
            role: "Rush Chair, Social Media, Secretary, Cultural Heritage, Events",
            contact: "loading@unc.edu",
            year: "2028",
        },
        {
            image: YuanyaoRoster,
            lineNumber: "#122",
            name: "Yuanyao “Entei” Lin",
            role: "Web Chair, Social Media, Cultural Heritage",
            contact: "yuanyaol@unc.edu",
            year: "2026",
        },
        // {
        //     image: noPhoto,
        //     lineNumber: "#123",
        //     name: "Khang “Lucky Twice” Nguyen",
        //     role: "",
        //     contact: "idk@unc.edu",
        //     year: "2026",
        // },
    ];



    return (
        <div className="w-full flex flex-col">
            <article className="bg-[url(./assets/smoke2.png)] h-full bg-cover bg-center bg-no-repeat">
                <div className="h-screen bg-black/75 backdrop-blur-sm text-white flex flex-col justify-center relative">
                    <div className='mt-auto px-4 mx-6 border-l-8 flex flex-col'>
                        <div className="text-center lg:text-left text-5xl lg:text-[9rem] font-extrabold">
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

            <article className="relative bg-[url(./assets/graintexture.png)]">
                <svg viewBox="0 0 1440 350" fill="none" xmlns="http://www.w3.org/2000/svg"  className="block -mt-1 -rotate-180">
                    <path d="M1443 657.273V0.381409L1397.96 55.1293L1349.59 44.8945L1317.01 69.1004L1273.15
                    88.2703L1259.61 119.381L1238.22 141.8L1191.02 134.327L1167.96 170.148L1133.62 190.699L1097.02
                    183.226L1040.2 227.901L962.687 215.798L939.039 249.346L903.519 254.463L863.582 232.125L825.412
                    227.008L812.46 194.435L752.311 160.401L714.533 174.372L680.877 172.504L657.72 122.224L611.602
                    108.252L559.302 118.975L509.259 78.9291L476.683 70.9687L412.51 81.6908L364.135 115.725L321.354
                    102.16L273.568 67.7195L225.781 82.1782L190.359 77.5482L175.15 54.2357L149.834 30.9232H125.107
                    L87.9183 16.952L60.9344 33.7662L31.6937 22.5568L0 0.381409V657.273L1443 657.273Z" fill="#FFFFFF"/>
                </svg>
                <article className="relative my-12 space-y-24 grid grid-cols-1 md:grid-cols-2 md:px-24">
                    {activeHouse.map((brother, i) => {
                        const isLast = i === activeHouse.length - 1;
                        const isOdd = activeHouse.length % 2 === 1;

                        return (
                            <div
                                key={i}
                                className={
                                    isLast && isOdd ? "md:col-span-2 flex justify-center" : ""
                                }
                            >
                                <ActiveHouseItem {...brother} />
                            </div>
                        );
                    })}
                </article>
            </article>

        </div>
    );
}

export default Active;