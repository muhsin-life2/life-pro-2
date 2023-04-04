import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

const Products = ({ data, isProductsPage }) => {
    function reviewColor(rating) {
        if (rating == 0) {
            return "gray"
        }
        else {
            return "orange"
        }
    }
    return (
        <>
            <div className="">

                {isProductsPage ?
                    <div className="py-5 w-full">
                        <h1 className="text-4xl text-center p-10 text-blue-400 font-semibold">Products</h1>
                        <div className="text-center text-blue-500 text-2xl"></div>
                    </div> : ""}
                <div>
                    {isProductsPage ?
                        <div className="flex justify-between text-gray-400 ml-5 mb-5">
                            <p>Showing results {data.length} of {data.length}</p>
                        </div> : ""}
                    <Swiper
                        className="my-7 "
                        slidesPerView={2}
                        modules={[Autoplay]}
                        breakpoints={{
                            // when window width is >= 640px
                            1024: {
                                width: 1024,
                                slidesPerView: 4,
                            },
                            // when window width is >= 768px
                            520: {
                                width: 520,
                                slidesPerView: 3
                            },
                        }}

                    >
                        {data.map(pro_data => (
                            <SwiperSlide className="cursor-grab w-full mr-5">
                                <Link href={`/products/${pro_data.slug}`} className="  mr-5   relative  " >
                                    <div className=" bg-gray-200 relative w-fit p-2 mx-auto rounded-lg rounded-b-none">
                                        <Image className="rounded-lg " src={pro_data.images.featured_image} width={250} height={250} alt="product_img" />
                                        <div className="flex absolute bg-amber-400 rounded-xl px-[6px] py-[3px] top-3 right-3 shadow-xl">
                                            <div className="my-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill={reviewColor(pro_data.rating)} viewBox="0 0 24 24" stroke-width="1.5" stroke={reviewColor(pro_data.rating)} className="lg:w-4 stroke-white lg:h-4 w-3 h-3 mr-1 fill-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>
                                            <p className="lg:text-sm text-[10px] my-auto text-white ml-1">{pro_data.rating}</p>
                                        </div>
                                    </div>
                                    <div className="bg-white px-3 py-3 border-2 rounded-lg rounded-t-none">
                                        <div className="text-blue-400 ">
                                            <span className="md:text-xs text-[10px]">AED</span> <span className="lg:text-xl sm:text-sm text-xs font-semibold">{parseFloat(pro_data.price).toFixed(2)}</span>
                                        </div>
                                        <div className="h-10 ">
                                        <div className="lg:text-sm text-[10px] ">{pro_data.title.substring(0, 50)+'...'}</div>

                                        </div>
                                        <div className="mt-4">
                                            <div className="flex justify-start">
                                                {pro_data.categories.slice(0, 1).map(cat => (
                                                    <button className="lg:text-xs text-[9px] border border-gray-300 hover:bg-gray-300 hover-border-white mr-5 rounded-md px-2 bg-white py-1">{cat.name.substring(0, 15) + "..."}</button>
                                                ))}
                                            </div>
                                            <div className="flex justify-between mt-4">
                                                <div className="sm:flex hidden">
                                                    <Image className="my-auto" data-v-11f2193b="" src="https://www.lifepharmacy.com/images/express-nr.svg" alt="delivery-img" width={15} height={15} />
                                                    <span className="lg:text-xs my-auto lg:ml-3 ml-1 text-[10px]">1-3 HOURS</span>
                                                </div>
                                                <button className="bg-blue-500 text-white lg:px-4 px-3 rounded-md flex justify-end flex-1  sm:flex-none lg:py-1 py-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 my-auto">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                    </svg>
                                                    <span className="my-auto text-sm sm:ml-3 mx-auto">ADD</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default Products;