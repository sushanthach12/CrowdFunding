
import Hero from "@/components/Hero";
import Campaign from "@/components/Campaign/Campaign";
import About from "@/components/About";
import Steps from "@/components/Steps";
export default async function Home() {
  return (
    <>
      <main className="mx-4 z-50">

        <Hero />

        <About />

        <Steps />

        <Campaign />
      </main>
    </>
  )
}
