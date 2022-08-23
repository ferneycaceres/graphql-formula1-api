import { IResolvers } from 'graphql-tools';
import { getWikipediaMobile } from '../lib/utils';

const type: IResolvers = {
  Season: {
    year: (parent) => parent.season,
    urlMobile: (parent) => getWikipediaMobile(parent.url),
  },
  Race: {
    name: (parent) => parent.raceName,
    circuit: (parent) => parent.Circuit,
    urlMobile: (parent) => getWikipediaMobile(parent.url),
  },
  Circuit: {
    id: (parent) => parent.circuitId,
    name: (parent) => parent.circuitName,
    location: (parent) => parent.Location,
    urlMobile: (parent) => getWikipediaMobile(parent.url),
  },
  Location: {
    lng: (parent) => parent.long,
  },
  Driver: {
    id: (parent) => parent.driverId,
    name: (parent) => parent.givenName.concat(' ').concat(parent.familyName),
    urlMobile: (parent) => getWikipediaMobile(parent.url),
  },
  DriverStandings: {
    driver: (parent) => parent.Driver,
    constructors: (parent) => parent.Constructors,
  },
  Constructors: {
    id: (parent) => parent.constructorId,
  },
};

export default type;
