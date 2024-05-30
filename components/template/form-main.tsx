"use client"

import { useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { IconSpinner } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { callingAi } from "@/app/actions/ai"

export const formSchema = z.object({
  fahrzeug_id: z.string().min(2).max(50),
  kopiert_von_id: z.string().min(2).max(50),
  kategorie: z.string().regex(/^[a-zA-Z]+$/),
  modell: z.string().min(2).max(10),
  karosserietyp: z.string().regex(/^[a-zA-Z]+[0-9]+$/),
  gewicht: z.string().min(2).max(50),
  hoehe: z.string().min(2).max(50),
  kraftstofftyp: z.string().regex(/^[a-zA-Z]+$/),
  karosserieform: z.string().regex(/^[a-zA-Z]+$/),
  leistung_kategorie: z.string().regex(/^[a-zA-Z]+$/),
  getriebe: z.string().regex(/^[a-zA-Z]+$/),
  lackfarbe: z.string().min(2).max(50),
  infotainment: z.string().min(2).max(50),
  komfort: z.string().min(2).max(50),
  sicherheitssystem: z.string().regex(/^(standard|komplett)$/),
  parallelfertigung: z.string().regex(/^(ja|nein)$/),
  programm_nr: z.number().int().min(1).max(10000)
})

export default function FormMain() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fahrzeug_id: "",
      kopiert_von_id: "",
      kategorie: "",
      modell: "",
      karosserietyp: "",
      gewicht: "",
      hoehe: "",
      kraftstofftyp: "",
      karosserieform: "",
      leistung_kategorie: "",
      getriebe: "",
      lackfarbe: "",
      infotainment: "",
      komfort: "",
      sicherheitssystem: "standard",
      parallelfertigung: "nein",
      programm_nr: 1
    }
  })

  const [isSubmitPending, startSubmitTransition] = useTransition()

  function onSubmit(values: z.infer<typeof formSchema>) {
    startSubmitTransition(async () => {
      console.log(values)
      const result = await callingAi(values)

      if (result && "error" in result) {
        toast.error(result.error)
        return
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <FormField
            control={form.control}
            name="fahrzeug_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fahrzeug ID</FormLabel>
                <FormControl>
                  <Input placeholder="Fahrzeug ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kopiert_von_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kopiert von ID</FormLabel>
                <FormControl>
                  <Input placeholder="Kopiert von ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kategorie"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kategorie</FormLabel>
                <FormControl>
                  <Input placeholder="Kategorie" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="modell"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modell</FormLabel>
                <FormControl>
                  <Input placeholder="Modell" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="karosserietyp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Karosserietyp</FormLabel>
                <FormControl>
                  <Input placeholder="Karosserietyp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gewicht"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gewicht</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Gewicht" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hoehe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Höhe</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Höhe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kraftstofftyp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kraftstofftyp</FormLabel>
                <FormControl>
                  <Input placeholder="Kraftstofftyp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="karosserieform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Karosserieform</FormLabel>
                <FormControl>
                  <Input placeholder="Karosserieform" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="leistung_kategorie"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Leistung Kategorie</FormLabel>
                <FormControl>
                  <Input placeholder="Leistung Kategorie" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="getriebe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Getriebe</FormLabel>
                <FormControl>
                  <Input placeholder="Getriebe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lackfarbe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lackfarbe</FormLabel>
                <FormControl>
                  <Input placeholder="Lackfarbe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="infotainment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Infotainment</FormLabel>
                <FormControl>
                  <Input placeholder="Infotainment" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="komfort"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Komfort</FormLabel>
                <FormControl>
                  <Input placeholder="Komfort" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sicherheitssystem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sicherheitssystem</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sicherheitssystem" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="komplett">Komplett</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="parallelfertigung"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parallelfertigung</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Parallelfertigung" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ja">Ja</SelectItem>
                      <SelectItem value="nein">Nein</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="programm_nr"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Programm Nr.</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Programm Nr." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">
          {isSubmitPending ? (
            <>
              <IconSpinner className="mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  )
}
