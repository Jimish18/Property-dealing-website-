import React from 'react'
import propertyData from '../../data'
import './propertyPage.css'
import {IoLocationOutline} from 'react-icons/io5'
import {BsBuildings} from 'react-icons/bs'
import {BiBed} from 'react-icons/bi'
import {LuBath} from 'react-icons/lu'
import {LiaArrowsAltSolid} from 'react-icons/lia'

const PropertyPage = () => {

    // get id from url's slug
    const url = window.location.pathname.split('/')[2];

    // convert the string id to number
    const id = parseInt(url);

    // find the property with the id
    const propertyPageData = propertyData.find((property) => property.id === id);

    
    


  return (
    
    propertyPageData ? 
    (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={propertyPageData.img} alt={propertyPageData.title} className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h1>{propertyPageData.title}</h1>
                    <p><IoLocationOutline className='icon'/>  {propertyPageData.location}</p>
                    <h5>{propertyPageData.address}</h5>

                    <div className='propertyFeatures'>
                        
                        <div> <BsBuildings className='icon'/>  <span>{propertyPageData.room} room</span></div>
                        <div> <BiBed className='icon' /> <span>{propertyPageData.bed} bed</span></div>        
                        <div> <LuBath className='icon' /> <span>{propertyPageData.bath} bath</span></div>
                        <div> <LiaArrowsAltSolid className='icon' /> <span>{propertyPageData.sft} sft</span></div> 
                        
                    </div>

                    <div className='hrline'></div>

                    <div className='PropetyRentOption'>
                        <div>&#36;{propertyPageData.price} <span>/month</span></div>
                        <div>                
                            <button>Rent now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
    :
    (
        <h1>Page not found</h1>
    )



  )
}

export default PropertyPage;