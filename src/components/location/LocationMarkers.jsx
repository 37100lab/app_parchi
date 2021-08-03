import React from 'react'
import { Popup, Polygon } from 'react-leaflet'
import Location from './Location'



export const LocationList = ({ myloc, locations, showLocationModal }) => {
  return (
    <div>
      {myloc &&
        myloc.length &&
        myloc.map(loc => (
          <Polygon
            key={loc.id}
            positions={loc.geometry.coordinates[0]}
            color={"green"}>   
            <Popup>
              <Location location={loc}/>
            </Popup>
          </Polygon>
        ))}
    </div>
  )
}


export default LocationList
