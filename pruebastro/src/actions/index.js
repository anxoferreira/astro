import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { deleteProduct } from "../lib/db";

export const server={
    newsletter : defineAction({
        input: z.object({
            email: z.string()
        }),
        handler: async (input, context)=>{
            //guardamos el email en la base de datos
            console.log("email guardado correctamente")
            return {
                succes: true,
                message: "Te has subscrito correctamente"
            }
        }
    }),

    productDelete: defineAction({
        input: z.object({
            id: z.number()
        }),
        handler: async (input, context)=>{
            await deleteProduct(input.id)
            return {
                succes: true,
                message: "Se ha borrado el producto"
            }
        }
    })
}