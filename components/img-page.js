import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"


const ImgPage = ({ sectionData, isDesktop, isMobile }) => {
    const router = useRouter();

    const handleClick = (slug) => {
        router.push(`/home/${slug}`)
    }

    return <>
        <Link href={`/home/${sectionData.slug}`} onClick={() => { handleClick(sectionData.slug) }}>
            <Image src={isDesktop ? sectionData.desktop.image_url : sectionData.mobile.image_url} class="mx-auto w-full hover:brightness-105"
                height={isDesktop ? (sectionData.desktop.height ? sectionData.desktop.height : 109) : (sectionData.mobile.height ? sectionData.mobile.height : 50)}
                width={isDesktop ? (sectionData.desktop.width ? sectionData.desktop.width : 390) : sectionData.mobile.width ? sectionData.mobile.width : 50} />
        </Link>

    </>

}

export default ImgPage