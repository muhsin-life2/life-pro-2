"use client"
import PageStructure from "components/page-structure";
import Layout from "components/layout";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";


async function getData(context) {
    // const session = await getSession(context);

    // var userAddrData = {
    //     data: {
    //         addresses: []
    //     }
    // };
    // if (session) {
    //     // console.log(session.token.token);
    //     // const userAddrheaders = { 'Authorization': `Bearer ${session.token.token}` };
    //     const userAddrheaderRes = await fetch('https://prodapp.lifepharmacy.com/api/user/addresses', {
    //         headers: {
    //             Authorization: `Bearer ${session.token.token}`
    //         }
    //     });
    //     userAddrData = await userAddrheaderRes.json();
    //     // console.log(userAddrData.data.addresses);
    // }


    const home_page_res = await fetch("https://prodapp.lifepharmacy.com/api/cms/page/home");
    const hp_data = await home_page_res.json();
    const home_page_data = hp_data.data.content;
    // const data = pro_data.data.products;

    // const pro_res = await fetch("https://prodapp.lifepharmacy.com/api/web/products?order_by=popularity&type=cols&skip=0&take=7&new_method=true&lang=ae-en");
    // const pro_data_res = await pro_res.json();
    // const pro_data = pro_data_res.data.products;



    return {

        home_page_data,
       
    }
}

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [home_page_data, setHomePageData] = useState(null)
    const [proData, setProData] = useState(null)

    useEffect(() => {
        getData().then(res => setHomePageData(res.home_page_data))
    }, []);
    return (
        <PageStructure data={home_page_data} pro_data={proData} />
    )

}