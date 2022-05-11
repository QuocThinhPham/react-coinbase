import { Heading } from 'components/typography';
import {
   BitcoinIcon,
   DoubleTransferIcon,
   EthereumIcon,
   TransferIcon,
} from 'icons';
import React from 'react';

const rates = [
   {
      icon: BitcoinIcon,
      label: 'BTC',
      buy: '₦350/$',
      sell: '₦370/$',
   },
   {
      icon: EthereumIcon,
      label: 'ETH',
      buy: '₦345/$',
      sell: '₦370/$',
   },
];

const exchanges = [
   {
      coin: {
         stand_for: 'BTC',
         label: 'Bitcoin BTC',
         value: '1.16',
      },
      bank: {
         stand_for: 'NGN',
         label: 'Bank Transfer NGN',
         value: '696152299929.23',
      },
   },
   {
      coin: {
         stand_for: 'ETH',
         label: 'Ethereum ETH',
         value: '1.16',
      },
      bank: {
         stand_for: 'NGN',
         label: 'Bank Transfer NGN',
         value: '696152299929.23',
      },
   },
];

const Rates = () => {
   return (
      <div className='relative p-[170px] bg-gradient-to-br from-pink-500 to-blue-400'>
         <div className='py-[25px] px-[50px] rounded-[30px] bg-white'>
            <div className='flex items-center justify-between'>
               <Heading className='!text-lg' noLine>
                  OUR RATES
               </Heading>
               <Heading className='!text-lg' noLine>
                  OUR RESERVES
               </Heading>
               <Heading className='!text-lg' noLine>
                  LATEST EXCHANGES
               </Heading>
            </div>
            <div className='pt-[50px] grid grid-cols-[1fr_1.25fr_1fr] gap-x-[50px] text-sm font-normal'>
               {/* column: rates */}
               <div className='relative'>
                  {rates.map((r, pos) => (
                     <div
                        className='flex items-start justify-start gap-x-[30px] last:mt-[30px]'
                        key={pos}
                     >
                        <div className='flex items-center justify-between gap-x-[16px]'>
                           <r.icon className='w-7 h-7' />
                           <span className='text-sm text-[#333] leading-6'>
                              {r.label}
                           </span>
                        </div>
                        <div className='flex flex-col items-center justify-start gap-y-[10px]'>
                           <span className='text-sm text-[#333] leading-6'>
                              We Buy @{' '}
                              <span className='font-bold'>{r.buy}</span>
                           </span>
                           <span className='text-sm text-[#333] leading-6'>
                              We Sell @&nbsp;
                              <span className='font-bold'>{r.sell}</span>
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
               {/* column: reserves */}
               <div className='relative'></div>
               {/* column: exchanges */}
               <div className='relative h-[235px] overflow-y-auto custom-scrollbar'>
                  {exchanges.map((ex, pos) => (
                     <React.Fragment key={pos}>
                        <div className='relative right-3 my-[15px] first:mt-0 last:mb-0'>
                           <div className='flex items-center justify-end gap-3'>
                              <span className='text-sm text-[#333] leading-6'>
                                 {ex.coin.label}
                              </span>
                              <TransferIcon className='w-7 h-7' />
                              <span className='text-sm text-[#333] leading-6'>
                                 {ex.bank.label}
                              </span>
                           </div>
                           <div className='flex items-center justify-end gap-3'>
                              <span className='text-sm text-[#333] leading-6'>
                                 <span className='font-bold'>
                                    {ex.coin.value}
                                 </span>
                                 &nbsp;{ex.coin.stand_for}
                              </span>
                              <DoubleTransferIcon className='w-7 h-7' />
                              <span className='text-sm text-[#333] leading-6'>
                                 <span className='font-bold'>
                                    {ex.bank.value}
                                 </span>
                                 &nbsp;{ex.bank.stand_for}
                              </span>
                           </div>
                        </div>
                        <div className='relative left-[calc(20%-12px)] my-[15px] first:mt-0 last:mb-0 w-4/5 h-[1px] bg-slate-200'></div>
                     </React.Fragment>
                  ))}
                  {exchanges.map((ex, pos) => {
                     let render = null;
                     if (pos === exchanges.length - 1) {
                        render = (
                           <div
                              className='relative right-3 my-[15px] first:mt-0 last:mb-0'
                              key={pos}
                           >
                              <div className='flex items-center justify-end gap-3'>
                                 <span className='text-sm text-[#333] leading-6'>
                                    {ex.coin.label}
                                 </span>
                                 <TransferIcon className='w-7 h-7' />
                                 <span className='text-sm text-[#333] leading-6'>
                                    {ex.bank.label}
                                 </span>
                              </div>
                              <div className='flex items-center justify-end gap-3'>
                                 <span className='text-sm text-[#333] leading-6'>
                                    <span className='font-bold'>
                                       {ex.coin.value}
                                    </span>
                                    &nbsp;{ex.coin.stand_for}
                                 </span>
                                 <DoubleTransferIcon className='w-7 h-7' />
                                 <span className='text-sm text-[#333] leading-6'>
                                    <span className='font-bold'>
                                       {ex.bank.value}
                                    </span>
                                    &nbsp;{ex.bank.stand_for}
                                 </span>
                              </div>
                           </div>
                        );
                     } else {
                        render = (
                           <React.Fragment key={pos}>
                              <div className='relative right-3 my-[15px] first:mt-0 last:mb-0'>
                                 <div className='flex items-center justify-end gap-3'>
                                    <span className='text-sm text-[#333] leading-6'>
                                       {ex.coin.label}
                                    </span>
                                    <TransferIcon className='w-7 h-7' />
                                    <span className='text-sm text-[#333] leading-6'>
                                       {ex.bank.label}
                                    </span>
                                 </div>
                                 <div className='flex items-center justify-end gap-3'>
                                    <span className='text-sm text-[#333] leading-6'>
                                       <span className='font-bold'>
                                          {ex.coin.value}
                                       </span>
                                       &nbsp;{ex.coin.stand_for}
                                    </span>
                                    <DoubleTransferIcon className='w-7 h-7' />
                                    <span className='text-sm text-[#333] leading-6'>
                                       <span className='font-bold'>
                                          {ex.bank.value}
                                       </span>
                                       &nbsp;{ex.bank.stand_for}
                                    </span>
                                 </div>
                              </div>
                              <div className='relative left-[calc(20%-12px)] my-[15px] first:mt-0 last:mb-0 w-4/5 h-[1px] bg-slate-200'></div>
                           </React.Fragment>
                        );
                     }
                     return render;
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Rates;
