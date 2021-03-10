import React from 'react';

import { geoNaturalEarth1, geoPath } from 'd3';
import styles from "./Map.module.css"

const projection = geoNaturalEarth1();
const path = geoPath(projection);

const Countries = ({feature,colorSet}) => {
    const styleColor = {fill:colorSet}
    return ( 
        <path className={styles.land} style={styleColor} d={path(feature)} />
    );
}
 
export default Countries;