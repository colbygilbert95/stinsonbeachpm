import React, { useState, useRef, useCallback } from "react";
import "../Map/Map.css";
import {
  GoogleMap,
  useLoadScript,
  OverlayView,
  Circle,
  Marker,
} from "@react-google-maps/api";
import { withRouter } from "react-router-dom";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const circleOptions = {
  strokeColor: "#333",
  strokeOpacity: 0.8,
  strokeWeight: 0,
  fillColor: "#333",
  fillOpacity: 0.25,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 250,
  zIndex: 0,
};

function CreateExactMessage() {
  let controlDiv = document.createElement("div");
  let controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  let controlText = document.createElement("div");
  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.textContent = "Exact Location Provided After Booking";
  controlUI.appendChild(controlText);
  return controlDiv;
}

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
    lat: parseFloat(props.lat ? props.lat : 37.8993528948048),
    lng: parseFloat(props.lng ? props.lng : -122.64535267101688),
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
        fullscreenControl: false,
      },
    });

    map.controls[window.google.maps.ControlPosition.BOTTOM_CENTER].push(
      CreateExactMessage()
    );
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
        <Marker
          position={center}
          icon={{
            url: `images/pin.svg`,
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          zIndex={10000}
        />
        <Circle center={center} options={circleOptions} />
      </GoogleMap>
    </div>
  );
}

export default MapWithMarker;
