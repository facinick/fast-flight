import { FlightConnectedCityListType, } from "../../../shared/cities_list"
import { CityCodeListType, } from "../../../shared/city_codes_list"
import { FlightsListType, FlightType } from "../../../shared/types"
import { Availibilities, AvailabilitiesRequest } from "./request_response_types/availabilities"

export function TransformAvailabilityForCient(response: Availibilities): FlightsListType {

  let flightsListMap: FlightsListType = new Map<string, FlightType[]>()

  response.data.forEach((availabilityData) => {

    const flightsList: Array<FlightType> = []

    availabilityData.segments.forEach((segmentData) => {
      flightsList.push({
        srno: Number(segmentData.id),
        from: segmentData.departure.iataCode as FlightConnectedCityListType,
        to: segmentData.arrival.iataCode as FlightConnectedCityListType,
        datetime_of_departure: new Date(segmentData.departure.at),
        datetime_of_arrival: new Date(segmentData.arrival.at),
        flight_duration_in_hours: 444,
        price: 999,
        flight_duration_in_string: availabilityData.duration,
        identifier: segmentData.aircraft.code,
        currency: 'INR',
        name: segmentData.carrierCode
      })
    })

    flightsListMap.set(availabilityData.id, flightsList)
  })

  return flightsListMap
}

export function TransformAvailabilityForServer({ from, to, when }: { from: FlightConnectedCityListType, to: FlightConnectedCityListType, when: Date }): AvailabilitiesRequest {
  const request: AvailabilitiesRequest = {
    originDestinations: [
      {
        id: String(1),
        originLocationCode: cityNameToAirportCode(from),
        destinationLocationCode: cityNameToAirportCode(to),
        "departureDateTime": {
          "date": "2023-02-02"
        }
      }
    ],
    travelers: [
      {
        id: String(1),
        travelerType: 'ADULT'
      }
    ],
    sources: [
      'GDS'
    ]
  }

  return request
}

