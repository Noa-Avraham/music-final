import React from "react";
export interface SongModel {

    id: number;
    artist: string;
    title: string;
    gener: string;
    length: number;
    price: number;

    // img: string;

}
export const validTypes: string[] = ["ROCK", "POP", "CLASSICAL", "RAP"]