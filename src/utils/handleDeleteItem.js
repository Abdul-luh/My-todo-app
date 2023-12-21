import FetchRequest from "../helpers/FetchRequest"
import { API_URL } from "../lib/API_URL"

export default async function handleDeleteItem(items, setItems, setFetchError, itemId) {
    try {
        // select list of  all items except the one with selected id
        const listItems = items.filter((item) => item.id !== itemId)
        
        // set it equal to the list 
        setItems(listItems)

        const deleteOptions = {
            method: "DELETE",
        }
        
        const reqUrl = `${API_URL}/${itemId}`
        const result = await FetchRequest(reqUrl, deleteOptions)
        if (result) setFetchError(result)
    
  } catch (error) {
    //   console.log(error)
      setFetchError(error.message)
  }
}

// NOTE: delete method does not require header and body because it is not being sent