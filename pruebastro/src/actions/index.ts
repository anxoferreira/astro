import { input, success } from "astro:schema";
import { z } from "astro/zod";
import { defineAction } from "astro:actions";


export const server = {
    newsletter: defineAction{
        input: z.object({
            email: z.string()
        }),
        handler:(input, context)=>{
            
            
            return{
                success: true,
                message: "correcto"
            }
        }
    }
}