"use client"
import { SessionProvider } from 'next-auth/react'
import Layout from 'components/layout'
import { useEffect, useState } from 'react'
import './globals.css'
import { getSession } from 'next-auth/react'
export default function RootLayout({ children, session }) {
  const [pageData, setPageData] = useState(null)
  const [brandsData, setbrandsData] = useState(null)

    getData().then(res=>
      setPageData(res.data)
    )

    console.log(pageData)
  
  

  return (
    <html lang="en">
      <SessionProvider session={session} >
        <Layout data={pageData}  sessionServ={sessionServ}>
          <body>{children}</body>
        </Layout>
      </SessionProvider>

    </html>
  )
}

async function getData(context) {
  const session = await getSession(context);

  var userAddrData = {
    data: {
      addresses: []
    }
  };
  if (session) {
    // console.log(session.token.token);
    // const userAddrheaders = { 'Authorization': `Bearer ${session.token.token}` };
    const userAddrheaderRes = await fetch('https://prodapp.lifepharmacy.com/api/user/addresses', {
      headers: {
        Authorization: `Bearer ${session.token.token}`
      }
    });
    userAddrData = await userAddrheaderRes.json();
    // console.log(userAddrData.data.addresses);
  }

  const res = await fetch("https://prodapp.lifepharmacy.com/api/categories");
  const data = await res.json();

  const res_brands = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
  const brands_data = await res_brands.json();
  return {
    data,
    brands_data,
    sessionServ: userAddrData.data.addresses,
  }
}
