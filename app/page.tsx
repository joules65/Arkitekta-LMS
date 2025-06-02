import { Button } from '@/components/ui/button'
import React from 'react'

import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl">Popular Companions</h1>
        <section className="home-section">
             <CompanionCard
                id="123"
                name="Queen Amina of Zaria"
                topic="Insight into one of Nigeria's most prominent females."
                duration={45}
                subject="History"
                bookmarked={true}
            />
            <CompanionCard
                id="124"
                name="Birth of the Rainbow Nation"
                topic="Aftermath of a dismantled Apartheid."
                duration={30}
                subject="History"
                bookmarked={false}
            />
            <CompanionCard
                id="125"
                name="World's Richest Man"
                topic="Let's talk Mansa Musa."
                duration={35}
                subject="economics"
                bookmarked={false}
            />
        </section>
        <section className="home-section">
            <CompanionList
                title="Recently Completed Lessons"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
            <Cta/>
        </section>
    </main>
  )
}

export default Page