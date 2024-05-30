"use server"

import axios from "axios"
import { z } from "zod"

import { formSchema } from "@/components/template/form-main"

export async function callingAi(values: z.infer<typeof formSchema>) {
  try {
    // TODO: Implement the API call to the AI model
  } catch (error) {
    return {
      error: "Something went wrong"
    }
  }
}
