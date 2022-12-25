import Card from "../Components/card";
import Link from "next/link";

export default function App() {
  return (
    <>
      <div className="flex">
        <div className="px-6 py-6 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-900">
          <h1>Parcelas en venta</h1>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="px-6 py-6">
          <Link href={`/culipran`}>
            <Card title="Parcela Culipran" description={"Soy una descripcion de una parcela, esta es la segunda linea de la descripcion"} />
          </Link>
        </div>
        <div className="px-6 py-6">
          <Link href={`/culipran`}>
            <Card title="Parcela Culipran" description={"Soy una descripcion de una parcela, esta es la segunda linea de la descripcion"} />
          </Link>
        </div>
        <div className="px-6 py-6">
          <Link href={`/culipran`}>
            <Card title="Parcela Culipran" description={"Soy una descripcion de una parcela, esta es la segunda linea de la descripcion"} />
          </Link>
        </div>
        <div className="px-6 py-6">
          <Link href={`/culipran`}>
            <Card title="Parcela El Yali" description={"Soy una descripcion de una parcela, esta es la segunda linea de la descripcion"} />
          </Link>
        </div>
        <div className="px-6 py-6">
          <Link href={`/culipran`}>
            <Card title="Parcela" description={"Soy una descripcion de una parcela, esta es la segunda linea de la descripcion"} />
          </Link>
        </div>
      </div>
    </>
  );
}