function cityNameToAirportCode(city: FlightConnectedCityListType): CityCodeListType {

  switch (city) {
    case 'Agartala':

      return 'IXA'
      break;
    case 'Alagerivillage':

      return 'KWR'
      break;
    case 'Allahabad':

      return 'IXD'
      break;
    case 'Along':

      return 'IXV'
      break;
    case 'Aurangabad':

      return 'IXU'
      break;
    case 'Bagdogra':

      return 'IXB'
      break;
    case 'Balurghat':

      return 'RGH'
      break;
    case 'Bareli':

      return 'BEK'
      break;
    case 'Belgaum':

      return 'IXG'
      break;
    case 'Bellary':

      return 'BEP'
      break;
    case 'Bengaluru':

      return 'BLR'
      break;
    case 'Bhatinda':

      return 'BUP'
      break;
    case 'Bhavnagar':

      return 'BHU'
      break;
    case 'Bhopal':

      return 'BHO'
      break;
    case 'Bhubaneswar':

      return 'BBI'
      break;
    case 'Bhuj':

      return 'BHJ'
      break;
    case 'Bhuntar':

      return 'KUU'
      break;
    case 'Bikaner':

      return 'BKB'
      break;
    case 'Bilaspur':

      return 'PAB'
      break;
    case 'CarNicobar':

      return 'CBD'
      break;
    case 'Chandigarh':

      return 'IXC'
      break;
    case 'Chennai':

      return 'MAA'
      break;
    case 'Cochin':

      return 'COK'
      break;
    case 'Coimbatore':

      return 'CJB'
      break;
    case 'CoochBehar':

      return 'COH'
      break;
    case 'Cuddapah':

      return 'CDP'
      break;
    case 'Daman':

      return 'NMB'
      break;
    case 'Daparizo':

      return 'DAE'
      break;
    case 'Darjeeling':

      return 'IXB'
      break;
    case 'DehraDun':

      return 'DED'
      break;
    case 'Delhi':

      return 'DEL'
      break;
    case 'Deparizo':

      return 'DEP'
      break;
    case 'Dhanbad':

      return 'DBD'
      break;
    case 'Dharamsala':

      return 'DHM'
      break;
    case 'Dibrugarh':

      return 'DIB'
      break;
    case 'Dimapur':

      return 'DMU'
      break;
    case 'Diu':

      return 'DIU'
      break;
    case 'Gaya':

      return 'GAY'
      break;
    case 'Goa':

      return 'GOI'
      break;
    case 'Gorakhpur':

      return 'GOP'
      break;
    case 'Guna':

      return 'GUX'
      break;
    case 'Guwahati':

      return 'GAU'
      break;
    case 'Gwalior':

      return 'GWL'
      break;
    case 'Hissar':

      return 'HSS'
      break;
    case 'Hubli':

      return 'HBX'
      break;
    case 'Hyderabad-BPM':

      return 'BPM'
      break;
    case 'Hyderabad-HYD':

      return 'HYD'
      break;
    case 'Imphal':

      return 'IMF'
      break;
    case 'Indore':

      return 'IDR'
      break;
    case 'Jabalpur':

      return 'JLR'
      break;
    case 'Jagdalpur':

      return 'JGB'
      break;
    case 'Jaipur':

      return 'JAI'
      break;
    case 'Jaisalmer':

      return 'JSA'
      break;
    case 'Jammu':

      return 'IXJ'
      break;
    case 'Jamnagar':

      return 'JGA'
      break;
    case 'Jamshedpur':

      return 'IXW'
      break;
    case 'Jeypore':

      return 'PYB'
      break;
    case 'Jodhpur':

      return 'JDH'
      break;
    case 'Jorhat':

      return 'JRH'
      break;
    case 'Kailashahar':

      return 'IXH'
      break;
    case 'KakadiVillage':

      return 'SAG'
      break;
    case 'Kamalpur':

      return 'IXQ'
      break;
    case 'Kandla':

      return 'IXY'
      break;
    case 'Kannur-CNN':

      return 'CNN'
      break;
    case 'Kanpur-KNU':

      return 'KNU'
      break;
    case 'Keshod':

      return 'IXK'
      break;
    case 'Khajuraho':

      return 'HJR'
      break;
    case 'Khowai':

      return 'IXN'
      break;
    case 'Kolhapur':

      return 'KLH'
      break;
    case 'Kolkata':

      return 'CCU'
      break;
    case 'Kota':

      return 'KTU'
      break;
    case 'Kozhikode':

      return 'CCJ'
      break;
    case 'Leh':

      return 'IXL'
      break;
    case 'Lilabari':

      return 'IXI'
      break;
    case 'Lucknow':

      return 'LKO'
      break;
    case 'Ludhiana':

      return 'LUH'
      break;
    case 'Madurai':

      return 'IXM'
      break;
    case 'Malda':

      return 'LDA'
      break;
    case 'Mangalore':

      return 'IXE'
      break;
    case 'Mumbai-BOM':

      return 'BOM'
      break;
    case 'Mumbai-VAJJ':

      return 'VAJJ'
      break;
    case 'Muzaffarnagar':

      return 'MZA'
      break;
    case 'Muzaffarpur':

      return 'MZU'
      break;
    case 'Mysore':

      return 'MYQ'
      break;
    case 'Nagpur':

      return 'NAG'
      break;
    case 'Nanded':

      return 'NDC'
      break;
    case 'Nasik':

      return 'ISK'
      break;
    case 'Neyveli':

      return 'NVY'
      break;
    case 'Osmanabad':

      return 'OMN'
      break;
    case 'Pantnagar':

      return 'PGH'
      break;
    case 'Pasighat':

      return 'IXT'
      break;
    case 'Pathankot':

      return 'IXP'
      break;
    case 'Patna':

      return 'PAT'
      break;
    case 'Pondicherry':

      return 'PNY'
      break;
    case 'Porbandar':

      return 'PBD'
      break;
    case 'PortBlair':

      return 'IXZ'
      break;
    case 'Pune':

      return 'PNQ'
      break;
    case 'Puttaparthi':

      return 'PUT'
      break;
    case 'Raipur':

      return 'RPR'
      break;
    case 'Rajahmundry':

      return 'RJA'
      break;
    case 'Rajkot':

      return 'RAJ'
      break;
    case 'Ramagundam':

      return 'RMD'
      break;
    case 'Ranchi':

      return 'IXR'
      break;
    case 'Ratnagiri':

      return 'RTC'
      break;
    case 'Rewa':

      return 'REW'
      break;
    case 'Rourkela':

      return 'RRK'
      break;
    case 'Rupsi':

      return 'RUP'
      break;
    case 'Salem':

      return 'SXV'
      break;
    case 'Satna':

      return 'TNI'
      break;
    case 'Shillong':

      return 'SHL'
      break;
    case 'Sholapur':

      return 'SSE'
      break;
    case 'Silchar':

      return 'IXS'
      break;
    case 'Simla':

      return 'SLV'
      break;
    case 'Srinagar':

      return 'SXR'
      break;
    case 'Surat':

      return 'STV'
      break;
    case 'Tezpur':

      return 'TEZ'
      break;
    case 'Tezu':

      return 'TEI'
      break;
    case 'Thiruvananthapuram':

      return 'TRV'
      break;
    case 'Tiruchirappalli':

      return 'TRZ'
      break;
    case 'Tirupati':

      return 'TIR'
      break;
    case 'Tuticorin':

      return 'TCR'
      break;
    case 'Udaipur':

      return 'UDR'
      break;
    case 'Vadodara':

      return 'BDQ'
      break;
    case 'Varanasi':

      return 'VNS'
      break;
    case 'Vijayawada':

      return 'VGA'
      break;
    case 'Vishakhapatnam':

      return 'VTZ'
      break;
    case 'Warrangal':

      return 'WGC'
      break;
    case 'Zero':

      return 'ZER'
      break;
  }
}