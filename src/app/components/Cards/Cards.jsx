import React from 'react';
import {Card, CardContent, Typography, Grid} from "@material-ui/core"
import CountUp from "react-countup"

import styles from "./Cards.module.css"
import cx from "classnames"

const Cards = (props) => {
    if(!props.data){
        return "Loading..."
    }
    const {confirmed, recovered, deaths, country, population} = props.data.All
    return ( 
        <div className={styles.container}>
            <Grid container spacing={0} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> {(country===undefined?"Global":country)} Infected</Typography>
                        <Typography variant="h5"> 
                        
                            <CountUp 
                                start={0}
                                end={confirmed}
                                duration={2.5}
                                separator= ","
                            />
                        
                        </Typography>
                        <Typography variant="body2"> 
                            Infected: {(Math.round(confirmed/population*100)===0?"Less than 1":Math.round(confirmed/population*100))}
                            % of the {country} population
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> {(country===undefined?"Global":country)} Recovered</Typography>
                        <Typography variant="h5">
                        
                            <CountUp 
                                start={0}
                                end={recovered}
                                duration={2.5}
                                separator= ","
                            />
                        
                        </Typography>
                        <Typography variant="body2">
                            Confirmed recoveries: {((Math.round(recovered/confirmed*100)===0)?("Less than 1"):(Math.round(recovered/confirmed*100)))}
                            % of the cases
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> {(country===undefined?"Global":country)} Deaths</Typography>
                        <Typography variant="h5">

                            <CountUp 
                                start={0}
                                end={deaths}
                                duration={2.5}
                                separator= ","
                            />

                        </Typography>
                        <Typography variant="body2">
                            Death ratio: {((Math.round(deaths/confirmed*100)===0)?"Less than 1": (Math.round(deaths/confirmed*100)))}
                                % of the cases
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Cards;