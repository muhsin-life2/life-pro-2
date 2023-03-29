
import ImgPage from "./img-page";
const DynamicGrid = ({ data, isDesktop, isMobile }) => {
    // const [data, setdata] = useState(data);

    if (isDesktop === false && isMobile === false) {
        return <></>
    }
  
    return <div
        className={((isDesktop ? (data.settings.desktop.column > 1 ? ` grid-cols-${data.settings.desktop.column}` : "") : (data.settings.mobile.column > 1 ? ` grid-cols-${data.settings.mobile.column}` : "")) + (isDesktop ? (data.settings.desktop.row > 1 ? ` grid-rows-${data.settings.desktop.row}` : " !grid-flow-col") : (data.settings.mobile.row > 1 ? ` grid-rows-${data.settings.mobile.row}` : ""))) + " grid"}>
        {data.section_data_array.map(sec_data => (
            ((isDesktop && sec_data.desktop.image_url) || isMobile && sec_data.mobile.image_url ?
                <ImgPage sectionData={sec_data} isDesktop={isDesktop} isMobile={isMobile} />
                : "")
        ))}
    </div>


}

export default DynamicGrid;