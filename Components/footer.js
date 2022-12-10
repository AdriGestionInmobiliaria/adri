import adri_logo from '../public/adri.png'
import Image from 'next/image'
export default function Footer() {
    return (
      <div className="flex flex-row bg-yellow-800">
         <div className="basis-1/2">
                <Image src={adri_logo} alt="Adri Gestion Inmobiliaria" className="logo-img"/>
            </div>
            <div className="basic-1/2">
              <div><h2>Adri Gestion Inmobiliaria</h2></div>
              <div><h2>telefono</h2></div>
            </div>   
      </div>
  );
  }