import './style.css'
import React, { useEffect, useState } from 'react'
// SECTIONS 
import Header from "./sections/Header"
import Footer from './sections/Footer'
// COMPONENTS 
import AddNewItem from './components/AddNewItem'
import SearchItem from './components/SearchItem'
import Contents from './components/Contents'
// UTILITIES
import handleAddItem from './utils/handleAddItem'
import handleCheckItem from './utils/handleCheckItem'
import handleDeleteItem from './utils/handleDeleteItem'
// LIB
import { API_URL } from './lib/API_URL'

export default function App() {
  const [search, setSearch] = useState('')
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)

useEffect(() => {
  const fetchItems = async () => {
    try {
      setLoading(true)
      const response = await fetch(API_URL)
      if (!response.ok) throw Error('did not recieve expected data')
      const listItems = await response.json()
      setItems(listItems)
      
    } catch (error) {
      // console.log(error.message )
      setFetchError(error.message)
    } finally {
      setLoading(false)
      
    }
  }

  (async ()=> await fetchItems())()
}, [])

  // SUBMIT FUNCTION 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    handleAddItem(items, setItems, setFetchError, newItem)
    setNewItem("")
  }

  // CHECK FUNCTION
  const handleCheck = (id) => {
    handleCheckItem(items, setItems, setFetchError, id)
  }

  // DELETE FUNCTION
  const handleDelete = (id) => {
    handleDeleteItem(items, setItems, setFetchError, id)
  }


  return (
	<div className="app"> 
      <Header title={"Todo list"} />
      <main>

        {/* search  item  */}
        <SearchItem
          search={search}
          setSearch={setSearch}
        />

        {/* Add new item  */}
        <AddNewItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />

        {/* If content is still loading and there is no error message yet display a wait message  */}
        {
          loading && !fetchError && (
            <p
              className='waitMsg'
              style={{
							fontSize: "2rem",
              }}
            >
						please wait ✋🏾 as content is loading...
					</p>
          )
        }

        {/* If there is an Error message display the error message */}
        {
          fetchError && (
            <p className='fetchError'>
              Error: {fetchError}
            </p>
          )
        }

        {/* display all items */}
        {
          !loading && !fetchError && (
            <Contents
              items={items.filter(itm => itm.item.toLowerCase().includes(search.toLocaleLowerCase()))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          )
        }

      </main>
      <Footer
        items={items}
        checkedItems={items.filter(item => item.checked === true)}
        unCheckedItems={items.filter(item => item.checked === false)}
        
      />
	</div>
  )
}