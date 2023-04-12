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
import { CREATE_CUSTOMER_RENTING, DELETE_SELECTED_BOOKINGS, GET_ALL_CUSTOMER_BOOKINGS, GET_CURRENT_CUSTOMER_BOOKINGS, GET_CURRENT_CUSTOMER_RENTINGS, GET_PAST_CUSTOMER_BOOKINGS, GET_PAST_CUSTOMER_RENTINGS, GetAllCurrentCustomerBookings, GetAllCustomerBookingOnSuccess, GetCurrentCustomerBookingOnSuccess, GetCurrentCustomerRentingOnSuccess, GetPastCustomerBookingOnSuccess, GetPastCustomerRentingOnSuccess } from "../Actions/EmployeeBookingsPageActions";
import dayjs from "dayjs";
import { GET_ARCHIVED_CUSTOMER_BOOKINGS, GET_ARCHIVED_CUSTOMER_RENTINGS, GetArchivedCustomerBookingOnSuccess, GetArchivedCustomerRentingsOnSuccess } from "../Actions/archivesActions";

// function getYtVideosApiRequest(){
//     request  
// }

const options = {
    method: 'POST',
    url: 'http://localhost:3001',
    data: {}
};

const convertDates = (date) => {
    const month = date.$M + 1 < 10 ? `0${date.$M + 1}` : date.$M + 1
    const day = date.$D < 10 ? `0${date.$D}` : date.$D
    const convertedValue = `${date.$y}\-${month}\-${day}`
    return convertedValue
}


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

const getArchivedCustomersBooking = (action$, state$) =>
    action$.pipe(
        ofType(GET_ARCHIVED_CUSTOMER_BOOKINGS),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'GET',
                    url: 'http://localhost:3001/queries/',
                };
                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = 'http://localhost:3001/queries/booking_archives/'
                options.url = baseUrl

                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GetArchivedCustomerBookingOnSuccess(response.data.rows));
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

const getArchivedCustomersRentings = (action$, state$) =>
    action$.pipe(
        ofType(GET_ARCHIVED_CUSTOMER_RENTINGS),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'GET',
                    url: 'http://localhost:3001/queries/',
                };
                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = 'http://localhost:3001/queries/renting_archives/'
                options.url = baseUrl

                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GetArchivedCustomerRentingsOnSuccess(response.data.rows));
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


export const archiveEpics = combineEpics(
    getArchivedCustomersBooking,
    getArchivedCustomersRentings
)