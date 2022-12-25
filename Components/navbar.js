import adri_logo from '../public/adri.png'
import Image from 'next/image'

export default function Navbar({ person, size }) {

    return (
        <nav className="flex bg-slate-50 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap items-center mx-auto justify-between">
                <div className="logo-img">
                    <Image src={adri_logo} alt="Adri Gestion Inmobiliaria" />
                </div>
                

            </div>
        </nav>
    );
}

function handleClick() {
    const url = 'https://wa.me/56964947609';
    window.open(url, '_blank');
}