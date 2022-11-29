// import head component
import Head from "next/head";
import destacada from '../public/1.png'
import Image from 'next/image'

export default function Home() {
    return (
      <><h1 className="text-3xl font-bold underline">
        Parcelas y Terrenos
      </h1><Image
          src={destacada}
          alt="Picture of the author" /></>
    );
  }