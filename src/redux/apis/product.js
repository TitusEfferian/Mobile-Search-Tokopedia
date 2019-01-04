import axios from 'axios'

export function productApi(payload) {
    return fetch('http://localhost:1234/api/v1/tokopedia/'+payload)
    .then(function(result){
        return result.json()
    })
}