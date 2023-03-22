import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useWindowSize } from '@react-hook/window-size'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const DynamicSliderGrid = ({data, isDesktop, isMobile}) => {

    if (isDesktop === false && isMobile === false) {
        return <></>
    }

    return <>

        {data.settings.show_section_title ?
            <div class="text-lg text-center my-3">{data.section_title}</div>
            : ""}
        <Swiper
            slidesPerView={isDesktop ? data.settings.desktop.column : data.settings.mobile.column}
            pagination={{
                dynamicBullets: true,
            }}
            onPaginationHide={data.settings.show_pagination === true}
            navigation={data.settings.navigation ? true : false}
            modules={[Pagination, Navigation]}
            autoplay={data.settings.autoplay ? true : false}
            spaceBetween={20}
            className="mySwiper mx-auto">

            {data.section_data_array.map(sec_data => (
                <SwiperSlide>
                    {(sec_data.desktop.image_url || sec_data.mobile.image_url) &&
                        <Link href={`home/${sec_data.slug}`} >
                            <Image src={isDesktop ? sec_data.desktop.image_url : sec_data.mobile.image_url} class="mx-auto  w-full  hover:grayscale-[50%] grayscale-0 transition-all duration-75"
                                height={isDesktop ? (sec_data.desktop.height ? sec_data.desktop.height : 109) : (sec_data.mobile.height ? sec_data.mobile.height : 50)}
                                width={isDesktop ? (sec_data.desktop.width ? sec_data.desktop.width : 390) : sec_data.mobile.width ? sec_data.mobile.width : 50} /></Link>
                    }
                </SwiperSlide>
            ))}
        </Swiper>
    </>

}

export default DynamicSliderGrid;