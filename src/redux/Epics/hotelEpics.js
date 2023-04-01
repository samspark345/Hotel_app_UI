import axios from "axios";
import { combineEpics, ofType } from "redux-observable";
import {
    Observable,
    Observer
}from 'rxjs'
import { mergeMap } from "rxjs/operators";
import { GetHotelsOnSuccess, GET_HOTELS, GET_HOTELS_ON_SUCCESS } from "../Actions/hotelActions";
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

const options = {
    method: 'GET',
    url: 'http://localhost:3000/queries/hotels',
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
    getHotels
)