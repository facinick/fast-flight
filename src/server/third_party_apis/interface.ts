import { FlightConnectedCityListType } from "../../shared/cities_list"
import { FlightsListType } from "../../shared/types"


export interface FlightSearch {
  initialize: () => Promise<unknown>
  getFlightsFromToWhen: ({ from, to, when }: { from: FlightConnectedCityListType, to: FlightConnectedCityListType, when: Date }) => Promise<FlightsListType>
}