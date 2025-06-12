'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";

export default function Page() {
    const [cards, setCards] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch("https://api.apispreadsheets.com/data/SyAHYAz2vsEj2jUc/")
        .then((res) => res.json())
        .then((data) => {
            setCards(data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log(cards?.data[0]);
    }, [cards]);

    if (isLoading) return <p>Loading...</p>
    if (!cards) return <p>No profile data</p>



    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <h1>Explore Cards</h1>
            <div className="card-list flex flex-wrap gap-x-4 gap-y-1">
                {cards.data.map((card, index) => (
                    <div key={index} className="card">
                        <Link href={'/cards'} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                            <Image 
                                width="825" 
                                height="1125" 
                                src={`https://raw.githubusercontent.com/KolbyBalch/TreasureRun/refs/heads/main/assets/cardFronts/alp_${String(card.id).padStart(3, '0')}.png`}
                                style={{borderRadius: "12px"}}
                                alt={`Image of ${card.name}.`}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}