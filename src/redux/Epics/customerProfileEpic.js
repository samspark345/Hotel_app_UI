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
import { GET_CUSTOMER_BOOKINGS, GET_CUSTOMER_PROFILE, GetCustomerBookingOnSuccess, GetCustomerProfile, GetCustomerProfileOnSuccess, UPDATE_CUSTOMER_PROFILE } from "../Actions/CustomerInfoActions";

// function getYtVideosApiRequest(){
//     request  
// }

const options = {
    method: 'POST',
    url: 'http://localhost:3001',
    data: {}
};



const getCustomer = (action$, state$) =>
    action$.pipe(
        ofType(GET_CUSTOMER_PROFILE),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'GET',
                    url: 'http://localhost:3001/queries/',
                };
                const UserState = state$.value.User

                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = 'http://localhost:3001/queries/customer/'
                options.url = `${baseUrl}${UserState.customerInfo.customerId}`

                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    const accountInfo = response.data.rows[0]
                    accountInfo.registration_date = accountInfo.registration_date.split('T')[0]
                    observer.next(GetCustomerProfileOnSuccess(accountInfo));
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

const updateCustomerInfo = (action$, state$) =>
    action$.pipe(
        ofType(UPDATE_CUSTOMER_PROFILE),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'POST',
                    url: 'http://localhost:3001/queries/',
                };
                const UserState = state$.value.User

                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = 'http://localhost:3001/update/customers/'
                options.url = `${baseUrl}${UserState.customerInfo.customerId}`
                const body = action.payload
                options.data = body
                console.log(options)
                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GetCustomerProfile());
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

export const customerProfileEpic = combineEpics(
    getCustomer,
    updateCustomerInfo
)