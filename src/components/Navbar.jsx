import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (id) => {
    setActive(id);
    navigate(`/${id}`);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
              to="/"
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
          >
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Faslan | &nbsp;
              <span className='sm:block hidden'>FullStack Developer</span>
            </p>
          </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link) => (
                <li
                    key={link.id}
                    className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => handleLinkClick(link.id)}
                >
                  <span>{link.title}</span>
                </li>
            ))}
          </ul>

        </div>
      </nav>
  );
};

export default Navbar;
