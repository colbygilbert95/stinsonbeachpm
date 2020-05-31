import React, { useState, useRef, useCallback } from "react";
import { setCenter, setZoom } from "../../store/actions/googleMapActions";
import { connect } from "react-redux";
import "../Map/Map.css";
import {
  GoogleMap,
  useLoadScript,
  OverlayView,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};
const center = {
  lat: 37.8993528948048,
  lng: -122.64535267101688,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: false,
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

function GoogleMapCombo(props) {
  const { isLoaded, LoadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [selected, setSelected] = useState(null);

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

  const handleDragEnd = () => {
    props.setCenter({
      lat: mapRef.current.center.lat(),
      lng: mapRef.current.center.lng(),
    });
  };

  const handleZoomChange = () => {
    if (mapRef.current) {
      props.setZoom(mapRef.current.zoom);
      console.log("Get Current Zoom", mapRef.current.zoom);
    }
  };

  const onMapLoad = useCallback(map => {
    mapRef.current = map;
    mapRef.current.setOptions({
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_TOP,
      },
    });
  }, []);

  if (LoadError) return "Error Loading Map";
  if (!isLoaded) return "Loading Map";

  let i = 0;
  let hoverId = props.hoverId;
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={props.mapValues.zoom === "" ? 16 : props.mapValues.zoom}
        center={
          Object.keys(props.mapValues.center).length === 0
            ? center
            : props.mapValues.center
        }
        options={options}
        onClick={event => {
          console.log("lat", event.latLng.lat());
          console.log("long", event.latLng.lng());
          setSelected(null);
        }}
        onLoad={onMapLoad}
        onIdle={handleIdle}
        onDragEnd={handleDragEnd}
        onZoomChanged={handleZoomChange}
      >
        {props.units.map(marker => (
          <OverlayView
            key={`${marker.Latitude + marker.Longitude}`}
            position={{ lat: marker.Latitude, lng: marker.Longitude }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              className={
                props.mapValues.hoverId === marker.Id
                  ? "bubbleSelected"
                  : selected
                  ? selected.Latitude === marker.Latitude &&
                    selected.Longitude === marker.Longitude
                    ? "bubbleSelected"
                    : "bubble"
                  : "bubble"
              }
              onClick={() => {
                setSelected(marker);
              }}
            >
              <span>${marker.WeekdayRate}</span>
            </div>
          </OverlayView>
        ))}

        {selected ? (
          <InfoWindow
            position={{
              lat: parseFloat(selected.Latitude),
              lng: parseFloat(selected.Longitude),
            }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className="google-info-window">
              <div
                className="google-info-window-img"
                style={{ backgroundImage: `url(${selected.URL})` }}
              ></div>
              <div className="google-info-window-body">
                <p className="google-info-window-title">{selected.Title}</p>

                <div className="google-info-window-description">
                  <span className="pull-left">
                    <strong>${selected.WeekdayRate}</strong> / night
                  </span>
                  <a href="javascript:;" className="pull-right">
                    <i className="fa fa-star mr-2"></i>
                    <span className="small">
                      <strong>{selected.AvgReviews}</strong>(
                      {selected.NumReviews})
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mapValues: state.googleMap,
  };
};

export default connect(mapStateToProps, { setCenter, setZoom })(GoogleMapCombo);