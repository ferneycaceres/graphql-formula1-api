import { checkCurrentYear } from "../lib/utils";
import { F1 } from "./data-source";

export class StandingsData extends F1 {
    constructor() {
        super();
    }

    async getDriverStandingsByYear(year:string) {
        year = checkCurrentYear(year);
        return await this.get(`${year}/driverstandings.json`,{
            cacheOptions: { ttl: 60 }
        });
    }

}