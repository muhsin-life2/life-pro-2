import Layout from "components/layout";
import PageStructure from "components/page-structure";

const SinglePageContent = ({ data, brands_data, hp_data, pro_data }) => {

    return (
        <Layout data={data} brands_data={brands_data}>
            <PageStructure data={hp_data} pro_data={pro_data}  />
        </Layout>
    )

}
export default SinglePageContent;

export async function getStaticPaths() {
    const res = await fetch("https://prodapp.lifepharmacy.com/api/cms/page/home")
    const data = await res.json();
    const home_page_data = data.data.content;
    // var allPaths = null
    const allPaths = home_page_data.filter(contObj => (contObj.section_type === "dynamic_grid" || "dynamic_slider_grid") && contObj.section_data_array && contObj.section_data_array.length != 0
    ).filter(contObj => contObj.section_data_array.some(secDataArray => secDataArray.slug != null))
    // console.log(allPaths);
    // const filt_path = allPaths.slice(0,2).map(secData=>(
    //     secData.map(secDataArray=>
    //         secDataArray.length!=0
    // ))
    // )

    // console.log(filt_path)
    var slugs = []
    allPaths.map(secData =>
        secData.section_data_array.map(secDataArray => (
            secDataArray.slug != null &&
            slugs.push(secDataArray.slug)
        ))
    )
    var filt_paths = [...new Set(slugs)]

    const paths = filt_paths.map(slug => {
        return {
            params: {
                home: slug.toString()
            },
        };
    }

    )
    // console.log(paths)



    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context?.params.home

    const res = await fetch("https://prodapp.lifepharmacy.com/api/categories");
    const data = await res.json();

    const brands_res = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
    const brands_data = await brands_res.json();

    const home_page_res = await fetch(`https://prodapp.lifepharmacy.com/api/cms/page/${id}`);
    const hp_res = await home_page_res.json();
    const hp_data = hp_res.data.content;


    const pro_res = await fetch("https://adminapp.lifepharmacy.com/api/web/products");
    const pro_data_res = await pro_res.json();
    const pro_data = pro_data_res.data.products;


    console.log(hp_data);

    // const data = pro_data.data.products;

    return {
        props: {
            data,
            brands_data,
            hp_data,
            pro_data
        }
    }
}
