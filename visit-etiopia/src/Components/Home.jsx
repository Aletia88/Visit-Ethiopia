import { useState } from "react";
import PopularSlideshow from "./Popular";
import Header from "./Header";
import Lalibela from "./Lalibela";
import Footer from "./Footer";
import Eid from "./Eid";
import Meskel from "./Meskel";
import ScrollToTop from "./Scrolltotop";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

export default function Home() {
  const selectedDates = [new Date('2024-01-19'), new Date('2024-09-27'), new Date('2024-01-07'), new Date('2024-11-07')];

  const [date, setDate] = useState(selectedDates);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Handle any additional logic on date change
  };

  const tileContent = ({ date, view }) => {
    if (
      view === 'month' &&
      selectedDates.some((selectedDate) => selectedDate.toDateString() === date.toDateString())
    ) {
      return <span className="selected-date-marker">..</span>;
    }
    return null;
  };

  return (
    <>
      <Header />
      <PopularSlideshow />
      <div className="m-4 mt-56 lg:mt-0 md:px-20 lg:px-28 xl:px-48">
        <p className="text-base md:text-lg lg:text-lg xl:text-xl">
          Ethiopia, located in the Horn of Africa, is a country rich in history,
          culture, and natural beauty. Known as the "Land of Origins," Ethiopia
          is home to ancient civilizations, including the Aksumite Empire,
          renowned for its towering obelisks and connections to the legendary
          Queen of Sheba. The country boasts a diverse landscape that ranges
          from the highlands to the Great Rift Valley, featuring stunning
          mountain ranges, lakes, and fertile plateaus. Ethiopia is celebrated
          for being the origin of coffee, and its traditional coffee ceremonies
          are an integral part of the country's social fabric. The people of
          Ethiopia, with a population representing various ethnic groups, have a
          deep sense of identity and pride in their heritage. Ethiopia is also
          known for its unique script, Ge'ez, and its own calendar system.
          Despite historical challenges, Ethiopia has made significant strides
          in recent years, experiencing economic growth and playing a pivotal
          role in regional affairs. The country's commitment to preserving its
          cultural heritage and fostering sustainable development makes Ethiopia
          a captivating and dynamic nation on the African continent. <br />{" "}
          <br />
          Furthermore, Ethiopia has a rich religious heritage, being one of the
          earliest regions to adopt Christianity. Lalibela, a UNESCO World
          Heritage site, is home to a remarkable collection of rock-hewn
          churches carved out of solid rock during the 12th century, showcasing
          the country's architectural and religious significance. Ethiopia's
          cultural diversity is reflected in its vibrant festivals, such as
          Timket (Epiphany) and Meskel (Finding of the True Cross), which draw
          participants from various communities and contribute to the country's
          colorful tapestry of traditions. With a burgeoning capital city in
          Addis Ababa, Ethiopia is embracing modernity while still cherishing
          its historical roots, making it a compelling destination for those
          seeking a blend of ancient wonders and contemporary dynamism.
        </p>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold ml-3">Events</h1>
      <Lalibela />
      <div className="m-10 w-full bg-[#271D3B] p-4 lg:flex justify-between space-x-4 ">
      <Calendar onChange={handleDateChange} value={date} tileContent={tileContent} />
      <div className="text-white w-2/3"><p>Timkat (Epiphany): Timkat is celebrated on the 10th day of the month of Terr (January 19th or 20th in the Gregorian calendar). <br /> <br />

Meskel (Finding of the True Cross): Meskel is celebrated on the 17th day of the month of Meskerem (September 27th or 28th in the Gregorian calendar). <br /> <br />

Genna (Ethiopian Christmas): Genna is celebrated on the 7th day of the month of Tahsas (January 7th in the Gregorian calendar). <br /> <br />

Lidet (Ethiopian Epiphany): Lidet is celebrated on the 29th day of the month of Tahsas (January 19th or 20th in the Gregorian calendar). <br /> <br />

Hidar Tsion: Hidar Tsion is celebrated on the 1st day of the month of Hidar (November 29th or 30th in the Gregorian calendar).</p></div>
      <p></p>
      </div>
      <Eid />
      <Meskel />
      <Footer />
      <ScrollToTop />
    </>
  );
}
