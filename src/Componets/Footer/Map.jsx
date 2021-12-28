import React, { Component } from 'react';
import { GoogleMap, withScriptjs,withGoogleMap } from "react-google-maps"
import style from "../../css/Map.module.css"
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}/>
    );
  }
}
 const WrappedMap=withScriptjs(withGoogleMap(Map))
 const SimpleMap = () => {
   return (
     <div className={style.Map}>
     <WrappedMap className={style.Map_block} googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCyVdg2REt2T8ZoaBEG5rrSpQeVygpvGBc `}
      loadingElement={ <div style={{ height: `100%`,width: "100%", }}/>  }
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}

/>  
     </div>
   );
 }; 
 export default SimpleMap;
