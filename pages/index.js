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
      <div className="bg-green-400 font-mono">
        <div className="flex flex-row h-34">
          <Swiper navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <Image src={destacada} layout="responsive" alt="Parcela Melipilla" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={destacada2} layout="responsive" alt="Parcela San antonio" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex-row">
          <div className="p-4 text-white bg-red-500">
          <Swiper navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <Image src={destacada} layout="responsive" alt="Parcela Melipilla" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={destacada2} layout="responsive" alt="Parcela San antonio" />
            </SwiperSlide>
          </Swiper>
            <h1 className="text-2xl md:text-base">Parcelas Culipran,  Melipilla</h1>
            <ul class="list-disc p-4">
              <li>Reserva Ecológica</li>
              <li>5.000 m²</li>
              <li>Rol propio</li>
              <li>Factibilidad de agua y luz (panel solar)</li>
              <li>A 20 min de San Antonios</li>
              <li>Crédito directo</li>
            </ul>
          </div>
          <div className="p-4 text-white bg-green-500">
          <Swiper navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <Image src={destacada} layout="responsive" alt="Parcela Melipilla" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={destacada2} layout="responsive" alt="Parcela San antonio" />
            </SwiperSlide>
          </Swiper>
            <h1 className="text-2xl md:text-base">Parcelas "Estero el Yali", Santo Domingo</h1>
            <ul class="list-disc p-4">
              <li>Sector: Agua Santa</li>
              <li>5.000 m²</li>
              <li>Rol propio</li>
              <li>Factibilidad de agua y luz</li>
              <li>A 20 min de Melipila</li>
              <li>Crédito directo</li>
              <li>Pie desde $10.000.000</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
