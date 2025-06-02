import React from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { subjectsColors } from "@/constants";

interface CompanionCardProps {
    id: string;
    name: string;
    duration: number;
    topic: string;
    subject: string;
    bookmarked?: boolean;
}

const CompanionCard = ({
    id,
    name,
    topic,
    duration,
    subject,
    bookmarked = false
}: CompanionCardProps) => {
    return (
        <article 
            className="companion-card hover:scale-[1.02] transition-transform duration-200" 
            style={{ backgroundColor: subjectsColors[subject.toLowerCase()] }}
        >
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <Button 
                    className="companion-bookmark hover:bg-black/80 transition-colors"
                    onClick={() => console.log('Bookmark clicked', id)}
                >
                    <Image
                        src={bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"}
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

            <Link href={`/companions/${id}`} className="w-full">
                <Button className="btn-primary w-full justify-center hover:opacity-90 transition-opacity">
                    Begin Lesson
                </Button>
            </Link>
        </article>
    );
};

export default CompanionCard;