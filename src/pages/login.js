import { useSession, getSession } from 'next-auth/react'

import { Modal } from 'flowbite'
import { ModalOptions, ModalInterface } from 'flowbite'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Example from 'components/categories-accordion';
import AuthModal from 'components/auth-modal';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";
export default function Login({ data }) {
    // SwiperCore.use([Autoplay])

    function showModal() {
        const $modalElement = document.querySelector('#popup-modal');

        const modalOptions = {
            placement: 'bottom-right',
            backdrop: 'dynamic',
            backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
            closable: true,
            onHide: () => {
                console.log('modal is hidden');
            },
            onShow: () => {
                console.log('modal is shown');
            },
            onToggle: () => {
                console.log('modal has been toggled');
            }
        }

        const modal = new Modal($modalElement, modalOptions);
        modal.show()
    }

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 100)}s`;
    };


    return (
        <>
            {/* {console.log(session)} */}




            <Swiper pagination={{
                dynamicBullets: true,
            }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/mobile-app/homescreen/1010sale/PRSS-Web-Home.gif?format=webp&quality=85" onClick={openmo} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/mobile-app/homescreen/1010sale/PRSS-Web-Home.gif?format=webp&quality=85" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lifeadmin-app.s3.me-south-1.amazonaws.com/mobile-app/homescreen/1010sale/PRSS-Web-Home.gif?format=webp&quality=85" />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

            <Example />

            {/* <div id="popup-modgrayscale z-50 grayscale overflow-y-auto overflow-x-hidden p-4 shadow-md md:h-auto w-96 rounded-b-3xl">
                <div class="relative h-full w-full max-w-md  bg-white md:h-auto rounded-3xl">
                    <buttongrayscale.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal"></button>
                    <div class="rounded-t-3xl bg-green-400 p-6 text-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-36 h-36 relative mx-auto">
                            <path stroke-linecap="round" strograyscale.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto h-10 w-10 absolute inset-0 top-[75px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="p-5 text-center">
                        <h3 class="mb-5 text-center text-3xl font-bold">Verified Device</h3>
                        <p class="font-semibold text-gray-600">Sign in Successfull</p>

                        <button type="button" class="mt-10 rounded-lg border border-gray-200 bg-green-400 px-5 py-1.5 text-sm font-medium text-white hover:bg-green-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">OK</button>
                    </div>
                </div>
            </div>
            <div class="font-bold text-center p-5 text-xl" onClick={() => { showModal() }}>Hello {data ? data.token.name : 'User'}</div> */}
        </>
    )
}

export async function getServerSideProps(context) {


    return {
        props: {
        }
    }
}