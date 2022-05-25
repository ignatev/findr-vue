import RestClient from "./restClient"

const client = new RestClient()

export default {
    getCatalog() {
        console.log("client: ", client)
        console.log("hello from api")
        return client.get("file/")
    }
}