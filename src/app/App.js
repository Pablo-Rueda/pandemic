import React from 'react';
import "./reset.css"
import Style from "./App.module.css"
import {Cards, Chart, CountryPicker, Map} from "./components"
import {fetchData} from "./api"



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
      <div className={Style.app}>
        <h1 style={{display:"flex",justifyContent:"center",paddingTop:30}}>Global Covid Situation</h1>
        <Map country={country} percentages={percentages} />
        <CountryPicker data={Object.keys(data)} handleCountryChange={this.handleCountryChange} />
        <Cards data={data[country]}  />
        <Chart data={data[country]} country={country} />
      </div>
    );
  }
}

export default App;
