import { useEffect, useRef } from "react"
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const landingSection = useRef();
  const featureSection = useRef();
  const demoSection = useRef();
  const pricingSection = useRef();
  const contactSection = useRef();

  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById("header");
      if (window.pageYOffset > 50) {
        header.style.backgroundColor = "rgba(255, 157, 0, 0.2)"
        header.style.backdropFilter = "blur(15px)"
      } else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "blur(0px)"
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  // Submit button for feature request.
  // Name
  // Email
  // Message
  // const handleRequestFeature = () => {
  // };

  // // Subscribe to email button.
  // // Name
  // // Email
  // const handleSubscribeEmail = () => {
  // };


  return (
    <div className="bg-white dark:bg-dark seceltion font-Inter">

      <div className="fixed top-0 left-0 z-50 w-full">
        <div className="px-4 py-4 lg:px-8 lg:py-1" id="header">
          <div className="flex items-center justify-between">
            <div className="logo">
              <img src="./img/logo.svg" alt="logo" className="block dark:hidden w-44" id="logo" onClick={() => landingSection.current.scrollIntoView({ behavior: 'smooth' })}/>
            </div>
            <div className="navigation hidden lg:block">
              <nav>
                <ul className="flex items-center justify-between">
                  <li className="px-6 py-4 menu-item" onClick={() => featureSection.current.scrollIntoView({ behavior: 'smooth' })}>Features</li>
                  <li className="px-6 py-4 menu-item" onClick={() => demoSection.current.scrollIntoView({ behavior: 'smooth' })}>Demo</li>
                  <li className="px-6 py-4 menu-item" onClick={() => pricingSection.current.scrollIntoView({ behavior: 'smooth' })}>Pricing</li>
                  <li className="px-6 py-4 menu-item" onClick={() => contactSection.current.scrollIntoView({ behavior: 'smooth' })}>Contact Us</li>
                </ul>
              </nav>
            </div>
            <div className="panel flex items-center">
              <Link to="/auth" className="btn cursor-pointer text-neutral-900 py-3 px-2 hidden lg:block">Login</Link>
              <Link to="/auth" className="btn cursor-pointer bg-[#EC9A00] mr-6 py-3 hidden lg:block">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main" ref={landingSection}>
        <div className="relative flex items-center h-screen px-4 lg:px-0 bg-white dark:bg-dark">
          <div className="sticky z-10 w-full lg:w-2/5 2xl:w-1/2 mx-auto text-center">
            <h1 className="heading text-9xl lg:text-5xl !leading-normal accent">RocketLang
            </h1>
            <p className="text-neutral-600 dark:text-gray-400 text-3xl font-medium leading-normal my-4">Supercharge your
              learning a language with RocketLang's powerful conversational AI, <span className="accent">now in 48
                languages!</span>
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 p-6">
              <Link to="#auth" className="btn bg-[#EC9A00]">Get Started</Link>
              <Link to="#features"
                className="btn bg-[#090E34] text-neutral-900 bg-opacity-20 hover:bg-opacity-30 dark:bg-[#ffff64] dark:bg-opacity-10 dark:hover:bg-opacity-5">Learn
                More</Link>
            </div>

            <div className="container-language-options mt-8">
              {[...Array(6)].map((e, i) => <Link to="/auth"><img src={`./img/LangOptions/frame${i}.png`} className="language-option" alt={`Option Language ${i}`}/></Link>)}
            </div>
          </div>

          <img src="./img/rocket3.svg" alt="logo" className="absolute bottom-0 left-0 ignore" />


          <div className="absolute top-0 right-0">
            <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)"></circle>
              <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)"></circle>
              <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)"></circle>
              <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)"
                fill="url(#paint3_linear_25:217)"></circle>
              <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862"
                transform="rotate(114.874 184.521 315.521)" stroke="url(#paint4_linear_25:217)"></circle>
              <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)"
                stroke="url(#paint5_linear_25:217)"></circle>
              <circle opacity="0.8" cx="191.659" cy="302.659" r="133.362"
                transform="rotate(133.319 191.659 302.659)" fill="url(#paint6_linear_25:217)"></circle>
              <defs>
                <linearGradient id="paint0_linear_25:217" x1="-54.5003" y1="-178" x2="222" y2="288"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EC9A00"></stop>
                  <stop offset="1" stop-color="#EC9A00" stop-opacity="0"></stop>
                </linearGradient>
                <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
                  <stop offset="0.145833" stop-color="#EC9A00" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#EC9A00" stop-opacity="0.08"></stop>
                </radialGradient>
                <radialGradient id="paint2_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
                  <stop offset="0.145833" stop-color="#EC9A00" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#EC9A00" stop-opacity="0.08"></stop>
                </radialGradient>
                <linearGradient id="paint3_linear_25:217" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EC9A00"></stop>
                  <stop offset="1" stop-color="#EC9A00" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient id="paint4_linear_25:217" x1="184.521" y1="182.159" x2="184.521" y2="448.882"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EC9A00"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient id="paint5_linear_25:217" x1="356" y1="110" x2="356" y2="470"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EC9A00"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient id="paint6_linear_25:217" x1="118.524" y1="29.2497" x2="166.965" y2="338.63"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EC9A00"></stop>
                  <stop offset="1" stop-color="#EC9A00" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>


          <div className="absolute bottom-0 left-0">
            <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                stroke="url(#paint0_linear_25:218)"></path>
              <path
                d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                stroke="url(#paint1_linear_25:218)"></path>
              <path
                d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                stroke="url(#paint2_linear_25:218)"></path>
              <path
                d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                stroke="url(#paint3_linear_25:218)"></path>
              <circle opacity="0.8" cx="214.505" cy="60.5054" r="49.7205"
                transform="rotate(-13.421 214.505 60.5054)" stroke="url(#paint4_linear_25:218)"></circle>
              <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)"></circle>
              <defs>
                <linearGradient id="paint0_linear_25:218" x1="184.389" y1="69.2405" x2="184.389" y2="212.24"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EC9A00" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#EC9A00"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear_25:218" x1="156.389" y1="69.2405" x2="156.389" y2="212.24"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EC9A00" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#EC9A00"></stop>
                </linearGradient>
                <linearGradient id="paint2_linear_25:218" x1="125.389" y1="69.2405" x2="125.389" y2="212.24"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EC9A00" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#EC9A00"></stop>
                </linearGradient>
                <linearGradient id="paint3_linear_25:218" x1="93.8507" y1="67.2674" x2="89.9278" y2="210.214"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EC9A00" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#EC9A00"></stop>
                </linearGradient>
                <linearGradient id="paint4_linear_25:218" x1="214.505" y1="10.2849" x2="212.684" y2="99.5816"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EC9A00"></stop>
                  <stop offset="1" stop-color="#EC9A00" stop-opacity="0"></stop>
                </linearGradient>
                <radialGradient id="paint5_radial_25:218" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(220 63) rotate(90) scale(43)">
                  <stop offset="0.145833" stop-color="white" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0.08"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>




        <div className="py-20 md:py-24 bg-[#efefef] dark:bg-[#0b113a]" id="features" ref={featureSection}>
          <div className="container px-4 mx-auto">
            <div className="w-full lg:w-1/2 2xl:w-1/2 mx-auto text-center">
              <h2 className="heading text-3xl lg:text-5xl !leading-normal">Features</h2>
              <p className="text-gray-500 dark:text-gray-400 text-xl">Learning a language requires extensive practice
                of reading, writing, and speaking. We roll these into a single engaging experience.
              </p>
            </div>
            <div className="mt-10">
              <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap">
                <div className="features-box">
                  <div className="py-4 px-1">
                    <div className="icon-box mb-6">
                      <svg width="50" height="51" className="mx-auto svg-fill">
                        <path opacity="0.5"
                          d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z">
                        </path>
                        <path
                          d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z">
                        </path>
                      </svg>
                    </div>
                    <div className="text-center px-4">
                      <h3 className="heading text-2xl mb-2 leading-normal">
                        Immersive Conversations
                      </h3>
                      <p className="text-base text-gray-500 dark:text-gray-400 opacity-90">Tuae nam ex
                        similique
                        incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam
                        perferendis earum sapiente non tempore? Fugit repellat ut maiores.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="features-box">
                  <div className="py-4 px-1">
                    <div className="icon-box mb-6">
                      <svg width="60" height="60" viewBox="0 0 40 40" className="mx-auto svg-fill">
                        <path opacity="0.5"
                          d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z">
                        </path>
                        <path
                          d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z">
                        </path>
                      </svg>
                    </div>
                    <div className="text-center px-4">
                      <h3 className="heading text-2xl mb-2 leading-normal">
                        Gamified Progress Tracking
                      </h3>
                      <p className="text-base text-gray-500 dark:text-gray-400 opacity-90">Tuae nam ex
                        similique
                        incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam
                        perferendis earum sapiente non tempore? Fugit repellat ut maiores.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="features-box ">
                  <div className="py-4 px-1">
                    <div className="icon-box mb-6">
                      <svg width="50" height="50" viewBox="0 0 40 40" className="mx-auto svg-fill">
                        <path opacity="0.5"
                          d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z">
                        </path>
                        <path
                          d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z">
                        </path>
                      </svg>
                    </div>
                    <div className="text-center px-4">
                      <h3 className="heading text-2xl mb-2 leading-normal">
                        Rewards
                      </h3>
                      <p className="text-base text-gray-500 dark:text-gray-400 opacity-90">Tuae nam ex
                        similique
                        incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam
                        perferendis earum sapiente non tempore? Fugit repellat ut maiores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="py-20 md:py-24 bg-dark dark:bg-dark bg-[url('/img/bg-help.svg')] bg-no-repeat bg-left-bottom bg-contain lg:bg-auto 2xl:bg-cover"
          id="demo" ref={demoSection}>
          <div className="container mx-auto px-4">
            <div className="lg:w-1/2 2xl:w-1/2 mx-auto text-center">
              <h2 className="heading text-white text-3xl lg:text-5xl !leading-normal">See what RocketLang can do!
              </h2>
              <p className="text-white opacity-90 text-xl">Learning a language requires
                extensive practice of reading, writing, and speaking. RocketLang rolls this into one for a
                rapidly rewarding experience.
              </p>
            </div>
            <div className="relative pt-16 mt-8 lg:mt-4">
              <video src="./img/help-video.mp4" controls loop poster="img/help-video-bg.png" preload="metadata"
                height="400" className="mx-auto rounded md:w-[600px] lg:w-[740px] sticky">
              </video>
            </div>
          </div>
        </div>



        <div className="bg-white dark:bg-dark py-20 md:py-24" id="pricing" ref={pricingSection}>
          <div className="container px-4 md:px-10 lg:px-0 mx-auto">
            <div className="lg:w-1/2 2xl:w-1/2 mb-16 text-center mx-auto">
              <h2 className="heading !leading-normal text-3xl lg:text-4xl">Simple
                and Affordable Pricing
              </h2>
              <p className="text-gray-500 dark:text-gray-400 opacity-90 text-lg">There are many variations of passages
                of
                Lorem Ipsum available but the majority have suffered alteration in some form.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-8 ">
              <div className="price-table ml-0 lg:ml-8">
                <div className="price-title">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-neutral-900 dark:text-white font-bold text-3xl">$0 <span
                      className="text-gray-500">/mo</span></h3>
                    <h4 className="text-right text-neutral-900 dark:text-white font-medium text-2xl">Basic</h4>
                  </div>
                  <p className="text-gray-400 text-opacity-90 text-base font-medium">Basic Tier: Beginner-level courses, vocabulary, grammar exercises, flashcards, quizzes, limited language exchange.
                  </p>
                  <button type="submit" className="btn price-btn bg-[#EC9A00]">Select Basic Plan</button>
                  <hr className="my-10 bg-gray-600 text-gray-600 w-full opacity-30" />
                </div>
                <div className="price-description">
                  <ul>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      All UI Components
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      All UI Components
                      Use with Unlimited
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Commercial Use
                    </li>
                    <li className="price-option strike">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Email Support
                    </li>
                    <li className="price-option strike">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Lifetime Access
                    </li>
                    <li className="price-option strike">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Free Lifetime Updates
                    </li>
                  </ul>
                </div>
                <div className="absolute bottom-0 right-0">
                  <svg width="179" height="158" viewBox="0 0 179 158" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5"
                      d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                      fill="url(#paint0_linear_70:153)"></path>
                    <path opacity="0.3"
                      d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                      fill="url(#paint1_linear_70:153)"></path>
                    <defs>
                      <linearGradient id="paint0_linear_70:153" x1="69.6694" y1="29.9033" x2="196.108"
                        y2="83.2919" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EC9A00" stop-opacity="0.62"></stop>
                        <stop offset="1" stop-color="#EC9A00" stop-opacity="0"></stop>
                      </linearGradient>
                      <linearGradient id="paint1_linear_70:153" x1="165.348" y1="-75.4466" x2="-3.75136"
                        y2="103.645" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EC9A00" stop-opacity="0.62"></stop>
                        <stop offset="1" stop-color="#EC9A00" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="price-table value-option">
                <div className="price-title">
                  <div className="value-option-header flex justify-between items-center mb-4 p-6">
                    <h1 className="text-white font-bold text-3xl">$5 /mo</h1>
                    <h4 className="text-right text-white font-medium text-3xl">Best Value!</h4>
                  </div>
                  <p className="text-gray-400 text-opacity-90 text-base font-medium">Value Tier: Expanded vocabulary, interactive dialogues, pronunciation exercises, enhanced tracking, full language exchange.
                  </p>
                  <button type="submit" className="btn price-btn bg-[#EC9A00]">Select Value Plan</button>
                  <hr className="my-10 bg-gray-600 text-gray-600 w-full opacity-30" />
                </div>
                <div className="price-description">
                  <ul>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      All UI Components
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      All UI Components
                      Use with Unlimited
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Commercial Use
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Email Support
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Lifetime Access
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Free Lifetime Updates
                    </li>
                  </ul>
                </div>
                <div className="absolute bottom-0 right-0">
                  <svg width="179" height="158" viewBox="0 0 179 158" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5"
                      d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                      fill="url(#paint0_linear_70:153)"></path>
                    <path opacity="0.3"
                      d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                      fill="url(#paint1_linear_70:153)"></path>
                    <defs>
                      <linearGradient id="paint0_linear_70:153" x1="69.6694" y1="29.9033" x2="196.108"
                        y2="83.2919" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EC9A00" stop-opacity="0.62"></stop>
                        <stop offset="1" stop-color="#EC9A00" stop-opacity="0"></stop>
                      </linearGradient>
                      <linearGradient id="paint1_linear_70:153" x1="165.348" y1="-75.4466" x2="-3.75136"
                        y2="103.645" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EC9A00" stop-opacity="0.62"></stop>
                        <stop offset="1" stop-color="#EC9A00" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="price-table mr-0 lg:mr-8">
                <div className="price-title">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-neutral-900 dark:text-white font-bold text-3xl">$20 <span
                      className="text-gray-500">/mo</span></h3>
                    <h4 className="text-right text-neutral-900 dark:text-white font-medium text-2xl accent">Pro</h4>
                  </div>
                  <p className="text-gray-400 text-opacity-90 text-base font-medium">Pro Tier: Value Tier content + specialized courses, personalized feedback, live group classNamees, immersion events, offline materials, priority support.</p>
                  <button type="submit" className="btn price-btn bg-[#EC9A00]">Select Pro Plan</button>
                  <hr className="my-10 bg-gray-600 text-gray-600 w-full opacity-30" />
                </div>
                <div className="price-description">
                  <ul>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      All UI Components
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      All UI Components
                      Use with Unlimited
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Commercial Use
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Email Support
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Lifetime Access
                    </li>
                    <li className="price-option">
                      <span className="price-list-style">
                        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-[#EC9A00]">
                          <path
                            d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z">
                          </path>
                        </svg>
                      </span>
                      Free Lifetime Updates
                    </li>
                  </ul>
                </div>
                <div className="absolute bottom-0 right-0">
                  <svg width="179" height="158" viewBox="0 0 179 158" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5"
                      d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                      fill="url(#paint0_linear_70:153)"></path>
                    <path opacity="0.3"
                      d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                      fill="url(#paint1_linear_70:153)"></path>
                    <defs>
                      <linearGradient id="paint0_linear_70:153" x1="69.6694" y1="29.9033" x2="196.108"
                        y2="83.2919" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EC9A00" stop-opacity="0.62"></stop>
                        <stop offset="1" stop-color="#EC9A00" stop-opacity="0"></stop>
                      </linearGradient>
                      <linearGradient id="paint1_linear_70:153" x1="165.348" y1="-75.4466" x2="-3.75136"
                        y2="103.645" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EC9A00" stop-opacity="0.62"></stop>
                        <stop offset="1" stop-color="#EC9A00" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us py-16 bg-white dark:bg-dark" id="contact-us" ref={contactSection}>
          <div
            className="container flex flex-col lg:flex-row items-stretch justify-center gap-8 px-4 md:px-10 lg:px-0 mx-auto">
            <div className="ticket basis-2/3 ml-0 lg:ml-8 bg-gray-dark dark:bg-slate-800 rounded">
              <div className="py-16 px-6 lg:px-12">
                <div className="form-title">
                  <h2 className="heading text-2xl lg:text-3xl font-bold !leading-normal">
                    Request a Feature
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-opacity-90 text-base font-bold">At RocketLang, we are actively building new features to provide our users with the best possible language learning experience. We'd love to hear from you!
                  </p>
                </div>
                <div className="form-contact mt-10">
                  <form action="#">
                    <div className="flex flex-col lg:flex-row justify-center items-center mt-2 mb-6">
                      <div className="flex flex-col basis-full w-full lg:basis-1/2 mr-0 lg:mr-3 my-3 lg:my-0">
                        <label for="name" className="form-label">Your Name</label>
                        <input type="text" id="name" className="form-input" required
                          placeholder="Enter Your Name" />
                      </div>
                      <div className="flex flex-col basis-full w-full lg:basis-1/2 ml-0 lg:ml-3 my-3 lg:my-0">
                        <label for="email" className="form-label">Your Email</label>
                        <input type="email" id="email" className="form-input" required
                          placeholder="Enter Your Email" />
                      </div>
                    </div>
                    <div className="flex flex-col my-4">
                      <label for="message" className="form-label">Your Message</label>
                      <textarea name="message" id="message" cols="30" rows="5"
                        placeholder="Enter Your Message" className="resize-none form-input"
                        required></textarea>
                    </div>
                    <div className="mt-4">
                      <button type="submit" className="btn bg-[#EC9A00] opacity-90 py-3">Submit Request</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="subscribe basis-1/3 mr-0 lg:mr-8 rounded bg-gray-dark">
              <div className="py-16 px-6 lg:px-12">
                <div className="form-title">
                  <h2 className="heading text-2xl lg:text-3xl !leading-normal">
                    Subscribe to receive future updates
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-opacity-90 text-base font-bold">Join our email list for exclusive updates, language learning tips, and special offers! Subscribe now and embark on an exciting language learning journey with us.
                  </p>
                  <hr className="w-full my-12 bg-gray-600 text-gray-600 opacity-30" />
                </div>
                <div className="form-contact mt-10">
                  <form action="#">
                    <div className="mt-2 mb-3">
                      <input type="text" id="phone" className="block w-[100%] my-3 form-input" required
                        placeholder="Enter Your Name" />
                      <input type="email" id="address" className="block w-[100%] my-3 form-input" required
                        placeholder="Enter Your Email" />
                      <button type="submit"
                        className="btn bg-[#EC9A00] opacity-90 py-3 block w-full border border-transparent">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-gray-400 text-opacity-90 text-base font-bold mt-6 text-center">At RocketLang, we have a no spam
                      guarantee!
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer" id="footer">
          <div className="top-content py-16 bg-[#fffff] bg-opacity-5">
            <div
              className="container flex md:flex-row flex-wrap lg:flex-nowrap items-start justify-between px-4 mx-auto">
              <div className="basis-full lg:basis-1/3 mb-6 lg:mb-0">
                <div className="footer-logo mb-7">
                  <img src="./img/logo.svg" alt="logo" className="block"/></div>
                <p className="text-gray-500 dark:text-gray-400 opacity-90 text-lg">Supercharge your learning a
                  language with RocketLang's powerful conversational AI, now in 48 languages!

                </p>
                <div className="mt-8">
                  <Link to="" className="social">
                    <svg width="21" height="16" viewBox="0 0 19 14">
                      <path
                        d="M16.3024 2.26027L17.375 1.0274C17.6855 0.693493 17.7702 0.436644 17.7984 0.308219C16.9516 0.770548 16.1613 0.924658 15.6532 0.924658H15.4556L15.3427 0.821918C14.6653 0.282534 13.8185 0 12.9153 0C10.9395 0 9.3871 1.48973 9.3871 3.21062C9.3871 3.31336 9.3871 3.46747 9.41532 3.57021L9.5 4.0839L8.90726 4.05822C5.29435 3.95548 2.33065 1.13014 1.85081 0.642123C1.06048 1.92637 1.5121 3.15925 1.99194 3.92979L2.95161 5.36815L1.42742 4.5976C1.45565 5.67637 1.90726 6.52397 2.78226 7.14041L3.54435 7.65411L2.78226 7.93665C3.2621 9.24658 4.33468 9.78596 5.125 9.99144L6.16935 10.2483L5.18145 10.8647C3.60081 11.8921 1.625 11.8151 0.75 11.738C2.52823 12.8682 4.64516 13.125 6.1129 13.125C7.21371 13.125 8.03226 13.0223 8.22984 12.9452C16.1331 11.25 16.5 4.82877 16.5 3.54452V3.36473L16.6694 3.26199C17.629 2.44007 18.0242 2.00342 18.25 1.74658C18.1653 1.77226 18.0524 1.82363 17.9395 1.84932L16.3024 2.26027Z">
                      </path>
                    </svg>
                  </Link>
                  <Link to="" className="social">
                    <svg width="11" height="20" viewBox="0 0 9 18">
                      <path
                        d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z">
                      </path>
                    </svg>
                  </Link>
                  <Link to="" className="social">
                    <svg width="20" height="16" viewBox="0 0 18 14">
                      <path
                        d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z">
                      </path>
                    </svg>
                  </Link>
                  <Link to="#" className="social">
                    <svg width="19" height="17" viewBox="0 0 17 16">
                      <path
                        d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z">
                      </path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="basis-1/2 md:basis-1/3 lg:basis-[15%] my-6 lg:my-0">
                <h4 className="heading text-xl mb-7">Useful Links</h4>
                <p className="my-3"><Link to="" className="text-gray-500 dark:text-gray-400 font-medium">Blog</Link></p>
                <p className="my-3"><Link to="" className="text-gray-500 dark:text-gray-400 font-medium">Pricing</Link></p>
                <p className="my-3"><Link to="" className="text-gray-500 dark:text-gray-400 font-medium">About</Link></p>
              </div>
              <div className="basis-1/2 md:basis-1/3 lg:basis-[15%] my-6 lg:my-0">
                <h4 className="heading text-xl mb-7">Terms</h4>
                <p className="my-3"><Link to="" className="text-gray-500 dark:text-gray-400 font-medium">TOS</Link></p>
                <p className="my-3"><Link to="" className="text-gray-500 dark:text-gray-400 font-medium">Privacy
                  Policy</Link>
                </p>
                <p className="my-3"><Link to="" className="text-gray-500 dark:text-gray-400 font-medium">Refund
                  Policy</Link>
                </p>
              </div>
              <div className="basis-1/2 md:basis-1/3 lg:basis-[15%] my-6 lg:my-0">
                <h4 className="heading text-xl mb-7">Support & Help</h4>
                <p className="my-3"><Link to="" className="text-gray-500 dark:text-gray-400 font-medium">Open Support
                  Ticket</Link>
                </p>
                <p className="my-3"><Link to="" className="text-gray-500 dark:text-gray-400 font-medium">Terms of Use</Link>
                </p>
                <p className="my-3"><Link to="" className="text-gray-500 dark:text-gray-400 font-medium">About</Link></p>
              </div>
            </div>
          </div>
          <div className="copy-right p-6">
            <div className="container mx-auto text-gray-500 text-center text-base">
              <p>© Tomas Lawton 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}