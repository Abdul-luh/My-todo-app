import { API_URL } from "../lib/API_URL"

export default async function FetchRequest(url = API_URL, optionObj = null, errMsg = null) {
  try {
    // console.log(url, optionObj)
    const result = await fetch(url, optionObj)
    if (!result.ok) throw Error ("please reload app 🙏")
  } catch (error) {
    // console.log(error)
    errMsg = error.message
  } finally {
    return errMsg
  }
}
