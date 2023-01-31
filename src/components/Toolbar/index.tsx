import { Button, Modal } from "antd";
import React, { useContext, useState } from "react"
import { MapContext } from "../../utils"
import _get from "lodash/get"

function PropertyEditor() {
  const { draw } = useContext(MapContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function drawLine() {
    const obj = {name: 'zhang'}
    console.log(_get(obj, "name"))
    console.log(_get(obj, "age", 23))
    showModal()
    draw?.changeMode("draw_line_string")
  }

  function drawPoint() {
    draw?.changeMode("draw_point")
  }
  function drawPolygon() {
    draw?.changeMode("draw_polygon")
  }

  return <ul className='control-list'>
     <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    <Button type="primary" onClick={drawLine}>line</Button>
    <Button type="primary" onClick={drawPoint}>point</Button>
    <Button type="primary" onClick={drawPolygon}>polygon</Button>
  </ul>
}
export default PropertyEditor

