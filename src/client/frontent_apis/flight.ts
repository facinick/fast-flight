
import axios, { AxiosResponse } from "axios";
import { FlightConnectedCityListType } from "../../shared/cities_list";
import { FlightsListType, FlightType } from "../../shared/types";


export const getFlightsFromToWhen = async ({
  from,
  to,
  when,
}: {
  from: FlightConnectedCityListType
  to: FlightConnectedCityListType
  when: Date
}): Promise<FlightsListType> => {
  const response: AxiosResponse<Array<[string, FlightType[]]>> = await axios.get(`http://localhost:9000/api/search?from=${from}&to=${to}&when=${when}`);
  return new Map(response.data)
}