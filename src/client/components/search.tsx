
import React, { useEffect, useState } from 'react';
import { FlightConnectedCityListType, FlightConnectedCityList } from '../../shared/cities_list';
import { FlightsListType, FlightType } from '../../shared/types';
import { DateObjectTODDMMYYHHSS } from '../../shared/utils'
import { SearchResultsSortByType, SearchResultsSortBy } from '../data/sort_by';
import { getFlightsFromToWhen } from '../frontent_apis/flight';


const AirplaneSearch = () => {
  const [from, setFrom] = useState<FlightConnectedCityListType>("Mumbai-BOM");
  const [to, setTo] = useState<FlightConnectedCityListType>("Delhi");
  const [sortBy, setSortBy] = useState<SearchResultsSortByType>("srno")
  const [flights, setFlights] = useState<FlightsListType>(new Map());
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setLoading(true)

    if (from != undefined && to != undefined) {
      const flights = await getFlightsFromToWhen({
        from, to, when: new Date()
      })
      setFlights(flights)
    }

    setLoading(false)

  }
  // function to handle sorting as before
  const handleSort = (sortKey: SearchResultsSortByType) => {
    const sortedFlights = Array.from(flights).slice().sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return -1;
      }
      if (a[sortKey] > b[sortKey]) {
        return 1;
      }
      return 0;
    });
    console.log(new Map(sortedFlights));
    setFlights(new Map(sortedFlights));
  }

  useEffect(() => {
    handleSort(sortBy)
  }, [sortBy])

  return (
    <div>
      <form id="flights-search-form">
        <label>
          from:
          <select value={from} onChange={e => setFrom(e.target.value as unknown as FlightConnectedCityListType)}>
            {FlightConnectedCityList.map(city => (
              <option key={`from${city}`} value={city}>{city}</option>
            ))}
          </select>
        </label>
        <label>
          to:
          <select value={to} onChange={e => setTo(e.target.value as unknown as FlightConnectedCityListType)}>
            {FlightConnectedCityList.map(city => (
              <option key={`to${city}`} value={city}>{city}</option>
            ))}
          </select>
        </label>
        <label>
          sort:
          <select value={sortBy} onChange={e => setSortBy(e.target.value as unknown as SearchResultsSortByType)}>
            {SearchResultsSortBy.map(sortKey => (
              <option key={sortKey} value={sortKey}>{sortKey}</option>
            ))}
          </select>
        </label>
        <button disabled={loading} id="search" onClick={handleSubmit}>{loading ? "searching..." : "search"}</button>
      </form>

      <div className='spacer'></div>

      <table id="flight-search-results">
        <thead>
          <tr>
            <th className="minw">srno</th>
            <th className="minw" >from</th>
            <th className="minw" >to</th>
            <th className="minw" >identifier</th>
            <th className="minw" >name</th>
            <th className="minw wider" >departure</th>
            <th className="minw wider" >arrival</th>
            {/* <th className="minw" >dyration(h)</th> */}
            <th className="minw wider" >duration(txt)</th>
            <th className="minw" >price</th>
          </tr>
        </thead>

        {Array.from(flights.entries()).map((value: [string, FlightType[]], index: number, array: [string, FlightType[]][]) => {

          const flightKey = value[0]
          const flightSegments = value[1]

          if (flightSegments.length === 1) {

            const segment = flightSegments[0]

            return (
              <tbody className="direct flight-row">
                <tr key={`${segment.srno}${segment.identifier}`}>
                  <td className="minw">{segment.srno}</td>
                  <td className="minw">{segment.from}</td>
                  <td className="minw">{segment.to}</td>
                  <td className="minw">{segment.identifier}</td>
                  <td className="minw">{segment.name}</td>
                  <td className="minw wider">{DateObjectTODDMMYYHHSS(new Date(segment.datetime_of_departure))}</td>
                  <td className="minw wider">{DateObjectTODDMMYYHHSS(new Date(segment.datetime_of_arrival))}</td>
                  {/* <td className="minw">{segment.flight_duration_in_hours}</td> */}
                  <td className="minw wider">{segment.flight_duration_in_string}</td>
                  <td className="minw">{segment.price}</td>
                </tr></tbody>
            )

          }

          else {

            return (<>
              <tbody className="connected flight-row">
                {
                  flightSegments.map((segment, index) => {
                    return (
                      <tr key={`${segment.srno}${segment.identifier}`}>
                        {index === 0 && <td rowSpan={flightSegments.length}>{segment.srno}</td>}
                        <td className="minw" >{segment.from}</td>
                        <td className="minw" >{segment.to}</td>
                        <td className="minw" >{segment.identifier}</td>
                        <td className="minw" >{segment.name}</td>
                        <td className="minw wider" >{DateObjectTODDMMYYHHSS(new Date(segment.datetime_of_departure))}</td>
                        <td className="minw wider" >{DateObjectTODDMMYYHHSS(new Date(segment.datetime_of_arrival))}</td>
                        {/* <td className="minw" >{segment.flight_duration_in_hours}</td> */}
                        <td className="minw wider" >{segment.flight_duration_in_string}</td>
                        <td className="minw" >{segment.price}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </>)

          }

        })}

        {/* </tbody> */}
      </table>
    </div>
  );
};

export default AirplaneSearch