'use server'

import { google } from "googleapis";

function convertCard(card) {
    return {
        id: Number(card[0]),
        name: card[1],
        rarity: card[2],
        type: card[3],
        subtype: card[4],
        colors: card[5],
        cost: Number(card[6]),
        rulesText: card[7],
        flavorText: card[8],
        north: card[9],
        east: card[10],
        south: card[11],
        west: card[12],
        artist: card[13],
    }
}
 
export async function getCards() {
    const glSheets = google.sheets({ version: "v4", auth: process.env.GOOGLE_API_KEY });

    const data = await glSheets.spreadsheets.values.get({
        spreadsheetId: "1-RlZ7R8TRHPXW_Mm0VJZe5bCgtAlEq5UHPMmF-k_EpU",
        range: 'Alpha!B2:O101',
    });

    const cardList = data.data.values.map(card => convertCard(card));

    return { data: cardList };
}