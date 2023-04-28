import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Layout from '@/components/layout'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import getCategoryData from '@/lib/getCategoryData'
import getBrandsData from '@/lib/getBrandsData'
import { useTranslation } from 'react-i18next';
import { IntlProvider } from "react-intl";
import { appWithTranslation } from 'next-i18next'
import translate from '../translations'

 function App({ Component, pageProps: { session, ...pageProps } }: AppProps, { data, brands_data, sessionServ, langData }:
  {
    data: any,
    brands_data: any,
    sessionServ: any,
    langData: any
  }) {

  const router = useRouter()
  return (
    <SessionProvider session={session} >
      <Layout data={data} brands_data={brands_data} sessionServ={sessionServ} isArabic={false} lang={'ae-en'} langData={''}>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </SessionProvider>
  )
}

export async function getInitialProps(context: any) {
  
  var { locale } = useRouter();
  if (locale === undefined) {
    locale = "ae-en"
  }

  
  const lang: Array<string> = locale?.split("-");

  const data = await getCategoryData()

  const brands_data = await getBrandsData()

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
  return {
    data,
    brands_data,
    sessionServ: userAddrData.data.addresses,

  
  }
}

export default appWithTranslation(App)