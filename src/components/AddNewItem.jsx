import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

export default function AddNewItem({ newItem, setNewItem, handleSubmit }) {
    const inputRef = useRef()
    
  return (
      <form className='addNewForm' onSubmit={handleSubmit}>
          <label htmlFor="addNewItem">Add new</label>
          <input
              required
              autoFocus
              type="text"
              ref={inputRef}
              value={newItem}
              id='addNewItem'
              placeholder='Add New'
              onChange={(e)=>{setNewItem(e.target.value)}}
          />
          <button
              type='submit'
              aria-label='Add New'
          >
              <FaPlus />
          </button>
    </form>
  )
}
