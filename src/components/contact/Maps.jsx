import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Maps.css";
import logo from "../../assets/logo.png";

class Maps extends Component {
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
        stylers: [{ color: "#000000" }],
      },

      {
        featureType: "road",
        stylers: [{ color: "#00c9c8" }],
      },

      {
        featureType: "administrative",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "landscape",

        stylers: [{ color: "#ffffff" }],
      },
    ],
  };

  render() {
    return (
      <>
        <div
          className="maps-container"
          onMouseEnter={() => {
            this.props.setFullPage(false);
          }}
          onMouseLeave={() => {
            this.props.setFullPage(true);
          }}
          onTouchStart={
            this.props.device !== "desktop"
              ? () => {
                  this.props.setFullPage(false);
                }
              : null
          }
          onTouchEnd={
            this.props.device !== "desktop"
              ? () => {
                  this.props.setFullPage(true);
                }
              : null
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

const MarkerMe = () => (
  <div
    style={{
      height: "60px",
      width: "60px",
      borderRadius: "50%",
      backgroundColor: "#00c9c8",
      padding: "2px 0 0 2px",
      opacity: "1",
      position: "relative",
      top: "-10px",
    }}
  >
    <img src={logo} style={{ width: "50px", height: "50px" }} alt="" />
  </div>
);

export default Maps;
