import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { GB } from 'country-flag-icons/react/3x2'
import Flag from "react-world-flags";
import { LuLayoutDashboard, LuSettings, LuArrowUpSquare } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { CiLogout, CiLock } from "react-icons/ci";
import { VscFlame } from "react-icons/vsc";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { IoMdNotifications } from 'react-icons/io'

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <>
      <div className="flex h-screen font-roboto">
        <div
          className={
            sidebarOpen
              ? "block fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
              : "hidden fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
          }
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div
          className={
            sidebarOpen
              ? "fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0 translate-x-0 ease-out"
              : "fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white border-r-[1px] border-r-gray-200 lg:translate-x-0 lg:static lg:inset-0 -translate-x-full ease-in"
          }
        >
          <div className="flex items-center justify-center mt-2">
            <div className="flex flex-col items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="mx-2 text-xs font-semibold">
                ORFORD PROFERTY
              </span>
            </div>
          </div>

          <nav className="mt-10 px-6">
            <a
              className="flex items-center px-12 py-3 mt-4 text-gray-100 bg-emerald-800 rounded-md"
              href="#"
            >
              <LuLayoutDashboard className="w-6 h-6" />

              <span className="mx-3 text-sm">Dashboard</span>
            </a>

            <a
              className="flex items-center px-12 py-3 mt-1 text-gray-500 hover:bg-emerald-300 hover:rounded-md hover:text-white"
              href="#"
            >
              <LuSettings className="w-6 h-6" />

              <span className="mx-3 text-sm">Settings</span>
            </a>

            <a
              className="flex items-center px-12 py-3 mt-1 text-gray-500 hover:bg-emerald-300 hover:rounded-md hover:text-white"
              href="#"
            >
              <BiDetail className="w-6 h-6" />

              <span className="mx-3 text-sm">Bids</span>
            </a>

            <a
              className="flex items-center px-12 py-3 mt-1 text-gray-500 hover:bg-emerald-300 hover:rounded-md hover:text-white"
              href="#"
            >
              <LuArrowUpSquare className="w-6 h-6" />

              <span className="mx-3 text-sm">Top-Up</span>
            </a>

            <a
              className="flex items-center px-12 py-3 mt-1 text-gray-500 hover:bg-emerald-300 hover:rounded-md hover:text-white"
              href="#"
            >
              <FaRegQuestionCircle className="w-6 h-6" />

              <span className="mx-3 text-sm">FAQs</span>
            </a>

            <a
              className="flex items-center px-12 py-3 mt-1 text-gray-500 hover:bg-emerald-300 hover:rounded-md hover:text-white"
              href="#"
            >
              <TfiEmail className="w-6 h-6" />

              <span className="mx-3 text-sm">Messages</span>
            </a>

            <a
              className="flex items-center px-12 py-3 mt-10 text-gray-500 hover:bg-emerald-300 hover:rounded-md hover:text-white"
              href="#"
            >
              <CiLogout className="w-6 h-6" />
              <span className="mx-3 text-sm">Log out</span>
            </a>
          </nav>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex items-center justify-between px-4 lg:px-10 py-4 bg-white border-b-[1px] border-b-gray-200">
            <div className="flex items-center gap-x-6">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="text-gray-500 focus:outline-none lg:hidden"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H11"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <div className="relative mx-4 lg:mx-0 hidden md:block">
                  <div className="flex items-center">
                    <div className="flex flex-col mr-8">
                      <p className="font-semibold leading-5 tracking-wide">
                        Hello Lemuel
                      </p>
                      <p className="text-xs font-semibold tracking-wide">
                        7 June 2023 | Wednesday
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:flex items-center">
                <p className="font-semibold mr-2 hidden xl:block">Wallet balance</p>
                <span className="bg-emerald-100 hidden md:flex text-emerald-800 font-semibold px-2.5 py-1.5 leading-3 rounded-lg items-center">
                  £5,000
                </span>
              </div>

              <div className="lg:flex items-center">
                <p className="font-semibold mr-2 hidden xl:block">Registered Bidders</p>
                <span className="bg-emerald-100 hidden md:flex text-emerald-800 font-semibold px-2.5 py-1.5 leading-3 rounded-lg items-center">
                  300
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <GB title="United Kingdom" className="w-8 h-6 rounded-md" />
              </div>
              <div className="relative">
                <button className="relative flex mx-4 text-gray-600 focus:outline-none">
                  <IoMdNotifications className="w-6  h-6" />
                </button>
                <div className="absolute top-1 right-4 bg-orange-800 border-2 border-white rounded-full p-1"></div>
              </div>

              <div className="relative flex items-center">
                <button className="relative block w-8 h-8 mr-4 overflow-hidden rounded-full shadow focus:outline-none">
                  <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                    alt="Your avatar"
                  />
                </button>
                <p className="text-lg mr-4">Lemuel</p>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
            <div className="px-4 lg:px-10 py-4">
              <h1 className="text-xl font-semibold mb-6">Property Dashboard</h1>
              <div className="flex flex-col gap-y-16 md:flex-row items-center md:gap-8 my-6">
                <div class="flex flex-col w-full md:w-1/2 justify-center items-center">
                  <div class="!z-5 w-full relative rounded-[20px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col bg-white">
                    <div class="h-full w-full">
                      <div className="relative w-full pb-[75%] mb-5">
                        <div className="absolute top-0 left-0 right-0 bottom-0">
                          <div className="w-full h-full flex gap-2">
                            <div className="w-1/2 h-full flex flex-col gap-2">
                              <div className="w-full h-2/3">
                                <img
                                  src="/image/image1.jpg"
                                  class="w-full h-full rounded-xl cursor-pointer"
                                  alt=""
                                />
                              </div>
                              <div className="w-full h-1/3 flex gap-2">
                                <div className="w-1/2 h-full">
                                  <img
                                    src="/image/image8.jpg"
                                    class="w-full h-full rounded-xl cursor-pointer"
                                    alt=""
                                  />
                                </div>
                                <div className="relative w-1/2 h-full cursor-pointer">
                                  <div className="absolute rounded-xl top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-50"></div>
                                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent flex justify-center items-center">
                                    <BsFillPlayCircleFill className="w-10 h-10 text-white" />
                                  </div>
                                  <img
                                    src="/image/image8.jpg"
                                    class="w-full h-full rounded-xl"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-1/2 h-full flex flex-col gap-2">
                              <div className="relative w-full h-3/4 cursor-pointer">
                                <div className="absolute rounded-xl top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-50"></div>
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent flex justify-center items-center">
                                  <BsFillPlayCircleFill className="w-10 h-10 text-white" />
                                </div>
                                <img
                                  src="/image/image4.jpg"
                                  class="w-full h-full rounded-xl"
                                  alt=""
                                />
                              </div>
                              <div className="w-full h-1/4 cursor-pointer">
                                <img
                                  src="/image/image5.jpg"
                                  class="w-full h-full rounded-xl"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between mb-5">
                        <p className="text-xl font-bold text-black">
                          Home with European Elegance
                        </p>
                        <div className="bg-red-100 rounded-xl text-red-600 text-sm font-semibold flex justify-center items-center px-4 py-2 xl:py-0 leading-6">
                          <CiLock className="w-4 h-4" />
                          <span className="ml-2">Bid Closed</span>
                        </div>
                      </div>
                      <div className="text-sm mb-5">
                        This component can display images as a simple slideshow
                        , which is especially useful in the image gallery
                        display mode where large groups of images are shown, as
                        it displays the images as a grid of thumbnails.
                        <span className="font-bold"> Read More.</span>
                      </div>
                      <div class="mb-5 flex items-center md:items-start gap-4">
                        <p class="text-lg my-auto font-bold text-navy-700">
                          Active Bidders:
                        </p>
                        <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                          <span class="cursor-pointer z-10 ml-px inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">
                            +14
                          </span>
                          <span class="z-9 -mr-3 h-10 w-10 rounded-full border-2 cursor-pointer border-white">
                            <img
                              class="h-full w-full rounded-full object-cover"
                              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                              alt=""
                            />
                          </span>
                          <span class="z-8 -mr-3 h-10 w-10 rounded-full border-2 cursor-pointer border-white">
                            <img
                              class="h-full w-full rounded-full object-cover"
                              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png"
                              alt=""
                            />
                          </span>
                          <span class="z-7 -mr-3 h-10 w-10 rounded-full border-2 cursor-pointer border-white">
                            <img
                              class="h-full w-full rounded-full object-cover"
                              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                      <div className="mb-5 flex items-center gap-2">
                        <p className="text-lg font-bold text-navy-700">
                          Highest Bid:
                        </p>
                        <p className="text-lg font-bold text-emerald-800">
                          £700
                        </p>
                      </div>
                      <div className="mb-5 bg-emerald-100 px-4 py-1 rounded-md w-fit flex items-center gap-2">
                        <p className="text-sm font-semibold">
                          Time left to bid on this property
                        </p>
                        <p className="text-red-800 font-semibold">16:43:03</p>
                      </div>
                      <div class="flex items-center gap-8 md:items-center">
                        <button
                          href=""
                          class="bg-gray-400 rounded-lg px-8 py-1 text-lg font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                        >
                          Place Bid
                        </button>
                        <div className="rounded-full bg-emerald-800 cursor-pointer text-white p-2">
                          <AiOutlineMessage className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col w-full md:w-1/2 justify-center items-center">
                  <div class="!z-5 w-full relative rounded-[20px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col bg-white">
                    <div class="h-full w-full">
                      <div className="relative w-full pb-[75%] mb-5">
                        <div className="absolute top-0 left-0 right-0 bottom-0">
                          <div className="w-full h-full flex gap-2">
                            <div className="w-1/2 h-full flex flex-col gap-2">
                              <div className="relative w-full h-2/3 cursor-pointer">
                                <div className="absolute rounded-xl top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-50"></div>
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent flex justify-center items-center">
                                  <BsFillPlayCircleFill className="w-10 h-10 text-white" />
                                </div>
                                <img
                                  src="/image/image2.jpg"
                                  class="w-full h-full rounded-xl"
                                  alt=""
                                />
                              </div>
                              <div className="w-full h-1/3 flex gap-2">
                                <div className="w-1/2 h-full cursor-pointer">
                                  <img
                                    src="/image/image8.jpg"
                                    class="w-full h-full rounded-xl"
                                    alt=""
                                  />
                                </div>
                                <div className="relative w-1/2 h-full cursor-pointer">
                                  <div className="absolute rounded-xl top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-50"></div>
                                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent flex justify-center items-center">
                                    <BsFillPlayCircleFill className="w-10 h-10 text-white" />
                                  </div>
                                  <img
                                    src="/image/image8.jpg"
                                    class="w-full h-full rounded-xl"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-1/2 h-full flex flex-col gap-2">
                              <div className="w-full h-3/4 cursor-pointer">
                                <img
                                  src="/image/image3.jpg"
                                  class="w-full h-full rounded-xl"
                                  alt=""
                                />
                              </div>
                              <div className="w-full h-1/4 cursor-pointer">
                                <img
                                  src="/image/image5.jpg"
                                  class="w-full h-full rounded-xl"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between mb-5">
                        <p className="text-xl font-bold text-black">
                          Home with European Elegance
                        </p>
                        <div className="bg-orange-100 rounded-xl text-orange-600 text-sm font-semibold flex justify-center items-center px-4 py-2 xl:py-0 leading-6">
                          <VscFlame className="w-4 h-4" />
                          <span className="ml-2">Winning Bid</span>
                        </div>
                      </div>
                      <div className="text-sm mb-5">
                        This component can display images as a simple slideshow
                        , which is especially useful in the image gallery
                        display mode where large groups of images are shown, as
                        it displays the images as a grid of thumbnails.
                        <span className="font-bold"> Read More.</span>
                      </div>
                      <div class="mb-5 flex items-center md:items-start gap-4">
                        <p class="text-lg my-auto font-bold text-navy-700">
                          Active Bidders:
                        </p>
                        <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                          <span class="z-10 ml-px inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">
                            +14
                          </span>
                          <span class="z-9 -mr-3 h-10 w-10 rounded-full border-2 cursor-pointer border-white">
                            <img
                              class="h-full w-full rounded-full object-cover"
                              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                              alt=""
                            />
                          </span>
                          <span class="z-8 -mr-3 h-10 w-10 rounded-full border-2 cursor-pointer border-white">
                            <img
                              class="h-full w-full rounded-full object-cover"
                              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png"
                              alt=""
                            />
                          </span>
                          <span class="z-7 -mr-3 h-10 w-10 rounded-full border-2 cursor-pointer border-white">
                            <img
                              class="h-full w-full rounded-full object-cover"
                              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                      <div className="mb-5 flex items-center gap-2">
                        <p className="text-lg font-bold text-navy-700">
                          Highest Bid:
                        </p>
                        <p className="text-lg font-bold text-emerald-800">
                          £1000
                        </p>
                      </div>
                      <div className="mb-5 bg-emerald-100 px-4 py-1 rounded-md w-fit flex items-center gap-2">
                        <p className="text-sm font-semibold">
                          Time left to bid on this property
                        </p>
                        <p className="text-red-800 font-semibold">16:43:03</p>
                      </div>
                      <div class="flex items-center gap-8 md:items-center">
                        <button
                          href=""
                          class="bg-emerald-800 rounded-lg px-8 py-1 text-lg font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700"
                        >
                          Bid Placed
                        </button>
                        <div className="rounded-full bg-emerald-800 cursor-pointer text-white p-2">
                          <AiOutlineMessage className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
