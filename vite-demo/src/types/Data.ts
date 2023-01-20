import { LocationQueryRaw } from "vue-router";

export interface Data extends LocationQueryRaw {
    name: string;
    price: number;
    id: number;
}