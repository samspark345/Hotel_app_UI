import axios from "axios";
import { combineEpics, ofType } from "redux-observable";
import {
    Observable,
    Observer
}from 'rxjs'
import { mergeMap } from "rxjs/operators";
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
  

const getHotelChain = (action$, state$) =>
    action$.pipe(
        ofType(GET_CHAIN_NAMES),
        mergeMap((action) => {
            return new Observable((observer) => {

                axios.request(
                    options
                ).then((response) => {
                    console.log(response.data)
                    observer.next(GET_CHAIN_NAMES_ON_SUCCESS(response.data));
                    observer.complete()
                    console.log(state$.value)
                    // observer.next(IncreaseVideosToGet(response.data.));
                })
            })
        })
    )

export const hotelChainEpic = combineEpics(
    getHotelChain
)