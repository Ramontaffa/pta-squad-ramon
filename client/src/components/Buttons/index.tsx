import React from "react";

interface BotaoAcaoProps {
  texto: string;
  cor: string; 
  icone?: React.ReactNode; 
  onClick: (() => void) | undefined;
};

export function BotaoAcao({ texto, cor, icone, onClick }: BotaoAcaoProps) {
  return (
    
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2.5 px-8 py-3 text-white rounded-full w-full ${cor}`}
    >
      {icone && <span>{icone}</span>}
      <span>{texto}</span>
    </button>
    
  );
}
     