import { db } from "@/app/db/db"
import { messages } from "@/app/db/schema"

export async function addMessageToDatabase (input : string) {
     try {   
        await db.insert(messages).values({messages : input});
        console.log(input)
    } catch (e) {
        console.log(e)
        ok : false
     }
    return { 
        ok : true
    }
}