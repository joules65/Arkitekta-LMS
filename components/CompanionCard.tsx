import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    duration:number;
    topic:string;
    color: string;
    subject:string;
}

const CompanionCard = ({id,name,topic,duration,color,subject,}:CompanionCardProps) => {
    return (
        <article className="companion-card" style={{ backgroundColor:color }}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <Button className="companion-bookmark">
                    <Image
                        src="/icons/bookmark.svg"
                        alt="bookmark"
                        width={15}
                        height={18.5}
                    />
                </Button>
            </div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm font-semibold">{topic}</p>

            <div className="flex items-center gap-2.5">
                <Image
                    src="/icons/clock.svg"
                    alt="Duration"
                    height={10.5}
                    width={9.5}
                />
                <p className="text-sm">{duration} minutes</p>
            </div>

            <Link href={`/companion/${id}`} className="w-full">
                <Button className="btn-primary w-full justify-center">
                    Begin Lesson
                </Button>
            </Link>

        </article>
    );
};

export default CompanionCard;