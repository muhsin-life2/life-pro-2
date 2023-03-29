"use client"
import DynamicSliderGrid from "components/dynamic-slider-grid"
import DynamicGrid from "components/dynamic-grid";
import { useState, useEffect } from "react";
import { useWindowSize } from '@react-hook/window-size'
import Products from "./products";
import generateData from "@/lib/generateData";

const PageStructure = ({ data, pro_data }) => {

    const [domLoaded, setDomLoaded] = useState(null);
    const [width, height] = useWindowSize();
    const [proDatas, setProData] = useState(pro_data);

    const proData = `https://prodapp.lifepharmacy.com/api/web/products?order_by=popularity&type=cols&skip=0&take=7&new_method=true&lang=ae-en`

    useEffect(() => {
        setDomLoaded(true);

        fetch(proData)
            .then(res => res.json())
            .then(res => setProData(res.data.products))
    }, []);


    return (
        data ?
            data.map(data =>
                <div class="max-w-[1440px] mx-auto">
                    {domLoaded &&
                        data.section_type === "dynamic_slider_grid" ?

                        width <= 565 ?
                            <DynamicSliderGrid data={data} isDesktop={false} isMobile={!data.settings.hide_in_mobile_web || data.settings.hide_in_mobile_web === false} />
                            :
                            <DynamicSliderGrid data={data} isDesktop={!data.settings.hide_in_desktop_web || data.settings.hide_in_desktop_web === false} isMobile={false} />
                        : ""
                    }

                    {domLoaded &&

                        data.section_type === "dynamic_grid" ?
                        width <= 565 ?
                            <DynamicGrid data={data} isDesktop={false} isMobile={!data.settings.hide_in_mobile_web || data.settings.hide_in_mobile_web === false} />
                            : <DynamicGrid data={data} isDesktop={!data.settings.hide_in_desktop_web || data.settings.hide_in_desktop_web === false} isMobile={false} />
                        : ""
                    }
                    {domLoaded &&
                        data.section_type === "product_grid" ?
                        <>
                            <h4 class="md:text-xl text-sm text-center my-5 font-bold">{data.section_title}</h4>
                            {proDatas ?
                                <Products data={proDatas} /> : ""}

                        </>
                        : ""
                    }
                </div>
            )
            : <div class="animate-pulse px-3 py-1 max-w-[1440px] mx-auto">
                <div role="status" class="flex h-96 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="my-3 grid grid-flow-col space-x-4">
                    <div role="status" class="flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="my-3 grid grid-flow-col space-x-4">
                    <div role="status" class="w m flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="m flex h-32 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 lg:h-64">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div role="status" class="flex h-56 items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>



    )
}

export default PageStructure;