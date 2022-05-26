import RestClient from "./restClient"

const client = new RestClient()

export default {
    getCatalog(relativePath) {
        return client.get(relativePath);
    }
}