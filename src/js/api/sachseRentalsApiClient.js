export default class SachseRentalsApiClient {
    constructor() {
        console.log(process.env.VUE_APP_TEST_VAR);
        this.baseUrl = process.env.VUE_APP_SACHSE_RENTALS_API_BASE_URL;
        console.log(this.baseUrl);
    }

    getUnavailablePropertyDates(propertyId) {
        console.log(`fetching reservations for ${propertyId}...`);
        const mockResponse = [{
                startDate: '2022-08-18T16:00:00.000Z',
                endDate: '2022-08-20T16:00:00.000Z',
            },
            {
                startDate: '2022-08-22T16:00:00.000Z',
                endDate: '2022-08-27T16:00:00.000Z',
            },
        ];
        return mockResponse;
    }
}