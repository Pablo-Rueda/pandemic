import React from 'react';
import {NativeSelect, FormControl} from "@material-ui/core";

import styles from "./CountryPicker.module.css"

const CountryPicker = (props) => {
    const countries = props.data;
    return ( 
        <div className={styles.container}>
            <FormControl>
                <NativeSelect defaultValue="Global" onChange={(e)=>{props.handleCountryChange(e.target.value)}}>
                    <option value="Global"> Global </option>
                    {countries.map(country =>{
                        if(country !== "Global" ){
                            return(<option value={country} key={country}>{country} </option>)
                        }else{return ""}
                    })}
                </NativeSelect>
            </FormControl>
        </div>
     );
}
 
export default CountryPicker;