import Axum from "./Axum";
import Footer from "./Footer";
import Header from "./Header";
import Lalibela from "./Lalibela";
import ScrollToTop from "./Scrolltotop";
import Simen from "./Simen";
import Tana from "./Tana";
import GoogleMapReact from "google-map-react";

export default function Places() {
  const defaultProps = {
    center: {
      lat: 12.031723275990402,
      lng: 39.04624694420263,
    },
    zoom: 11,
  };
  return (
    <>
      <Header />
      <div className="bg-[#F3F8FF] py-10  mx-2 lg:mx-5 rounded-lg">
        <p className="mx-5 text-lg">
          {" "}
          <span className="text-4xl lg:text-6xl font-bold">
            Rock-Hewn Churches of Lalibela <br />{" "}
          </span>
          Lalibela is famous for its medieval rock-hewn churches, carved out of
          solid rock during the 12th century. The churches, including St.
          George's Church, are a UNESCO World Heritage site.
        </p>
        <Lalibela />
      </div>
      <div
        style={{ height: "80vh", width: "100%" }}
        className="py-5 flex justify-center self-center mb-0 bg-[#271D3B]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15608.670681706764!2d39.046719100000004!3d12.0319753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16413eee814f2d03%3A0xf27414e782ae4b62!2sLalibela!5e0!3m2!1sen!2set!4v1706121184562!5m2!1sen!2set"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-[#F3F8FF] py-10 mt-14 mx-2 lg:mx-5 rounded-lg">
        <p className="mx-5 text-lg">
          {" "}
          <span className="text-4xl lg:text-6xl font-bold">
            Simien Mountains National Park <br />
          </span>{" "}
          A UNESCO-listed site, the Simien Mountains offer breathtaking
          landscapes, deep valleys, and unique wildlife, including the Ethiopian
          wolf and Gelada baboons.
        </p>
        <Simen />
      </div>
      <div
        style={{ height: "80vh", width: "100%" }}
        className="py-5 flex justify-center self-center mb-0 bg-[#271D3B]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.3597027664405!2d37.88507277390944!3d13.202719009771405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1669c1d46d16f89d%3A0x770284df7312622d!2sSimien%20Mountains%20National%20Park!5e0!3m2!1sen!2set!4v1706121812067!5m2!1sen!2set"
          width="600"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-[#F3F8FF] py-10 mt-14 lg:mx-5 mx-2 rounded-lg">
        <p className="mx-5 text-lg">
          {" "}
          <span className="text-4xl lg:text-6xl font-bold">
            Axum
            <br />
          </span>{" "}
          An ancient city and the capital of the Aksumite Empire, Axum is home
          to obelisks, ancient tombs, and archaeological sites, reflecting
          Ethiopia's historical significance.
        </p>
        <Axum />
      </div>

      <div className="bg-[#F3F8FF] py-10 mt-14 mx-2 lg:mx-5 rounded-lg">
        <p className="mx-5 text-lg">
          {" "}
          <span className="text-4xl lg:text-6xl font-bold">
            Lake Tana and the Blue Nile Falls
            <br />
          </span>{" "}
          Lake Tana, the largest lake in Ethiopia, is dotted with monasteries.
          The Blue Nile Falls, also known as "Tis Issat" or the Smoking Water,
          is a spectacular natural wonder.
        </p>
        <Tana />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
