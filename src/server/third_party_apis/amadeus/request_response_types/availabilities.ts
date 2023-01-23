// request
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

// response
export interface Availibilities {
  meta: Meta;
  data: Datum[];
  dictionaries: Dictionaries;
}

export interface Datum {
  type: Type;
  id: string;
  originDestinationId: string;
  source: Source;
  instantTicketingRequired: boolean;
  paymentCardRequired: boolean;
  duration: string;
  segments: Segment[];
}

export interface Segment {
  id: string;
  numberOfStops: number;
  blacklistedInEU: boolean;
  departure: Arrival;
  arrival: Arrival;
  carrierCode: string;
  number: string;
  aircraft: Aircraft;
  operating: Operating;
  availabilityClasses: AvailabilityClass[];
}

export interface Aircraft {
  code: string;
}

export interface Arrival {
  iataCode: string;
  terminal?: string;
  at: Date;
}

export interface AvailabilityClass {
  numberOfBookableSeats: number;
  class: Class;
}

export enum Class {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  G = "G",
  H = "H",
  I = "I",
  J = "J",
  K = "K",
  L = "L",
  M = "M",
  N = "N",
  O = "O",
  P = "P",
  Q = "Q",
  R = "R",
  S = "S",
  T = "T",
  U = "U",
  V = "V",
  W = "W",
  X = "X",
  Y = "Y",
  Z = "Z",
}

export interface Operating {
  carrierCode?: CarrierCode;
}

export enum CarrierCode {
  Aa = "AA",
  DL = "DL",
}

export enum Source {
  Gds = "GDS",
}

export enum Type {
  FlightAvailability = "flight-availability",
}

export interface Dictionaries {
  locations: { [key: string]: Location };
}

export interface Location {
  cityCode: string;
  countryCode: CountryCode;
}

export enum CountryCode {
  MX = "MX",
  Us = "US",
}

export interface Meta {
  count: number;
}
