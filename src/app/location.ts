export interface Location {
    name: string,
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    },
    sys: {
        country: string
    }
}