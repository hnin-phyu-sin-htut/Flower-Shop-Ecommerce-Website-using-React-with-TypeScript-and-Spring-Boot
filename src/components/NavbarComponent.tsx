
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
  return (
    <>
      <div className="container">
        <nav className="navbar bg-[#F4C2C2] flex align-items-center justify-between px-[60px] py-4">
          <div style={{fontFamily: "Times New Roman, serif"}} className="text-[#C21E56] text-2xl">
            <Link to="/"><span className="text-5xl">S</span>now<span className="text-4xl font-bold">;</span>Flowery</Link>
          </div>
          <ul className="flex p-5 gap-10 text-lg">
            <li>
              <Link to="/"><span className="text-[#C21E56] border-b-2 border-transparent hover:border-b-[#C21E56] duration-300">Home</span></Link>
            </li>
            <li>
              <Link to="/products"><span className="text-[#C21E56] border-b-2 border-transparent hover:border-b-[#C21E56] duration-300">Products</span></Link>
            </li>
            <li>
              <Link to="/services"><span className="text-[#C21E56] border-b-2 border-transparent hover:border-b-[#C21E56] duration-300">Services</span></Link>
            </li>
            <li>
              <Link to="/about"><span className="text-[#C21E56] border-b-2 border-transparent hover:border-b-[#C21E56] duration-300">About</span></Link>
            </li>
            <li>
              <Link to="/contact"><span className="text-[#C21E56] border-b-2 border-transparent hover:border-b-[#C21E56] duration-300">Contact</span></Link>
            </li>
            <li>
              <Link to="/login"><span className="text-white bg-[#C21E56] border-2 border-transparent px-6 py-3 rounded transition duration-300 hover:bg-transparent hover:border-2 hover:border-[#C21E56] hover:text-[#C21E56]">Login</span>
              </Link>
            </li>
            <li>
              <Link to="/register"><span className="text-white bg-[#C21E56] border-2 border-transparent px-6 py-3 rounded transition duration-300 hover:bg-transparent hover:border-2 hover:border-[#C21E56] hover:text-[#C21E56]">Register</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
