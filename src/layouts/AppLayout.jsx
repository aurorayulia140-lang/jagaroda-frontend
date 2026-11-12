import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import InteractionLayer from '../components/InteractionLayer'

export default function AppLayout() {
  return (
    <>
      <Sidebar />
      <InteractionLayer>
        <main className="min-w-0 w-full lg:ml-[260px] lg:w-[calc(100%-260px)]">
          <Outlet />
        </main>
      </InteractionLayer>
    </>
  )
}

export function NotFoundRedirect() {
  return <Navigate to="/" replace />
}