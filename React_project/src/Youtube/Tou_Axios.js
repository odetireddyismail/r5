import axios from 'axios'
import { useEffect,useState } from 'react'
const Youtube =(props)=>{

    const [data,setData] = useState([])

 useEffect(()=>{

    axios.get('https://www.googleapis.com/youtube/v3/search', { 
        params:{
         part:'snippet',
       
        key:'AIzaSyDNzFZNcD0JNYvcLuUpNl2qcl1pAT9q9Jg' 
    }
     })
    .then((res)=>{
       // console.log(res)
        setData(res)
    })
   
 },[])   




    return(
        <div>
           {
           console.log(data.data)
           }
        </div>
    )
}

export default Youtube