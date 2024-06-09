import React from 'react'
import ServiceItem from '../../components/ServiceItem'

const HomeHighlights = () => {
  return (
    <>
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2">
        <div className="container mobile-highlight-points">
            <div className="row no-gutters d-flex">
            <ServiceItem 
                id={1}
                icon="flaticon-engineer-1" 
                title="Vision" 
                description="To be the engineering and design company of choice, leader in the industry and invaluable asset to our clients. We will be an organization that capitalizes on our strengths, takes advantage of opportunities."
            />
            <ServiceItem 
                id={2}
                icon="flaticon-worker-1" 
                title="Mission" 
                description="To be the engineering and design company of choice, leader in the industry and invaluable asset to our clients. We will be an organization that capitalizes on our strengths, takes advantage of opportunities."
            />
            <ServiceItem 
                id={3}
                icon="flaticon-engineer" 
                title="Quality Policy" 
                description="To get it right first time, every time and strive to exceed customer expectations whenever possible."
            />
            </div>
        </div>
        </section>
    </>
  )
}

export default HomeHighlights