
import amadeus from 'amadeus'
import { FlightConnectedCityListType } from '../../../shared/cities_list';
import { FlightsListType } from '../../../shared/types';
import { FlightSearch } from '../interface';
import { Availibilities } from './request_response_types/availabilities';
import { TransformAvailabilityForCient, TransformAvailabilityForServer } from './transformer';

export default class Amadeus implements FlightSearch {
  private static instance: Amadeus;
  private static amadeus: typeof amadeus

  private constructor() { }

  async initialize() {
    return new Promise((resolve, reject) => {
      try {
        Amadeus.amadeus = new amadeus({
          clientId: process.env.AM_ID,
          clientSecret: process.env.AM_SECRET,
        });
        console.log("initialized")
        resolve({})
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }

  getFlightsFromToWhen({ from, to, when }: { from: FlightConnectedCityListType; to: FlightConnectedCityListType; when: Date; }): Promise<FlightsListType> {
    return new Promise(async (resolve, reject) => {
      try {
        const body = JSON.stringify(TransformAvailabilityForServer({ from, to, when }))
        const response: Availibilities = await Amadeus.amadeus.shopping.availability.flightAvailabilities.post(body)
        const flights = TransformAvailabilityForCient(response)
        resolve(flights)
      } catch (error) {
        reject(error)
      }
    })
  }

  public static getInstance(): Amadeus {
    if (!Amadeus.instance) {
      Amadeus.instance = new Amadeus();
    }

    return Amadeus.instance;
  }
}
