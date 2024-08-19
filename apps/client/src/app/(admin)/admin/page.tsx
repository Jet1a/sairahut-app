"use client"
import { useAuth } from "@/hooks/useAuth"

const AdminPage = () => {
  useAuth();
  return (
    <div>Admin Page (Login only)</div>
  )
}

export default AdminPage