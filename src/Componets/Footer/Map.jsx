import React from 'react';
import style from "../../css/Footer/Map.module.css"
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl, GeolocationControl } from 'react-yandex-maps';
const Map2 = () => (
  <div className={style.Map}>
    <YMaps className={style.Map_block}>
      <div className={style.Map_block}>
        <Map className={style.Map_block}
          defaultState={{
            center: [56.814970, 60.624280],
            zoom: 5,
            controls: [],
          }}>
          <Placemark geometry={[56.814970, 60.624280]} />
          <FullscreenControl />
          <GeolocationControl options={{ float: 'left' }} />
          <ZoomControl options={{ float: 'right' }} />
        </Map>
      </div>
    </YMaps>
  </div>
);
export default Map2;