import Layout from "components/layout";
import Products from "components/products"

export default function products({data, data2, brands_data}) {
    return(
        <Layout data={data2} brands_data={brands_data}>
             <Products data={data} isProductsPage={true}/>
        </Layout>
     
    )
}

export async function getServerSideProps(){
    const res = await fetch("https://adminapp.lifepharmacy.com/api/web/products");
    const pro_data = await res.json();
    const data = pro_data.data.products;
    
  const res2 = await fetch("https://prodapp.lifepharmacy.com/api/categories");
  const data2 = await res2.json();

  const brands_res = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
  const brands_data = await brands_res.json();

    return {
        props:{
            data, 
            data2, 
            brands_data
        }
    }
}

