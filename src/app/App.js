import React from 'react';
import "./reset.css"
import styles from "./App.module.css"
import {Cards, Chart, CountryPicker, Map, Footer} from "./components"
import {fetchData} from "./api"
import {Helmet} from "react-helmet";



class App extends React.Component { // deal without asynchronous data with class components rather than hooks
  state = {
    data: {},
    percentages: {},
    country:"Global"
  }
  
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});

    if(!fetchedData){}else{
      for (const property in fetchedData) {
          let covidData = {...this.state.percentages}
          const id = (fetchedData[property]["All"]["iso"] ? 
              (fetchedData[property]["All"]["iso"] > 100 ? ( "" + fetchedData[property]["All"]["iso"]) : (
                fetchedData[property]["All"]["iso"] > 10 ? ("0" + fetchedData[property]["All"]["iso"]) : ("00" + fetchedData[property]["All"]["iso"])
              )) : "NaN" ) 
          covidData[id] = fetchedData[property]["All"]["confirmed"] / fetchedData[property]["All"]["population"];
          this.setState({percentages: covidData});
        }
      }
  }
  handleCountryChange = (country) => {
    const {data} = this.state;
    this.setState({data, country:country})
  }
  
  render(){
    const {data,percentages,country} = this.state;

    return (
      <div className={styles.app}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Corona tracker</title>
        </Helmet>
        <h1 className={styles.title}> 
          <span style={{color:"rgb(111, 194, 107)"}}>CORONA </span>
          <span style={{color:"rgba(186, 54, 54,0.9)"}}>TRACKER</span>
        </h1>
        <Map country={country} percentages={percentages} />
        <div className={styles.bottomNotes}>
          <p>
            * The map might not display some countries data colored due to problems in the integration of the CoVid API data with the map data.
          </p>
        </div>
        <CountryPicker data={Object.keys(data)} handleCountryChange={this.handleCountryChange} />
        <Cards data={data[country]}  />
        <Chart data={data[country]} country={country} />
        <div className={styles.bottomNotes}>
          <p>
            ** Some countries stopped providing data at some point of the pandemy. The recover / deaths ratio might not be realistic. <br />
            *** Data from the <a href="https://github.com/M-Media-Group/Covid-19-API"> M-Media-Group API. </a>
          </p>
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
