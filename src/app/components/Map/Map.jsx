import React from 'react';

import { useMap } from './useMap';
import { Marks } from './Marks';
import styles from "./Map.module.css"



const Map = ({country,percentages}) => {
    const mapData = useMap();

    if ( !mapData || !percentages) {
      return <pre>Loading...</pre>;
    }
    
    return ( 
        <div className={styles.container}>
            <svg className={styles.map} >
                <Marks mapData={mapData} country={country} percentages={percentages} />
            </svg>
        </div>
     );
}
 
export default Map;