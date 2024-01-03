"use client"
import CampaignList from '@/components/Campaign/CampaignList'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CampaignDiv from '@/components/Campaign/CampaignDiv'


const Campaign = () => {
    const [allCampaigns, setAllCampaigns] = useState([])
    useEffect(() => {
        (
            async () => {
                const res = await fetch('http://localhost:5000/api/campaign/getCampaigns', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

                const response = await res.json();
                await setAllCampaigns(response.Campaign)
            }
        )()
    }, [])

    return (
        <CampaignDiv>

            {
                allCampaigns.map((item) => {
                    return <Link href={`/campaign/${item._id}`}>
                        <CampaignList
                            key={item._id}
                            title={item.title}
                            percentComplete={(item.currentAmount/item.goalAmount) * 100}
                            image={item.images}
                            description={item.description.substring(0, 110)}
                            currentAmount={item.currentAmount}
                            goalAmount={item.goalAmount} />
                    </Link>
                })
            }
        </CampaignDiv>
    )
}

export default Campaign