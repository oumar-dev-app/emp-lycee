
import Logo from "./Logo";
import Mobilemenu from "./Mobilemenu";
import Navbar from "./Navbar";



function Header() {
  return (
    <header className="max-w-7xl m-auto">
        <div> 
           <div className="flex items-center justify-between ">
            <div className="w-full md:w-1/3 flex items-center gap-2.5 justify-between md:gap-0">
               <Logo />
              <Mobilemenu />
            </div>
            <div className="flex justify-between  items-center gap-10">
              <Navbar />

            </div>
          </div>
        </div>

    </header>
  )
}

export default Header;

