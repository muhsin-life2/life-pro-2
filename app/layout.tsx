import AuthContext from "../components/AuthContext"
import Layout from "../components/layout"
import getBrandsData from "../lib/getBrandsData"
import getCategoryData from "../lib/getCategoryData"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageData = getCategoryData()
  const data = await pageData

  const brandsData = getBrandsData()
  const brands_data = await brandsData



  const sessionData = {
    data: {
      addresses: []
    }
  }

  return (
    <html lang="en">

      {/* <Layout data={data} brands_data={brands_data} sessionServ={sessionData}> </Layout> */}
        <body>{children}</body>
     

    </html>
  )
}
