import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [ip,setIp] = useState("")
  const [data,setData] = useState(null)

  const handleInputChange = (event)=>{
     setIp(event.target.value)
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault()
    axios.get(`http://ip-api.com/json/${ip}`)
          .then(response=>setData(response.data))
          .catch(err => console.log(err))
  }

  const showData = () => {
    return(
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">city</th>
              <th scope="col">country</th>
              <th scope="col">countryCode}</th>
              <th scope="col">region</th>
              <th scope="col">regionName</th>
              <th scope="col">timezone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col">{data.city}</td>
              <td scope="col">{data.country}</td>
              <td scope="col">{data.countryCode}</td>
              <td scope="col">{data.region}</td>
              <td scope="col">{data.regionName}</td>
              <td scope="col">{data.timezone}</td>
            </tr>
          </tbody>
        </table>
    )
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <form className="my-4" onSubmit={handleFormSubmit}>
                <div className="form-group mb-4">
                  <label></label>
                  <input onChange={handleInputChange} value={ip} type="text" className="form-control" placeholder="Adresse IP"/>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Valider
                  </button>
                </div>
              </form>
              {
                data !== null ? showData() : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default App;
