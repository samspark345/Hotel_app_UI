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
import { DELETE_SELECTED_BOOKINGS, GET_ALL_CUSTOMER_BOOKINGS, GET_CURRENT_CUSTOMER_BOOKINGS, GET_PAST_CUSTOMER_BOOKINGS, GetAllCurrentCustomerBookings, GetAllCustomerBookingOnSuccess, GetCurrentCustomerBookingOnSuccess, GetPastCustomerBookingOnSuccess } from "../Actions/EmployeeBookingsPageActions";
import dayjs from "dayjs";

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

const getAllCustomersBooking = (action$, state$) =>
    action$.pipe(
        ofType(GET_ALL_CUSTOMER_BOOKINGS),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'GET',
                    url: 'http://localhost:3001/queries/',
                };
                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = 'http://localhost:3001/queries/bookings/'
                options.url = baseUrl

                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GetAllCustomerBookingOnSuccess(response.data.rows));
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


const getCurrentCustomersBooking = (action$, state$) =>
    action$.pipe(
        ofType(GET_CURRENT_CUSTOMER_BOOKINGS),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'GET',
                    url: 'http://localhost:3001/queries/',
                    params: {

                    }
                };
                const today = convertDates(dayjs())
                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = 'http://localhost:3001/queries/booking/past_start_date'
                options.url = baseUrl
                options.url = `${baseUrl}?date=${today}`


                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GetCurrentCustomerBookingOnSuccess(response.data.rows));
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


const getPastCustomersBooking = (action$, state$) =>
    action$.pipe(
        ofType(GET_PAST_CUSTOMER_BOOKINGS),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'GET',
                    url: 'http://localhost:3001/queries/',
                    params: {

                    }
                };
                const today = convertDates(dayjs())
                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = 'http://localhost:3001/queries/booking/before_start_date'
                options.url = `${baseUrl}?date=${today}`
                

                console.log(options)
                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GetPastCustomerBookingOnSuccess(response.data.rows));
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
    
const deleteSelectedBookings = (action$, state$) =>
    action$.pipe(
        ofType(DELETE_SELECTED_BOOKINGS),
        mergeMap((action) => {
            return new Observable((observer) => {
                const options = {
                    method: 'POST',
                    url: 'http://localhost:3001/delete/',
                };


                  
                console.log(action)
                console.log(state$.value)
                const baseUrl = 'http://localhost:3001/delete/booking/'
                action.payload.forEach((booking)=> {
                    options.url = `${baseUrl}${booking.booking_id}`
                    console.log(options)
                    axios.request(
                        options
                    )
                })
                observer.complete()               

                // console.log(options)
                // axios.request(
                //     options
                // ).then((response) => {
                //     console.log(response.data)
                //     observer.next(GetPastCustomerBookingOnSuccess(response.data.rows));
                //     observer.complete()
                //     console.log(state$.value)
                //     // observer.next(IncreaseVideosToGet(response.data.));
                // }).catch(()=> {
                //     console.log("errr")
                //     observer.complete()
                // })
            })
        })
    )

export const employeeCustomerBookingsEpic = combineEpics(
    getAllCustomersBooking,
    getCurrentCustomersBooking,
    getPastCustomersBooking,
    deleteSelectedBookings
)