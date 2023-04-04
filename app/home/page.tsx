import type { Metadata } from 'next'
import getAllUsers from '../lib/getAllUsers'
import Link from "next/link"
import PageStructure from '../components/page-structure'
import getHomePageData from '../lib/getHomePageData'
import getProductsData from '../lib/getProductsData'
import { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'Users',
}

export default async function UsersPage() {
    const data_res = await getHomePageData()
    const data = await data_res

    const pro_data_res = await getProductsData()
    const pro_data = await pro_data_res

    return (
        <>
            <PageStructure data={data.data.content} pro_data={pro_data.data.products} />
        </>
    )
}