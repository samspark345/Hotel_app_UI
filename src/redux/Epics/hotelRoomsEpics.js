import axios from "axios";
import { combineEpics, ofType } from "redux-observable";
import {
    Observable,
    Observer
}from 'rxjs'
import { mergeMap } from "rxjs/operators";
import { GetHotelsOnSuccess, GET_HOTELS, GET_HOTELS_ON_SUCCESS } from "../Actions/hotelActions";
import { GET_CHAIN_NAMES, GET_CHAIN_NAMES_ON_SUCCESS } from "../Actions/hotelChainActions";
import { applyRoomFiltersOnSuccess, APPLY_ROOM_FILTERS, GetRoomsOnSuccess, GET_ROOMS } from "../Actions/hotelRoomActions";

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
    url: 'http://localhost:3001/queries/rooms',
};
  

const getRooms = (action$, state$) =>
    action$.pipe(
        ofType(GET_ROOMS),
        mergeMap((action) => {
            return new Observable((observer) => {
                console.log('dispatched')
                const selectedHotelInfo = state$.value.hotelRoomState.selectedHotelInfo
                const urlToAdd = `hotel/${selectedHotelInfo.hotel_id}/rooms`
                options.url = `${baseUrl}${urlToAdd}`
                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response)
                    observer.next(GetRoomsOnSuccess(response.data.rows));
                    observer.complete()
                    console.log(state$.value)
                })
            })
        })
    )



const applyRoomFilters = (action$, state$) =>
    action$.pipe(
        ofType(APPLY_ROOM_FILTERS),
        mergeMap((action) => {
            return new Observable((observer) => {
                //localhost:3001/queries/hotels?star_rating=&city=&country=&num_rooms=
                console.log('here')
                let query=''
                const selectedFilters = state$.value.hotelRoomState.selectedFilters
                const hotel_id = state$.value.hotelRoomState.selectedHotelInfo.hotel_id
                console.log(selectedFilters)

                
                const Room_Capacity = selectedFilters.Room_Capacity.length > 0? selectedFilters.Room_Capacity.join(',') : ''
                const Views = selectedFilters.Views.length > 0? selectedFilters.Views.join(',') : ''
                const Start_date = selectedFilters.Start_date.length > 0? selectedFilters.Start_date : ''
                const End_Date = selectedFilters.End_date.length > 0? selectedFilters.End_date : ''
                const Min_price = selectedFilters.Min_price.length > 0? selectedFilters.Min_price : ''
                const Max_price = selectedFilters.Max_price.length > 0? selectedFilters.Max_price  : ''


                const Amenities = selectedFilters.Amenities
                const roomService = Amenities.indexOf('room service') > -1? true : false
                const extendable = Amenities.indexOf('extendable') > -1? true : false
                const tv = Amenities.indexOf('tv') > -1? true : false
                const ac = Amenities.indexOf('a/c') > -1? true : false
                const fridge = Amenities.indexOf('fridge') > -1? true : false
                const wifi = Amenities.indexOf('wifi') > -1? true : false



                //Make filter query to api
                query = `available_rooms?hotel_id=${hotel_id}&room_capacity=${Room_Capacity}&views=${Views}&start=${Start_date}&end_date=${End_Date}&min_price=${Min_price}&max_price=${Max_price}&amenities[room_service]=${roomService}&amenities[extendable]=${extendable}&amenities[tv]=${tv}&amenities[ac]=${ac}&amenities[fridge]=${fridge}&amenities[wifi]=${wifi}`
                options.url = `${baseUrl}${query}`
                console.log(options)

                axios.request(
                    options
                ).then((response) => {
                    console.log(response)
                    observer.next(applyRoomFiltersOnSuccess(response.data.rows));
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

export const hotelRoomEpics = combineEpics(
    getRooms,
    applyRoomFilters
)