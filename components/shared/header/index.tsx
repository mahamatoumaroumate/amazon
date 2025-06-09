import { APP_NAME } from "@/lib/constants"
import Link from "next/link"
import { Menu } from "./menu"
import { Search } from "./search"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { data } from "@/lib/data"

export const Header = () => {
  return (
    <header className="bg-black text-white">
        <div className="px-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href='/' className="flex items-center header-button font-extrabold text-2xl m-1">
                    <img src='/logo (2).png' className="w-60 h-16 object-cover" alt={`${APP_NAME} logo`}/>
                    </Link>
                </div>
                <div className="hidden md:block flex-1 max-w-xl">
                   <Search/>
                </div>
                <Menu/>
            </div>
            <div className="md:hidden block py-2">
                <Search/>
            </div>
        </div>
        <div className="flex items-center  px-3 mb-[2px] bg-gray-800">
            <Button variant='ghost' className=" header-button flex items-center gap-1 text-base [&_svg]:size-6">
                <MenuIcon/>
                All
            </Button>
            <div className="flex items-center flex-wrap overflow-hidden max-h-[42px]  gap-3 ">
                {data.headerMenu.map((menu)=>{
                    return <Link href={menu.href} className="pt-2 lg:pt-0" key={menu.href}>{menu.name}</Link>
                })}
            </div>
        </div>
    </header>
  )
}