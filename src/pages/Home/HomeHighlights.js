import React from 'react'
import ServiceItem from '../../components/ServiceItem'
import useWebsiteStore from '../../store/websiteStore';

const HomeHighlights = () => {
    const { website } = useWebsiteStore();
  return (
    <>
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2">
        <div className="container mobile-highlight-points">
            <div className="row no-gutters d-flex">
            {website?.website_banner_cards?.map((card, index) => (                
                <ServiceItem 
                    id={index}
                    icon="flaticon-engineer-1" 
                    title={card.title} 
                    description={card.description}
                />
            ))}
            </div>
        </div>
        </section>
    </>
  )
}

export default HomeHighlights