import React from 'react';
import './styles.scss';
import emptyImg from './emptycart.png';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link,useLocation  } from 'react-router-dom';
import get from 'lodash/get';

const EmptyCart = () => {
  const location = useLocation();
  let url = get(location, 'state.prevPage', '/');
  
  return (
    <div className='empty-cart'>
        <img className='empty-cart__img' src={emptyImg} alt="empty cart" />
        <Link to={url} aria-label={location.state !== null? 'previos page': 'back to home'} className='empty-cart__btn'>
          <FaLongArrowAltLeft />
        </Link>
    </div>
  )
}

export default EmptyCart