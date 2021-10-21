import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const AccountInfo = ({ open }) => {
  return (
    <div className={`${open ? "block" : "hidden"} w-72 p-4 absolute z-10 top-20 right-3 bg-white drop-shadow`}>
      <div className="flex justify-between">
        <div className="flex justify-start items-center">
          <Image
            src={require("../public/img/openware-yellow.png")}
            height={16}
            width={24}
          />
          <h1 className="text-xl text-gray-400 font-medium mx-2">
            Todo
          </h1>
        </div>
        <button className="text-xs text-gray-300">Sign out</button>
      </div>
      <div className="flex mt-4">
        <div className="h-full mr-4">
          <Image
            src={require("../public/img/account-big.png")}
            layout="fixed"
            height={88}
            width={88}
          />
        </div>
        <div>
          <p>here will be someone's email</p>
          <button className="text-xs text-yellow-300">My profile</button>
        </div>
      </div>
    </div>
  )
}

export const Header = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setAccountOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [ref])

  return (
    <>
      <div className="flex items-center justify-between relative p-3 border-b-2 border-gray-400">
        <div className="flex items-center h-full w-1/3 border-2 border-gray-300 bg-gray-200">
          <div className="mx-4 w-6 h-6 relative">
            <Image
              src={require("../public/img/search.png")}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <input
            type="text"
            className="bg-transparent w-full h-full focus:outline-none"
            placeholder="Search"
          />
        </div>
        <div ref={ref}>
          <button onClick={() => setAccountOpen(!accountOpen)}>
            <Image
              src={require("../public/img/account.png")}
              height={36}
              width={36}
            />
          </button>
          <AccountInfo
            open={accountOpen}
          />
        </div>
      </div>
    </>
  )
}