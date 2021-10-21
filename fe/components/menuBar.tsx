import { useState } from 'react'
import Image from 'next/image'
import { ListBarAdd, ListBar } from './listBar'

export const MenuBar = () => {
  const [open, setOpen] = useState(true);
  const [lists, setLists] = useState([]);

  const addNewList = (listName: string) => {
    setLists([...lists, listName]);
  }

  return (
    <div className={`${open ? "w-64" : "w-14"} bg-yellow-300 flex flex-col justify-between`}>
      <div>
        <div className={open ? "m-4" : "mx-2.5 my-4"}>
          <Image
            src={require("../public/img/openware-white.png")}
            height={24}
            width={36}
          />
        </div>
        <button className={`block my-4 ${open ? "mx-4" : "mx-5"}`} onClick={() => setOpen(!open)}>
          <Image
            src={open ?
                  require("../public/img/arrow-left.png") :
                  require("../public/img/arrow-right.png")}
            height={16}
            width={16}
          />
        </button>
        <div className={open ? "m-4" : "my-4 mx-5"}>
          {open ? (
            lists.map((name, i) => <ListBar name={name} key={i}/>)
          ) : (
            <button onClick={() => setOpen(true)}>
              <Image
                  src={require("../public/img/plus.png")}
                  height={16}
                  width={16}
                />
            </button>
          )}
        </div>
        <div className={open ? "m-4" : "my-4 mx-5"}>
          {open ? (
            <ListBarAdd addList={addNewList}/>
          ) : (
            <button onClick={() => setOpen(true)}>
              <Image
                  src={require("../public/img/plus.png")}
                  height={16}
                  width={16}
                />
            </button>
          )}
        </div>
      </div>
      <div className={`flex justify-center ${open ? "flex-row" : "flex-col"}`}>
        <div className="m-4">
          <Image
            src={require("../public/img/options.png")}
            height={24}
            width={24}
          />
        </div>
        <div className="m-4">
          <Image
            src={require("../public/img/globus.png")}
            height={24}
            width={24}
          />
        </div>
        <div className="m-4">
          <Image
            src={require("../public/img/settings.png")}
            height={24}
            width={24}
          />
        </div>
      </div>
    </div>
  )
}