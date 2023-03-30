import axios from "axios";
import { combineEpics, ofType } from "redux-observable";
import {
    Observable,
    Observer
}from 'rxjs'
import { mergeMap } from "rxjs/operators";
import { GetHotelsOnSuccess, GET_HOTELS, GET_HOTELS_ON_SUCCESS } from "../Actions/hotelActions";
import { GET_CHAIN_NAMES, GET_CHAIN_NAMES_ON_SUCCESS } from "../Actions/hotelChainActions";
import { GET_CITY_FILTER, GET_HOTEL_NAMES, GET_ROOM_CAPACITY, GET_ROOM_COUNT_FILTER, POPULATE_ALL_FILTERS } from "../Actions/hotelFilterOptionsActions";

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
  

const getCityFilters = (action$, state$) =>
    action$.pipe(
        ofType(GET_CITY_FILTER),
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

const getHotelNames = (action$, state$) =>
    action$.pipe(
        ofType(GET_HOTEL_NAMES),
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

const getRoomCapacities = (action$, state$) =>
    action$.pipe(
        ofType(GET_ROOM_CAPACITY),
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

const getRoomCount = (action$, state$) =>
    action$.pipe(
        ofType(GET_ROOM_COUNT_FILTER),
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

const populateAllFIlters = (action$, state$) =>
    action$.pipe(
        ofType(POPULATE_ALL_FILTERS),
        mergeMap((action) => {
            return new Observable((observer) => {

                observer.next(getCityFilters);
                observer.next(getHotelNames);
                observer.next(getRoomCapacities);
                observer.next(getRoomCount);
            })
        })
    )
export const hotelEpics = combineEpics(
    getCityFilters,
    getHotelNames,
    getRoomCapacities,
    getRoomCount
)