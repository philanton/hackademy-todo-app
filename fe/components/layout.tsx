import Image from 'next/image'

interface LayoutProps {
  pageTitle: string;
  children?: React.ReactNode;
}

export const Layout = ({ pageTitle, children } : LayoutProps) => (
  <>
    <div className="dinobg">
      <div className="relative h-full">
        <Image
          src={require("../public/img/dinoware.png")}
          height={1351}
          width={1771}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
    </div>
    <div className="absolute top-0 z-10 h-screen w-screen flex justify-center items-center">
      <div className="bg-white w-96 xl:w-1/4 p-11 drop-shadow-md">
        <div className="flex justify-start items-center">
          <Image
            src={require("../public/img/openware-yellow.png")}
            height={24}
            width={36}
          />
          <h1 className="text-2xl text-gray-400 font-medium mx-2">
            Todo
          </h1>
        </div>
        <h2 className="text-lg font-medium">
          {pageTitle}
        </h2>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  </>
)