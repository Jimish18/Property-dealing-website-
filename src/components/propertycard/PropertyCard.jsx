import React from 'react'
import './propertyCard.css'
import {IoLocationOutline} from 'react-icons/io5'
import {BsBuildings} from 'react-icons/bs'
import {BiBed} from 'react-icons/bi'
import {LuBath} from 'react-icons/lu'
import {LiaArrowsAltSolid} from 'react-icons/lia'
import {FiHeart} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'

const PropertyCard = ({id,city,title,location,address,room,bed,bath,sft,price,img}) => {

    const navigate = useNavigate();
  return (
    <div className='propertyCardDiv' onClick={() => navigate(`/property/${id}`)}>        
        
        <div className="imgDiv" style={{backgroundImage : `url(${img})`}}>
            <div>{title}</div>
            <div><FiHeart className='likeIcon'/></div>
        </div>
        <div className="location"><IoLocationOutline className='icon'/> {location}</div>
        <div className="address">{address}</div>
        
        <div className='propertyFeatures'>
             
            <div> <BsBuildings className='icon'/>  <span>{room} room</span></div>
            <div> <BiBed className='icon' /> <span>{bed} bed</span></div>        
            <div> <LuBath className='icon' /> <span>{bath} bath</span></div>
            <div> <LiaArrowsAltSolid className='icon' /> <span>{sft} sft</span></div> 
            
        </div>

        <div className='hrline'></div>

        <div className='PropetyRentOption'>
            <div>&#36;{price} <span>/month</span></div>
            <div>                
                <button>Rent now</button>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard