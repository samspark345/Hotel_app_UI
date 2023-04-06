import axios from "axios";
import { combineEpics, ofType } from "redux-observable";
import {
    Observable,
    Observer
}from 'rxjs'
import { mergeMap } from "rxjs/operators";
import { applyFiltersOnSuccess, APPLY_HOTEL_FILTERS, GetHotelsOnSuccess, GET_HOTELS, GET_HOTELS_ON_SUCCESS } from "../Actions/hotelActions";
import { GET_CHAIN_NAMES, GET_CHAIN_NAMES_ON_SUCCESS } from "../Actions/hotelChainActions";

// function getYtVideosApiRequest(){
//     request  
// }

// fetch('http://localhost:3000/queries/hotels')
                // .then(response => {
                //     console.log("herer")
                //     // var data = JSON.parse(response)
                //     // console.log(response.json)
                //     // console.log(response.body)
                //     return response.json();
                // })
                // .then((data) =>{ 
                //     console.log("here")
                //     console.log(data)
                //     observer.next(GetHotelsOnSuccess(data.rows));
                //     observer.complete()
                //     console.log(state$.value)
                //  })
const baseUrl = 'http://localhost:3001/queries/'
const options = {
    method: 'GET',
    url: 'http://localhost:3001/queries/hotels',
};
  

const getHotels = (action$, state$) =>
    action$.pipe(
        ofType(GET_HOTELS),
        mergeMap((action) => {
            return new Observable((observer) => {
                console.log('dispatched')
                axios.request(
                    options
                ).then((response) => {
                    console.log(response)
                    observer.next(GetHotelsOnSuccess(response.data.rows));
                    observer.complete()
                    console.log(state$.value)
                })
            })
        })
    )



const applyFilters = (action$, state$) =>
    action$.pipe(
        ofType(APPLY_HOTEL_FILTERS),
        mergeMap((action) => {
            return new Observable((observer) => {
                //localhost:3001/queries/hotels?star_rating=&city=&country=&num_rooms=
                let query=''
                const selectedFilters = state$.value.hotelState.selectedFilters
                console.log(state$.value)

                const star_rating = selectedFilters.star_rating.length > 0? selectedFilters.star_rating.join(',') : ''
                const city = selectedFilters.city.length > 0? selectedFilters.city[0] : ''
                const country = selectedFilters.country.length > 0? selectedFilters.country[0] : ''
                const num_rooms = selectedFilters.No_Of_Rooms.length > 0? selectedFilters.No_Of_Rooms.join(',') : ''
                const chain_name = selectedFilters.chain_name.length > 0? selectedFilters.chain_name.join(',') : ''

                //Make filter query to api
                query = `${baseUrl}hotels?chain_name=${chain_name}&star_rating=${star_rating}&city=${city}&country=${country}&num_rooms=${num_rooms}`
                options.url = query
                console.log(options)

                axios.request(
                    options
                ).then((response) => {
                    console.log(response)
                    observer.next(applyFiltersOnSuccess(response.data.rows));
                    observer.complete()
                    console.log(state$.value)
                })
            })
        })
    )


const getHotelsDummy = (action$, state$) =>
    action$.pipe(
        ofType(GET_HOTELS),
        mergeMap((action) => {
            return new Observable((observer) => {

                observer.next(GetHotelsOnSuccess)
            })
        })
    )

export const hotelEpics = combineEpics(
    getHotels,
    applyFilters
)