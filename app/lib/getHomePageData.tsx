export default async function getHomePageData() {
    const res = await fetch('https://prodapp.lifepharmacy.com/api/cms/page/home')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}