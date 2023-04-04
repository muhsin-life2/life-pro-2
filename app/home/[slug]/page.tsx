// "use client"; // this is a client component

import { FC, Suspense } from "react";
import PageStructure from "../../components/page-structure";
import getHomePageData from "../../lib/getHomePageData";
import getProductsData from "../../lib/getProductsData";
import { notFound } from "next/navigation";
export const dynamic = 'force-static'

// async function getStaticParams(slug) {

//     const res = await fetch(`https://prodapp.lifepharmacy.com/api/cms/page/${slug}`);
//     if (!res.ok) {
//         throw new Error("Unable to fetch Page Data")
//     }
//     return res.json();

// }


// export default SinglePageContent;


async function getSinglePageData(params) {

    const res = await fetch(`https://prodapp.lifepharmacy.com/api/cms/page/${params}`)

    if (!res.ok) {
        notFound()
    }

    return res.json()
}

const SinglePageContent = async ({ params }) => {
    console.log(params);


    const data_res = await getSinglePageData(params.slug)
    const data = await data_res

    const pro_data_res = await getProductsData()
    const pro_data = await pro_data_res


    return (
        <>
            <PageStructure data={data.data.content} pro_data={pro_data.data.products} />
        </>
    )
}

export async function generateStaticParams() {

    var filt_paths = [
        'pre-ramadan-sale',
        'offers',
        'healthy-ramadan',
        'health_checkup',
        'intimate-care',
        '30-mins-delivery',
        'clearance-sale',
        'beauty-care',
        'sports-nutrition',
        'nutrition-and-vitamins',
        'home-healthcare',
        'mother-baby-care',
        'personal-care',
        'wellbeing',
        'facial-skin-care',
        'sun-care',
        'proteins',
        'vitamins',
        'sunshine',
        'hair-skin-nails',
        'mens-care',
        'fish-oil-omegas',
        'antiseptics-disinfectant',
        'multivitamins-60c1c134',
        'travel_essentials',
    ]

    return filt_paths.map((slug) => ({

        slug,

    }));
}

export default SinglePageContent;
