
import SingleProductsContent from "../../components/single-product-page";
import SinglePageContent from "../../home/[slug]/page";
import getProductsData from "../../lib/getProductsData";

export default async function productPage({ params }) {
    const pro_data_res = await getProductsData()
    const pro_data = await pro_data_res

    const filt_proData = pro_data.data.products.filter(pro_data => (
        pro_data.slug === params.slug
    ))


    return (
        <>
            {/* <div className="bg-slate-300 flex justify-between sticky top-20 backdrop-blur-sm bg-opacity-95 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7  bg-slate-100 p-2 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 my-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

        </div> */}


            <SingleProductsContent pro_data={filt_proData} />
        </>
    )

}