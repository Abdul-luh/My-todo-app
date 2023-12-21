import React from 'react'
import ListItem from './ListItem'

export default function Contents({items, handleCheck, handleDelete}) {
  return (
      <>
          {/* If no items exists display a text dialogue  */}
          {
              !items.length ? (
                      <p className='noItems'>
					You have no todos😢
				</p>
               
              ) : (
                       <ul>
                    {
                        items.map((item) => (
                            <li key={item.id} className='listItem'>
                                <ListItem
                                    item={item}
                                    handleCheck={handleCheck}
                                    handleDelete={handleDelete}
                                />
                            </li>
                        ))
                    }
                </ul>
              )
          }
      </>
  )
}
