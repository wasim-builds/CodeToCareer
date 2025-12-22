'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useGamification } from '@/contexts/GamificationContext'
import { ActivityCalendar } from '@/components/ActivityCalendar'
import { FiUser, FiMail, FiPhone, FiCalendar, FiAward, FiTrendingUp, FiEdit2, FiSave, FiX, FiLogOut, FiArrowLeft, FiTarget } from 'react-icons/fi'

export default function ProfilePage() {
  const { user, isLoading, updateProfile, logout } = useAuth()
  const { data: gamificationData, achievements } = useGamification()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [saveMessage, setSaveMessage] = useState('')

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
      })
    }
  }, [user, isLoading, router])

  const handleSave = () => {
    updateProfile({
      name: formData.name,
      phone: formData.phone,
    })
    setIsEditing(false)
    setSaveMessage('Profile updated successfully!')
    setTimeout(() => setSaveMessage(''), 3000)
  }

  const handleCancel = () => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
      })
    }
    setIsEditing(false)
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const joinedDate = new Date(user.joinedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {saveMessage && (
          <div className="mb-6 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg">
            {saveMessage}
          </div>
        )}

        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-32"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16">
              <div className="flex items-end gap-4">
                <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="mb-2">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
                  <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 sm:mt-0">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FiEdit2 className="w-4 h-4" />
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleCancel}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FiX className="w-4 h-4" />
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <FiSave className="w-4 h-4" />
                      Save
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Activity Calendar */}
        <ActivityCalendar />
{/* Achievements Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Achievements</h2>
            <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 rounded-lg">
              <FiAward className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                {gamificationData.badges.length} Unlocked
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {achievements.map((achievement) => {
              const isUnlocked = gamificationData.badges.includes(achievement.id);
              const progress = achievement.type === 'quizzes' 
                ? (user?.quizzesTaken || 0) 
                : achievement.type === 'streak'
                ? gamificationData.currentStreak
                : achievement.type === 'score'
                ? (user?.averageScore || 0)
                : 0;
              
              const progressPercent = Math.min((progress / achievement.requirement) * 100, 100);

              return (
                <div
                  key={achievement.id}
                  className={`
                    relative group flex flex-col items-center p-4 rounded-xl border-2 transition-all
                    ${isUnlocked 
                      ? 'bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-yellow-300 dark:border-yellow-700 hover:scale-105' 
                      : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 opacity-60'
                    }
                  `}
                >
                  <div className={`text-4xl mb-2 ${!isUnlocked && 'grayscale opacity-40'}`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-xs font-semibold text-center text-gray-900 dark:text-white mb-1">
                    {achievement.name}
                  </h3>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    {achievement.description}
                  </p>
                  
                  {!isUnlocked && (
                    <div className="mt-2 w-full">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                        <div 
                          className="bg-green-500 h-1.5 rounded-full transition-all"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">
                        {progress}/{achievement.requirement}
                      </p>
                    </div>
                  )}
                  
                  {isUnlocked && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* User Details */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  <FiUser className="w-4 h-4" />
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900 dark:text-white">{user.name}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  <FiMail className="w-4 h-4" />
                  Email Address
                </label>
                <p className="text-lg text-gray-900 dark:text-white">{user.email}</p>
                {isEditing && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Email cannot be changed</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  <FiPhone className="w-4 h-4" />
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900 dark:text-white">
                    {user.phone || <span className="text-gray-400">Not provided</span>}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  <FiCalendar className="w-4 h-4" />
                  Member Since
                </label>
                <p className="text-lg text-gray-900 dark:text-white">{joinedDate}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quiz Statistics</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                    <FiAward className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Quizzes Taken</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.quizzesTaken}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
                    <FiTrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Average Score</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.averageScore}%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
            >
              <FiLogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
