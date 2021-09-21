import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '5757c9325bmsh5912bf174eb58bep106188jsnba65699b4c29'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges'

const createRequest = (url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos:builder.query({
            query:()=> createRequest('/exchanges')
        })
    })
})