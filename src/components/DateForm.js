import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const today = dayjs();
const yesterday = dayjs().subtract(1, 'day');

export default function DateValidationMaxDate({
    label,
    handleDateChange
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker', 'DateTimePicker', 'DateRangePicker']}
      >
        <DemoItem>
          <DatePicker
            defaultValue={null}
            minDate={today}
            views={['year', 'month', 'day']}
            label={label}
            onChange={(new_value) => {
                console.log(new_value)
                const month = new_value.$M + 1 < 10 ? `0${new_value.$M + 1}` : new_value.$M + 1
                const day = new_value.$D < 10 ? `0${new_value.$M}` : new_value.$D
                const convertedValue = `${new_value.$y}\-${month}\-${day}`
                handleDateChange(
                    {filterName: label,
                     filterValue: convertedValue })}}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
