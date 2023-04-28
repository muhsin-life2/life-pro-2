export default async function getCategoryData() {
    const res = await fetch(`https://prodapp.lifepharmacy.com/api/categories?lang=en}`)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}