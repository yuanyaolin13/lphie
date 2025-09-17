import banner from '../../assets/scrollingBanner.png'
import lambdaPhoto1 from '../../assets/phiReveal.png'
import lambdaPhoto2 from '../../assets/lambdaPhoto2.png'
import backgroundTexture from '../../assets/backgroundtexture.png'
import contactUsTexture from '../../assets/contactUsTexture.png'
import dragon from "../../assets/dragon.png";

function Home() {
    return (
        <div className="w-full flex flex-col">
            <article className="bg-[url(./assets/smoke2.png)] h-full bg-cover bg-center bg-no-repeat">
                <div className="h-full w-full bg-black/75 backdrop-blur-sm text-white flex flex-col justify-center">
                    <div className="text-center lg:text-left lg:text-lg italic mt-64 lg:mt-48 lg:ml-8">
                        The University of North Carolina at Chapel Hill
                    </div>
                    <div className="text-center lg:text-left text-6xl lg:text-[12rem] font-extrabold italic lg:-mt-6">
                        LAMBDA PHI
                    </div>
                    <div className="text-center lg:text-right text-6xl lg:text-[12rem] -mt-3 font-extrabold italic lg:ml-auto lg:-mt-12">
                        EPSILON
                    </div>
                    <div className='ml-auto lg:-mt-4 mr-6 -mt-2 mb-66 lg:mb-50'>est. 2013</div>

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
            <article className="relative w-full h-full flex bg-white">
                <div className="flex flex-col lg:flex-row lg:items-start m-6 lg:mx-12 w-full justify-center bg-[url(./assets/whoarewebackgroundtexture.png)] bg-contain">
                    <div className="lg:-rotate-90 lg:mt-64 lg:text-8xl text-5xl font-extrabold text-blue-700 flex flex-col justify-center">
                        <div>
                            WHO ARE
                        </div>
                        <div>
                            WE?
                        </div>
                    </div>
                    <div className="flex-1 lg:px-24 lg:p-12 relative mt-6 justify-center ">
                        <div className='relative flex justify-center'>
                            <div className="absolute inset-0 bg-[url(./assets/officialKanji.png)] bg-no-repeat bg-center bg-contain opacity-10"></div>
                            <div className="text-gray-800 text-md lg:text-lg">
                                <span className='font-bold'>Lambda Phi Epsilon</span> at UNC Chapel Hill is an Asian-interest, non-Asian-exclusive fraternity founded in
                                the Spring of 2013 by 18 young men. We strive to represent the Asian-American community in
                                exemplifying our core values of authenticity, courageous leadership, cultural heritage, love, and
                                wisdom.
                            </div>
                        </div>
                        <div className="relative flex justify-center mt-6 lg:mt-12">
                            <img
                                className="lg:h-1/2 max-h-108"
                                src={lambdaPhoto1}
                                alt={`lambda photo 1`}
                            />
                        </div>
                    </div>
                </div>
            </article>
            <article className="bg-[url(./assets/graintexture.png)] relative h-full">
                <div className="relative w-full">
                    <svg viewBox="0 0 1440 223" fill="none" xmlns="http://www.w3.org/2000/svg" className={'-mb-px'}>
                        <path
                            d="M-22 0V223L-6.77841 208.411L12.1696 206.029L27.707 197.097L58.1502 200.075H81.6458L103.057 206.238L147.269 190.518L153.585 169.2L186.428 168.724L195.46 146.87L218.009 142.911L221.988 129.93L256.031 126.952L282.811 114.835C293.323 116.23 303.392 118.283 312.749 120.938C323.233 124.511 353.298 123.141 353.298 123.141L369.593 135.05L395.678 143.595L435.09 147.168L477.47 152.795L514.419 145.62L551.368 137.254L592.99 142.375L614.717 139.397L646.297 148.329L656.087 138.266L683.246 140.142L701.373 130.585L719.437 111.828L739.332 114.537L770.154 110.785L792.766 116.681L819.23 115.638L844.494 122.635L891.232 122.308L920.16 129.126L954.582 135.944L1025.51 156.934L1044.02 149.937L1079.13 153.688L1108.82 150.294C1108.82 150.294 1156.25 147.109 1167.43 138.385C1178.61 129.662 1162.38 120.968 1168.19 112.631C1174 104.295 1212.4 100.514 1202.61 84.2874L1249.67 76.3678L1276.45 78.2435L1291.67 68.865L1335.12 75.1769L1358.62 66.245L1406.43 79.0474L1435.04 75.6235L1461.44 92.0284V0H-22Z"
                            fill="#FFFFFF"
                        />
                    </svg>
                </div>
                <div className='flex flex-col lg:mx-64 lg:space-y-20 my-4 px-8 lg:mt-24'>
                    <div className='flex flex-col lg:flex-row items-center'>
                        <div className='flex flex-col w-full lg:w-1/2'>
                            <div className='text-4xl lg:text-7xl font-bold pb-4'> VISION </div>
                            <div className='px-8'>A world where Lambda men live fulfilling lives and contribute through the pursuit of
                                their noble purpose.</div>
                        </div>
                        <div className='flex flex-col w-full lg:w-1/2 mt-8 lg:mt-0'>
                            <div className='text-4xl lg:text-7xl font-bold pb-4'> OUR MISSION </div>
                            <div className='px-8'>To guide men on a lifelong discovery of authenticity and personal growth.</div>
                        </div>
                    </div>
                    <div className="items-center mt-8">
                        <div className='ml-auto flex flex-col'>
                            <div className='text-4xl lg:text-7xl font-bold pb-4'> CORE VALUES </div>
                            <ul className='flex flex-col lg:flex-row justify-center lg:space-x-10'>
                                <li>Authenticity</li>
                                <li>Courageous Leadership</li>
                                <li>Cultural Heritage</li>
                                <li>Love</li>
                                <li>Wisdom</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <svg viewBox="0 0 1440 658" fill="none" xmlns="http://www.w3.org/2000/svg"  className="block -mb-px">
                        <path d="M1443 657.273V0.381409L1397.96 55.1293L1349.59 44.8945L1317.01 69.1004L1273.15 88.2703L1259.61 119.381L1238.22 141.8L1191.02 134.327L1167.96 170.148L1133.62 190.699L1097.02 183.226L1040.2 227.901L962.687 215.798L939.039 249.346L903.519 254.463L863.582 232.125L825.412 227.008L812.46 194.435L752.311 160.401L714.533 174.372L680.877 172.504L657.72 122.224L611.602 108.252L559.302 118.975L509.259 78.9291L476.683 70.9687L412.51 81.6908L364.135 115.725L321.354 102.16L273.568 67.7195L225.781 82.1782L190.359 77.5482L175.15 54.2357L149.834 30.9232H125.107L87.9183 16.952L60.9344 33.7662L31.6937 22.5568L0 0.381409V657.273L1443 657.273Z" fill="#FFFFFF"/>
                    </svg>
                </div>
            </article>
            <article className="relative h-full bg-white flex justify-center lg:-mt-96 -mt-24 pb-20">
                <img
                    src={backgroundTexture}
                    alt={'background texture'}
                    className={'absolute right-0 bottom-0 w-2/3 lg:w-1/3 z-0 pointer-events-none select-none'}
                />
                <img
                    src={contactUsTexture}
                    alt={'contact Us texture'}
                    className={'absolute bottom-0 opacity-20 z-0 pointer-events-none select-none'}
                />
                <div className='flex flex-col w-full h-full pt-12 lg:pt-24 lg:h-screen'>
                    <div className="lg:text-8xl text-5xl font-extrabold text-blue-700 lg:mx-64">
                        CONTACT US
                    </div>
                    <div className="flex flex-row mx-auto h-full w-fit xl:mx-0 xl:mr-auto  px-4 pt-8">
                        <div className="flex flex-col my-4 lg:my-auto">
                            <div className="text-black text-lg h-fit font-bold lg:mx-12">
                                If you have any questions, please feel free to contact us at: unclambdas@gmail.com
                                <br/>
                                Interested in Rush? Contact one of our rush chairs or visit our rush page FAQ!
                            </div>
                            <div className="text-black lg:h-full font-bold mt-16 lg:mx-8">
                                Follow us on our various social media platforms and get updated!
                                <br/>
                                <ul className='flex flex-row justify-center space-x-6 mt-4'>
                                    <li>
                                        <a
                                            href='https://www.instagram.com/unclambdas/'
                                            target={"_blank"}
                                            className='z-1000'
                                        >
                                            <svg className="w-10 h-10" fill="currentColor"
                                                 viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                      clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://www.tiktok.com/@unclambdas'
                                            target={"_blank"}
                                            className='z-1000'
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 448 512"
                                                className="h-10 w-10">
                                                <path
                                                    d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://www.facebook.com/unclambdas/'
                                            target={"_blank"}
                                            className='z-1000 text-black'
                                        >
                                            <svg className="w-10 h-10" fill="currentColor"
                                                 viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                      clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img
                            src={lambdaPhoto2}
                            alt={'Lambda Photo 2 b/w'}
                            className={'absolute object-cover w-164 right-0 bottom-0 z-0 hidden xl:block'}
                        />
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Home;
