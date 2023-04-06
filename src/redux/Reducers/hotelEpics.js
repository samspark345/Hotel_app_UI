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

const options = {
    method: 'GET',
    url: 'https://free-football-soccer-videos.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': 'cf6b34c19dmsh3dbdfa1aa1df656p1f0957jsnae47a75e33ea',
      'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
};
  

const getHotels = (action$, state$) =>
    action$.pipe(
        ofType(GET_HOTELS),
        mergeMap((action) => {
            return new Observable((observer) => {

                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GetHotelsOnSuccess(response.data));
                    observer.complete()
                    console.log(state$.value)
                    // observer.next(IncreaseVideosToGet(response.data.));
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
    getHotelsDummy
)