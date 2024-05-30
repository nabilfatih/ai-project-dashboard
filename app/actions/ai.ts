"use server"

import axios from "axios"
import { z } from "zod"

import { formSchema } from "@/components/template/form-main"

type AiResponse = {
  predictions: {
    parallelfertigung: {
      predictions: boolean[]
      probabilities: number[][]
    }
    programmnr: {
      predictions: number[]
      probabilities: number[][]
    }
  }
}

export async function callingAi(
  values: z.infer<typeof formSchema>
): Promise<AiResponse | { error: string }> {
  const dataBody = {
    dataframe_split: {
      columns: [
        "FAHRZEUG_ID",
        "KOPIERT_VON_ID",
        "KATEGORIE",
        "MODELL",
        "KAROSSERIETYP",
        "GEWICHT",
        "HOEHE",
        "KRAFTSTOFFTYP",
        "KAROSSERIEFORM",
        "LEISTUNG_KATEGORIE",
        "GETRIEBE",
        "LACKFARBE",
        "INFOTAINMENT",
        "KOMFORT",
        "SICHERHEITSSYSTEME"
      ],
      data: [
        [
          values.fahrzeug_id,
          null,
          values.kategorie,
          values.modell,
          values.karosserietyp,
          Number(values.gewicht),
          Number(values.hoehe),
          values.kraftstofftyp,
          values.karosserieform,
          values.leistung_kategorie,
          values.getriebe,
          values.lackfarbe,
          values.infotainment,
          values.komfort,
          values.sicherheitssystem
        ]
      ]
    }
  }

  try {
    const { data } = await axios.post(
      "http://127.0.0.1:5001/invocations",
      dataBody,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    return data
  } catch (error) {
    return {
      error: "Something went wrong"
    }
  }
}
