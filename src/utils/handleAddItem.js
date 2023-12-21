import FetchRequest from "../helpers/FetchRequest"
import { API_URL } from "../lib/API_URL"

export default async function handleAddItem(items, setItems, setFetchError, item) {
    
    // create an id property 
    // if there is are items in the array ? set the id = lastItem's id + 1
    const id = items.length ? items[items.length - 1].id + 1 : 1

    // create the whole item object and add a checked value of false to it
    const myNewItem = { id, checked: false, item }

    // append the new item to the existing items | Array 
    // items.push(myNewItem)
    const NewItems = [...items, myNewItem]

    // setItems to Newitems
    setItems(NewItems)

    const postOtions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(myNewItem)
    }
    const result = await FetchRequest(API_URL, postOtions)
    if (result) setFetchError(result)

}
