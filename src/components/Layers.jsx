import React from 'react'
import { TileLayer, GeoJSON, LayersControl } from 'react-leaflet'
import circoscrizioni from '../data/circoscrizioni.json'
import quartieri from '../data/quartieri.json'

const Layers = () => {
  const OnEachQuartiere = (quartiere, layer) => {
    layer.bindPopup(quartiere.properties.quartiere)
  }

  const OnEachCircoscrizione = (paese, layer) => {
    layer.bindPopup(paese.properties.circoscriz)
  }

  return (
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="Mappa base">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Circoscrizioni">
        <GeoJSON
          key="circoscrizioni"
          data={circoscrizioni.features}
          onEachFeature={OnEachCircoscrizione}
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Quartieri">
        <GeoJSON
          key="quartieri"
          data={quartieri.features}
          onEachFeature={OnEachQuartiere}
        />
      </LayersControl.BaseLayer>
    </LayersControl>
  )
}

export default Layers
