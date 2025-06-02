import { Button } from '@/components/ui/button'
import React from 'react'
import {Section} from "lucide-react";
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
        {/* Placeholder Data removed to be used later for Onboarding functionality. */}
        <Section className="home-section">
            <CompanionCard />
            <CompanionCard/>
            <CompanionCard/>
        </Section>
        <Section className="home-section">
            <CompanionList />
        </Section>
    </main>
  )
}

export default Page