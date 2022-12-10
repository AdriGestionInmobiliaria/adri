// import head component
import destacada from '../public/1.png'
import destacada2 from '../public/2.png'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

export default function App() {
  return (
    <>
      <div className="bg-green-400">
        <div className="flex flex-row">
          <Swiper navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <Image src={destacada} layout="responsive" alt="Parcela Melipilla" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={destacada2} layout="responsive" alt="Parcela San antonio" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-row">
          <div className="p-4 text-white bg-red-500">
            Melipilla
          </div>
          <div className="p-4 text-white bg-green-500">
            San Antonio
          </div>
        </div>
      </div>
    </>
  );
}
