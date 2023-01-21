import express from 'express';
import path from 'path';
import { apiRouter } from './routes/api-router';
import { pagesRouter } from './routes/pages-router';
import { staticsRouter } from './routes/statics-router';
import * as config from './config';
import { FlightController } from './third_party_apis/flight_controller';
import Amadeus from './third_party_apis/amadeus/amadeus';

console.log(`*******************************************`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`config: ${JSON.stringify(config, null, 2)}`);
console.log(`*******************************************`);

const app = express();
app.set('view engine', 'ejs');

async function initialise(): Promise<FlightController> {
  console.log(`initializing flight service`)
  const flightController = new FlightController()
  const controllerService = Amadeus.getInstance()
  await flightController.setFlightSearcher(controllerService)
  return flightController
}

initialise().then(flightController => {
  app.use('/assets', express.static(path.join(process.cwd(), 'assets')));
  app.use(apiRouter(flightController));
  app.use(staticsRouter());
  app.use(pagesRouter());

  app.listen(config.SERVER_PORT, () => {
    console.log(`App listening on port ${config.SERVER_PORT}!`);
  });
})
