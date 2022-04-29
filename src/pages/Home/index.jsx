import React, { useRef } from "react";
import "./styles.scss";
import Banner from "../../components/Home/Banner";
import Menu from "../../components/common/Menu";
import Footer from "../../components/common/Footer";
import CartCountButton from "../../components/common/CartCountButton";
import { menuItemsData } from "../../components/common/Menu/data.js";

function Home() {
  const menuRef = useRef();

  const handleScrollMenu = ()=> {
    menuRef.current.scrollIntoView({
      behavior: 'smooth',
      
    })
  }

  return (
    <>
      <Banner handleScrollMenu={handleScrollMenu}/>
      <Menu list={menuItemsData} ref={menuRef}/>
      <Footer />
      <CartCountButton/>
    </>
  );
}

export default Home;
