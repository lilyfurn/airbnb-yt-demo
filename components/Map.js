import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import { useState } from 'react'
import { Result } from 'postcss'
import 'mapbox-gl/dist/mapbox-gl.css'

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})

  // transform the data into the format for map
  // { latitude: 52.516272, longitude: 13.377722 } object

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  // console.log(center)

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/lilyfurn/cl2j6q0uj000z14kdw5fw9lo3"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="animate-bounce cursor-pointer text-2xl"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation(result)}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
