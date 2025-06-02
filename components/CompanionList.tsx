import React from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {cn} from "@/lib/utils";
import Link from "next/link";

interface CompanionListProps {
    title: string,
    companions?: Companion[],
    classNames?: string,
}

const CompanionList = ({title,companions,classNames}: CompanionListProps) => {
    return (
        <article className={cn('companion-list', classNames )}>
            <h2 className="font-bold text-3xl">Recent Sessions</h2>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-2/3 text-lg">Lessons</TableHead>
                        <TableHead className=" text-lg">Subject</TableHead>
                        <TableHead className="text-lg text-right">Duration</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map((companions) => (
                        <TableRow key={companions.id}>
                            <TableCell>
                                <Link href={`/companions/${companions.id}`}>
                                    {companions.subject}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </article>
    );
};

export default CompanionList;