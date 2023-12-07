import { Link } from "react-router-dom"

const Navbar = () => {
  return(
    <>
      <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <nav className="navigation">
          <ul>
            <li>
              <button>Language</button>
            </li>
            <li>
              <button>Theme</button>
            </li>
            <li>
              <Link to="/archives">Arsip</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}
export default Navbar