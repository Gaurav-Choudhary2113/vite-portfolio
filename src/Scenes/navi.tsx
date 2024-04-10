import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import chefnews from "../../public/assets/icons/chefnews.svg";

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.div
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.24 }}
      className="fixed top-0 z-50 w-screen bg-[#fff8d8] shadow"
    >
      <div className="flex w-full justify-between py-6 lg:px-20 ">
        <div className="h-min text-xl font-bold md:text-2xl ">
          <Image
            src={chefnews as HTMLImageElement}
            alt="logo"
            className="h-[60px] w-min cursor-pointer "
            onClick={() => router.push("/home")}
          />
        </div>
        <div className="mx-5 flex items-center justify-end font-semibold ">
          <div
            className="block cursor-pointer md:hidden"
            onClick={toggleMobileMenu}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.path
                fill="#000000"
                initial={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
              <motion.path
                fill="#000000"
                initial={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </motion.svg>
          </div>

          <div className="hidden items-center md:flex md:w-[50vw] lg:w-auto">
            <motion.div
              whileHover={{ scale: 1.2, color: "#d62828" }}
              whileTap={{ scale: 1 }}
            >
              <Link
                href={"/blogs"}
                className="navbar-link mx-4 cursor-pointer"
                onClick={() => router.push("/blogs")}
              >
                Blogs
              </Link>
            </motion.div>
            {/* <motion.div
              whileHover={{ scale: 1.2, color: "#d62828" }}
              whileTap={{ scale: 1 }}
            >
              <Link href={"#"} className="navbar-link mx-4 cursor-pointer">
                Projects
              </Link>
            </motion.div> */}
            <motion.div
              whileHover={{ scale: 1.2, color: "#d62828" }}
              whileTap={{ scale: 1 }}
            >
              <Link
                href={"/gallery"}
                className="navbar-link mx-4 cursor-pointer"
                onClick={() => router.push("/gallery")}
              >
                Gallery
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, color: "#d62828" }}
              whileTap={{ scale: 1 }}
            >
              <Link
                href={
                  "mailto:codechefvit@gmail.com?body=E-mail%3D%0D%0Amsg%3D%0D%0A%0D%0A"
                }
                className="navbar-link mx-4 cursor-pointer"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed right-0 z-50 flex h-full w-full flex-col items-center bg-[#fff8d8] text-xl font-bold shadow-xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-4 my-4 mt-20 flex cursor-pointer active:text-zinc-400"
            >
              <Link
                href={"/blogs"}
                className="navbar-link mx-4 cursor-pointer"
                onClick={() => router.push("/blogs")}
              >
                Blogs
              </Link>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-4 my-4 flex cursor-pointer active:text-zinc-400"
            >
              <Link href={"#"} className="navbar-link mx-4 cursor-pointer">
                Projects
              </Link>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-4 my-4 flex cursor-pointer active:text-zinc-400"
            >
              <Link
                href={"/gallery"}
                className="navbar-link mx-4 cursor-pointer"
                onClick={() => router.push("/gallery")}
              >
                Gallery
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-4 my-4 flex cursor-pointer active:text-zinc-400"
            >
              <Link href={"#"} className="navbar-link mx-4 cursor-pointer">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
