import React from 'react'
import './mainBody.css'
import PropertyCard from '../propertycard/PropertyCard'
import propertyData from '../../data'

const MainBody = () => {
  return (
    <main className='mainSection'>
        <div className="filterButtons">
            <button>New York</button>
            <button>Mumbai</button>
            <button>Paris</button>
            <button>London</button>
        </div>

        <div className="container-fluid">

          {/* map each property data */}

          
            {
              propertyData.map((property) => {
                return (                    
                        <PropertyCard key={property.id} {...property} />                    
                )
              })
            }
        </div>
    </main>
  )
}

export default MainBody