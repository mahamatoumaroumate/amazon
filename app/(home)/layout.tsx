import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/header/footer"

 const layout = async({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}
export default layout