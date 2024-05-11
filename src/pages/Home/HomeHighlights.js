import React from 'react'
import ServiceItem from '../../components/ServiceItem'

const HomeHighlights = () => {
  return (
    <>
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2">
        <div className="container mobile-highlight-points">
            <div className="row no-gutters d-flex">
            <ServiceItem 
                icon="flaticon-engineer-1" 
                title="Quality Construction" 
                description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
            <ServiceItem 
                icon="flaticon-worker-1" 
                title="Professional Liability" 
                description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
            <ServiceItem 
                icon="flaticon-engineer" 
                title="Dedicated To Our Clients" 
                description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
            </div>
        </div>
        </section>
    </>
  )
}

export default HomeHighlights