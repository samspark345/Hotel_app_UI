import axios from "axios";
import { combineEpics, ofType } from "redux-observable";
import {
    Observable,
    Observer
}from 'rxjs'
import { mergeMap } from "rxjs/operators";
import { AUTHENTICATE_CUSTOMER, AuthenticateCustomerOnSuccess, AUTHENTICATE_EMPLOYEE, AuthenticateEmployeeOnSuccess, SIGN_UP } from "../Actions/AuthenticateActions";
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
  

const AuthenticateCustomer = (action$, state$) =>
    action$.pipe(
        ofType(AUTHENTICATE_CUSTOMER),
        mergeMap((action) => {
            return new Observable((observer) => {

                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(AuthenticateCustomerOnSuccess(response.data));
                    observer.complete()
                    console.log(state$.value)
                    // observer.next(IncreaseVideosToGet(response.data.));
                })
            })
        })
    )

const AuthenticateEmployee = (action$, state$) =>
    action$.pipe(
        ofType(AUTHENTICATE_EMPLOYEE),
        mergeMap((action) => {
            return new Observable((observer) => {

                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(AuthenticateEmployeeOnSuccess(response.data));
                    observer.complete()
                    console.log(state$.value)
                    // observer.next(IncreaseVideosToGet(response.data.));
                })
            })
        })
    )

const SignUp = (action$, state$) =>
    action$.pipe(
        ofType(SIGN_UP),
        mergeMap((action) => {
            return new Observable((observer) => {

                axios.request(
                    options
                )
            })
        })
    )

export const hotelEpics = combineEpics(
    AuthenticateCustomer,
    AuthenticateEmployee,
    SignUp
)