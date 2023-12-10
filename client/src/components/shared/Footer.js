import { Link } from "react-router-dom";
import logo from '../../assets/logo-ks.png'
import { ImLocation2 } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import { MdPhoneEnabled } from "react-icons/md";

const Footer = () => {
    return(
        <footer className="">
            <div className="container mx-auto px-4 grid grid-cols-12 bg-ksC2 py-10">
                <div className="col-span-3"></div>
                <div className="col-span-3">
                    <Link to='/' className="hidden md:inline-block">
                        <img className="w-52" src={logo} alt='ks industries'/>
                    </Link>
                </div>
                <div className="col-span-3">
                    <ul className="">
                        <li className="mb-4">
                            <p className="text-white text-3xl opacity-30 mb-7">Contact Us</p>
                        </li>
                        <li className='flex justify-start items-center py-3 border-b border-t border-[rgb(255,255,255)]/20'>
                            <ImLocation2 className='text-white mr-2'/>
                            <p className="text-base text-white">Thundathumkadavu, Varapuzha P O, Kochi</p>
                        </li>
                        <li className='flex justify-start items-center py-3'>
                            <IoIosMail className='text-white mr-2'/>
                            <p className="text-base text-white">info@ksindustries.com</p>
                        </li>
                        <li className='flex justify-start items-center py-3 border-b border-t border-[rgb(255,255,255)]/20'>
                            <MdPhoneEnabled className='text-white mr-2'/>
                            <p className="text-base text-white">+1 234 056 78 90</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <p className="py-2 text-ksC5">© Copyright K.S Industries</p>
            </div>
        </footer>
    )
}

export default Footer;