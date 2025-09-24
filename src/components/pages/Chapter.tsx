import dragon from "../../assets/dragon.webp";
import banner from "../../assets/scrollingBanner.jpg";
import ChapterRosterItem from "../util/ChapterRosterItem.tsx";


function Chapter() {

    const classes = [
        {
            semesterYear: "Spring 2013",
            className: "Charter Colossus",
            educators: [
                'Mike "Nooobody’s Bitch" Xi',
                'Tianyu "Shuttlecock" Shi'
            ],
            classMembers: [
                '#1. Wesley "1, 2 St3P" Shang',
                '#2. Gopal "Cocoa Puff" Desai',
                '#3. Jakovin "The Burning Bush" Lee',
                '#4. Tim "Deadmaufive" Kang',
                '#5. Masa "Buttercup" Watanabe',
                '#6. Alex "Woody" Guzman',
                '#7. Vincent "Phoenix Down" Wang',
                '#8. Duc "PokeHerFace" Doan',
                '#9. Adam "Old Dog New Tricks" Lee',
                '#10. William "Skeet Shooter" Yen',
                '#11. Chauncey "Febreze" Cleveland',
                '#12. Joe "Cap’n ‘Murica" Baldock',
                '#13. Kevin "Buzz" Cheng',
                '#14. Zach "Tokem Pole" Jones',
                '#15. Scott "Brack Swan" Dobbin',
                '#16. Albert "My Sassy Boy" Kang'
            ]
        },
        {
            semesterYear: "Fall 2013",
            className: "Alpha Awakening",
            educators: [
                'Duc "PokeHerFace" Doan',
                'Tim "Deadmaufive" Kang'
            ],
            classMembers: [
                '#17. Joseph "Brack Knight" Shin',
                '#18. Tin "B4nhKai" Nguyen',
                '#19. Stephen "The Renaissance Man" Yan',
                '#20. Stephen "Rex" Chen',
                '#21. Tim "Clifford" Wu',
                '#22. Brian "AtlaS.S." Luong'
            ]
        },
        {
            semesterYear: "Fall 2014",
            className: "Beta Bushido",
            educators: [
                'Tim "Deadmaufive" Kang',
                'Stephen "The Renaissance Man" Yan'
            ],
            classMembers: [
                '#24. Tony "Akituh" Lieu',
                '#25. Joey "5ky Bison" Yip',
                '#26. Cheng "RhaeGal" Qiu',
                '#27. Henry "UndHerDog" Lieu',
                '#28. Kyle "FireFawkes" Elmore',
                '#29. Benny "imPulse" Ho',
                '#30. Ricky "Bullseye" Ho',
                '#31. Stephen "Brack Mamba" Shin',
                '#32. Aravind "Rocky" Subramanian',
                '#33. Taylor "HighLandHer" Moore'
            ]
        },
        {
            semesterYear: "Fall 2015",
            className: "Gamma Ganbaru",
            educators: [
                'Stephen "The Renaissance Man" Yan',
                'Benny "imPulse" Ho'
            ],
            classMembers: [
                '#34. Kento "DeadPull" Yamamoto'
            ]
        },
        {
            semesterYear: "Spring 2016",
            className: "Delta Dynasty",
            educators: [
                'Joseph "Brack Knight" Shin',
                'Tin "B4nhKai" Nguyen'
            ],
            classMembers: [
                '#35. John "Creed" Tuong',
                '#36. Brandon "SimBa" Pham',
                '#37. Jin "CharMandHer" Sosankin',
                '#38. Sam "Slinky" Samarakoon',
                '#39. Jeff "HArry Spotter" Kim',
                '#40. Keith "Dissonance" Copper, Jr.',
                '#41. Rushi "Consonance" Marthala',
                '#42. Phillip "The Notorious T.W.I.G." Huynh',
                '#43. Peter "ForHerst Gump" Zheng'
            ]
        },
        {
            semesterYear: "Fall 2016",
            className: "Epsilon Empire",
            educators: [
                'Taylor "HighLandHer" Moore',
                'Cheng "RhaeGal" Qiu'
            ],
            classMembers: [
                '#44. Nguyen "Achilles" Vu',
                '#46. Kiet "Akamaru" Huynh',
                '#47. Zhu "6yakuya" Park',
                '#48. Daniel "6oliath" Kim'
            ]
        },
        {
            semesterYear: "Spring 2017",
            className: "Zeta Zenith",
            educators: [
                'Benny "imPulse" Ho',
                'Ricky "Bullseye" Ho'
            ],
            classMembers: [
                '#49. Taejung "Brack OPS" Kim',
                '#51. Michael "Lucario" Nguyen',
                '#52. Daniel "Wolfg4nG" Yoon',
                '#53. Chonny "Scooby Snax" Martin',
                '#54. Tanas "Sokka" Gangadhar'
            ]
        },
        {
            semesterYear: "Fall 2017",
            className: "Exalted Etas",
            educators: [
                'Nguyen "Achilles" Vu',
                'Kiet "Akamaru" Huynh'
            ],
            classMembers: [
                '#56. Harvey "H.A.M.m" Liu',
                '#60. Maximilian "Grimm" Kremer'
            ]
        },
        {
            semesterYear: "Spring 2018",
            className: "Triumphant Theta",
            educators: [
                'Phillip "The Notorious T.W.I.G." Huynh',
                'Sam "Slinky" Samarakoon'
            ],
            classMembers: [
                '#61. Joseph "KilluAH GoodD." Tuong',
                '#62. Kevin "Bambi" Pham',
                '#63. Jeffery "「Sora」" Zheng',
                '#64. Johnny "DEA7HGRIPS" Ni'
            ]
        },
        {
            semesterYear: "Fall 2018",
            className: "Imperial Iota",
            educators: [
                'Jeff "HArry Spotter" Kim',
                'Keith "Dissonance" Copper Jr.'
            ],
            classMembers: [
                '#65. Gerald "A.S.S. DestroyHer" Tadeja',
                '#66. Bryan "Sarge" Nguyen',
                '#68. Jonny "Berzerker Armour" Wu',
                '#69. Sung "The Big B.A.A.D Wolf" Song',
                '#70. Brandon "Space JammHer" Chen'
            ]
        },
        {
            semesterYear: "Fall 2019",
            className: "Kappa Kryptonite",
            educators: [
                'Chonny "Scooby Snax" Martin'
            ],
            classMembers: [
                '#72. Jonathan "Starg4zinG" Liao'
            ]
        },
        {
            semesterYear: "Spring 2020",
            className: "Mu Musketeers",
            educators: [
                'Taejung "Brack OPS" Kim'
            ],
            classMembers: [
                '#73. Michael "DIO9SUS" Deng',
                '#74. Andre "Cerberüs" Tautjo',
                '#75. Daniel "⚜️Charlemagne⚜️" Ku',
                '#76. Tano "ThrillHer" Nguyen'
            ]
        },
        {
            semesterYear: "Spring 2021",
            className: "Nu Nexus",
            educators: [
                'Jeffery "「Sora」" Zheng',
                'Bryan "Sarge" Nguyen'
            ],
            classMembers: [
                '#77. Billy "DoOk CaBoOm" Zheng',
                '#78. Andrew "Kurama" Pham',
                '#79. Tony "Hikkup" Vo',
                '#80. Teddy "Brack Panther" Pyo',
                '#81. Khoi "tHe KreAtor" Bui',
                '#82. Andy "WolvHerine" Chen',
                '#83. William "Freesol" Wun',
                '#84. Xuan "SLEEP1NG DRAG0N" Chen'
            ]
        },
        {
            semesterYear: "Fall 2021",
            className: "Xi Xenon",
            educators: [
                'Joseph "KilluAH GoodD." Tuong',
                'Gerald "A.S.S. DestroyHer" Tadeja'
            ],
            classMembers: [
                '#85. Denis "Perseus" Kasaivanov',
                '#87. Justin "JugHerNaut" Wang',
                '#88. Ian "Fast n\' Furious" Brown',
                '#89. Eric "Shang-Chi" Rao',
                '#90. Aknazar "Snoopy" Janibek'
            ]
        },
        {
            semesterYear: "Spring 2022",
            className: "Omicron Odyssey",
            educators: [
                'Michael "DIO9SUS" Deng',
                'Jonathan "Starg4zinG" Liao'
            ],
            classMembers: [
                '#91. Jack "The Hocus · Pocus" Stoops',
                '#92. Sam "GrasshoppHer" Immaneni',
                '#93. David "Koda" Nguyen',
                '#94. Jordan "λvant-𝄞arde" Shirtz',
                '#95. Abhishek "Ghost N The Shell" Shankar',
                '#96. Xunpu "1e1ouch" Wu'
            ]
        },
        {
            semesterYear: "Fall 2022",
            className: "Pi Pantheon",
            educators: [
                'Khoi "THe KreAtor" Bui',
                'Billy "DoOk CaBoOm" Zheng'
            ],
            classMembers: [
                '#97. Kyler "The《Lord A.R.C.H.E.R.》" Chen',
                '#98. Guru "Nto the Spider-Verse" Balamurugan',
                '#99. Isaac "Flareon" Tran',
                '#100. Matt "Runaway" Nguyen'
            ]
        },
        {
            semesterYear: "Spring 2023",
            className: "Rho Rage",
            educators: [
                'Abhishek "Ghost N The Shell" Shankar',
                'Tano "ThrillHer" Nguyen'
            ],
            classMembers: [
                '#102. Johnathan "Whiplash" Dinh',
                '#103. Patrick "eHTernaK" Chan',
                '#104. David "BLΛCK HAYATE" Wang',
                '#105. Lorenzo "SeiTa" Santarina IV',
                '#107. Cooper "Dante" Klein'
            ]
        },
        {
            semesterYear: "Fall 2023",
            className: "Sigma Shogun",
            educators: [
                'Aknazar "Snoopy" Janibek',
                'Denis "Perseus" Kasaivanov'
            ],
            classMembers: [
                '#108. Tianyi "The Alchemist π\'Tranced" Zhou',
                '#109. Nathan "rEnTgoKu" Luu',
                '#110. Jerry "Gladiator" Zhang',
                '#111. Andy "BRACKLIST" Choe',
                '#112. Caleb "BRACKPINK" Green'
            ]
        },
        {
            semesterYear: "Spring 2024",
            className: "Tau Titans",
            educators: [
                'Teddy "Brack Panther" Pyo',
                'Patrick "eHTernaK" Chan'
            ],
            classMembers: [
                '#113. Ken "ExcalibHer" Pham',
                '#114. Allan "Nception" Fan',
                '#115. Jesus "K1NG 2LAYER" Cabrera',
                '#116. Alex "Graduate" Tang'
            ]
        },
        {
            semesterYear: "Fall 2024",
            className: "Upsilon Uproar",
            educators: [
                'Isaac "Flareon" Tran'
            ],
            classMembers: [
                '#117. Dylan "HowL" Chin',
                '#118. James "Anubis" Ma',
                '#119. Johnny "Brack Tiger" Zhu'
            ]
        },
        {
            semesterYear: "Spring 2025",
            className: "Paramount Phi",
            educators: [
                'David "Koda" Nguyen',
                'Jordan "λvant-𝄞arde" Shirtz',
            ],
            classMembers: [
                '#120. Jonathan "1MPER1OSO" Gregory',
                '#121. Steven "Ad Astra" Chen',
                '#122. Yuanyao "Entei" Lin',
            ]
        }
    ]

    return (
        <div className="w-full flex flex-col overflow-hidden">
            <article className="bg-[url(./assets/smoke2.png)] h-full bg-cover bg-center bg-no-repeat">
                <div className="h-screen bg-black/75 backdrop-blur-sm text-white flex flex-col justify-center relative">
                    <div className='mt-auto px-4 mx-6 border-l-8 flex flex-col'>
                        <div className="text-center lg:text-left text-5xl lg:text-[9rem] font-extrabold">
                            BROTHERS
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
                            <span className='sr-only '>10,000</span><span className='not-sr-only'>K+</span>
                            <div className='text-sm lg:text-xl text-black w-full'>brothers world-wide</div>
                        </div>
                        <div className="tabular-nums text-blue-700 lg:text-7xl text-3xl font-bold animate-[chapterCounter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                            <span className='sr-only'>100+</span><span className='not-sr-only'>+</span>
                            <div className='text-sm lg:text-xl text-black w-full'>brothers part of the chapter</div>
                        </div>
                    </div>
                </div>
            </article>

            <article className='h-full bg-[url(./assets/graintexture.webp)]'>
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
                <div className={'lg:text-8xl text-6xl font-extrabold text-blue-700 mt-4'}>
                    CHAPTER ROSTER
                </div>
                <div className='h-full mt-8 md:mt-16'>
                    {classes.map((classObject, i) => (
                        <ChapterRosterItem key={i} {...classObject} />
                    ))}
                </div>
            </article>
        </div>
    );
}

export default Chapter;