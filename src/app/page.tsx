"use client"

import Animations from "./animations/page"
export default function Home() {

  return (
    <>

      <link rel="stylesheet" href="font.css" />

      <body>
      
        <section className="flex flex-col justify-between h-screen ">
        <Animations />
          <header className="flex items-center w-full justify-between px-4 max-w-7xl mx-auto absolute ">
            {/* picture */}
            <svg
              version="1.1"
              viewBox="0 0 2048 2048"
              width="70px"
              height="70px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(543,465)"
                d="m0 0h324v398l313-1 1-397h324l1 1116-2 2h-323l-1-402-1-7h-311l-1 408-2 1h-322l-1-1v-475l3-1h689l14 1v409l188-1v-979l1-4h-189v397l-1 1h-704l-1-1v-463zm67 67-1 2v329h189v-331zm-1 643v340l1 1h187l1-1v-340z"
                fill="currentColor"
              />
            </svg>
            <div className="flex items-center right-0  space-x-6   ">
              {/* Sun logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-sun"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              {/* Moon logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="hidden"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              {/* phone logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {/* Whatsapp logo */}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="whatsapp"
                className="svg-inline--fa fa-whatsapp fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor "
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </div>
            
          </header>
          <div className="flex  mt-28 relative">
            <div className="w-full max-w-7xl mx-auto">
              {/* width='406' height='368' */}
              <svg
                version="1.1"
                className="absolute  translate-x-[42%] top-0 -translate-y-[35px] sm:-translate-y-[110px] md:-translate-y-[36.5%] w-[250px] sm:w-[400px] md:w-[650px]"
                viewBox="0 0 2048 2048"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(543,465)"
                  d="m0 0h324v398l313-1 1-397h324l1 1116-2 2h-323l-1-402-1-7h-311l-1 408-2 1h-322l-1-1v-475l3-1h689l14 1v409l188-1v-979l1-4h-189v397l-1 1h-704l-1-1v-463zm67 67-1 2v329h189v-331zm-1 643v340l1 1h187l1-1v-340z"
                  fill="#2E7EDE"
                />
              </svg>
              <div className="relative mt-16 ml-4 md:ml-20">
                <h1 className="text-4xl md:text-[64px] sm:text-[40px] font-bold mr-12">
                  Muhammad Hassan
                </h1>
                <p className="font-[merriwether] italic text-[20px] my-4 md:my-8">
                  Full Stack Developer
                </p>
                <button className="bg-[#4595eb]  py-2 px-5 duration-300  rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] hover:scale-110 ease-in-out relative group">
                  About Me
                  <svg
                  // // xmlns:dc="http://purl.org/dc/elements/1.1/"
                  // xmlns:cc="http://creativecommons.org/ns#"
                  // xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                  // xmlns:svg="http://www.w3.org/2000/svg"
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                  // xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="44"
                  height="44"
                  viewBox="0 0 100 100"
                  className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-9 duration-200"
                >
                  <g transform="translate(0,-952.36218)">
                    <path
                      className="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;"
                      d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                      fill="#fff"
                      fill-opacity="1"
                      stroke="white"
                      stroke-width="2"
                      visibility="visible"
                      display="inline"
                      overflow="visible"
                    />
                  </g>
                </svg>
                </button>
                
              </div>
            </div>

            {/* <button className="absolute esm:ml-11 rounded w-auto font-bold -translate-x-32 translate-y-28 py-2 px-5 text-white  shadow-[0_0_10px_theme(colors.blue.500)] duration-700  hover:bg-gradient-to-l hover:from-[#1595b6]  hover:to-[#1f2667e6] ease-in-out ">About Me</button> */}
          </div>

          <ul className="ml-auto translate-y-56 space-y-6 text-white absolute right-8 ">
            {/* linkedin Logo */}
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-hassan-31a43a319"
                target="_blank"
              >
                <svg
                  className="w-7  hover:scale-125 duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </a>
            </li>
            {/* instagram Logo */}
            <li>
              <a href="https://www.instagram.com/_md.hassan__/" target="_blank">
                <svg
                  className="w-7 hover:scale-125 duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </li>
            {/* Github link */}
            <li>
              <a href="https://github.com/muhammad-hassn" target="_blank">
                <svg
                  className="w-7 hover:scale-125 duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
            </li>
            {/* Email link */}
            <li>
              <a href="mailto:muhammadhassanmh4080@gmail.com">
                <svg
                  className="w-7 hover:scale-125 duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <div className="relative self-center after:contents-[' '] after:absolute after:w-[2px] after:h-5 after:bg-white after:left-1/2 after:-translate-x-1/2 after:top-[75px]">
          <button className="bg-[#4595eb] mb-14 py-2 px-5 duration-300  rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] hover:scale-105 ease-in-out relative group ">
                  latest Work
                  <svg
                  // // xmlns:dc="http://purl.org/dc/elements/1.1/"
                  // xmlns:cc="http://creativecommons.org/ns#"
                  // xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                  // xmlns:svg="http://www.w3.org/2000/svg"
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                  // xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="44"
                  height="33"
                  viewBox="0 0 100 100"
                  className="absolute rotate-90 left-1/2 -translate-x-1/2 top-7 group-hover:top-10 duration-200"
                >
                  <g transform="translate(0,-952.36218)">
                    <path
                      className="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;"
                      d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                      fill="#fff"
                      fill-opacity="1"
                      stroke="white"
                      stroke-width="2"
                      visibility="visible"
                      display="inline"
                      overflow="visible"
                    />
                  </g>
                </svg>
          </button>
          </div>

        </section>
      </body>

    </>
  );
}
