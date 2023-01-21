
import { FlightConnectedCityListType } from "../../shared/cities_list";
import { FlightsListType, FlightType } from "../../shared/types";
import { FlightSearch } from "./interface";

export class FlightController {

  private flightSearcher: FlightSearch | undefined

  constructor() {

  }

  async setFlightSearcher(flightSearcher: FlightSearch) {
    this.flightSearcher = flightSearcher
    await this.flightSearcher.initialize()
  }

  async getFlightsFromToWhen({ from, to, when }: { from: FlightConnectedCityListType, to: FlightConnectedCityListType, when: Date }): Promise<FlightsListType> {
    const flights = await this.flightSearcher?.getFlightsFromToWhen({ from, to, when })
    if (flights) {
      return flights
    } else {
      return new Map()
    }
  }

}