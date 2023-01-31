import React, { useContext } from "react"
import { MapContext } from "../../utils"
import { IProps } from "../JsonViewer"

function PropertyEditor({ feature }: IProps) {
  const ctx = useContext(MapContext)
  return <div>
    editor
  </div>
}
export default PropertyEditor