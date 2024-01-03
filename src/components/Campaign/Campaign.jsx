"use client"
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { variants } from '@/framer/variants'
import CampaignFetch from './CampaignFetch'
import CampaignList from './CampaignList'
import Link from 'next/link'


const Campaign = () => {

    const controlls = useAnimation();

    const [ref, inView] = useInView({ threshold: 0 });

    const [campaigns, setCampaigns] = useState([
        {
            _id: 1,
            title: 'My Little Boy’s Cancer Has Relapsed Twice But I’m Helpless. Please save him',
            images: 'https://kettocdn.gumlet.io/media/campaign/212000/212655/image/1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=768&dpr=1.3',
            currentAmount: 4000,
            goalAmount: 10000,
            description: 'My son has been fighting for his life since he was a 5-year-old. Now years later, he is still fighting. However, the cancer seems to take more and more control of his body. I can’t help but think, will God spare my child this time or will cancer actually take him away from me? What goes on in a mother’s mind when any time she visits the hospital with her son, she is informed that his cancer has relapsed? Having faced that situation thrice, I pray to God none of the parents ever have the ill fortune to witness their own child suffering from cancer from time and again. My family\'s happiness lies in Abir. Him being the youngest member of my family of four, all of us are accustomed to his joyous and playful. When he became extremely sick the first time, he was scared and sad. Yet he tried to cheer all of us up as much as he could. 2014-2017 In April 2014, I was given the worst news any mother could receive. It was the first time Abir was diagnosed with Leukemia. Abir was in and out of hospital stays for three long years. He spent much of his early childhood getting poked by needles, giving blood, sleeping in hospital beds and receiving harsh chemotherapy. He not only lost all his hair, his body weight also decreased drastically. Finally, in June 2017, I finally received news my heart was aching to hear. After 3 years of painful treatments, Abir had finally beat cancer. He could finally live his life like a normal child. 2018 It was the first month of 2018 and celebration was in the air. After all, it was Abir’s 8th birthday coming up. Everyone was in great spirits. Abir laughed and played on his birthday like never before. It’s a shame all of this was a facade. Two days before his birthday, we received the information that my son’s blood cancer had relapsed. None of us had the heart to tell him this so we let him celebrate his birthday in full spirits. Since his cancer had relapsed, it was much more fatal than before. This time we gathered all our belongings and left everything behind, our work, our older son (16 years old at the time), our home, everything to head to New York to seek treatment. Abir was once again put through the test. Harsh chemo made him so sick, needles poked daily, numerous failed treatments, and a major bone-marrow transplant that drained him and made him weak. Nevertheless, we were relieved to receive the news from the doctors in November, 2018 that Abir can finally go back home. Once again, my brave son had won the fight against cancer.'

        },
        {
            _id: 2,
            title: 'My Little Boy’s Cancer Has Relapsed Twice But I’m Helpless. Please save him',
            images: 'https://kettocdn.gumlet.io/media/campaign/212000/212655/image/1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=768&dpr=1.3',
            currentAmount: 4000,
            goalAmount: 10000,
            description: 'My son has been fighting for his life since he was a 5-year-old. Now years later, he is still fighting. However, the cancer seems to take more and more control of his body. I can’t help but think, will God spare my child this time or will cancer actually take him away from me? What goes on in a mother’s mind when any time she visits the hospital with her son, she is informed that his cancer has relapsed? Having faced that situation thrice, I pray to God none of the parents ever have the ill fortune to witness their own child suffering from cancer from time and again. My family\'s happiness lies in Abir. Him being the youngest member of my family of four, all of us are accustomed to his joyous and playful. When he became extremely sick the first time, he was scared and sad. Yet he tried to cheer all of us up as much as he could. 2014-2017 In April 2014, I was given the worst news any mother could receive. It was the first time Abir was diagnosed with Leukemia. Abir was in and out of hospital stays for three long years. He spent much of his early childhood getting poked by needles, giving blood, sleeping in hospital beds and receiving harsh chemotherapy. He not only lost all his hair, his body weight also decreased drastically. Finally, in June 2017, I finally received news my heart was aching to hear. After 3 years of painful treatments, Abir had finally beat cancer. He could finally live his life like a normal child. 2018 It was the first month of 2018 and celebration was in the air. After all, it was Abir’s 8th birthday coming up. Everyone was in great spirits. Abir laughed and played on his birthday like never before. It’s a shame all of this was a facade. Two days before his birthday, we received the information that my son’s blood cancer had relapsed. None of us had the heart to tell him this so we let him celebrate his birthday in full spirits. Since his cancer had relapsed, it was much more fatal than before. This time we gathered all our belongings and left everything behind, our work, our older son (16 years old at the time), our home, everything to head to New York to seek treatment. Abir was once again put through the test. Harsh chemo made him so sick, needles poked daily, numerous failed treatments, and a major bone-marrow transplant that drained him and made him weak. Nevertheless, we were relieved to receive the news from the doctors in November, 2018 that Abir can finally go back home. Once again, my brave son had won the fight against cancer.'

        }
    ])

    useEffect(() => {
        if (inView) {
            controlls.start("visible")
        }
        if (!inView) {
            controlls.set("hidden")
        }
    }, [inView])

    useEffect(() => {
        (
            async () => {
                const res = await fetch('http://localhost:5000/api/campaign/getCamps', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

                const response = await res.json();
                setCampaigns(response.Campaign);
            }
        )()
    }, [])


    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controlls}
            variants={variants}

            className='w-full' id='campaign'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-18">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Trending Campaigns.
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Campaigns</h1>
                    </div>
                    <div className='flex justify-center items-center max-w-full'>
                        {
                            campaigns.length !== 0 && campaigns.map((item) => {
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
            </div>

        </motion.section>

    )
}

export default Campaign