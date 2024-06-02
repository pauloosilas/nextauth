"use server"

import bcryptjs from "bcryptjs"

import * as z from "zod"
import { RegisterSchema } from "@/schemas"
import { db } from "@/lib/db"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "invalid fields!"};
    }
    const {name, password, email} = validatedFields.data;

    const hashedPassword = await bcryptjs.hash(password,10)

    const existingUser = await db.user.findUnique({
        where: {email}
    })

    if(existingUser) return {error: "Email already in use!"}

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        },
    });

    //TODO: Send verification token email

    return { success: "User created!"}
}