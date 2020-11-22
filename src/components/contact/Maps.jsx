import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Maps.css";
import logo from "../../assets/logo.png";
const dotenv = require("dotenv");

class Maps extends Component {
  constructor(props) {
    super(props);
  }

  // disable slide effect when drag and enable when drag end

  static defaultProps = {
    center: {
      lat: 44.6344,
      lng: -63.5822,
    },
    zoom: 4,
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
      <>
        <div
          className="maps-container"
          onMouseEnter={this.props.setFullPage}
          onMouseLeave={this.props.setFullPage}
          onTouchStart={
            this.props.device !== "desktop" ? this.props.setFullPage : null
          }
          onTouchEnd={
            this.props.device !== "desktop" ? this.props.setFullPage : null
          }
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
            defaultCenter={this.props.center}
            zoom={this.props.zoom}
            options={this.mapOptions}
          >
            <MarkerMe lat={this.props.center.lat} lng={this.props.center.lng} />
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

const MarkerMe = ({}) => (
  <div
    style={{
      height: "60px",
      width: "60px",
      borderRadius: "50%",
      backgroundColor: "#00c9c8",
      padding: "2px 0 0 2px",
      opacity: "0.7",
    }}
  >
    <img src={logo} style={{ width: "50px", height: "50px" }} />
  </div>
);

export default Maps;
