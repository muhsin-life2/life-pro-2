
import Layout from "components/layout";
import Products from "components/products";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const productPage = ({ filt_data, proDataFiltCat, data2, brands_data }) => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [noOfProducts, setNoOfProducts] = useState(1);
    const [addedToCart, addToCart] = useState(false);


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

    return (
        <Layout data={data2} brands_data={brands_data}>
            {addedToCart ?
                <div class="fixed top-0 z-50 right-0 m-5 w-full">
                    <div class="flex justify-end">
                        <div id="toast-success" class="flex flex-col items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-sky-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                            <div class="bg-black h-1 w-full rounded-full mb-3">
                                <div id="width-ele" class="bg-white h-1 rounded-full"  style={{ width: '100%' }}></div>
                            </div>
                            <div class="flex w-full justify-between">
                                <div class=" text-sm font-normal text-white "><span class="text-lg font-semibold">Success</span><br />Cart Successfully Updated!</div>
                                <div class="mt-1 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                                    <svg aria-hidden="true" class="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Check icon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : ""}


            <div class="max-w-7xl mx-auto md:text-sm sm:text-xs">
                {filt_data.map(pro_data => (
                    <div>
                        <div class="flex justify-between mb-7">
                            <div class="flex justify-center flex-wrap lg:flex-nowrap ">
                                {pro_data.images.gallery_images[0] ? <>
                                    <div class="flex lg:flex-col order-last lg:order-none">

                                        {pro_data.images.gallery_images.map((gal_img, index) => (
                                            <div class="mr-2">
                                                <Image className={index === selectedImg ? "border border-blue-400 rounded-lg mb-3  w-2/3 lg:w-fit" : "mb-3 w-2/3 lg:w-fit"} src={gal_img.thumbnail} height={80} width={80} onClick={() => onClickHandler(index)} alt="thumbnail-img" />
                                            </div>
                                        ))}
                                    </div>
                                    <div class="flex flex-wrap">
                                        <Image class=" lg:w-fit" src={pro_data.images.gallery_images[selectedImg].image} height={600} width={600} alt="main-img" />
                                    </div>
                                </>

                                    : <>
                                        <div class="flex flex-col ">
                                            <div>
                                                <Image className={0 === selectedImg ? "border border-blue-400 rounded-lg mb-3 w-2/3 lg:w-fit" : "mb-3 w-2/3 lg:w-fit"} src={pro_data.images.featured_image} height={80} width={80} onClick={() => onClickHandler(0)} alt="thumbnail-img" />
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap">
                                            <Image class="w-1/2 lg:w-fit" src={pro_data.images.featured_image} height={600} width={600} alt="main-img" />
                                        </div>
                                    </>}

                            </div>
                            <div class="flex justify-around">
                                <div class="flex flex-col justify-start lg:w-1/2 w-full ">
                                    <h1 class="text-indigo-900 font-semibold text-lg">{pro_data.title}</h1>
                                    <div class="flex justify-start py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-5 h-5 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <p class="text-gray-400 text-sm">{pro_data.rating} <span class="text-[11px]">(REVIEWS {pro_data.number_of_reviews})</span></p>
                                    </div>
                                    <div class="flex py-2">
                                        {pro_data.categories.map(cat_data => (
                                            <Link href="#" className="hover:text-white hover:bg-red-500 text-red-500 py-1 px-2 text-xs border border-red-500 rounded-md ">{cat_data.name}</Link>
                                        ))}
                                    </div>
                                    <div class="flex justify-between mb-3">
                                        <p class="text-xs">Brand: <span class="text-blue-400">{pro_data.brand.name}</span></p>
                                        <p class="text-xs">SKU: {pro_data.sku}</p>
                                    </div>
                                    <p class="text-xs text-gray-400 mb-5">{pro_data.short_description}</p>

                                    <div class="flex justify-between my-6">
                                        <div class="flex justify-between">
                                            <div class="text-red-500 mr-3">
                                                <span class="text-[8px]">AED </span>
                                                <span class="font-semibold text-3xl">{pro_data.sale_price}</span>
                                            </div>
                                            <div class="text-sky-500 text-xs my-auto text-sm">
                                                <span ><del>AED {pro_data.filter_price}.00</del></span>
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <Image class="my-auto" data-v-11f2193b="" src="https://www.lifepharmacy.com/images/express-nr.svg" width={30} height={22} />
                                            <span class="text-xs my-auto ml-3">1-3 HOURS</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between">
                                        <button class="border border-sky-500 rounded-md h-8 px-2" onClick={() => { minusButtonClick() }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-blue-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                            </svg>
                                        </button>
                                        <input type="text" class="form-control w-11 h-8 text-center border-none text-gray-500 text-sm" value={noOfProducts} />
                                        <button class="border border-sky-500 rounded-md h-8 px-2 bg-sky-500 hover:bg-sky-600 mr-5" onClick={() => { addButtonClick() }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4  text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                            </svg>
                                        </button>
                                        <button onClick={() => { cartItemAdded() }} class="border border-sky-500 rounded-md flex flex-1 justify-center bg-sky-500 hover:bg-sky-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 my-auto text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <span class="my-auto text-sm ml-3 text-white" >Add to Cart</span>
                                        </button>
                                    </div>
                                </div>

                                <ul class="flex flex-col hidden lg:flex ">
                                    <li class="flex  mb-12">
                                        <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-gift.svg"} height={25} width={25} />
                                        <div class="flex flex-col ml-6">
                                            <h5 class="text-indigo-900 text-sm font-semibold">Free Delivery</h5>
                                            <p class="text-xs text-gray-400">For all orders over AED 29</p>
                                        </div>
                                    </li>
                                    <li class="flex  mb-12">
                                        <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-return.svg"} height={25} width={25} />
                                        <div class="flex flex-col ml-6">
                                            <h5 class="text-indigo-900 text-sm font-semibold">Easy Return</h5>
                                            <p class="text-xs text-gray-400">Easy return and refund</p>
                                        </div>
                                    </li>
                                    <li class="flex  mb-12">
                                        <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-shield.svg"} height={25} width={25} />
                                        <div class="flex flex-col ml-6">
                                            <h5 class="text-indigo-900 text-sm font-semibold">Secure Payments</h5>
                                            <div>
                                                <Image src={"https://www.lifepharmacy.com/images/payment-method.svg"} height={200} width={200} />
                                            </div>
                                        </div>
                                    </li>
                                    <li class="flex  mb-12">
                                        <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-phone.svg"} height={25} width={25} />
                                        <div class="flex flex-col ml-6">
                                            <h5 class="text-indigo-900 text-sm font-semibold">24/7 Support</h5>
                                            <p class="text-xs text-gray-400">Dedicated Support</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <ul class="flex  w-full justify-around  lg:hidden  ">
                                <li class="  mb-12">
                                    <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-gift.svg"} class="mx-auto mb-3" height={25} width={25} />
                                    <div class="flex flex-col ">
                                        <h5 class="text-indigo-900 text-xs font-semibold text-center">Free Delivery</h5>
                                        <p class="text-xs text-gray-400 text-center">For all orders over AED 29</p>
                                    </div>
                                </li>
                                <li class="  mb-12">
                                    <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-return.svg"} class="mx-auto mb-3" height={25} width={25} />
                                    <div class="flex flex-col ">
                                        <h5 class="text-indigo-900 text-xs font-semibold text-center">Easy Return</h5>
                                        <p class="text-xs text-gray-400 text-center">Easy return and refund</p>
                                    </div>
                                </li>
                                <li class="  mb-12">
                                    <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-shield.svg"} class="mx-auto mb-3" height={25} width={25} />
                                    <div class="flex flex-col ">
                                        <h5 class="text-indigo-900 text-xs font-semibold text-center">Secure Payments</h5>
                                        <div>
                                            <Image src={"https://www.lifepharmacy.com/images/payment-method.svg"} class="mx-auto mb-3 " height={150} width={150} />
                                        </div>
                                    </div>
                                </li>
                                <li class="  mb-12">
                                    <Image src={"https://www.lifepharmacy.com/images/svg/ecommerce-phone.svg"} class="mx-auto mb-3" height={25} width={25} />
                                    <div class="flex flex-col ">
                                        <h5 class="text-indigo-900 text-xs font-semibold text-center">24/7 Support</h5>
                                        <p class="text-xs text-gray-400 text-center">Dedicated Support</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="flex justify-between">
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/mobile-app/homescreen/Product%20page%20banner/ppb-1.gif" width="48%" class="" />
                            <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/mobile-app/homescreen/Product%20page%20banner/ppb-2.gif" width="48%" class="" />
                        </div>
                        <div class="p-4">
                            <h5 class="text-pink-700 text-xl font-semibold mb-2">Overview</h5>
                            <div class="text-gray-500 text-sm">{pro_data.short_description}</div>
                        </div>
                        <div class="p-4">
                            <h5 class="text-pink-700 text-xl font-semibold mb-2">Details</h5>
                            <div class="text-gray-500 text-sm">{pro_data.description}</div>
                        </div>
                        <div class="p-4">
                            <h5 class="text-pink-700 text-xl font-semibold mb-2">More Info</h5>
                            <div class="text-gray-500">SKU: {pro_data.sku}</div>
                        </div>
                        <div class="lg:flex justify-center">
                            <div class="lg:w-3/12 w-full lg:px-0 px-6">
                                <div class="text-center">
                                    <h3 class="text-blue-500 font-semibold text-2xl p-2">Product Rating</h3>
                                    <h2 class=" font-semibold text-4xl p-5">{pro_data.rating}<span class="text-gray-600">/5</span></h2>
                                    <div class="lg:w-1/2 w-1/4 mx-auto flex justify-around">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-gray-500 text-center p-3">Based on {pro_data.number_of_reviews} Ratings</div>
                                    <div class="flex justify-between mb-2">
                                        <small class="text-[10px]">5</small>
                                        <div class="w-full bg-gray-200  h-3 dark:bg-gray-700 mx-3">
                                            <div class="bg-yellow-400 h-3 " style={{ width: '85%' }}></div>
                                        </div>
                                        <small class="text-[10px]">10</small>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <small class="text-[10px]">4</small>
                                        <div class="w-full bg-gray-200  h-3 dark:bg-gray-700 mx-3">
                                            <div class="bg-yellow-400 h-3 " style={{ width: '38%' }}></div>
                                        </div>
                                        <small class="text-[10px]">4</small>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <small class="text-[10px]">3</small>
                                        <div class="w-full bg-gray-200  h-3 dark:bg-gray-700 mx-3">
                                            <div class="bg-yellow-400 h-3 " style={{ width: '60%' }}></div>
                                        </div>
                                        <small class="text-[10px]">7</small>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <small class="text-[10px]">2</small>
                                        <div class="w-full bg-gray-200  h-3 dark:bg-gray-700 mx-3">
                                            <div class="bg-yellow-400 h-3 " style={{ width: '30%' }}></div>
                                        </div>
                                        <small class="text-[10px]">5</small>
                                    </div>
                                    <div class="flex justify-between mb-2">
                                        <small class="text-[10px]">1</small>
                                        <div class="w-full bg-gray-200  h-3 dark:bg-gray-700 mx-3">
                                            <div class="bg-yellow-400 h-3 " style={{ width: '10%' }}></div>
                                        </div>
                                        <small class="text-[10px]">1</small>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:w-7/12 w-full p-3 px-6 ">
                                <h3 class="font-semibold text-xl ">Reviews (5 of 36)</h3>
                                <div class="flex justify-start py-4">
                                    <div class="w-1/4">
                                        <h5 class="text-sm">Jaspreet singh</h5>
                                        <div class="w-1/2 flex justify-start py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-400 text-sm">Feb 21,2023</p>
                                    </div>
                                    <div class="w-3/4">
                                        <p class="text-gray-500 text-sm"><i>No comment</i></p>
                                    </div>
                                </div>
                                <div class="flex justify-start py-4">
                                    <div class="w-1/4">
                                        <h5 class="text-sm">Jaspreet singh</h5>
                                        <div class="w-1/2 flex justify-start py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-400 text-sm">Feb 21,2023</p>
                                    </div>
                                    <div class="w-3/4">
                                        <p class="text-gray-500 text-sm"><i>No comment</i></p>
                                    </div>
                                </div>
                                <div class="flex justify-start py-4">
                                    <div class="w-1/4">
                                        <h5 class="text-sm">Jaspreet singh</h5>
                                        <div class="w-1/2 flex justify-start py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-400 text-sm">Feb 21,2023</p>
                                    </div>
                                    <div class="w-3/4">
                                        <p class="text-gray-500 text-sm"><i>No comment</i></p>
                                    </div>
                                </div>
                                <div class="flex justify-start py-4">
                                    <div class="w-1/4">
                                        <h5 class="text-sm">Jaspreet singh</h5>
                                        <div class="w-1/2 flex justify-start py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-3 h-3">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-400 text-sm">Feb 21,2023</p>
                                    </div>
                                    <div class="w-3/4">
                                        <p class="text-gray-500 text-sm"><i>No comment</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="font-semibold text-2xl text-center">You May Also Like</h3>
                            <Products data={proDataFiltCat} isProductsPage={false} />
                        </div>
                    </div>
                ))}
            </div>

        </Layout>
    )
}
export default productPage;

export async function getStaticPaths() {
    const res = await fetch("https://adminapp.lifepharmacy.com/api/web/products")
    const data = await res.json();
    const allPaths = data.data.products.slice(0, 10).map(pro_data => {

        return {
            params: {
                product: pro_data.slug.toString()
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context?.params.product
    const res = await fetch("https://adminapp.lifepharmacy.com/api/web/products");
    const data = await res.json();

    const filt_data = data.data.products.filter(pro_data => (
        pro_data.slug === id
    ))

    const res2 = await fetch("https://adminapp.lifepharmacy.com/api/categories");
    const data2 = await res2.json();

    // https://prodapp.lifepharmacy.com/api/categories

    const proDataFiltCat = data.data.products.filter(proCatData => (
        // console.log(proCatData.categories[0].id)
        proCatData.categories[0] && filt_data[0].categories[0] ? proCatData.categories[0].id === filt_data[0].categories[0].id : ""
        // console.log(proCatData.categories[0].id)
        // console.log(filt_data[0].categories[0].id)
    ))


    const brands_res = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
    const brands_data = await brands_res.json();

    return {
        props: {
            filt_data,
            proDataFiltCat,
            data2,
            brands_data
        }
    }
}