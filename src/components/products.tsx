import getProductsData from "../lib/getProductsData";
import ProductsSlider from "./products-slider";

export default async function Products({ lang, slug, type_key }) {


    function reviewColor(rating) {
        if (rating == 0) {
            return "gray"
        }
        else {
            return "orange"
        }
    }

    const res = await getProductsData(lang, slug, type_key)
    const proData = await res.data.products

    // const res = await getProductsData(lang, slug, type_key)
    // const proData = await res.data.products
    // const [proDatas, setProData] = useState([
    //     {
    //         slug: "",
    //         rating: "",
    //         title: "",
    //         images: {
    //             featured_image: ""
    //         },
    //         price: "",
    //         categories: [
    //             {
    //                 name: ""
    //             }
    //         ],
    //         offers: {
    //             is_special: ""
    //         }
    //     }
    // ]);

    // useEffect(() => {

    // }, []);


    return (
        proData ?
            <ProductsSlider proData={proData} />
            : <>loading</>
    )
}

