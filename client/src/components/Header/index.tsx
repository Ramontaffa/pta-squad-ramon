'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogotipoCITi } from '@/assets'
import { LogoCITipet } from '@/assets'
import { Heart } from '@/assets'

export default function Header() {
    const pathname = usePathname()
    return (
        <header className = "w-full h-[114px] border-b px-5 py-5" style={{ borderColor: '#D9D9D9'}}>
            <nav className="flex justify-between items-center h-full">
                <div className="w-[189px] h-[74px]">
                    <Image src={LogoCITipet} alt="Logo" />
                </div>
                <ul className='list-none flex gap-12'>
                    <li>
                        <Link href="/atendimento" className={`pb-1 ${pathname === '/atendimento' ? 'border-b-2 border-green-500' : ''}`}>
                            Atendimento
                        </Link>
                    </li>
                    <li>
                        <Link href="/cadastro" className={`pb-1 ${pathname === '/cadastro' ? 'border-b-2 border-green-500' : ''}`}>
                            Cadastro
                        </Link>
                    </li>
                </ul>

                <p className="text-base flex items-center gap-1 text-[#7D1AD7]">
                    made with
                        <Image src={ Heart } alt="Heart" width={24} height={24} />
                        and {'</>'} by
                        <Image src={ LogotipoCITi } alt = "Logotipo CITi" width={41} height={21} />
                </p>
            </nav>
        </header>
    );
}