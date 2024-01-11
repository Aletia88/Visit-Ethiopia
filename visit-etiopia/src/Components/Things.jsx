import React, {useState} from 'react'
import Header from "./Header"
import photosData from '../Photos.json';
import Modal from 'react-modal';
import Footer from './Footer';


 


export default function Things(){

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [fasiledes, setFasiledes] = useState([]);
    const [natural, setNatural] = useState([]);
    const [animal, setAnimal] = useState([]);
  
    useState(() => {
      setFasiledes(photosData.slice(44, 48));
    }, []);
    useState(() => {
      setNatural(photosData.slice(48, 51));
    }, []);
    useState(() => {
      setAnimal(photosData.slice(51, 55));
    }, []);
  
    const openModal = (photo) => {
      setSelectedPhoto(photo);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setSelectedPhoto(null);
      setModalIsOpen(false);
    };
    return(
        <div className=' max-w-screen'>
       
        <Header />
        <div className='lg:absolute'>
            <img src="/public/zeynep-sumer-skh-CC9A77U-unsplash.jpg" className='object-cover lg:h-screen lg:w-screen lg:absolute' alt="" />
            <h1 className='lg:relative z-1 lg:text-6xl text-4xl lg:bg-white bg-black  bg-opacity-50 py-4 font-bold self-end rounded-md px-3 text-white lg:text-black mb-5'>Cultural Experience</h1>

            <h1 className='lg:relative lg:top-[600px] ml-10 text-4xl  '>Food and Coffe</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-5 mx-2 my-7">
      {fasiledes.map((photo) => (
        <div key={photo.id} className="lg:relative lg:top-[600px] bg-white border rounded shadow-md">
            
          <img
            src={photo.imageUrl}
            alt={photo.title}
            onClick={() => openModal(photo)}
            className="w-full h-[400px] object-cover rounded transform lg:scale-75 lg:hover:scale-100 transition duration-300 ease-in-out"
          />
          {selectedPhoto && selectedPhoto.id === photo.id && (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{
                content: {
                  maxWidth: '600px',
                  margin: 'auto',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                },
              }}
            >
              <img src={selectedPhoto.imageUrl} alt="Your Photo" />
            </Modal>
          )}
          <div className="p-4">
            <h3 className="text-center text-xl font-bold mb-2">{photo.title}</h3>
            <p className="text-center text-gray-500 italic">"{photo.description}"</p>
          </div>
        </div>
      ))}
    </div>
    {/* <img src="" alt="" /> */}

        </div>
        <div className=''>
            <img src="/public/nat.jpg" className='object-cover lg:h-screen w-screen lg:top-[2300px] lg:relative' alt="" />
            <h1 className='lg:relative lg:top-[1700px] z-1 lg:text-6xl text-4xl bg-white w-fit bg-opacity-50 py-4 font-bold self-end rounded-md lg:px-3 '>Natural Experience</h1>

            <h1 className='lg:relative lg:top-[2300px] ml-10 text-4xl  '>Nature and Wilde Life</h1>
            <div className="lg:relative top-[700px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-5 mx-2 my-7">
      {natural.map((photo) => (
        <div key={photo.id} className="lg:relative top-[1600px] bg-white border rounded shadow-md">
            
          <img
            src={photo.imageUrl}
            alt={photo.title}
            onClick={() => openModal(photo)}
            className="w-full h-[400px] object-cover rounded transform lg:scale-75 lg:hover:scale-100 transition duration-300 ease-in-out"
          />
          {selectedPhoto && selectedPhoto.id === photo.id && (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{
                content: {
                  maxWidth: '600px',
                  margin: 'auto',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                },
              }}
            >
              <img src={selectedPhoto.imageUrl} alt="Your Photo" />
            </Modal>
          )}
          <div className="p-4">
            <h3 className="text-start text-xl font-bold mb-2">{photo.title}</h3>
            <p className="text-start text-gray-500 italic">"{photo.description}"</p>
          </div>
        </div>
      ))}
    </div>
    {/* <img src="" alt="" /> */}

        </div>

        <div className=''>
            <img src="/public/nat.jpg" className='object-cover lg:h-screen w-screen lg:top-[2300px] lg:relative' alt="" />
            <h1 className='lg:relative lg:top-[1700px] z-1 text-6xl bg-white w-fit bg-opacity-50 py-4 font-bold self-end rounded-md px-3 '>Wilde Life</h1>

            <h1 className='lg:relative lg:top-[2300px] ml-10 text-4xl  '>Nature and Wilde Life</h1>
            <div className="lg:relative lg:top-[700px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 lg:mx-5 my-7">
      {animal.map((photo) => (
        <div key={photo.id} className="lg:relative lg:top-[1600px] bg-white border rounded shadow-md">
            
          <img
            src={photo.imageUrl}
            alt={photo.title}
            onClick={() => openModal(photo)}
            className="w-full h-[400px] object-cover rounded transform lg:scale-75 lg:hover:scale-100 transition duration-300 ease-in-out"
          />
          {selectedPhoto && selectedPhoto.id === photo.id && (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{
                content: {
                  maxWidth: '600px',
                  margin: 'auto',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                },
              }}
            >
              <img src={selectedPhoto.imageUrl} alt="Your Photo" />
            </Modal>
          )}
          <div className="p-4">
            <h3 className="text-start text-xl font-bold mb-2">{photo.title}</h3>
            <p className="text-start text-gray-500 italic">"{photo.description}"</p>
          </div>
        </div>
      ))}
    </div>
    {/* <img src="" alt="" /> */}

        </div>
        {/* <Footer /> */}
         </div>
    )
}