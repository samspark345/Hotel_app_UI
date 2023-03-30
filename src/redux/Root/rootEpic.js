import React from 'react'
import { combineEpics } from 'redux-observable'
import { hotelChainEpic } from '../Epics/hotelChainEpics';
import { hotelEpics } from '../Epics/hotelEpics';


export const rootEpic = combineEpics(
  hotelChainEpic,
  hotelEpics
);
