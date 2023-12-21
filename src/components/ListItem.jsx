import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export default function ListItem({item, handleCheck, handleDelete}) {
  return (
    <>
        <input type="checkbox"
            checked={item.checked} 
            onChange={()=>{handleCheck(item.id)}}
        />
        <label
              style={item.checked ?
                  { textDecoration: 'line-through' } : null}
              htmlFor={item.item}
          >
            {item.item}
        </label>
        <FaTrashAlt
            role='button'
            tabIndex='0'
        aria-label={`Delete ${item.item}`}
        onClick={()=> handleDelete(item.id)}
        />
    </>
  )
}
