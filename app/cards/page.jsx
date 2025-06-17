'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { Filter } from '../../components/filter'
import { getCards } from 'app/actions';

export default function Page() {
    const searchParams = useSearchParams()
    const id = Number(searchParams.get('id'))

    const [cards, setCards] = useState(null)
    const [selectedCard, setSelectedCard] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        getCards().then(data => setCards(data.data), setLoading(false))
    }, [])

    useEffect(() => {
        if (cards?.length > 0) {
            setSelectedCard(cards?.filter(card => {
                console.log(card.id, id);
                return card.id === id})[0])
        }
    }, [id, cards])

    useEffect(() => {
        console.log(selectedCard)
    }, [selectedCard])


    if (isLoading) return <p>Loading...</p>
    if (!cards) return <p>{"Sorry! We can't find the cards you are looking for... Check back later."}</p>

    if (!!id) return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <Link href='/cards'>Back</Link>
            <div className="card-details flex flex-wrap gap-x-4 gap-y-1">
                <Image 
                    width="825" 
                    height="1125" 
                    src={`https://raw.githubusercontent.com/KolbyBalch/TreasureRun/refs/heads/main/assets/cardFronts/alp_${String(selectedCard?.id).padStart(3, '0')}.png`}
                    style={{borderRadius: "12px"}}
                    alt={`Image of ${selectedCard?.name}.`}
                />
                <div className="info">
                    <h1>{selectedCard?.name}</h1>
                    <h2>{selectedCard?.rarity}</h2>
                    <h2>{selectedCard?.type}{selectedCard?.subtype ? ` - ${selectedCard?.subtype}` : ''}</h2>
                    <p>{selectedCard?.rulesText}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <h1>Explore Cards</h1>
            <Filter />
            <div className="card-list flex flex-wrap gap-x-4 gap-y-1">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <Link href={`/cards?id=${card.id}`} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
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

export const dynamicParams = true;