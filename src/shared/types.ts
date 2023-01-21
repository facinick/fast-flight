import { FlightConnectedCityListType } from "./cities_list"
import { CurrencyList } from "./currency_list";

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type FlightType = {
  srno: number
  from: FlightConnectedCityListType
  to: FlightConnectedCityListType
  datetime_of_departure: Date
  datetime_of_arrival: Date
  flight_duration_in_hours: number
  flight_duration_in_string: string
  price: number,
  currency: ArrayElement<CurrencyList>
  name: string
  identifier: string
}

export type FlightsListType = Map<string, Array<FlightType>>