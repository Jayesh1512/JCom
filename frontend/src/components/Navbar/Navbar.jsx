import { Link } from 'react-router-dom';
import '../../App.css'
const Navbar = () => {
  return (
    <nav className="relative flex justify-between text-white py-4 navbar">
      {/* left  */}
      <div className="">
        Logo
      </div>
      <div>
        <ul className="flex gap-8 cursor-pointer">
          <li>
            <Link to="/java" className="nav-elem relative"> Java Compiler </Link>
          </li>
          <li>
            <Link to="/cpp" className="nav-elem relative"> C++ Compiler </Link>
          </li>
          <li>
            <Link to="/python" className="nav-elem relative"> Python Compiler </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
