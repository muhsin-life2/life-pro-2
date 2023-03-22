import DynamicSliderGrid from "components/dynamic-slider-grid"
import DynamicGrid from "components/dynamic-grid";
import { useState, useEffect } from "react";
import { useWindowSize } from '@react-hook/window-size'
import Products from "./products";

const PageStructure = ({ data, pro_data }) => {

    const [domLoaded, setDomLoaded] = useState(false);
    const [width, height] = useWindowSize();

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    return (
        data.map(data =>
            <div class="max-w-7xl mx-auto">
                {domLoaded &&
                    data.section_type === "dynamic_slider_grid" ?

                    width <= 565 ?
                        <DynamicSliderGrid data={data} isDesktop={false} isMobile={!data.settings.hide_in_mobile_web || data.settings.hide_in_mobile_web === false} />
                        :
                        <DynamicSliderGrid data={data} isDesktop={!data.settings.hide_in_desktop_web || data.settings.hide_in_desktop_web === false} isMobile={false} />
                    : ""
                }

                {
                    domLoaded &&
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
                    <Products data={pro_data} /></>
               
                    : ""
                }
            </div>
        )

    )
}

export default PageStructure;