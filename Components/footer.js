import adri_logo from '../public/adri.png'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className="flex flex-row bg-yellow-800  px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center mx-auto justify-between basis-1/2">
        <Image src={adri_logo} alt="Adri Gestion Inmobiliaria" className="logo-img" />
        <div className="font-mono text-2xl">
          <h2>Adri Gestion Inmobiliaria</h2>
        </div>
        <div className="font-mono text-2xl">
          <h2 >+56964947609</h2>
        </div>
      </div>

    </div>
  );
}