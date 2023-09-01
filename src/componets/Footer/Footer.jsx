// import "./Footer.scss"
import logo from "../../assets/bammylogo.png";
import facebook from "../../assets/whatsapp-2174.svg";
import tweeter from "../../assets/twitter-2170.svg";
import instagram from "../../assets/instagram-2165.svg";
import { HashLink as Link } from "react-router-hash-link"

function Footer() {
  return (
    <footer class="w-full text-gray-bk bg-pry-color ">
        <div
            class="container w-full max-w-7xl flex flex-col justify-between px-5 py-24 mx-auto  md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
            <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                <a class="flex items-center justify-center font-medium text-light md:justify-start">
                    <img src={logo} alt="" className="w-28" />
                </a>
                <p class="mt-2 text-sm text-gray-500">Our Address: <br /> No. 12 Car Street Junction,<br /> Arakale, Akure <br /> Ondo State,NGR <br /> +234 9063897173!</p>
                <div class="mt-4">
                    <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                </path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
            <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest text-light uppercase title-font">Product</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Phones</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Laptop</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Screen Protectors</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Protective Cases</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Stands</a>
                        </li>
                        
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest  text-light uppercase title-font">Support</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Contact Support</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Help Resources</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Shipping Policy</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Terms of Service</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Refund Policy</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-sec-light-color">Warranty</a>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/2 md:w-full gap-2 flex flex-col">
                    <h2 className=" text-light text-xl">Newsletter</h2>
                    <p className="text-gray-500">Get update by subscribing to our <br />weekly newsletter</p>
                    <div class="w-full md:w-9/12">
                        <form class="w-full" noValidate>
                            <div class="flex flex-col items-start">
                                <div class="w-full">
                                    <input
                                    id="subscription_email"
                                    name="subscription_email"
                                    type="email"
                                    placeholder="Enter your email"
                                    class="py-2 pl-2 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out  border-gray-300 focus:outline-none focus:border-heading md:h-12 lg:px-7 h-12 lg:h-14 text-left bg-light text-dark"
                                    autoComplete="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                    />
                                </div>
                                <button
                                    data-variant="flat"
                                    class="w-full  bg-sec-color transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0  focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-pry-color hover:border hover:border-light mt-2 flex-shrink-0"
                                >
                                    <span class="lg:py-0.5">Subscribe</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-bk text-dark">
            <div class="container px-5 py-2 mx-auto">
                <p class="text-sm text-gray-700 capitalize text-center">© {new Date().getFullYear()}, BamstoreNG</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer