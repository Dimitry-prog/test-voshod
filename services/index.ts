import { ItemsResponseType, SingleItemType } from "@/types";

export const fetchItems = async (page: string): Promise<ItemsResponseType> => {
  try {
    const response = await fetch(` https://taxivoshod.ru/testapi/?w=list&page=${page}`);

    return response.json();
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch items!");
  }
}

export const fetchItem = async (itemId: string): Promise<SingleItemType> => {
  try {
    const response = await fetch(`https://taxivoshod.ru/testapi/?w=item&id=${itemId}`);

    return response.json();
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch item!");
  }
}