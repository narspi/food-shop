import React from 'react';
import './styles.scss';
import bannerImg from './banner.png';
import Logo from '../../common/Logo';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Banner({handleScrollMenu}) {
  return (
    <header className='header'>
        <div className="header-content">
          <Logo />
          <div className="content-main">
            <h1 className="content-main__title">Delicious food for your craving</h1>
            <p className="content-main__descr">We made fresh and healthy meals width deffirent recipes</p>
            <button onClick={handleScrollMenu} className="content-main__btn"><span>View menu</span> <FaLongArrowAltRight /></button>
          </div>
        </div>
        <img src={bannerImg} alt="banner" className="header-img" />
    </header>
  )
}

export default Banner