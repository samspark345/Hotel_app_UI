import React from 'react'
import { combineEpics } from 'redux-observable'
import { hotelChainEpic } from '../Epics/hotelChainEpics';
import { hotelEpics } from '../Epics/hotelEpics';
import { hotelRoomEpics } from '../Epics/hotelRoomsEpics';
import { AuthenticateEpic } from '../Epics/AuthenticateEpic';
import { employeeCustomerBookingsEpic } from '../Epics/employeeCustomerBookingsEpic';
import { customerBookingsEpics } from '../Epics/customerBookingsEpic';
import { customerProfileEpic } from '../Epics/customerProfileEpic';
import { viewsEpic } from '../Epics/viewsEpic';
import { archiveEpics } from '../Epics/archiveEpics';


export const rootEpic = combineEpics(
  hotelChainEpic,
  hotelEpics,
  hotelRoomEpics,
  AuthenticateEpic,
  customerBookingsEpics,
  employeeCustomerBookingsEpic,
  customerProfileEpic,
  viewsEpic,
  archiveEpics,
);
