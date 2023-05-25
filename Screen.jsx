import React,{ useEffect, useState } from 'react'

// useEffect
// 1.No dependency array => Mounting Time , array state updates   
// 2.Empty Dependency array => [] =>Mounting 
// 3.states in dependency array => [city] => Mounting , passed state updates 

// useEffect ( callback , dependency array)
            //     |          
            // 2s times

            const Screen = () => {
                const[city,setCity]= useState('Delhi');
                
                let myApi = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=143454aa39bbe3442a890cdbf3f9db36`
            
                const[apiLink,setApi] = useState(myApi);
                const[apiData,setApiData] = useState({
                    main:{
                        temp:0
                    }
                });
            
                useEffect(()=>{
                    const getApi= async()=>{
                        const response = await fetch(apiLink);
                        const result = await response.json();
            
                        setApiData(()=>({
                            ...result
                        }))
                        console.log(apiData)
                    } 
                    getApi();
                },[apiLink])
            
            
                const handleCityInput=(e)=>{
                    setCity(e.target.value);
                }
            
                const handleSearch=()=>{
                    setApi(myApi);
                }
            
                
            
              return (
                <div>
                    <h2>Weather Application</h2>
                    <br />
                    <input type="text" placeholder='Enter City Name' onChange={handleCityInput}/>
                    <button onClick={handleSearch}>Search</button>
                    <br /><br />
                    <div>
                        <h2 style={{display:'inline'}}>Temperature: </h2>
                        <h5 style={{display:'inline'}}>{apiData.main.temp} <sup>o</sup>F</h5>
            
                    </div>
                </div>
              )
            }
            
            export default Screen