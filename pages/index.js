// import head component
import Head from "next/head";
import destacada from '../public/1.png'
import Image from 'next/image'

export default function Home() {
    return (
      <>
        <div className="flex flex-row">
          <h1 className="text-3xl text-green-600 p-2">
            Parcelas y Terrenos
           </h1>
           <Image src={destacada} alt="" />
        </div>
      </>
    );
  }