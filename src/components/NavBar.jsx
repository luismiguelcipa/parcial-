const NavBar = () => { 
return(
    <div className="flex justify-center ">
                <nav className="p-5">
                <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                       <div className="hidden md:flex items-center space-x-18 text-lg">
                                <NavLink href="#" className="text-white hover:text-gray-300" to="/">Home</NavLink>
                                <NavLink href="#" className="text-white hover:text-gray-300" to="/about">About</NavLink>
                                <NavLink href="#" className="text-white hover:text-gray-300" to="/">Catalogue </NavLink>
                                <NavLink href="#" className="text-white hover:text-gray-300" to="/promo">Promo</NavLink>
                                <NavLink href="#" className="text-white hover:text-gray-300" to="/">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
)
 }
 export default NavBar;