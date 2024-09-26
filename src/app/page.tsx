"use client";
import Modal from "./animations/Modal";
import { useState } from "react";
import Animations from "./animations/page";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
                className="hover:scale-110 duration-300"
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
                className="hidden hover:scale-110 duration-300"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              {/* phone logo */}
              <a href="tel:+92 3408062138" target="_blank">
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
                  className="hover:scale-110 duration-300"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>

              {/* Whatsapp logo */}
              <a
                href="https://wa.me/+923408062138?text=Only Chat"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="whatsapp"
                  className="svg-inline--fa fa-whatsapp fa-w-14 hover:scale-110 duration-300"
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
              </a>
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
                <button
                  onClick={handleOpenModal}
                  className="bg-[#4595eb]  py-2 px-5 duration-300  rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] hover:scale-110 ease-in-out relative group"
                >
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
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                  <div className="">
                    <h2 className="font-thin text-[#1788ae] mt-3 text-4xl top-0">
                      ABOUT ME
                    </h2>
                    </div>
            <div className="flex">
              <div className="w-1/2">
                    <p className="w-[90%] m-auto ml-0 text-justify mt-4">
                      Hello! I’m Muhammad Hassan, a passionate <span className="font-bold text-[#1788ae]" >Python and TypeScrip</span>  developer 
                      with expertise in <span className="font-bold text-[#1788ae]" >Next JS and Django</span> framework. Currently, I’m
                      pursuing a degree in Software Engineering from PAF-KIET
                      and specializing in AI Engineering from PIAIC. With a
                      strong foundation in programming and a keen interest in
                      AI, I offer the following services I help business owners
                      and busy web developers to design & develop creative
                      websites that fits their vision and attracts the visitors
                      to stay for ever. Technologies and tools that I use to
                      create such awesome websites.
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-2 w-[90%] m-auto ml-0 text-justify">
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #javascript
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #Next.js
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #Python
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #node.js
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #TypeScript
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #SQl Server
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #Django
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #Docker
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #html
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #CSS
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #bootstrap
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #tailwind
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #git
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #github
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #aws
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #terminal
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #C Sharp
                      </li>
                      <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                        #figma
                      </li>
                    </ul>
                </div>
                  <div className="image w-1/3">
                    <svg
                      width="500"
                      height="500"
                      viewBox="0 0 900 600"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="transparent" d="M0 0h900v600H0z" />
                      <rect
                        x="497.551"
                        y="135.737"
                        width="287.503"
                        height="108.825"
                        rx="22.048"
                        fill="#fff"
                        stroke="#E1E4E5"
                        stroke-width="2.321"
                      />
                      <rect
                        x="579.715"
                        y="168.709"
                        width="176.687"
                        height="13.051"
                        rx="6.525"
                        fill="url(#a)"
                      />
                      <rect
                        x="579.715"
                        y="197.822"
                        width="114.445"
                        height="13.051"
                        rx="6.525"
                        fill="url(#b)"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M542.323 218.167c-15.363 0-27.818-12.631-27.818-28.21s12.455-28.21 27.818-28.21c15.362 0 27.817 12.631 27.817 28.21s-12.455 28.21-27.817 28.21z"
                        fill="#1A729F"
                      />
                      <path
                        d="m552.118 185.255-11.752 12.538-7.055-7.521"
                        stroke="#fff"
                        stroke-width="4.381"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M459.482 324.443v131.29c0 9.591-7.775 17.348-17.364 17.348H132.524c-9.589 0-17.364-7.757-17.364-17.348v-131.29c0-9.594 7.777-17.374 17.364-17.374h309.594c9.587 0 17.364 7.78 17.364 17.374z"
                        fill="#fff"
                        stroke="#E1E4E5"
                        stroke-width="2.321"
                      />
                      <path
                        d="M234.053 460.812h-91.201c-6.905 0-12.521-5.62-12.521-12.528v-91.256c0-6.908 5.616-12.528 12.521-12.528h91.201c6.904 0 12.521 5.62 12.521 12.528v91.256c0 6.934-5.617 12.528-12.521 12.528z"
                        fill="#1A729F"
                      />
                      <path
                        d="M459.482 324.443a4.357 4.357 0 0 1-4.357 4.356H119.517a4.357 4.357 0 0 1-4.357-4.356c0-9.594 7.777-17.374 17.364-17.374h309.594c9.587 0 17.364 7.78 17.364 17.374z"
                        fill="#fff"
                        stroke="#E1E4E5"
                        stroke-width="2.321"
                      />
                      <path
                        d="M137.529 318.361a3.52 3.52 0 0 1-3.511 3.513 3.52 3.52 0 0 1-3.511-3.513 3.52 3.52 0 0 1 3.507-3.514c1.945.024 3.515 1.588 3.515 3.514zm13.568-.001a3.52 3.52 0 0 1-3.511 3.514 3.52 3.52 0 0 1-3.51-3.514 3.519 3.519 0 0 1 3.506-3.513c1.945.023 3.515 1.588 3.515 3.513zm13.568 0a3.52 3.52 0 0 1-3.511 3.514 3.52 3.52 0 0 1-3.511-3.514 3.52 3.52 0 0 1 3.507-3.513c1.968.023 3.515 1.585 3.515 3.513z"
                        fill="#E1E4E5"
                        stroke="#E1E4E5"
                        stroke-width="1.583"
                      />
                      <rect
                        x="256.152"
                        y="346.524"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#c)"
                      />
                      <rect
                        x="256.152"
                        y="425.432"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#d)"
                      />
                      <rect
                        x="256.152"
                        y="385.978"
                        width="49.898"
                        height="31.912"
                        rx="15.956"
                        fill="url(#e)"
                      />
                      <rect
                        x="322.876"
                        y="385.978"
                        width="49.898"
                        height="31.912"
                        rx="15.956"
                        fill="url(#f)"
                      />
                      <rect
                        x="389.601"
                        y="385.978"
                        width="49.898"
                        height="31.912"
                        rx="15.956"
                        fill="url(#g)"
                      />
                      <rect
                        x="357.109"
                        y="346.524"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#h)"
                      />
                      <rect
                        x="357.109"
                        y="425.432"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#i)"
                      />
                      <path
                        d="m168.682 415.543-13.175-13.176 13.175-13.175m39.527 0 13.176 13.175-13.176 13.176m-14.65-32.938-10.982 39.527"
                        stroke="#fff"
                        stroke-width="9.389"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M784.569 277.058v131.289c0 9.592-7.775 17.349-17.363 17.349H457.611c-9.589 0-17.363-7.757-17.363-17.349V277.058c0-9.594 7.776-17.375 17.363-17.375h309.595c9.586 0 17.363 7.781 17.363 17.375z"
                        fill="#fff"
                        stroke="#E1E4E5"
                        stroke-width="2.321"
                      />
                      <path
                        d="M559.14 413.427h-91.201c-6.905 0-12.521-5.62-12.521-12.529v-91.255c0-6.909 5.616-12.529 12.521-12.529h91.201c6.904 0 12.521 5.62 12.521 12.529v91.255c0 6.935-5.617 12.529-12.521 12.529z"
                        fill="url(#j)"
                      />
                      <path
                        d="M784.569 277.058a4.357 4.357 0 0 1-4.356 4.356H444.604a4.356 4.356 0 0 1-4.356-4.356c0-9.594 7.776-17.375 17.363-17.375h309.595c9.586 0 17.363 7.781 17.363 17.375z"
                        fill="#fff"
                        stroke="#E1E4E5"
                        stroke-width="2.321"
                      />
                      <path
                        d="M462.616 270.975a3.52 3.52 0 0 1-3.511 3.513 3.52 3.52 0 0 1-3.511-3.513 3.52 3.52 0 0 1 3.506-3.514c1.946.024 3.516 1.588 3.516 3.514zm13.568-.001a3.52 3.52 0 0 1-3.511 3.514 3.52 3.52 0 0 1-3.511-3.514 3.52 3.52 0 0 1 3.507-3.513c1.945.023 3.515 1.588 3.515 3.513zm13.568 0a3.52 3.52 0 0 1-3.511 3.514 3.52 3.52 0 0 1-3.51-3.514 3.52 3.52 0 0 1 3.506-3.513c1.968.023 3.515 1.585 3.515 3.513z"
                        fill="#E1E4E5"
                        stroke="#E1E4E5"
                        stroke-width="1.583"
                      />
                      <rect
                        x="581.239"
                        y="299.138"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#k)"
                      />
                      <rect
                        x="581.239"
                        y="378.047"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#l)"
                      />
                      <rect
                        x="581.239"
                        y="338.592"
                        width="49.898"
                        height="31.912"
                        rx="15.956"
                        fill="url(#m)"
                      />
                      <rect
                        x="647.963"
                        y="338.592"
                        width="49.898"
                        height="31.912"
                        rx="15.956"
                        fill="url(#n)"
                      />
                      <rect
                        x="714.687"
                        y="338.592"
                        width="49.898"
                        height="31.912"
                        rx="15.956"
                        fill="url(#o)"
                      />
                      <rect
                        x="682.196"
                        y="299.138"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#p)"
                      />
                      <rect
                        x="682.196"
                        y="378.047"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#q)"
                      />
                      <path
                        d="m493.769 368.157-13.176-13.175 13.176-13.176m39.527 0 13.176 13.176-13.176 13.175m-14.651-32.937-10.982 39.526"
                        stroke="#fff"
                        stroke-width="9.389"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M482.623 132.697v131.289c0 9.592-7.774 17.349-17.363 17.349H155.665c-9.588 0-17.363-7.757-17.363-17.349V132.697c0-9.594 7.777-17.375 17.363-17.375H465.26c9.587 0 17.363 7.781 17.363 17.375z"
                        fill="#fff"
                        stroke="#E1E4E5"
                        stroke-width="2.321"
                      />
                      <path
                        d="M257.195 269.065h-91.201c-6.905 0-12.521-5.619-12.521-12.528v-91.256c0-6.908 5.616-12.528 12.521-12.528h91.201c6.904 0 12.521 5.62 12.521 12.528v91.256c0 6.935-5.617 12.528-12.521 12.528z"
                        fill="#1A729F"
                      />
                      <path
                        d="M482.623 132.697a4.356 4.356 0 0 1-4.356 4.356H142.658a4.357 4.357 0 0 1-4.356-4.356c0-9.594 7.777-17.375 17.363-17.375H465.26c9.587 0 17.363 7.781 17.363 17.375z"
                        fill="#fff"
                        stroke="#E1E4E5"
                        stroke-width="2.321"
                      />
                      <path
                        d="M160.671 126.613a3.52 3.52 0 0 1-3.511 3.514 3.52 3.52 0 0 1-3.511-3.514 3.52 3.52 0 0 1 3.507-3.513c1.945.024 3.515 1.588 3.515 3.513zm13.569.001a3.52 3.52 0 0 1-3.511 3.513 3.52 3.52 0 0 1-3.511-3.513 3.52 3.52 0 0 1 3.506-3.514c1.946.024 3.516 1.588 3.516 3.514zm13.567 0a3.52 3.52 0 0 1-3.511 3.513 3.52 3.52 0 0 1-3.51-3.513 3.52 3.52 0 0 1 3.506-3.514c1.968.024 3.515 1.585 3.515 3.514z"
                        fill="#E1E4E5"
                        stroke="#E1E4E5"
                        stroke-width="1.583"
                      />
                      <rect
                        x="279.294"
                        y="154.777"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#r)"
                      />
                      <rect
                        x="279.294"
                        y="233.686"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#s)"
                      />
                      <rect
                        x="279.294"
                        y="194.231"
                        width="49.898"
                        height="31.912"
                        rx="15.956"
                        fill="url(#t)"
                      />
                      <rect
                        x="346.019"
                        y="194.231"
                        width="49.898"
                        height="31.912"
                        rx="15.956"
                        fill="url(#u)"
                      />
                      <rect
                        x="412.743"
                        y="194.231"
                        width="49.898"
                        height="31.912"
                        rx="15.956"
                        fill="url(#v)"
                      />
                      <rect
                        x="380.251"
                        y="154.777"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#w)"
                      />
                      <rect
                        x="380.251"
                        y="233.686"
                        width="82.39"
                        height="31.912"
                        rx="15.956"
                        fill="url(#x)"
                      />
                      <path
                        d="m191.824 223.796-13.175-13.175 13.175-13.176m39.527 0 13.176 13.176-13.176 13.175m-14.65-32.938-10.982 39.527"
                        stroke="#fff"
                        stroke-width="9.389"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="m418.888 313.175 13.538-4.118 58.854-1.732 13.273 3.623-1.732 32.343-30.028 19.159-29.126-.583-18.31-16.684-4.065-16.543-2.404-15.465z"
                        fill="#F8AE9D"
                      />
                      <path
                        d="M588.805 365.188c-4.26-8.783-8.342-15.835-11.983-21.403a53.345 53.345 0 0 0-30.717-22.357l-48.002-13.008s-2.492 47.967-35.507 47.967-39.448-44.98-39.448-44.98l-55.549 22.163c-1.909.742-14.793 5.196-29.78 37.345-14.281 30.611-20.52 46.287-20.52 46.287l57.228 16.526 3.57 51.466-1.219 29.391 173.698-.389-.972-33.598.725-51.519 2.174 3.517 57.811-23.188s-7.441-15.27-21.509-44.22z"
                        fill="#1A729F"
                      />
                      <path
                        d="M456.987 330.287c14.088-.259 30.092-27.739 30.092-27.739l.919-70.587c.736-20.33-11.911-37.652-34.705-37.748l-2.116.096c-21.216 1.011-38.017 16.378-38.584 35.314-.536 17.622-.858 37.091-.168 46.497 1.441 19.469 23.653 16.183 23.653 16.183.046 0-.061 9.807 0 15.536.168 12.865 15.253 22.886 20.909 22.448z"
                        fill="#F8AE9D"
                      />
                      <path
                        d="M480.959 235.833c.388-.184 15.562-5.252 15.901 9.736.339 14.989-15.546 12.225-15.578 11.795-.032-.43-.323-21.531-.323-21.531zM322.231 418.635l-23.277 46.712a34.065 34.065 0 0 0-3.535 16.843c.884 18.133 15.854 32.396 34.005 32.396l67.297-1.058 2.373-33.265-50.794-12.248 19.246-36.39-45.315-12.99zm285.132-8.041s14.439 42.894 30.187 81.882c.318.778.671 2.227.954 3.023 3.552 9.667-7.14 19.087-17.939 19.087l-91.003-.159v-29.586l56.61-12.018-20.502-45.528 41.693-16.701z"
                        fill="#F8AE9D"
                      />
                      <path
                        d="M424.968 483.48c.017.106 2.085-.548 5.532-.76 3.428-.23 8.289.159 13.131 2.227 4.843 2.068 8.501 5.302 10.693 7.935 2.227 2.634 3.181 4.595 3.27 4.525.035-.018-.177-.513-.654-1.361a26.731 26.731 0 0 0-2.316-3.411c-2.156-2.74-5.832-6.098-10.781-8.201-4.948-2.103-9.915-2.456-13.379-2.103a25.339 25.339 0 0 0-4.065.689c-.936.23-1.449.424-1.431.46zm3.11-7.158c.036.141 2.139-.901 5.762-1.007 3.606-.16 8.678.936 13.415 3.799 4.736 2.881 8.289 6.522 10.798 9.138 1.202 1.272 2.192 2.333 2.969 3.146.707.742 1.096 1.149 1.132 1.113.035-.018-.319-.477-.973-1.255a105.506 105.506 0 0 0-2.827-3.269c-2.457-2.687-5.992-6.416-10.817-9.35-4.825-2.916-10.038-3.976-13.715-3.711-1.838.106-3.305.442-4.277.777-.495.142-.848.318-1.095.425-.248.106-.372.176-.372.194z"
                        fill="#EB996E"
                      />
                      <path
                        d="M548.702 479.414h-13.061s-29.48-10.657-35.542-9.632c-5.461.919-25.45 14.192-29.374 16.825-.442.301-.76.707-.954 1.202a4.281 4.281 0 0 0 2.386 5.444l.406.177-.176.6a7.146 7.146 0 0 0-.301 2.386c.141 2.811 3.924 3.659 5.355 1.238l-.76 1.343a3.342 3.342 0 0 0-.424 1.785l.071 1.219a3.28 3.28 0 0 0 2.262 2.934 3.243 3.243 0 0 0 3.429-.901c2.527-2.793 8.006-8.378 11.718-8.996 3.287-.548 8.783-.619 12.106-.601a4.078 4.078 0 0 1 3.8 2.616c-2.192.159-17.515 8.147-22.941 11.01-1.679.884-2.934 2.475-3.146 4.366-.194 1.697.654 3.482 4.012 2.686 7.211-1.679 20.166-7.635 20.166-7.635s6.681-1.909 11.011 1.149c6.097 4.295 8.89 5.868 14.121 4.136 5.232-1.732 9.085-4.224 9.085-4.224l10.304-1.025c.035 0 9.773-24.355-3.553-28.102z"
                        fill="#F8AE9D"
                      />
                      <path
                        d="M509.766 484.398c-.018.106-2.085-.547-5.532-.76-3.429-.229-8.289.16-13.131 2.227-4.843 2.068-8.502 5.302-10.693 7.936-2.227 2.633-3.181 4.595-3.27 4.524-.035-.017.177-.512.654-1.361a26.598 26.598 0 0 1 2.315-3.411c2.157-2.739 5.833-6.097 10.781-8.2 4.949-2.103 9.915-2.457 13.38-2.103 1.732.159 3.128.441 4.064.689.937.247 1.45.424 1.432.459zm-3.111-7.157c-.035.141-2.138-.902-5.761-1.008-3.606-.159-8.678.937-13.415 3.8-4.736 2.881-8.289 6.522-10.798 9.137-1.202 1.273-2.192 2.333-2.97 3.146-.707.743-1.095 1.149-1.131 1.114-.035-.018.318-.477.972-1.255.654-.795 1.609-1.909 2.828-3.27 2.457-2.686 5.991-6.415 10.816-9.349 4.825-2.916 10.039-3.977 13.715-3.712 1.838.106 3.305.442 4.277.778.495.141.849.318 1.096.424.248.106.371.177.371.195z"
                        fill="#EB996E"
                      />
                      <path
                        d="M531.029 515.416H393.898a7.263 7.263 0 0 1-7.264-6.964l-4.118-94.378c-.177-4.135 3.128-7.6 7.264-7.6h145.102c4.135 0 7.44 3.447 7.281 7.583l-3.853 94.395c-.159 3.889-3.375 6.964-7.281 6.964z"
                        fill="#31446C"
                      />
                      <path
                        d="M476.188 462.692c0 7.754-6.27 14.023-14.024 14.023s-14.023-6.269-14.023-14.023 6.269-14.024 14.023-14.024 14.024 6.303 14.024 14.024z"
                        fill="#fff"
                      />
                      <path
                        fill="#F8AE9D"
                        d="M475.657 263.141h12.372v53.021h-12.372z"
                      />
                      <path
                        d="M480.513 215.764c-2.229 2.877-6.161 3.511-9.399 4.08-4.354.764-6.508 2.356-8.768 6.63-1.431 2.731-2.862 5.721-5.423 7.2-2.082 1.207-2.006-1.871-2.336-4.255a5.494 5.494 0 0 0-.128-.627c-.504-1.903-2.529-1.578-3.124.299-.542 1.69-1.702 3.12-3.179 3.917-.241.13-.497.243-.753.195-.346-.049-.617-.374-.843-.667-.474-.612-.944-1.39-1.43-2.214-1.597-2.708-4.62-1.74-6.404.849-1.114 1.609-2.44 3.267-4.263 3.641-.587.13-1.325.032-1.596-.537-.347-.698.195-1.397.105-2.112-.075-.667-.362-.959-.678-1.528-1.241-2.207-4.082-2.287-5.828-.454a64.452 64.452 0 0 1-3.798 3.672c-.557.487-1.371.975-1.928.487-.301-.26-.376-.698-.437-1.121-.316-2.064-.617-4.128-.934-6.192-.18-1.154-.798-2.665-1.853-2.373-.512.147-.813.683-1.099 1.17-.347.618-6.538 7.655-6.658 7.119-.965-3.998-2.938-7.639-3.902-11.637-6.236-25.726 21.436-46.415 42.57-46.529 4.7-.032 8.994.044 13.558 1.133 4.866 1.17 10.002 3.028 14.416 5.644 6.191 3.657 10.876 10.304 9.671 18.235"
                        fill="#31446C"
                      />
                      <path
                        d="M469.398 207.068c-3.109 3.414-3.933 8.218-4.222 12.756-.427 6.844.152 13.954 3.414 20.029.93 1.73 1.616 10.288 3.049 9.815.458-.147.381-6.784 1.586-10.362 1.859-5.543 10.427-7.656 14.283-4.153 6.159 5.572 2.546 12.342.503 16.555-1.219 2.543-3.155 5.396-3.491 8.086-.411 3.444-.533 15.994 1.784 18.92 1.936 2.454 3.994-9.401 5.747-11.736 12.973-17.398 25.412-61.699 3.262-71.307-3.369-1.464-13.765-2.217-16.921-.355"
                        fill="#31446C"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M568.947 99.883h-3.516c-.85 0-1.534-.692-1.534-1.535v-3.515c0-.85.691-1.535 1.534-1.535h3.516a1.54 1.54 0 0 1 1.534 1.535v3.515a1.53 1.53 0 0 1-1.534 1.535zm-12.189 0h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.515c0-.85.692-1.535 1.534-1.535h3.516a1.54 1.54 0 0 1 1.534 1.535v3.515a1.54 1.54 0 0 1-1.534 1.535zm-12.197 0h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.515c0-.85.691-1.535 1.534-1.535h3.516a1.54 1.54 0 0 1 1.534 1.535v3.515a1.53 1.53 0 0 1-1.534 1.535zm-12.19 0h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.515c0-.85.692-1.535 1.534-1.535h3.516c.85 0 1.542.692 1.542 1.535v3.515a1.552 1.552 0 0 1-1.542 1.535zm-12.189 0h-3.516c-.85 0-1.541-.692-1.541-1.535v-3.515c0-.85.691-1.535 1.541-1.535h3.516a1.54 1.54 0 0 1 1.535 1.535v3.515a1.54 1.54 0 0 1-1.535 1.535zm36.129-13.291h-3.515a1.54 1.54 0 0 1-1.535-1.535v-3.523A1.54 1.54 0 0 1 552.796 80h3.515c.85 0 1.535.692 1.535 1.534v3.516a1.533 1.533 0 0 1-1.535 1.542zm-12.189 0h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.523A1.54 1.54 0 0 1 540.606 80h3.516a1.54 1.54 0 0 1 1.534 1.534v3.516a1.532 1.532 0 0 1-1.534 1.542zm-12.189 0h-3.516c-.85 0-1.542-.692-1.542-1.535v-3.523c0-.842.692-1.534 1.542-1.534h3.516a1.54 1.54 0 0 1 1.534 1.534v3.516c0 .85-.691 1.542-1.534 1.542zm12.628 27.57h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.515c0-.85.691-1.535 1.534-1.535h3.516a1.54 1.54 0 0 1 1.534 1.535v3.515a1.531 1.531 0 0 1-1.534 1.535zm-12.19 0h-3.516a1.54 1.54 0 0 1-1.534-1.535v-3.515c0-.85.692-1.535 1.534-1.535h3.516c.85 0 1.542.692 1.542 1.535v3.515a1.552 1.552 0 0 1-1.542 1.535z"
                        fill="#E1E4E5"
                      />
                      <rect
                        x="199"
                        y="511"
                        width="527"
                        height="10"
                        rx="5"
                        fill="#E1E4E5"
                      />
                      <rect
                        x="667.014"
                        y="493.877"
                        width="42.252"
                        height="4.923"
                        rx="2.461"
                        transform="rotate(-45 667.014 493.877)"
                        fill="#E1E4E5"
                      />
                      <rect
                        x="683.214"
                        y="493.992"
                        width="15.688"
                        height="4.923"
                        rx="2.461"
                        transform="rotate(-45 683.214 493.992)"
                        fill="#E1E4E5"
                      />
                      <defs>
                        <linearGradient
                          id="m"
                          x1="607.252"
                          y1="388.396"
                          x2="606.622"
                          y2="303.871"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="a"
                          x1="671.826"
                          y1="189.077"
                          x2="671.796"
                          y2="154.507"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="c"
                          x1="299.104"
                          y1="396.327"
                          x2="298.723"
                          y2="311.8"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="d"
                          x1="299.104"
                          y1="475.236"
                          x2="298.723"
                          y2="390.708"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="e"
                          x1="282.165"
                          y1="435.781"
                          x2="281.536"
                          y2="351.257"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="f"
                          x1="348.889"
                          y1="435.781"
                          x2="348.26"
                          y2="351.257"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="g"
                          x1="415.614"
                          y1="435.781"
                          x2="414.985"
                          y2="351.257"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="h"
                          x1="400.061"
                          y1="396.327"
                          x2="399.68"
                          y2="311.8"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="i"
                          x1="400.061"
                          y1="475.236"
                          x2="399.68"
                          y2="390.708"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="j"
                          x1="516.018"
                          y1="478.638"
                          x2="512.429"
                          y2="170.586"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="k"
                          x1="624.19"
                          y1="348.941"
                          x2="623.809"
                          y2="264.414"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="l"
                          x1="624.19"
                          y1="427.85"
                          x2="623.809"
                          y2="343.323"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="b"
                          x1="639.377"
                          y1="218.19"
                          x2="639.332"
                          y2="183.621"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="n"
                          x1="673.976"
                          y1="388.396"
                          x2="673.347"
                          y2="303.871"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="o"
                          x1="740.7"
                          y1="388.396"
                          x2="740.071"
                          y2="303.871"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="p"
                          x1="725.148"
                          y1="348.941"
                          x2="724.766"
                          y2="264.414"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="q"
                          x1="725.148"
                          y1="427.85"
                          x2="724.766"
                          y2="343.323"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="r"
                          x1="322.246"
                          y1="204.58"
                          x2="321.865"
                          y2="120.053"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="s"
                          x1="322.246"
                          y1="283.489"
                          x2="321.865"
                          y2="198.961"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="t"
                          x1="305.307"
                          y1="244.034"
                          x2="304.678"
                          y2="159.51"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="u"
                          x1="372.032"
                          y1="244.034"
                          x2="371.402"
                          y2="159.51"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="v"
                          x1="438.756"
                          y1="244.034"
                          x2="438.127"
                          y2="159.51"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="w"
                          x1="423.203"
                          y1="204.58"
                          x2="422.822"
                          y2="120.053"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                        <linearGradient
                          id="x"
                          x1="423.203"
                          y1="283.489"
                          x2="422.822"
                          y2="198.961"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff" />
                          <stop offset="1" stop-color="#EEE" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
            </div>
                </Modal>
              </div>
            </div>

            {/* <button className="absolute esm:ml-11 rounded w-auto font-bold -translate-x-32 translate-y-28 py-2 px-5 text-white  shadow-[0_0_10px_theme(colors.blue.500)] duration-700  hover:bg-gradient-to-l hover:from-[#1595b6]  hover:to-[#1f2667e6] ease-in-out ">About Me</button> */}
          </div>

          <ul className="ml-auto translate-y-56 space-y-6 text-[#b0b2c3] absolute right-8 ">
            {/* linkedin Logo */}
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-hassan-31a43a319"
                target="_blank"
              >
                <svg
                  className="w-7 hover:text-white hover:scale-125 duration-300"
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
                  className="w-7 hover:text-white hover:scale-125 duration-300"
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
                  className="w-7 hover:text-white hover:scale-125 duration-300"
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
                  className="w-7 hover:text-white hover:scale-125 duration-300"
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

        <section className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl w-max mx-auto text-center text-[#1788ae] border-b-2 border-[#1788ae]">
            Latest Works
          </h2>
          <div className="flex gap-[80px] items-center mt-12">
            <a href="#" className="w-full">
              <img
                className="max-w-[400px] mr-auto"
                src="https://anuragsinghbam.netlify.app/images/harigurus.webp"
                alt=""
              />
            </a>
            <div className="w-full">
              <h3 className="text-[#fc815c] font-bold text-4xl">Harigurus</h3>
              <span className="text-[#fc815c] text-lg">(Event Booking)</span>
              <p className="text-justify mt-2">
                HariGurus is a one-stop-shop for all Hindu religious, customs
                and traditional requirements. Built the complete site from
                scratch.
              </p>

              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #react.js
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #express.js
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #node.js
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #swiper.js
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #mongoDB
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #mongoose
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #css
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #javascript
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #figma
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-[80px] items-center mt-12">
            <div className="w-full">
              <h3 className="text-[#ffe578] font-bold text-4xl">EazyGrad</h3>
              <span className="text-[#ffe578] text-lg">(EdTech Startup)</span>
              <p className="text-justify mt-2">
                Being a lead developer, revamped the site to a highly
                responsive, and interactive website. Created new features and
                pages. Worked as a team with product manager and ux designer.
              </p>

              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #react.js
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #express.js
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #node.js
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #swiper.js
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #mongoDB
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #mongoose
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #css
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #javascript
                </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                  #figma
                </li>
              </ul>
            </div>
            <a href="#" className="w-full">
              <img
                className="max-w-[400px] ml-auto"
                src="https://anuragsinghbam.netlify.app/images/eazygrad.webp"
                alt=""
              />
            </a>
          </div>
        </section>
      </body>
    </>
  );
}
