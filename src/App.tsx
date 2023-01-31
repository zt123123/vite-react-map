import React, { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import Toolbar from "@/components/Toolbar";
import PropertyEditor from "@/components/PropertyEditor";
import JsonViewer from "@/components/JsonViewer";
import { ACCESS_TOKEN } from '@/config';
import { MapContext } from '@/utils';
import "./App.less"
import { Feature } from '@turf/turf';
import LocaleReceiver from "antd/es/locale-provider/LocaleReceiver"
import zhCN from "antd/locale/zh_HK"
import { RcFile } from "antd/es/upload/interface"
import { DatePicker, ConfigProvider } from "antd"

function App() {
  // @ts-ignore
  const file: RcFile = {
    lastModified: 1,
    lastModifiedDate: new Date,
    uid: '',
    name: '',
    webkitRelativePath: '',
    size: 0,
    type: '',
  }
  console.log(111, file)
  const [map, setMap] = useState<mapboxgl.Map | null>(null)
  const [draw, setDraw] = useState<MapboxDraw | null>(null)
  const [feature, setFeature] = useState<Feature | null>(null)
  useEffect(() => {
    const map = new mapboxgl.Map({
      dragRotate: false,
      attributionControl: false,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
      accessToken: ACCESS_TOKEN
    });
    const draw = new MapboxDraw();
    map.addControl(draw);

    setMap(map)
    setDraw(draw)

    window.draw = draw
    window.map = map

    map.on('load', function () {
      console.log('load');
    });

    // map.on('draw.create', updateArea);
    // map.on('draw.delete', updateArea);
    // map.on('draw.update', updateArea);
    map.on('draw.modechange', updateArea);
    map.on('draw.selectionchange', updateArea);

    function updateArea(e: any) {
      console.log(e);
      if (e.mode === "simple_select") {
        setFeature(null)
      }
      if (e.type === 'draw.selectionchange' && e.features.length) {
        setFeature(e.features[0])
      }
    }
  }, [])


  const context = {
    map,
    draw
  }
  return (
    <MapContext.Provider value={context}>
      <ConfigProvider locale={zhCN}>
        <div className="app">
          <div id='map' className='map-container'></div>
          <Toolbar />
          <PropertyEditor feature={feature} />
          <JsonViewer feature={feature} />
        </div>
      </ConfigProvider>
    </MapContext.Provider>
  )
}

export default App
