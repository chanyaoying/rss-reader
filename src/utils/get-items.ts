// src/utils/get-items.ts
import { useState } from "react"
import { useQuery } from "react-query"


// Fetch the items from the subscription list (in state)
const getItems = async (url: string) => {
    const response = await fetch(url, {
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
    });
    return await response.json()
}

export default getItems