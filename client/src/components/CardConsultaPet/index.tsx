import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import { Card } from "@/components/ui/card"

type CardConsultaPetProps = {
  dataHora: string;
  nomePet: string;
  nomeTutor: string;
  nomeVeterinario: string;
  tipoConsulta: 'primeira consulta' | 'retorno' | 'check-up' | 'vacinação';
  imagemPet: string;
};

const CoresPorTipoConsulta: Record<CardConsultaPetProps['tipoConsulta'], string> = {
    'primeira consulta': 'bg-[#BFB5FF]',
    'retorno': 'bg-[#FF641999]',
    'check-up': 'bg-[#9CFF95]',
    'vacinação': 'bg-[#AAE1FF]',
}

export default function CardConsultaPet({ dataHora, nomePet, nomeTutor, nomeVeterinario, tipoConsulta, imagemPet }: CardConsultaPetProps) {
    const corConsulta = CoresPorTipoConsulta[tipoConsulta];
    return (
    <Card className={cn("rounded-2xl px-6 py-4 w-full max-w-[494px] flex items-center", corConsulta)}>
        <div className="flex flex-1 items-center justify-between">
            <div className=" flex flex-col items-center bg-[#FFFFFFCC] px-1 py-3 rounded text-sm font-bould text-black">
                <Clock className="w-5 h-5 mb-1" />
                <span>
                    <strong>{dataHora.split(" ")[0]}</strong>
                </span>
                <span>
                    <strong>{dataHora.split(" ")[1]}</strong>
                </span>
            </div>

            <div className="flex flex-row px-4">
                <p className="text-sm">
                    <strong>{nomePet}</strong> / {nomeTutor}
                </p>
            </div>

            <div>
                <p className="text-sm px-2">{nomeVeterinario}</p>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Image src ={imagemPet} width={60} height={60} alt="Pet"/>
                <span className="text-xs bg-[#FFFFFFCC] px-2 py-2 rounded capitalize w-28 text-center">
                    {tipoConsulta}
                </span>
            </div>
        </div>
    </Card>
    );
}