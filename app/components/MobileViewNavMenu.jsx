import { IoIosArrowForward } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryAddCheck, MdFavoriteBorder, MdOutlinePlace, MdLogout } from "react-icons/md";



const MobileViewNavMenu = ({showMenu, isLoggedIn, setIsLoggedIn, setShowMenu}) => {

    return (
        <section className={`${showMenu ? 'left-0' : '-left-full'} fixed inset-0 ease-in duration-300 w-9/12 bg-white rounded-r-2xl z-20`}>

            <div className={`h-full flex flex-col gap-y-16 justify-between ${isLoggedIn ? 'pt-16' : 'pt-24'} p-6 relative w-full overflow-y-auto`}>

                <header className="absolute flex justify-end pe-12 top-10 w-full">
                    <ul
                        onClick={() => setShowMenu(!showMenu)}
                        className="nav_menu_toggle "
                    >
                        <li className={`h-1 rounded-sm bg-gray-500 transform duration-200 ${showMenu && ' rotate-45 translate-x-1 translate-y-1'}`}></li>
                        <li className={`h-1 rounded-sm bg-gray-500 ${showMenu && 'hidden'}`}></li>
                        <li className={`h-1 rounded-sm bg-gray-500 transform duration-200 ${showMenu && ' -rotate-45 translate-x-1 -translate-y-1'}`}></li>
                    </ul>
                </header>

                <ul className="nav_list divide-y-2 divide-gray-300">
                    <li>
                        {
                            isLoggedIn
                                ? (
                                    <details id="more_user_detail">

                                        <summary className="py-4 flex items-center justify-between cursor-pointer">
                                            <img src="/assets/unknown.png" alt="unknown user" className="rounded-full object-cover w-10 h-10" />
                                            <div className="relative right-2">
                                                <p className="font-medium">Alikhanov Asrorjon</p>
                                                <p>+234 956 1136</p>
                                            </div>
                                            <IoIosArrowForward className="text-2xl arrow_rotate duration-200" />
                                        </summary>
                                        <nav className="text-lg flex-col gap-3 flex pb-4 ps-2">
                                            <a href="#" className="flex items-center gap-6 text-gray-500 hover:text-red-500">
                                                <FaRegUser className="font-medium text-2xl" />
                                                Personal information
                                            </a>
                                            <a href="#" className="flex items-center gap-6 text-gray-500 hover:text-red-500">
                                                <MdOutlineLibraryAddCheck className="font-medium text-2xl" />
                                                My orders
                                            </a>
                                            <a href="#" className="flex items-center gap-6 text-gray-500 hover:text-red-500">
                                                <MdFavoriteBorder className="font-medium text-2xl" />
                                                Favorites
                                            </a>
                                            <a href="#" className="flex items-center gap-6 text-gray-500 hover:text-red-500">
                                                <MdOutlinePlace className="font-medium text-2xl" />
                                                Addresses
                                            </a>
                                            <a onClick={() => setIsLoggedIn(!isLoggedIn)} href="#" className="flex items-center gap-6 text-gray-500 hover:text-red-500">
                                                <MdLogout className="font-medium text-2xl" />
                                                Logout
                                            </a>
                                        </nav>
                                    </details>
                                )
                                : (
                                    <button
                                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                                        className="bg-blue-300 rounded-lg w-full flex items-center justify-center p-4 mb-4">
                                        Login to account
                                    </button>
                                )
                        }
                    </li>
                    <li>
                        <form className="flex-col flex gap-3 py-3 text-lg">
                            <label className="flex items-center gap-3">
                                <input type="radio" name="gender" className="w-4 h-4 text-red-500 bg-gray-200" />
                                Uzbek
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="radio" name="gender" className="w-4 h-4 text-red-500 bg-gray-200" />
                                Russian
                            </label>
                        </form>
                    </li>
                    <li>
                        <nav className="text-lg font-medium">
                            <h3 className="py-4">Sections</h3>
                            <ul className="font-semibold ps-3 flex-col flex gap-y-3">
                                <li className="flex items-center justify-between">
                                    <a href="#categories">Categories</a>
                                    <IoIosArrowForward />
                                </li>
                                <li className="flex items-center justify-between">
                                    <a href="#best_sellers">Product catalog</a>
                                    <IoIosArrowForward />
                                </li>
                                <li className="flex items-center justify-between">
                                    <a href="#">Our services</a>
                                    <IoIosArrowForward />
                                </li>
                                <li><a href="#">Nation trade</a></li>
                                <li><a href="#">Nation trade</a></li>
                                <li><a href="#footer">About Us</a></li>
                            </ul>
                        </nav>
                    </li>
                </ul>

                <footer className="text-sm">
                    <h4 className="font-medium text-lg capitalize mb-2">Information service</h4>
                    <address className="text-blue-500 flex-col flex w-2/3">
                        <a href="mailto:chimaobi01@gmail.com">chimaobi01@gmail.com</a>
                        <a href="tel:2349039561136">+234 903 956 1136</a>
                    </address>
                </footer>

            </div>

        </section>
    )
}

export default MobileViewNavMenu