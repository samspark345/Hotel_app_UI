import axios from "axios";
import { combineEpics, ofType } from "redux-observable";
import {
    Observable,
    Observer
}from 'rxjs'
import { mergeMap } from "rxjs/operators";
import { AUTHENTICATE_CUSTOMER, AuthenticateCustomerOnSuccess, AUTHENTICATE_EMPLOYEE, AuthenticateEmployeeOnSuccess, SIGN_UP, setAuthenticateErrorStatus } from "../Actions/AuthenticateActions";
import { GetHotelsOnSuccess, GET_HOTELS, GET_HOTELS_ON_SUCCESS } from "../Actions/hotelActions";
import { GET_CHAIN_NAMES, GET_CHAIN_NAMES_ON_SUCCESS } from "../Actions/hotelChainActions";
import { GET_CITY_FILTER, GET_HOTEL_NAMES, GET_ROOM_CAPACITY, GET_ROOM_COUNT_FILTER, POPULATE_ALL_FILTERS } from "../Actions/hotelFilterOptionsActions";
import { GET_CUSTOMER_BOOKINGS, GetCustomerBookingOnSuccess } from "../Actions/CustomerInfoActions";

// function getYtVideosApiRequest(){
//     request  
// }

const options = {
    method: 'POST',
    url: 'http://localhost:3001',
    data: {}
};


const myRandom = (action$, state$) =>
    action$.pipe(
        ofType(AUTHENTICATE_CUSTOMER),
        mergeMap((action) => {
            return new Observable((observer) => {
                console.log(action)
                const baseUrl = 'http://localhost:3001/queries/customer/login'
                options.data = {
                    email: action.payload.email,
                    password: action.payload.password,
                }
                
                options.url = baseUrl

                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    const userInfo = {
                        email: action.payload.email,
                        password: action.payload.password,
                        customerId: response.data.rows[0].customer_id
                    }
                    observer.next(AuthenticateCustomerOnSuccess(userInfo));
                    observer.next(setAuthenticateErrorStatus(false))
                    observer.complete()
                    console.log(state$.value)
                    // observer.next(IncreaseVideosToGet(response.data.));
                }).catch(()=> {
                    console.log("errr")
                    observer.next(setAuthenticateErrorStatus(true))
                    observer.complete()
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

const getCustomerBooking = (action$, state$) =>
    action$.pipe(
        ofType(GET_CUSTOMER_BOOKINGS),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'GET',
                    url: 'http://localhost:3001/queries/',
                };
                const UserState = state$.value.User

                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = 'http://localhost:3001/queries/bookings/'
                options.url = `${baseUrl}${UserState.customerInfo.customerId}`

                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GetCustomerBookingOnSuccess(response.data.rows));
                    observer.complete()
                    console.log(state$.value)
                    // observer.next(IncreaseVideosToGet(response.data.));
                }).catch(()=> {
                    console.log("errr")
                    observer.complete()
                })
            })
        })
    )    

export const customerBookingsEpics = combineEpics(
    getCustomerBooking
)