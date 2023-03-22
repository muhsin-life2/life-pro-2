import Image from "next/image";
import Link from "next/link";

const DynamicGrid = ({ data, isDesktop, isMobile }) => {
    if (isDesktop === false && isMobile === false) {
        return <></>
    }
    return <div
        className={((isDesktop ? (data.section_title === "Main category" || data.section_title === "high" || data.section_title === "top categories" || data.section_title === "sunshine" || data.section_title === "brands" || data.section_title === "Money Saver" || data.section_title === "skin care" || data.section_title === "Everything Flat 30%"|| data.section_title === "2+1 title"|| data.section_title === "sports" ) ? "grid-flow-col " : "" : "") + (isDesktop ? (data.settings.desktop.column > 1 ? ` grid-cols-${data.settings.desktop.column}` : "") : (data.settings.mobile.column > 1 ? ` grid-cols-${data.settings.mobile.column}` : "")) + (isDesktop ? (data.settings.desktop.row > 1 ? ` grid-rows-${data.settings.desktop.row}` : "") : (data.settings.mobile.row > 1 ? ` grid-rows-${data.settings.mobile.row}` : ""))) + " grid px-3"}>
        {data.section_data_array.map(sec_data => (
            ((isDesktop && sec_data.desktop.image_url) || isMobile && sec_data.mobile.image_url ?
                <Link href={`home/${sec_data.slug}`}>
                    <Image src={isDesktop ? sec_data.desktop.image_url : sec_data.mobile.image_url} class="w-full h-full hover:grayscale-[50%] grayscale-0 transition-all duration-75"
                        height={isDesktop ? (sec_data.desktop.height ? sec_data.desktop.height : 30) : (sec_data.mobile.height ? sec_data.mobile.height : 30)}
                        width={isDesktop ? (sec_data.desktop.width ? sec_data.desktop.width : 390) : (sec_data.mobile.width ? sec_data.mobile.width : 390)} />
                </Link>
                : "")
        ))}
    </div>
}

export default DynamicGrid;