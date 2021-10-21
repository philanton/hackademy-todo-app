import { Header, MenuBar, TodoList } from "../components"

export default function Home() {
  return (
    <div className="flex h-screen">
      <MenuBar/>
      <div className="w-full flex flex-col">
        <Header/>
        <TodoList/>
      </div>
    </div>
  )
}
