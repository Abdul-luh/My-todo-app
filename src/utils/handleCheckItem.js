import FetchRequest from "../helpers/FetchRequest"
import { API_URL } from "../lib/API_URL"

export default async function handleCheckItem(items, setItems, setFetchError, itemId) {
    try {
        // select and render all item and if item.id = itemId(id passed in) invert the checked property
        const listItems = items.map(item => item.id === itemId ? { ...item, checked: !item.checked } : item)
        
        // set items = listItems
        setItems(listItems)

        // select the checked item from the listItems 
        const selectedItem = listItems.filter(item => item.id === itemId)
        
        // create a patch|update option 
        const updateOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedItem)
        }

        // create the url with the concatenated id 
        const reqUrl = `${API_URL}/${itemId}`
        const result = await FetchRequest(reqUrl, updateOptions)
        if (result) setFetchError(result)
        
    } catch (error) {
        // console.log(error)
        setFetchError(error.message)
    }
}
