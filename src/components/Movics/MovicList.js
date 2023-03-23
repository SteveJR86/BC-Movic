import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MovicDetail from "./MovicDetail";

function MovicList(props) {
  return (
    <div>
      <h1>{props.type} list</h1>
      <Routes>
        <Route path="detail" element={<MovicDetail />} />
      </Routes>
    </div>
  )
}

export default MovicList