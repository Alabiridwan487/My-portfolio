import logo from '../assets/Kiit-preview.png'
import {FaLinkedin, FaGithub} from 'react-icons/fa'



const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className='w-40 mx-5' />
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/alabi-ridwan-574581345/" target='blank'>
            <FaLinkedin />
            </a>

            <a href="https://github.com/Alabiridwan487" target='blank'>
            <FaGithub />
            </a>

        </div>
    </nav>
  )
}

export default Navbar
