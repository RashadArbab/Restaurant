import React , {useEffect, useState} from 'react'; 
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css' ; 
import axios from 'axios' ; 
import Navbar from './navbar'; 
import Footer from './footer'; 

function Landfood() {

    //const that saves the array of food 
    //useEffect (we want this to load first and set up the array with the api)
        //setState to the array constant
    /*const itemslist = items.map((object)=>{
        return 
    }*/

    const[items, setItems] = useState([]); 

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        .then((response)=>{
           console.log(response.data); 
           setItems(response.data.meals);  
        }).catch((error)=>{
            console.log(error); 
        })

    },[])

    const itemsList = items.map((object)=>{
        
        return <div className='col-md-4'>
                <img src={object.strMealThumb} style={{borderRadius:'10px'}} className="img-fluid" /> 
                <p>{object.strName}</p>
            </div>
           
    })

    return <div> 
        <Navbar/> 
        <div className='row' style={{margin: '10px'}}> 
        {itemsList}
        </div>
        <Footer/> 



        
    </div>


}export default Landfood; 