import React from 'react'
import { useLocation, Route, Routes } from 'react-router-dom';
import MovicDetail from './MovicDetail';
import MovicList from './MovicList';

const Movics = (props) => {
    const location = useLocation();
    return (
        <div>
            <Routes>
                <Route path="" element={<MovicList type={props.type} />} />
                <Route path="*" element={<MovicDetail name={location.state} type={props.type} app={props.app} />} />
            </Routes>
        </div>
    )
}

export default Movics