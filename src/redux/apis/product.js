import axios from 'axios'

export function productApi() {
    return axios.get('https://www.ralali.com/home/quick-search')
        .then(function (result) {
            return result.data
        })
        .catch(function (err) {
            return err
        })
}