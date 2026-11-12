import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/admin/AdminNavbar'
import AdminSidebar from '../components/admin/AdminSidebar'

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <AdminSidebar />
      <div className="min-w-0 md:ml-64">
        <AdminNavbar />
        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}