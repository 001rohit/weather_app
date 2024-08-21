import './App.css';
import React,{useState} from 'react';
import axios from 'axios';
function App() {
  const [myData,setMyData] = useState('')
  const [storeData,setStoreData] = useState([])
  const getData = async()=>{
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${myData}&appid=25aaf64095b7b2858e601b65d3837415`)
      setStoreData(response.data) 
      console.log(response.data)
      } catch (error) {
        throw console.log("Api data is not full fill your request is cancele")
      }
  }
  
  const submitHandler =async(event)=>{
       event.preventDefault()
      setMyData(event.target[0].value)
      await getData()
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
            <label>Enter your location:
              </label>
              <input type='text' name='city' id=''/>
              <button type='submit'>Get Data</button> 
      </form>
      <h1>my api </h1>
      <div>
        <h1>Weather of: {myData}</h1>
         <p>visibility: {storeData?.visibility}</p>
         <h2>Humadity: {storeData?.main?.humidity}</h2>
         <h2>Temprature: {storeData?.main?.temp}</h2>
          {/* <h2>cloud condition: {storeData?.weather[0]?.main}</h2>  */}
      </div>
    </div>
  );
}

export default App;
