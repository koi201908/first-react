import React from 'react'
import MenuScreen from '../components/MenuScreen'
import InspectionScreen from '../components/InspectionScreen'
import { useRoutes } from 'react-router-dom';

function Routes() {
    let element = useRoutes([
        { path: '/', element: <MenuScreen /> },
        { path: '/inspection', element: <InspectionScreen /> },
        // { path: '/results', element: () => alert('実績') },
        // { path: '/go-back', element: () => alert('戻る') },
    ]);

    return element;
}

export default Routes;