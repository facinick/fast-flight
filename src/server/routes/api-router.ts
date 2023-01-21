import bodyParser from 'body-parser';
import { Router } from 'express';
import { FlightConnectedCityListType } from '../../shared/cities_list';
import { FlightsListType } from '../../shared/types';
import { FlightController } from '../third_party_apis/flight_controller';

export function apiRouter(controller: FlightController) {
  const router = Router();
  router.use(bodyParser.json());
  router.get('/api/search', async (req, res) => {
    const from: FlightConnectedCityListType = req.query.from as FlightConnectedCityListType
    const to: FlightConnectedCityListType = req.query.to as FlightConnectedCityListType
    const flights: FlightsListType = await controller.getFlightsFromToWhen({ from, to, when: new Date() })
    console.log(`API: searching flights from${from} to${to} on${new Date()}`)
    res.status(200).send(Array.from(flights.entries()))
  });

  return router;
}
