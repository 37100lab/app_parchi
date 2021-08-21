export const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/geoserver/geoapp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geoapp:farmacie&outputFormat=application/json'
    : `http://ec2-3-142-202-105.us-east-2.compute.amazonaws.com:8080/geoserver/geoapp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geoapp:parchi_poligoni&outputFormat=application/json`
