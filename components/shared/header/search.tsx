import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { APP_NAME } from "@/lib/constants"
import { SearchIcon } from "lucide-react"

const categories=['men','women','kids','accessories']

export const Search = () => {
  return (
    <form action='/search' method="GET" className="flex items-stretch ">
        <Select name="categories" >
            <SelectTrigger className="w-auto dark:border-gray-200 bg-gray-100   text-black border-r rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none ">
                <SelectValue placeholder='All' />
            </SelectTrigger>
            <SelectContent position="popper" >
                <SelectItem value="all">All</SelectItem>
                {categories.map((category)=>{
                    return <SelectItem key={category} value={category}>{category}</SelectItem>
                })}
            </SelectContent>
        </Select>
        <Input className="flex-1 rounded-none dark:border-gray-200  bg-gray-100 text-black text-base "
        placeholder={`Search ...`} name="q" type="search"/>
        <button type="submit" className="bg-primary  text-black rounded-s-none rounded-e-md  px-3 ">
            <SearchIcon className="w-6 h-6"/>
        </button>
    </form>
  )
}