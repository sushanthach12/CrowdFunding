import Link from "next/link";
import CampaignList from "../Campaign/CampaignList";

const Dashboard = async ({session}) => {

  const response = await fetch('http://localhost:5000/api/campaign/userCampaigns', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({'email': session?.user?.email})
  })
  const campaigns = await response.json();
  console.log(campaigns)

  return (
    <div className='w-[70%] min-h-screen mx-auto px-4 py-6'>
      <div className='flex justify-center items-center max-w-full'>
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
      </div>
    </div>
  )
}

export default Dashboard