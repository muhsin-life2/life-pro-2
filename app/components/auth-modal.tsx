import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function MenuLanguage({ countrySelect }) {
    return (
        <>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                    <p className="text-sm text-center py-2 border-b-2 border-gray-300">CHOOSE COUNTRY</p>
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                        } group flex space-x-4 w-full items-center rounded-md px-2 py-3 text-sm`}
                                    onClick={countrySelect}>
                                    <img src={"https://www.lifepharmacy.com/images/svg/flag-ae.svg"} height="30" width="30" className="rounded-md" />
                                    <p>United Arab Emirates</p>
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                        } group flex space-x-4 w-full items-center rounded-md px-2 py-3 text-sm`}
                                    onClick={countrySelect}>
                                    <img src={"https://www.lifepharmacy.com/images/svg/flag-sa.svg"} height="30" width="30" className="rounded-md" />
                                    <p>Saudi Arabia</p>
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </>
    )
}

