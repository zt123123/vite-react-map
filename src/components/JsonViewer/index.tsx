import { Feature } from "@turf/turf";
import React, { FC, useContext } from "react"
import { MapContext } from "../../utils"
import "./index.less"

export interface IProps {
  feature: Feature | null
}
function PropertyEditor({ feature }: IProps) {
  // const { map, draw } = useContext(MapContext)
  // const data = draw?.getSelected()
  console.log('feature', feature);
  return feature && <div className="json-viewer-ct">
    {JSON.stringify(feature, null, 4)}
  </div>
}
export default PropertyEditor