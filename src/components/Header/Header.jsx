import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Resources/Logo.png"



const Header = () => {
  const location = useLocation();

  const Links = <>
    <li className="mr-4"><NavLink to='/' className={` ${location.pathname === '/' ? 'activeLink' : ''
      }`}>Home</NavLink></li>
    <li className="mr-4"><NavLink to='/Donation' className={` ${location.pathname === '/Donation' ? 'activeLink' : ''
      }`}>Donation</NavLink></li>
    <li className="mr-4"><NavLink to='/Statistics' className={` ${location.pathname === '/Statistics' ? 'activeLink' : ''
      }`}>Statistics</NavLink></li>
  </>
  return (
    <div className="navbar  container mt-6 relative">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className=" bg menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
            {
              Links
            }
          </ul>
        </div>
        <div>

          <img className="md:ml-10 w-36 " src={Logo} alt="" />

        </div>

      </div>
      <div className="navbar-end  hidden lg:flex">
        <ul className=" menu-horizontal px-1">
          {
            Links
          }
        </ul>
      </div>

    </div>
  );
};

export default Header;