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

// function getYtVideosApiRequest(){
//     request  
// }

const options = {
    method: 'POST',
    url: 'http://localhost:3001',
    data: {}
};


const AuthenticateCustomer = (action$, state$) =>
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
                console.log(action)
                const baseUrl = 'http://localhost:3001/queries/employee/login'
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
                        managerId: response.data.rows[0].managerid,
                        employeeId: response.data.rows[0].employeeid
                    }
                    observer.next(AuthenticateEmployeeOnSuccess(response.data.rows[0]));
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

const SignUp = (action$, state$) =>
    action$.pipe(
        ofType(SIGN_UP),
        mergeMap((action) => {
            return new Observable((observer) => {

                const baseUrl = 'http://localhost:3001/insert'

                const first_name = action.payload.first_name
                const last_name = action.payload.last_name
                const phone_number = action.payload.phone_number
                const email = action.payload.email
                const address_country = action.payload.address_country
                const address_city = action.payload.address_city
                const address_street_name = action.payload.address_street_name
                const address_street_number = action.payload.address_street_number
                const address_unit_number = action.payload.address_unit_number
                const ssn_sin = action.payload.ssn_sin
                const password = action.payload.password
                const area_code = action.payload.area_code

                options.data = {
                    first_name: first_name,
                    last_name: last_name,
                    phone_number: `${area_code}-${phone_number}`,
                    email: email,
                    address_country: address_country,
                    address_city: address_city,
                    address_street_name: address_street_name,
                    address_street_number: address_street_number,
                    address_unit_number: address_unit_number,
                    ssn_sin: ssn_sin,
                    password: password,   
                }

                console.log(options)

                options.url = `${baseUrl}/user`

                axios.request(
                    options
                ).catch(() => {

                })
            })
        })
    )

export const AuthenticateEpic = combineEpics(
    AuthenticateCustomer,
    AuthenticateEmployee,
    SignUp
)