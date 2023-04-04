"use client"
import Image from "next/image"
export default function Footer() {
    return (
        <>
            <div className="z-10  mx-auto ">
                <div className="flex justify-around  p-5 lg:text-2xl md:text-2xl text-xl max-w-7xl mx-auto">
                    <div >
                        <div className="text-center  font-bold  ">26+</div>
                        <div className=" text-center font-semibold text-gray-600  md:text-sm text-[10px]">Years of Trust</div>
                    </div>
                    <div >
                        <div className="text-center font-bold ">25M+</div>
                        <div className=" text-center font-semibold text-gray-600 md:text-sm text-[10px]">Orders Delivered</div>
                    </div>
                    <div >
                        <div className="text-center  font-bold ">375+</div>
                        <div className="text-center font-semibold text-gray-600 md:text-sm mr-3 text-[10px]">Stores</div>
                    </div>
                </div>
                <div className="bg-sub-img">
                    <div className="-z-10  max-w-7xl mx-auto px-2">


                        <div className=" flex flex-col py-5">
                            <div className="lg:flex justify-around sm:grid-flow-row ">
                                <div className="lg:hidden mb-5">
                                    <div className="text-white font-semibold md:text-2xl text-lg text-center mb-2">Download App</div>
                                    <div className="flex justify-center ">
                                        <Image src="https://www.lifepharmacy.com/images/appstore.svg" className="mr-3 w-1/4 sm:w-1/4 md:w-1/6 lg:w-1/6 " alt="Download" width={700} height={700} />
                                        <Image src="https://www.lifepharmacy.com/images/appstore.svg" alt="Download" className=" w-1/4 md:w-1/6 sm:w-1/4 lg:w-1/6" width={700} height={700} />
                                    </div>
                                </div>
                                <div className="lg:w-4/6 mx-4">
                                    <div className="text-white text-center mb-3 text-xs lg:text-base sm:text-sm">Subscribe For The Latest Discount & Trends</div>
                                    <div className="relative max-w-[70rem] mx-auto">
                                        <input type="text" className="w-full   rounded-full py-1 sm:py-2 md:py-3"></input>
                                        <button type="submit" className="absolute top-[1px] right-0 h-8 sm:h-10 md:h-12 md:w-44 w-32 p-1 text-xs tracking-widest font-medium text-white bg-blue-700 rounded-r-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                </div>
                                <div className="sm:hidden md:hidden lg:block hidden">
                                    <div className="text-white font-semibold text-2xl text-center mb-2 " >Download App</div>
                                    <div className="flex justify-around">
                                        <Image src="https://www.lifepharmacy.com/images/appstore.svg" className="mr-3 w-1/2" alt="AppStore" width={300} height={300} />
                                        <Image src="https://www.lifepharmacy.com/images/playstore.svg" className="w-1/2" alt="AppStore" width={300} height={300} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <footer className="py-4 bg-white sm:py-6  max-w-[1440px] mx-auto ">
                    <div className="md:flex md:justify-between ">
                        <div className="mb-6 md:mb-0">
                            <a href="https://flowbite.com/" className="flex items-center mb-4">
                                <Image src="https://www.lifepharmacy.com/images/logo.svg" className="h-10 mr-3" alt="FlowBite Logo" width={300} height={300} />
                            </a>
                            <div className="text-gray-600">Life Pharmacy - Corporate Ofiice <br /> Marasi Dr - Business Bay  <br /> Bay Square - Dubai</div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-5 text-sm md:text-xs md:grid-cols-3 ">
                            <div>
                                <h1 className="mb-3 text-gray-900 dark:text-white font-bold">Know Us</h1>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-2">
                                        <a href="https://flowbite.com/" className="hover:text-blue-500 text-gray-500 underline-tra">About LifeStore</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://tailwindcss.com/" className="hover:text-blue-500 text-gray-500 underline-tra">Contact Us</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://tailwindcss.com/" className="hover:text-blue-500 text-gray-500 underline-tra">Our Blog</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://tailwindcss.com/" className="hover:text-blue-500 text-gray-500 underline-tra">Store Locator</a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 text-gray-900  dark:text-white font-bold">Our Policies</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-2">
                                        <a href="https://github.com/themesberg/flowbite" className="hover:text-blue-500 text-gray-500 underline-tra ">Refund Policy</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:text-blue-500 text-gray-500 hover:text-blue-500 underline-tra">Shipping Terms</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:text-blue-500 text-gray-500 underline-tra">Privacy Policy</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:text-blue-500 text-gray-500 underline-tra">Terms & Conditions</a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 text-gray-900 dark:text-white font-bold">Shop by Category</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-blue-500 text-gray-500 underline-tra">Beauty Care</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-blue-500 text-gray-500 underline-tra">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 text-gray-900 dark:text-white font-bold">Useful Links</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-blue-500 text-gray-500 underline-tra">Login or SignUp</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-blue-500 text-gray-500 underline-tra">View Cart</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-blue-500 text-gray-500 underline-tra">My Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-2 text-gray-900 dark:text-white font-bold">My Account</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li className="mb-3">
                                        <a href="#" className="hover:text-blue-500 text-gray-500 underline-tra">Browse by Brand</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-blue-500 text-gray-500 underline-tra">Sitemap</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-blue-500 text-gray-500 underline-tra">Offers / Coupons</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:text-blue-500 text-gray-500 underline-tra">Appointments</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Life Pharmacy</a>. All Rights Reserved.
                        </span>
                    </div>
                </footer>
            </div>
        </>
    )
}