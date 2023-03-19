import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
    version: 'weekly',
    libraries: ['places'],
  });
  export default loader;