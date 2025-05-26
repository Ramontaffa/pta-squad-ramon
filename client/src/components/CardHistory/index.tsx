import React from 'react';
import { ArrowRight } from 'lucide-react'; 

export function CardHistory() {
  return (
    <div className='flex h-20 w-full p-5 bg-[#F0F0F0] rounded-2xl justify-between items-center text-sm'>

      <div className='bg-white font-bold p-[6px] flex flex-col justify-center items-center rounded-md'>
        <p>18/02</p>
        <p>13:40</p>
      </div>

      <div className='font-bold'>
        <p>Primeira consulta</p>
      </div>

      <div>
        <p>Doutor Rafael</p>
      </div>

      <div>
        <ArrowRight />
      </div>

    </div>
  );
}