import FormMain from "@/components/template/form-main"

export default function HomePage() {
  return (
    <section className="py-12">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="pb-8">
          <h1 className="font-serif text-2xl font-medium tracking-tighter">
            Vehicle Assembly
          </h1>
        </div>

        <FormMain />
      </div>
    </section>
  )
}
