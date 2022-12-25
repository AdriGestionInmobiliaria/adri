import adri_logo from '../public/adri.png'
import Image from 'next/image'

export default function Navbar({ person, size }) {

    return (
        <nav className="flex bg-slate-50 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap items-center mx-auto justify-between">
                <div className="logo-img">
                    <Image src={adri_logo} alt="Adri Gestion Inmobiliaria" />
                </div>
                <div className="">
                    <button onClick={handleClick} class="bg-green-500 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        <span>Contacto</span>
                    </button>
                </div>

            </div>
        </nav>
    );
}

function handleClick() {
    const url = 'https://wa.me/56964947609';
    window.open(url, '_blank');
}