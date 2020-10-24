import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const dotenv = require("dotenv");

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 44.6344,
      lng: -63.5822,
    },
    zoom: 1,
  };

  mapOptions = {
    zoomControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    gestureHandling: "greedy",

    styles: [
      {
        featureType: "water",
        stylers: [{ color: "#0C0000FF" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#CCFFFF" }],
      },
      {
        featureType: "landscape",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  render() {
    return (
      <div>
        <div
          style={{
            height: "100vh",
            opacity: "0.7",
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY_DEV }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={this.mapOptions}
          >
            <MarkerMe lat={this.props.center.lat} lng={this.props.center.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

const MarkerMe = ({}) => (
  <div
    style={{ width: "10px", height: "10px", backgroundColor: "black" }}
  ></div>
);

export default Maps;
