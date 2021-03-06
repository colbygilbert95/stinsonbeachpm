import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { setCenter, setZoom } from "../../store/actions/googleMapActions";
import { connect } from "react-redux";
import Slider from "react-slick";
import "../Map/Map.css";
import {
  GoogleMap,
  useLoadScript,
  OverlayView,
  InfoWindow,
} from "@react-google-maps/api";

function createSearchElement() {
  let controlDiv = document.createElement("div");
  let controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.padding = "0px 10px";
  controlUI.style.marginTop = "10px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  let inputBtn = document.createElement("input");
  inputBtn.setAttribute("type", "checkbox");
  inputBtn.style.display = "inline";

  let controlText = document.createElement("span");
  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.textContent = "Search As I Move The Map";
  controlUI.appendChild(inputBtn);
  controlUI.appendChild(controlText);
  return controlDiv;
}
const sliderSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1900,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
};

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
  console.log(props.mapValues);

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

    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
      createSearchElement()
    );
  }, []);

  if (LoadError) return "Error Loading Map";
  if (!isLoaded) return "Loading Map";

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
              {/* <div
                className="google-info-window-img"
                style={{ backgroundImage: `url(${selected.URL})` }}
              ></div> */}

              <Slider {...sliderSetting}>
                {/* <div>
                  <div
                    className="google-info-window-img"
                    style={{ backgroundImage: `url(${selected.URL})` }}
                  ></div>
                </div> */}

                {props.mapValues.listingImgs
                  .filter(value => value.Id === selected.Id)
                  .map(value =>
                    value.imgs.map(img => (
                      <div>
                        <div
                          className="google-info-window-img"
                          style={{ backgroundImage: `url(${img.URL})` }}
                        ></div>
                      </div>
                    ))
                  )}
              </Slider>
              <Link
                target="_blank"
                to={{
                  pathname: "/" + selected.Name.split(" ").join("_"),
                  state: { unitName: selected.Name },
                }}
              >
                <div>
                  <div className="google-info-window-body">
                    <p className="google-info-window-title">{selected.Title}</p>

                    <div className="google-info-window-description clearfix">
                      <span className="pull-left">
                        <strong>${selected.WeekdayRate}</strong> / night
                      </span>
                      <span className="pull-right map-popup-star">
                        <i className="fa fa-star mr-2"></i>
                        <span className="small">
                          <strong>{selected.AvgReviews}</strong>(
                          {selected.NumReviews})
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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
