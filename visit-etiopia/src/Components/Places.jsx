import Axum from "./Axum";
import Footer from "./Footer";
import Header from "./Header";
import Lalibela from "./Lalibela";
import ScrollToTop from "./Scrolltotop";
import Simen from "./Simen";
import Tana from "./Tana";
import GoogleMapReact from 'google-map-react';

export default function Places() {
    return(
        <>
        <Header />
        <div className="bg-[#F3F8FF] py-10  mx-2 lg:mx-5 rounded-lg">
            <p className="mx-5 text-lg"> <span className="text-4xl lg:text-6xl font-bold">Rock-Hewn Churches of Lalibela <br /> </span>Lalibela is famous for its medieval rock-hewn churches, carved out of solid rock during the 12th century. The churches, including St. George's Church, are a UNESCO World Heritage site.</p>
        <Lalibela />
        </div>
        <div className="bg-[#F3F8FF] py-10 mt-14 mx-2 lg:mx-5 rounded-lg">
            <p className="mx-5 text-lg"> <span className="text-4xl lg:text-6xl font-bold">Simien Mountains National Park <br /></span> A UNESCO-listed site, the Simien Mountains offer breathtaking landscapes, deep valleys, and unique wildlife, including the Ethiopian wolf and Gelada baboons.</p>
        <Simen />
        </div>
        <div className="bg-[#F3F8FF] py-10 mt-14 lg:mx-5 mx-2 rounded-lg">
            <p className="mx-5 text-lg"> <span className="text-4xl lg:text-6xl font-bold">Axum<br /></span> An ancient city and the capital of the Aksumite Empire, Axum is home to obelisks, ancient tombs, and archaeological sites, reflecting Ethiopia's historical significance.</p>
        <Axum />
        </div>
        
        <div className="bg-[#F3F8FF] py-10 mt-14 mx-2 lg:mx-5 rounded-lg">
            <p className="mx-5 text-lg"> <span className="text-4xl lg:text-6xl font-bold">Lake Tana and the Blue Nile Falls<br /></span> Lake Tana, the largest lake in Ethiopia, is dotted with monasteries. The Blue Nile Falls, also known as "Tis Issat" or the Smoking Water, is a spectacular natural wonder.</p>
        <Tana />
        </div>
        <Footer />
        <ScrollToTop />
        </>
    )
}