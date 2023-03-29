import Image from "next/image";
import Link from "next/link";

const Categories = ({ data, pageName, d, brands_data }) => {

    function LoadImages(imagesrc) {
        debugger;
        if (imagesrc.logo === null && imagesrc.banner === null) {
            return "/Images/loading-img.gif"
        }
        else if (imagesrc.logo === null) {
            return imagesrc.banner;
        }
        else {
            return imagesrc.logo;
        }

    }
    return (

        <div class="">
            {/* <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-80" aria-label="Sidebar">
                <div class=" px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

                    <ul >
                        <li >
                            <a href="#" class="   text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                                <div class="flex justify-between mb-9">
                                    <div class="text-xl font-semibold">Category</div>
                                    <div class="my-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>

                                    </div>


                                </div>
                            </a>
                        </li>
                        {d.data.categories.map(cat_data => (
                            <li class="mb-5">

                                <Link href={`${cat_data.name}`} class="hover:text-blue-500 active:text-blue-200 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                                    <div class="flex justify-between">
                                        <div>{cat_data.name}</div>
                                        <div class="text-base text-gray-600">{cat_data.children.length}</div>
                                    </div>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </aside> */}


            <div class=" ">

                {/* categories header section */}
                <div class="p-5 w-full">
                    <h1 className="text-4xl text-center p-10 ">Category</h1>
                    <div class="text-center text-blue-500 text-2xl">{data[0].name}</div>
                </div>

                <div class=" ">
                    <div class="">
                        <div class="relative mb-10">
                            <Image src={data[0].images.banner} class="w-full" width={700} height={700}/>
                            <button class="bg-slate-500 absolute bottom-5 right-5 text-gray-300 opacity-50 p-2 hover:bg-white hover:text-black duration-300">See All</button>
                        </div>
                        <div class="-z-10">
                            {data[0].children.map(cat_data => (
                                <div>
                                    <div class="text-blue-500 text-2xl ml-28 font-semibold">{cat_data.name}</div>
                                    <div class="grid lg:grid-cols-4 md:grid-cols-3 md:grid-cols-2 p-5">{cat_data.children.map(ch_data => (
                                        <div class="mb-9">
                                            <Image className="mx-auto mb-3 hover:-translate-y-3 ease-in transition-all duration-200" src={LoadImages(ch_data.images)} height={200} width={200} />
                                            <p class="text-center">{ch_data.name}</p>
                                        </div>

                                    ))}</div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>




        </div>


    )
}

export default Categories;