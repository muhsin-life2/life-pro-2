export default async function getProductsData() {
    const res = await fetch('https://prodapp.lifepharmacy.com/api/web/products?order_by=popularity&type=cols&skip=0&take=7&new_method=true&lang=ae-en')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}