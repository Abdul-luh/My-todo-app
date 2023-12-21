import React from 'react'

export default function Footer({items, checkedItems, unCheckedItems}) {
    const today = new Date()
  return (
    <footer>
      <p>
        You have {unCheckedItems.length} {unCheckedItems.length === 1 ? "item" : "items"} uncheck, {checkedItems.length} checked {checkedItems.length === 1 ? " item " : " items "} and a total of {items.length} {items.length === 1 ? " item" : " items"}
      </p>
      
      <p>copyright &copy; {today.getFullYear() }</p>
    </footer>
  )
}
