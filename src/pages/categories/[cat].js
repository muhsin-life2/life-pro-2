import Categories from "components/categories";
import Layout from "components/layout";

const CatPage = ({ data, pageName, d, data2, brands_data }) => (
    <Layout data={data2} brands_data={brands_data}>
        <Categories data={data} pageName={pageName} d={d} />
    </Layout>
);

export default CatPage;

export async function getStaticPaths() {
    const res = await fetch("https://adminapp.lifepharmacy.com/api/web/categories");
    const data = await res.json();
    const allPaths = data.data.categories.map(i => {
        return {
            params: {
                cat: i.name.toString()
            },
        };
    });
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context?.params.cat;
    const res = await fetch("https://adminapp.lifepharmacy.com/api/web/categories")
    const d = await res.json();
    const data = d.data.categories.filter((cat_item) => (
        cat_item.name === id
    ));
    const res2 = await fetch("https://prodapp.lifepharmacy.com/api/categories");
    const data2 = await res2.json();

    const brands_res = await fetch("https://prodapp.lifepharmacy.com/api/web/brands");
    const brands_data = await brands_res.json();


    return { props: { data, pageName: id, d, data2, brands_data } };
}

