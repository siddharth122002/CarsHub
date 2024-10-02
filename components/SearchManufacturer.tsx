import { SearchManufacturerProps } from '@/types'
import React, { useState,Fragment } from 'react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import { manufacturers } from '@/constants';
import Image from 'next/image';
manufacturers;
function SearchManufacturer({manufacturer,setManufacturer}:SearchManufacturerProps) {
    const [query, setQuery] = useState("");
    const filteredManufacturers=
    query===""?manufacturers:
    manufacturers.filter((item)=>(
        item.toLowerCase().includes(query.toLowerCase().replace('/\s+/g',""))
    ))
  return (
    <div>
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className='relative'>
                <ComboboxButton className='absolute top-[10px] left-0'>
                <Image
                src='/car-logo.svg'
                width={20}
                height={20}
                className='ml-4'
                alt='car logo'
                />
                </ComboboxButton>
                <ComboboxInput
                    className="bg-slate-100 pl-10 p-2 w-full"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(item:string)=>item}
                    placeholder='Volkswagen'
                />
                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery("")}
                >
                    <ComboboxOptions>
                        <div className='overflow-y-scroll h-96'>
                        {filteredManufacturers.map((item)=>(
                            <ComboboxOption
                                key={item}
                                className={({active})=>`p-3 px-10 ${
                                    active?"bg-[#2563EB] text-white":"text-gray-900"
                                }`}
                                value={item}
                            >
                                {item}
                            </ComboboxOption>
                        ))}
                        </div>
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer