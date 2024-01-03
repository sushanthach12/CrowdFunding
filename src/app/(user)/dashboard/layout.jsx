import Sidebar from "@/components/Dashboard/Sidebar"

export const metadata = {
  title: 'Crowd Funding',
  description: 'Crowd Funding is platform for your loss funding',
}

export default function DashboardLayout({ children, session }) {
  return (
    <main className='min-h-screen'>
      <section className="mx-auto flex justify-between items-start px-10">
        <div className="w-[30%]">
          <Sidebar session={session}/>
        </div>
        <div className="w-[70%]">

          {children}
        </div>
      </section>
    </main>
  )
}
