import React, { useState } from "react";
import MenuIconBlack from "../assets/MenuIconBlack.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";
import Logo from "../assets/Logo.svg";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full h-[4rem] bg-gray-200 rounded-[1rem] flex items-center justify-between p-[1rem] relative z-4">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <button onClick={toggleMenu}>
          <img src={MenuIconBlack} alt="Menu Icon" className="text-black" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-20"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-gray-200 shadow-lg z-30 rounded-l-[1rem]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <ul className="flex flex-col items-start p-6 gap-6 mt-16">
                <li className="flex items-center gap-3 text-lg font-medium">
                  <img src={ProfileIcon} alt="Profile Icon" />
                  Perfil
                </li>
                <li className="text-lg font-medium">Ventas</li>
                <li className="text-lg font-medium">Compras</li>

                <button onClick={toggleMenu} className="mt-8 text-red-500">
                  Cerrar
                </button>
              </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Header;
