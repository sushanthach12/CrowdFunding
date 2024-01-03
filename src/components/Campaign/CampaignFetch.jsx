import React from 'react'
import CampaignList from './CampaignList';
import Link from 'next/link';

const CampaignFetch = async () => {

    const res = await fetch('http://localhost:5000/api/campaign/getCamps', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }
    })

    const campaigns = await res.json();

    return (
        <>
            {
            campaigns.Campaign.length !== 0 && campaigns.Campaign.map((item) => {
                return <Link href={`/campaign/${item._id}`} key={item._id}>
                <CampaignList
                    key={item._id}
                    title={item.title}
                    image={item.images}
                    percentComplete={(item.currentAmount / item.goalAmount) * 100}
                    currentAmount={item.currentAmount}
                    goalAmount={item.goalAmount}
                    description={item.description.substring(0, 110)} /></Link>
            })
            }
        </>
    )
}

export default CampaignFetch