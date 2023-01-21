export interface AvailabilitiesRequest {
  originDestinations?: (OriginDestinationsEntity)[] | null;
  travelers?: (TravelersEntity)[] | null;
  sources?: (string)[] | null;
}
export interface OriginDestinationsEntity {
  id: string;
  originLocationCode: string;
  destinationLocationCode: string;
  departureDateTime: DepartureDateTime;
}
export interface DepartureDateTime {
  date: string;
}
export interface TravelersEntity {
  id: string;
  travelerType: string;
}
