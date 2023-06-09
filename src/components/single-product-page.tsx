"use client"
import { useState } from "react";
import getProductsData from "../lib/getProductsData";
import Image from "next/image";
import Link from "next/link";


const SingleProductsContent = ({ pro_data, lang }) => {

    const [selectedImg, setSelectedImg] = useState(0);
    const [noOfProducts, setNoOfProducts] = useState(1);
    const [addedToCart, addToCart] = useState(false);
    const [readMorClick, setReadMoreCLick] = useState(false)

    function cartItemAdded() {
        setTimeout(() => {
            addToCart(false)
        }, 1500)

        addToCart(true)
    }
    function onClickHandler(index) {
        setSelectedImg(index);
    }

    function addButtonClick() {
        setNoOfProducts(pro => pro + 1);
    }
    function minusButtonClick() {
        if (noOfProducts != 1) {
            setNoOfProducts(pro => pro - 1);
        }
    }

    // function classNames(...classes) {
    //     return classes.filter(Boolean).join(' ')
    // }


    return (
        <>
            <div className="max-w-[1450px] mx-auto md:text-sm sm:text-xs md:bg-white bg-slate-50 py-5 px-[10px]">

                <div>
                    <div className="lg:flex justify-between mb-7 flex-none">
                        <div className="flex justify-center flex-wrap lg:flex-nowrap ">
                            {pro_data.images.gallery_images[0] ? <>
                                <div className="flex md:flex-col order-last md:order-none md:my-0 my-3 ">

                                    {pro_data.images.gallery_images.map((gal_img, index) => (
                                        <div className="mr-4 lg:max-w-[4rem] max-w-[4rem] ">
                                            <Image className={index === selectedImg ? "border border-blue-400 rounded-lg mb-3 md:w-2/3 w-full lg:w-fit " : " rounded-lg border-2 mb-3 md:w-2/3 w-full lg:w-fit"} src={gal_img.thumbnail} height={80} width={80} onClick={() => onClickHandler(index)} alt="thumbnail-img" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap md:border-none border-4 border-slate-100 m-2 rounded-2xl ">
                                    <Image className="lg:max-w-[22rem] lg:max-h-[22rem] rounded-2xl " src={pro_data.images.gallery_images[selectedImg].image} height={600} width={600} alt="main-img" />
                                </div>
                            </>

                                : <>
                                    <div className="flex md:flex-col order-last md:order-none md:my-0 my-3">
                                        <div className="mr-4 lg:max-w-[4rem] max-w-[4rem]">
                                            <Image className={0 === selectedImg ? "border-2 border-blue-400 rounded-lg mb-3 w-full" : "w-full"} src={pro_data.images.featured_image} height={80} width={80} onClick={() => onClickHandler(0)} alt="thumbnail-img" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap md:border-none border-4 border-slate-100 m-2 rounded-2xl ">
                                        <Image className="lg:max-w-[22rem] lg:max-h-[22rem] rounded-2xl" src={pro_data.images.featured_image} height={600} width={600} alt="main-img" />
                                    </div>
                                </>}

                        </div>
                        <div className="flex justify-between md:px-0 flex-1">
                            <div className={`flex flex-col justify-start lg:w-2/3 w-full ${lang.substring(3, 5) === 'ar' ? 'pl-9' : 'pr-9'} `}>
                                <h1 className="text-indigo-900 font-semibold text-lg">{pro_data.title}</h1>
                                <div className="flex justify-start py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" className="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <div className="text-gray-400 text-sm">{pro_data.rating} <span className="text-[11px]">(REVIEWS {pro_data.number_of_reviews})</span></div>
                                </div>
                                <div className=" py-2 ">
                                    {pro_data.categories.map(cat_data => (
                                        <Link href="#" className=" inline-flex mr-3 hover:text-white hover:bg-red-500 text-red-500  px-2 text-[10px] border border-red-500 rounded-md my-1">{cat_data.name}</Link>
                                    ))}
                                </div>
                                <div className="flex justify-between mb-3">
                                    <div className="text-xs">Brand: <span className="text-blue-400">{pro_data.brand.name}</span></div>
                                    <div className="text-xs">SKU: {pro_data.sku}</div>
                                </div>
                                <div className="relative">
                                    <div className={`text-xs text-gray-400 mb-5  ${readMorClick ? '' : 'overflow-y-hidden h-20 leading-5'}`} dangerouslySetInnerHTML={{ __html: pro_data.short_description }} />
                                    {readMorClick ?
                                        <button onClick={() => { setReadMoreCLick(false) }} className="text-blue-500 text-xs text-center mx-auto w-full">read less</button>
                                        :
                                        (pro_data.short_description).length > 500 ?
                                            <button onClick={() => { setReadMoreCLick(true) }} className="text-blue-500 text-xs text-center mx-auto w-full">read more</button> : null

                                    }
                                </div>

                                <div className="flex justify-between my-6">
                                    <div className="flex justify-between">
                                        <div className="text-red-500 mr-3">
                                            <span className="text-[8px]">AED </span>
                                            <span className="font-semibold text-3xl">{pro_data.sale_price}</span>
                                        </div>
                                        <div className="text-sky-500 text-xs my-auto">
                                            <span ><del>AED {parseFloat(pro_data.filter_price).toFixed(2)}</del></span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <Image className="my-auto" data-v-11f2193b="" src="https://www.lifepharmacy.com/images/express-nr.svg" width={30} height={22} alt={"delivery-spped"} />
                                        <span className="text-xs my-auto ml-3">1-3 HOURS</span>
                                    </div>
                                </div>
                                {/* <div className="flex justify-between">
                                        <button className="border border-sky-500 rounded-md h-8 px-2" onClick={() => { minusButtonClick() }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-blue-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                            </svg>
                                        </button>
                                        <input type="text" className="form-control w-11 h-8 text-center border-none text-gray-500 text-sm" value={noOfProducts} />
                                        <button className="border border-sky-500 rounded-md h-8 px-2 bg-sky-500 hover:bg-sky-600 mr-5" onClick={() => { addButtonClick() }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4  text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                            </svg>
                                        </button>
                                        <button onClick={() => { cartItemAdded() }} className="border border-sky-500 rounded-md flex flex-1 justify-center bg-sky-500 hover:bg-sky-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 my-auto text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <span className="my-auto text-sm ml-3 text-white" >Add to Cart</span>
                                        </button>
                                    </div> */}
                                <div className={"flex justify-between "}>
                                    <div className={`bg-gray-200 rounded-full  py-1 pl-2  ${lang.substring(3, 5) === 'ar' ? 'rounded-l-none -ml-4' : 'rounded-r-none -mr-4'}`}>
                                        <button className="h-8 rounded-md px-1 focus:outline-none focus:border-none" onClick={() => { minusButtonClick() }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-4 w-4 stroke-gray-400 text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path></svg></button
                                        ><input type="text" className="form-control h-8 bg-gray-200 w-11 border-none text-center text-sm text-gray-500 " value={noOfProducts} />
                                        <button className="mx-4 h-8 rounded-md px-1 focus:outline-none focus:border-none" onClick={() => { addButtonClick() }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-4 w-4 stroke-gray-400 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                                        </button>
                                    </div>
                                    <button className="flex flex-1 justify-center rounded-full border border-sky-500 bg-sky-500 hover:bg-sky-600 focus:outline-none focus:border-none" onClick={() => { cartItemAdded() }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="my-auto h-4 w-4 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                                        </svg>
                                        <span className="my-auto ml-3 text-sm text-white">Add to Cart</span>
                                    </button>
                                </div>
                            </div>

                            <ul className="flex flex-col hidden lg:flex ">
                                <li className="flex  mb-12">
                                    <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-gift.svg"} height={25} width={25} alt="free delivery" />
                                    <div className="flex flex-col mx-6">
                                        <h5 className="text-indigo-900 text-sm font-semibold">Free Delivery</h5>
                                        <div className="text-xs text-gray-400">For all orders over AED 29</div>
                                    </div>
                                </li>
                                <li className="flex  mb-12">
                                    <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-return.svg"} height={25} width={25} alt="free delivery" />
                                    <div className="flex flex-col mx-6">
                                        <h5 className="text-indigo-900 text-sm font-semibold">Easy Return</h5>
                                        <div className="text-xs text-gray-400">Easy return and refund</div>
                                    </div>
                                </li>
                                <li className="flex  mb-12">
                                    <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-shield.svg"} height={25} width={25} alt="free delivery" />
                                    <div className="flex flex-col mx-6">
                                        <h5 className="text-indigo-900 text-sm font-semibold">Secure Payments</h5>
                                        <div>
                                            <Image src={"https://www.lifepharmacy.com/images/payment-method.svg"} height={200} width={200} alt="free delivery" />
                                        </div>
                                    </div>
                                </li>
                                <li className="flex  mb-12">
                                    <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-phone.svg"} height={25} width={25} alt="free delivery" />
                                    <div className="flex flex-col mx-6">
                                        <h5 className="text-indigo-900 text-sm font-semibold">24/7 Support</h5>
                                        <div className="text-xs text-gray-400">Dedicated Support</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul className="grid sm:grid-cols-4 grid-cols-2  justify-around  lg:hidden mx-4 space-x-3 mb-4">
                            <li className="  mb-3 bg-slate-100 p-2 rounded-lg">
                                <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-gift.svg"} className="mx-auto m-3" height={25} width={25} alt="free delivery" />
                                <div className="flex flex-col ">
                                    <h5 className="text-indigo-900 text-xs font-semibold text-center">Free Delivery</h5>
                                    <div className="text-xs text-gray-400 text-center">For all orders over AED 29</div>
                                </div>
                            </li>
                            <li className="  mb-3 p-2 rounded-lg bg-slate-100 ">
                                <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-return.svg"} className="mx-auto m-3" height={25} width={25} alt="free delivery" />
                                <div className="flex flex-col ">
                                    <h5 className="text-indigo-900 text-xs font-semibold text-center">Easy Return</h5>
                                    <div className="text-xs text-gray-400 text-center">Easy return and refund</div>
                                </div>
                            </li>
                            <li className="  mb-3 p-2 rounded-lg bg-slate-100 ">
                                <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-shield.svg"} className="mx-auto m-3" height={25} width={25} alt="free delivery" />
                                <div className="flex flex-col ">
                                    <h5 className="text-indigo-900 text-xs font-semibold text-center">Secure Payments</h5>
                                    <div>
                                        <Image src={"https://www.lifepharmacy.com/images/payment-method.svg"} className="mx-auto mb-3 " height={150} width={150} alt="free delivery" />
                                    </div>
                                </div>
                            </li>
                            <li className="  mb-3 p-2 rounded-lg bg-slate-100 ">
                                <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-phone.svg"} className="mx-auto m-3" height={25} width={25} alt="free delivery" />
                                <div className="flex flex-col ">
                                    <h5 className="text-indigo-900 text-xs font-semibold text-center">24/7 Support</h5>
                                    <div className="text-xs text-gray-400 text-center">Dedicated Support</div>
                                </div>
                            </li>
                        </ul>
                    </div>



                    <div className="flex justify-between">
                        <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/mobile-app/homescreen/Product%20page%20banner/ppb-1.gif" width="48%" className="" />
                        <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/mobile-app/homescreen/Product%20page%20banner/ppb-2.gif" width="48%" className="" />
                    </div>
                    <div className="py-4">
                        <h5 className="text-pink-700 text-xl font-semibold mb-2">Overview</h5>
                        <div dangerouslySetInnerHTML={{ __html: pro_data.short_description }} className="text-gray-500 md:text-sm text-xs leading-5" />
                    </div>
                    <div className="py-4">
                        <h5 className="text-pink-700 text-xl font-semibold mb-2 details-sec">Details</h5>
                        <div dangerouslySetInnerHTML={{ __html: pro_data.description }} className="text-gray-500 md:text-sm text-xs leading-5" />
                    </div>
                    <div className="py-4">
                        <h5 className="text-pink-700 text-xl font-semibold mb-2">More Info</h5>
                        <div className="text-gray-500">SKU: {pro_data.sku}</div>
                    </div>
                    <div className="lg:flex justify-center">
                        <div className="lg:w-3/12 w-full lg:px-0 px-6">
                            <div className="text-center">
                                <h3 className="text-blue-500 font-semibold text-2xl p-2">Product Rating</h3>
                                <h2 className=" font-semibold text-4xl p-5">{pro_data.rating}<span className="text-gray-600">/5</span></h2>
                                <div className="lg:w-1/2 w-1/4 mx-auto flex justify-around">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-4 h-4">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-4 h-4">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-4 h-4">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-4 h-4">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-4 h-4">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-500 text-center py-3">Based on {pro_data.number_of_reviews} Ratings</div>
                                <div className="flex justify-between mb-2">
                                    <div className="w-full bg-gray-200  h-3 className=">
                                        <div className="bg-yellow-400 h-3 " style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <div className="w-full bg-gray-200  h-3 className=">
                                        <div className="bg-yellow-400 h-3 " style={{ width: '38%' }}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <div className="w-full bg-gray-200  h-3 className=">
                                        <div className="bg-yellow-400 h-3 " style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <div className="w-full bg-gray-200  h-3 className=">
                                        <div className="bg-yellow-400 h-3 " style={{ width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <div className="w-full bg-gray-200  h-3 className=">
                                        <div className="bg-yellow-400 h-3 " style={{ width: '10%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-7/12 w-full py-3  ">
                            <h3 className="font-semibold text-xl ">Reviews (5 of 36)</h3>
                            <div className="flex justify-start py-4">
                                <div className="w-1/4">
                                    <h5 className="text-sm">Jaspreet singh</h5>
                                    <div className="w-1/2 flex justify-start py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-400 text-sm">Feb 21,2023</div>
                                </div>
                                <div className="w-3/4">
                                    <div className="text-gray-500 text-sm"><i>No comment</i></div>
                                </div>
                            </div>
                            <div className="flex justify-start py-4">
                                <div className="w-1/4">
                                    <h5 className="text-sm">Jaspreet singh</h5>
                                    <div className="w-1/2 flex justify-start py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-400 text-sm">Feb 21,2023</div>
                                </div>
                                <div className="w-3/4">
                                    <div className="text-gray-500 text-sm"><i>No comment</i></div>
                                </div>
                            </div>
                            <div className="flex justify-start py-4">
                                <div className="w-1/4">
                                    <h5 className="text-sm">Jaspreet singh</h5>
                                    <div className="w-1/2 flex justify-start py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-400 text-sm">Feb 21,2023</div>
                                </div>
                                <div className="w-3/4">
                                    <div className="text-gray-500 text-sm"><i>No comment</i></div>
                                </div>
                            </div>
                            <div className="flex justify-start py-4">
                                <div className="w-1/4">
                                    <h5 className="text-sm">Jaspreet singh</h5>
                                    <div className="w-1/2 flex justify-start py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-3 h-3">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-gray-400 text-sm">Feb 21,2023</div>
                                </div>
                                <div className="w-3/4">
                                    <div className="text-gray-500 text-sm"><i>No comment</i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}


export default SingleProductsContent;