import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children, data, brands_data, sessionServ}) {

  function searchButtonOnLeave(e) {
    if (!e.target.parentNode.classList.contains("group-search")) {
      document.getElementsByClassName("lg-screen-searchsuggestion-lg")[0].classList.add("hidden");
      document.getElementById("lg-screen-search").classList.remove( "rounded-t-xl");
      document.getElementById("lg-screen-search").classList.add("rounded-xl");
    }
  }

  return (
    <>
      <div onMouseDown={(e) => { searchButtonOnLeave(e) }}>
        <Navbar data={data} brands_data={brands_data} sessionServ={sessionServ} />
        <main>{children}</main>
        <Footer />
      </div>


    </>
  )
}


