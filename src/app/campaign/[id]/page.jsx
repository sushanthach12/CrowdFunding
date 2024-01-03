"use client"
import React from 'react'
import { AiTwotoneAlert, AiFillHeart } from "react-icons/ai"
import { BiShareAlt } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"
import { GiLaurelsTrophy } from "react-icons/gi"

export const metadata = {
  title: 'Crowd Funding | Campaign',
  description: 'Crowd Funding is platform for your loss funding',
}

const CampignID = async({ params}) => {

  const res = await fetch('http://localhost:5000/api/campaign/getCampaign', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ id: params.id })
  })

  const campaign = await res.json();

  return (
    <div className='mx-auto py-10 px-52 min-h-screen bg-gray-50'>

      <div className="hidden sm:mb-6 sm:flex sm:justify-center">
        <div className="relative flex justify-start items-start gap-x-2 rounded-full px-3 py-1 text-sm leading-6 bg-red-100 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <AiTwotoneAlert size={20} color='red' /><span>This fundraiser is in an urgent need of funds</span>
        </div>
      </div>
      <div className='mx-auto'>
        <h1 className='text-center text-3xl text-gray-600 font-semibold'>{campaign.Campaign.title}</h1>
      </div>

      <div className='mx-auto py-8 flex '>


        <div className=' w-[65%] h-fit bg-white shadow-lg roundned-md'>
          <div className="h-fit w-fit overflow-hidden bg-gray-200 group-hover:opacity-75  rounded-t-lg">
            <img src={campaign.Campaign.images} alt="Front of men&#039;s Basic Tee in black." className="h-fit w-fit object-cover object-center" />
          </div>

          <div className='mt-5 w-full px-4 flex justify-end items-end'>
            <button className="bg-blue-500 flex gap-x-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg"><BiShareAlt size={20} /> <span>Share This Fundraiser</span></button>
          </div>

          <div className='mt-4 border-t-2 py-8 mx-4'>
            <h3 className='font-semibold text-center text-xl'>About the Fundraiser</h3>
          </div>

          <div className='mt-2 py-2 mx-4 px-3 pb-6 roundned-md'>
            <p>{campaign.Campaign.description}</p>
          </div>
        </div>




        <div className='w-[35%] h-fit mx-10'>
          <div className='mt-6 w-full flex justify-center items-center'>
            <button className="bg-blue-500 flex gap-x-2 hover:bg-blue-600 text-base text-white font-bold py-3 px-6 rounded shadow-lg uppercase"> <AiFillHeart size={25} color='white' />Contribute Now</button>
          </div>

          <div className='mx-auto mt-6 px-4'>

            <div className='mt-4'>
              <dl className='flex flex-col gap-y-2 justify-start items-start'>
                <dt className='text-2xl font-semibold text-gray-700'>₹ {campaign.Campaign.currentAmount}</dt>
                <dd className='text-gray-500'>raised of <span className='text-gray-700 font-medium'>₹{campaign.Campaign.goalAmount}</span> goal</dd>
              </dl>
            </div>

            <div className="h-2 mt-3 relative max-w-xl rounded-md">
              <div className="w-full h-2 bg-gray-200 absolute rounded-md"></div>
              <progress className={`progress progress-primary bg-blue-400 w-[${Math.ceil((campaign.Campaign.currentAmount / campaign.Campaign.goalAmount) * 100)}%] h-2 absolute rounded-md`} value={"0"} max={"100"}></progress>
            </div>

            <div className='mt-4 flex justify-between items-center'>
              <dl className='flex gap-x-1 justify-center items-center'>
                <dt className='text-xl font-semibold text-gray-700'>2786023</dt>
                <dd className='text-gray-500 text-sm'>supporters</dd>
              </dl>
              <dl className='flex gap-x-1 justify-center items-center'>
                <dt className='text-xl font-semibold text-gray-700'>{campaign.Campaign.duration}</dt>
                <dd className='text-gray-500 text-sm'>days left</dd>
              </dl>
            </div>

            <div className='mt-4 bg-white shadow-lg rounded-md w-full'>
              <div className='mt-5 flex justify-end items-end'>
                <button className="bg-transparent flex gap-x-1 text-blue-500 text-xs font-bold py-2 px-4 rounded"><IoMailOutline size={15} /> <span>Contact</span></button>
              </div>

              <div className='mx-4 py-2 '>
                <div className='flex gap-x-10 justify-start items-center px-8'>
                  {/* <div className='bg-gray-300 p-2 w-10 h-10 rounded-full flex justify-center items-center'><BsFillPersonFill size={18} /></div> */}
                  <div className='bg-gray-100 p-2 w-11 h-11 rounded-full flex justify-center items-center'> <span className='font-bold text-green-400 text-xl'>C</span></div>
                  <dl className='text-sm'>
                    <dt className='text-gray-500 font-semibold'>Campaigner</dt>
                    <dd className='text-blue-600 font-semibold'>{campaign.Campaign.creator.name}</dd>
                  </dl>
                </div>

                <div className='mt-3 border-t-2 py-2 flex gap-x-10 px-8 justify-start items-center'>
                  {/* <div className='bg-gray-300 p-2 w-10 h-10 rounded-full flex justify-center items-center'><BsFillPersonFill size={18} /></div> */}
                  <div className='bg-gray-100 p-2 w-11 h-11 rounded-full flex justify-center items-center'> <span className='font-bold text-green-400 text-xl'>B</span></div>
                  <dl className='text-sm'>
                    <dt className='text-gray-500 font-semibold'>Beneficiary</dt>
                    <dd className='text-blue-600 font-semibold'>{campaign.Campaign.beneficiary.name}</dd>
                  </dl>
                </div>

              </div>
            </div>

            <div className='mt-4 p-2 bg-white shadow-lg rounded-md w-full'>
              <div className='border-b-2 py-2 flex justify-center items-center gap-x-3'>
                <GiLaurelsTrophy size={25} color='gray' />
                <p className='font-bold text-gray-700'>Top Donors</p>
              </div>

              <div className='mt-3'>
                <div className='py-2 flex gap-x-4 px-2 justify-start items-center'>
                  <div className='bg-gray-100 p-2 w-11 h-10 rounded-full flex justify-center items-center'> <span className='font-bold text-green-400 text-base'>KK</span></div>
                  <dl className='text-sm flex justify-between items-center w-full'>
                    <dt className='text-gray-500 font-semibold text-base'>Kamal Khanna</dt>
                    <dd className='text-blue-600 font-semibold'>₹500000</dd>
                  </dl>
                </div>
                <div className='py-2 flex gap-x-4 px-2 justify-start items-center'>
                  <div className='bg-gray-100 p-2 w-11 h-10 rounded-full flex justify-center items-center'> <span className='font-bold text-green-400 text-base'>M</span></div>
                  <dl className='text-sm flex justify-between items-center w-full'>
                    <dt className='text-gray-500 font-semibold text-base'>Manishnewar</dt>
                    <dd className='text-blue-600 font-semibold'>₹500000</dd>
                  </dl>
                </div>
                <div className='py-2 flex gap-x-4 px-2 justify-start items-center'>
                  <div className='bg-gray-100 p-2 w-11 h-10 rounded-full flex justify-center items-center'> <span className='font-bold text-green-400 text-base'>NN</span></div>
                  <dl className='text-sm flex justify-between items-center w-full'>
                    <dt className='text-gray-500 font-semibold text-base'>Nitasha Nanda</dt>
                    <dd className='text-blue-600 font-semibold'>₹500000</dd>
                  </dl>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default CampignID

export const getServerSideProps = async (context) => {
  console.log(context.query)
  const res = await fetch('http://localhost:5000/api/campaign/getCampaign', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ id: context.query.id })
  })

  const campaign = await res.json();
  console.log(response)

  return {
    props: {
      campaign: campaign
    }
  }
}