import React from 'react';
import './styles.scss';
import { FaMinus, FaPlus } from 'react-icons/fa';


const ButtonAddRemoveItem = ({quantity,handleAddItem,handleRemoveItem}) => {
  return (
    <div className='btnAddRemove'>
        {quantity!==0
            ? (<div className='btnAddRemove__positive'>
                <button className='btnAddRemove__positive-minus' onClick={handleRemoveItem}><FaMinus /></button>
                <span className='btnAddRemove__positive-text'>{quantity}</span>
                <button className='btnAddRemove__positive-plus' onClick={handleAddItem}><FaPlus /></button>
            </div>
            )
            : (<button className='btnAddRemove__negative' onClick={handleAddItem}>
                 <span className='btnAddRemove__negative-text'>ADD</span>
                 <span className='btnAddRemove__negative-icon'><FaPlus /></span>
            </button>
            )
        }
    </div>
  )
}

export default ButtonAddRemoveItem