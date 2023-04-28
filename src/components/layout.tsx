
import Navbar from "./navbar"
import Footer from "./footer"

import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import { ReactNode } from "react";
interface layoutProps{
   children: ReactNode ,
   data:any,
   brands_data:any,
   sessionServ:any,
   isArabic:any,
   lang:any,
   langData:any
}
const Layout: React.FC<layoutProps> = ({ children, data, brands_data, sessionServ, isArabic, lang, langData }) =>{
  // function searchButtonOnLeave(e:any) {
  //   if (!e.target.parentNode.classList.contains("group-search")) {
  //     document.getElementsByClassName("lg-screen-searchsuggestion-lg")[0].classList.add("hidden");
  //     (document.getElementById("lg-screen-search") as HTMLInputElement).classList.remove("rounded-t-xl");
  //     (document.getElementById("lg-screen-search") as HTMLInputElement).classList.add("rounded-xl");
  //   }
  // }
  function languageClickedToast() {
    setTimeout(() => {
      toast.success('Language Changed Successfully')

    }, 1500);
  }

  return (
    <>
      <Toaster />
      <section onMouseDown={(e) => { }}>
        <Navbar data={data} brands_data={brands_data} sessionServ={sessionServ} isArabic={isArabic} lang={lang} langData={langData} languageClickedToast={languageClickedToast} />
        <main>{children}</main>
        <Footer langData={langData} />
      </section>
    </>
  )
}


export default Layout