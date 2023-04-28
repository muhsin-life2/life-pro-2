// "use client"; // this is a client component

import { FC, Suspense } from "react";
import PageStructure from "../../components/page-structure";
import getHomePageData from "../../lib/getHomePageData";
import getProductsSearchData from "../../lib/getProductsSearchData";
import { notFound } from "next/navigation";
import { ProductsPage } from "../../components/products-page";
import getProductsDataByCat from "../../lib/getProductsDataByCat";

// export const dynamic = 'force-static'

// async function getStaticParams(slug) {

//     const res = await fetch(`https://prodapp.lifepharmacy.com/api/cms/page/${slug}`);
//     if (!res.ok) {
//         throw new Error("Unable to fetch Page Data")
//     }
//     return res.json();

// }


// export default SinglePageContent;


async function getSinglePageData(slug, lang) {

    const res = await fetch(`https://prodapp.lifepharmacy.com/api/cms/page/${slug}?lang=${lang}`)

    if (!res.ok) {
        notFound()
    }

    return res.json()
}

const SinglePageContent = async ({ params }) => {
    if (params.slug === "search" || params.slug === "products") {

        return (
            <ProductsPage />
        )
    }
    else {
        const data = await getSinglePageData(params.slug, params.lang)


        return (
            <PageStructure data={data.data.content} lang={params.lang} >
                { /* @ts-expect-error Async Server Component */}
                <Products lang={params.lang} slug={data.section_data_object?.slug} type_key={data.section_data_object?.type_key} />
            </PageStructure >
        )
    }

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
        'search',
        'products'
    ]

    return filt_paths.map((slug) => ({
        slug

    }));
}

export default SinglePageContent;
