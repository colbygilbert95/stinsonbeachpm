import React, { useState, useRef, useCallback } from "react";
import "../Map/Map.css";
import {
  GoogleMap,
  useLoadScript,
  OverlayView,
  Circle,
  Marker,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const circleOptions = {
  strokeColor: "#333",
  strokeOpacity: 0.8,
  strokeWeight: 0,
  fillColor: "#333",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 250,
  zIndex: 1,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: false,
  streetViewControl: true,
  maxZoom: 17,
  styles: [
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ],
};

function MapWithMarker(props) {
  const { isLoaded, LoadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = {
    lat: parseFloat(props.lat),
    lng: parseFloat(props.lng),
  };
  const mapRef = useRef();

  const handleIdle = () => {
    var bounds = mapRef.current.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();
    console.log(ne.lat());
    console.log(ne.lng());
    console.log(sw.lat());
    console.log(sw.lng());
  };

  const handleZoomChange = () => {
    console.log("Get Current Zoom");
  };

  const onMapLoad = useCallback(map => {
    mapRef.current = map;
    mapRef.current.setOptions({
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_TOP,
      },
      streetViewControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_CENTER,
      },
    });
  }, []);

  if (LoadError) return "Error Loading Map";
  if (!isLoaded) return "Loading Map";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
        onClick={event => {
          console.log("lat", event.latLng.lat());
          console.log("long", event.latLng.lng());
        }}
        onLoad={onMapLoad}
        onIdle={handleIdle}
        onZoomChanged={handleZoomChange}
      >
        <Circle center={center} options={circleOptions} />
        <Marker
          position={center}
          icon={{
            url: `images/pin.svg`,
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      </GoogleMap>
    </div>
  );
}

export default MapWithMarker;
