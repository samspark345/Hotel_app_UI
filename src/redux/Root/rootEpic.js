import React from 'react'
import { combineEpics } from 'redux-observable'
import { hotelChainEpic } from '../Epics/hotelChainEpics';
import { hotelEpics } from '../Epics/hotelEpics';
import { hotelRoomEpics } from '../Epics/hotelRoomsEpics';
import { AuthenticateEpic } from '../Epics/AuthenticateEpic';
import { customerBookingEpics } from '../Epics/customerBookingEpic';


export const rootEpic = combineEpics(
  hotelChainEpic,
  hotelEpics,
  hotelRoomEpics,
  AuthenticateEpic,
  customerBookingEpics,
);
