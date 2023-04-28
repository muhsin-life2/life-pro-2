import type { Metadata } from 'next'
import Link from "next/link"

import PageStructure from '@/components/page-structure'
import getHomePageData from '@/lib/getHomePageData'

import Products from '@/components/products'

export default async function UsersPage({ params }:{params:any}) {
    const data_res = await getHomePageData(params.lang)

    // const pro_data_res = await getProductsData(params.lang)
    // const pro_data = await pro_data_res

    return (
        <>

            {data_res.data.content.map((data: any) => (
                <PageStructure data={data} lang={params.lang}>
                    { /* @ts-expect-error Async Server Component */}
                    <Products lang={params.lang} slug={data.section_data_object?.slug} type_key={data.section_data_object?.type_key} />
                </PageStructure>
            ))}

        </>
    )
}