import { useState, ChangeEvent } from 'react'
import Image from 'next/image'

export const ListBarAdd = ({ addList }) => {
  const [listName, setListName] = useState("");
  const [focused, setFocused] = useState(false);

  const handleListNameChange = (e: ChangeEvent<HTMLInputElement>) => setListName(e.target.value);
  const handleNewList = () => {
    addList(listName);
    setListName("");
  }

  return (
    <div className={`flex items-center p-1 ${focused ? "bg-white" : "bg-yellow-300"}`}>
      <label className="w-4 h-4 mr-2" htmlFor="new_list">
        <Image
          src={require("../public/img/plus.png")}
          layout="fixed"
          height={16}
          width={16}
        />
      </label>
      <input
        type="text"
        id="new_list"
        placeholder="New List"
        onChange={handleListNameChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={listName}
        className="min-w-0 bg-transparent placeholder-black focus:outline-none"
      />
      <button className="text-yellow-300" onClick={handleNewList}>
        Add
      </button>
    </div>
  )
}

export const ListBar = ({ name }) => {
  return (
    <div className="flex items-center p-1 bg-white">
      <div className="w-4 h-4 mr-2">
        <Image
          src={require("../public/img/plus.png")}
          layout="fixed"
          height={16}
          width={16}
        />
      </div>
      <p className="min-w-0 bg-transparent placeholder-black focus:outline-none">{name}</p>
    </div>
  )
}