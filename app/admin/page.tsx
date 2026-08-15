'use client'

import { useEffect, useState } from 'react'
import type { Reservation, ContactMessage } from '@/lib/types'
import { BarChart3, CalendarDays, MessageSquare, TrendingUp } from 'lucide-react'

export default function AdminDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [stats, setStats] = useState({
    totalReservations: 0,
    todayReservations: 0,
    pendingReservations: 0,
    totalMessages: 0
  })

  useEffect(() => {
    // Load data from localStorage
    const reservationsData = JSON.parse(localStorage.getItem('reservations') || '[]')
    const messagesData = JSON.parse(localStorage.getItem('contact-messages') || '[]')

    setReservations(reservationsData)
    setMessages(messagesData)

    // Calculate stats
    const today = new Date().toISOString().split('T')[0]
    const todayRes = reservationsData.filter((r: Reservation) => r.date === today)
    const pendingRes = reservationsData.filter((r: Reservation) => r.status === 'pending')

    setStats({
      totalReservations: reservationsData.length,
      todayReservations: todayRes.length,
      pendingReservations: pendingRes.length,
      totalMessages: messagesData.length
    })
  }, [])

  const statCards = [
    {
      label: 'Total Reservations',
      value: stats.totalReservations,
      icon: CalendarDays,
      color: 'text-blue-600'
    },
    {
      label: 'Today\'s Reservations',
      value: stats.todayReservations,
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      label: 'Pending Confirmations',
      value: stats.pendingReservations,
      icon: BarChart3,
      color: 'text-orange-600'
    },
    {
      label: 'Contact Messages',
      value: stats.totalMessages,
      icon: MessageSquare,
      color: 'text-purple-600'
    }
  ]

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-heading font-bold text-foreground">
          Dashboard
        </h1>
        <p className="text-foreground/70">
          Welcome back! Here&apos;s an overview of your business.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-foreground/70 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-foreground mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-secondary`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Reservations */}
      <div className="bg-card rounded-lg border border-border p-6 mb-8">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
          Recent Reservations
        </h2>
        {reservations.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Guest Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Time</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Guests</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {reservations.slice(0, 5).map(reservation => (
                  <tr key={reservation.id} className="border-b border-border hover:bg-secondary/50 transition">
                    <td className="py-3 px-4 text-foreground">{reservation.name}</td>
                    <td className="py-3 px-4 text-foreground/70">{reservation.date}</td>
                    <td className="py-3 px-4 text-foreground/70">{reservation.time}</td>
                    <td className="py-3 px-4 text-foreground/70">{reservation.guests}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        reservation.status === 'confirmed'
                          ? 'bg-green-100 text-green-800'
                          : reservation.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-foreground/70 text-center py-8">No reservations yet</p>
        )}
      </div>

      {/* Recent Messages */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
          Recent Messages
        </h2>
        {messages.length > 0 ? (
          <div className="space-y-4">
            {messages.slice(0, 5).map(message => (
              <div key={message.id} className="p-4 bg-secondary rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-foreground">{message.name}</p>
                    <p className="text-sm text-foreground/70">{message.subject}</p>
                  </div>
                  {message.replied && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      Replied
                    </span>
                  )}
                </div>
                <p className="text-foreground/80 text-sm line-clamp-2">
                  {message.message}
                </p>
                <p className="text-xs text-foreground/50 mt-2">
                  {new Date(message.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-foreground/70 text-center py-8">No messages yet</p>
        )}
      </div>
    </div>
  )
}
