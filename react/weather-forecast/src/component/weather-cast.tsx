import React, { useEffect, useState } from 'react';
import { Weather } from '../api/weather-type';
import { fetchWeather } from '../api/weather-api';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    color: 'white',
  },
  table: {
    color: 'white',
    minWidth: 650,
  },
});


export function WeatherCast() {
  const initialWeatherList: Weather[] = [];
  const [weatherList, setWeatherList] = useState(initialWeatherList);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchWeather();
      setWeatherList(data);
    };
    fetch();
  }, []);

  const classes = useStyles();

  return (
    <div className='App-header'>
      <Table className={classes.table} aria-label='weather forecast' >
        <TableHead >
          <TableRow>
            <TableCell align='right'>Date</TableCell>
            <TableCell align='right'>Temperature ºC</TableCell>
            <TableCell align='right'>Temperature &deg;F</TableCell>
            <TableCell align='right'>Summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherList.map(weather => (
            <TableRow key={weather.summary}>
              <TableCell align='right'>{weather.date.toLocaleDateString('en-AU')}</TableCell>
              <TableCell align='right'>{weather.tempC}</TableCell>
              <TableCell align='right'>{weather.tempF}</TableCell>
              <TableCell align='right'>{weather.summary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div >
  )
}





