
import { geoNaturalEarth1, geoPath } from 'd3';
import Countries from "./Countries.js"
import styles from "./Map.module.css"

const projection = geoNaturalEarth1();
const path = geoPath(projection);
export const Marks = ({ mapData, percentages, country } ) => {

  return(
  <g className={styles.marks}>
      <path className={styles.sphere} d={path({type:"Sphere"})} />

    {
      mapData.features.map( feature =>{
        const colorSet = ((!percentages[feature.id]) ? ("rgba(135, 135, 135, 0.7)"):(
          (percentages[feature.id]<0.001)?("rgba(186, 54, 54, 0.1)"):("rgba(186, 54, 54, "+ (percentages[feature.id]+0.1)*5 + ")")
          ))

      return( <Countries feature={feature} key={feature.properties.name} colorSet={colorSet} /> )
      })
    }

  </g>
)};
