import React from 'react';
import { BookOpen, Calendar, Trophy, Clock, TrendingUp, TrendingDown, MoreVertical, ArrowUpRight, AlertCircle, CheckCircle } from 'lucide-react';
import PageLayout from '../components/PageLayout';

function StudentDashboard() {
  const stats = [
    { 
      label: 'Overall GPA', 
      value: '3.8', 
      change: '+0.2', 
      trend: 'up',
      icon: Trophy, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    { 
      label: 'Courses Enrolled', 
      value: '6', 
      change: '+1', 
      trend: 'up',
      icon: BookOpen, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    { 
      label: 'Attendance Rate', 
      value: '94%', 
      change: '-2%', 
      trend: 'down',
      icon: CheckCircle, 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    { 
      label: 'Pending Tasks', 
      value: '12', 
      change: '-3', 
      trend: 'down',
      icon: Clock, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
  ];

  const recentGrades = [
    { subject: 'Mathematics', assignment: 'Calculus Test', grade: 'A', score: 92, date: 'Feb 15, 2026', color: 'bg-green-500' },
    { subject: 'Physics', assignment: 'Lab Report #3', grade: 'B+', score: 87, date: 'Feb 14, 2026', color: 'bg-blue-500' },
    { subject: 'English', assignment: 'Essay - Modern Literature', grade: 'A-', score: 90, date: 'Feb 12, 2026', color: 'bg-purple-500' },
    { subject: 'Chemistry', assignment: 'Mid-term Exam', grade: 'B', score: 83, date: 'Feb 10, 2026', color: 'bg-orange-500' },
    { subject: 'History', assignment: 'Research Paper', grade: 'A', score: 95, date: 'Feb 8, 2026', color: 'bg-indigo-500' },
  ];

  const upcomingAssignments = [
    { title: 'Physics Assignment - Newton\'s Laws', dueDate: 'Feb 19, 2026', time: '11:59 PM', priority: 'high', color: 'bg-red-500' },
    { title: 'Math Homework - Chapter 7', dueDate: 'Feb 21, 2026', time: '11:59 PM', priority: 'medium', color: 'bg-yellow-500' },
    { title: 'English Essay - Poetry Analysis', dueDate: 'Feb 23, 2026', time: '11:59 PM', priority: 'medium', color: 'bg-blue-500' },
    { title: 'Chemistry Lab Report', dueDate: 'Feb 25, 2026', time: '11:59 PM', priority: 'low', color: 'bg-green-500' },
  ];

  const todaySchedule = [
    { subject: 'Mathematics', time: '8:00 AM - 9:30 AM', teacher: 'Mr. Anderson', room: 'Room 204', status: 'completed' },
    { subject: 'Physics', time: '9:45 AM - 11:15 AM', teacher: 'Dr. Wilson', room: 'Lab 3', status: 'completed' },
    { subject: 'English', time: '11:30 AM - 1:00 PM', teacher: 'Ms. Davis', room: 'Room 312', status: 'current' },
    { subject: 'Chemistry', time: '2:00 PM - 3:30 PM', teacher: 'Prof. Brown', room: 'Lab 1', status: 'upcoming' },
  ];

  return (
    <PageLayout>
      <div className="p-4 md:p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Student Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back, Emma! Here's your academic overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.bgColor} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
                <span className={`flex items-center gap-1 text-sm font-semibold ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
              <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Recent Grades */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-lg font-bold text-gray-800">Recent Grades</h3>
              <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentGrades.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition group">
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-11 h-11 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                        {item.grade}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{item.subject}</p>
                        <p className="text-sm text-gray-500">{item.assignment}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="font-bold text-gray-800">{item.score}%</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 transition">
                        <MoreVertical className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Assignments */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-lg font-bold text-gray-800">Upcoming Assignments</h3>
              <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingAssignments.map((assignment, idx) => (
                  <div key={idx} className="flex gap-3 group cursor-pointer">
                    <div className={`w-1 ${assignment.color} rounded-full`}></div>
                    <div className="flex-1 pb-4 border-b last:border-0 group-hover:bg-gray-50 -m-2 p-2 rounded transition">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-sm text-gray-800 flex-1">{assignment.title}</h4>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          assignment.priority === 'high' ? 'bg-red-100 text-red-700' : 
                          assignment.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-green-100 text-green-700'
                        }`}>
                          {assignment.priority}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{assignment.dueDate}</p>
                      <p className="text-xs text-gray-400">{assignment.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-lg font-bold text-gray-800">Today's Schedule</h3>
            <button className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
              Full Schedule <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Teacher</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {todaySchedule.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.subject}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.teacher}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.room}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'completed' ? 'bg-gray-100 text-gray-700' : 
                        item.status === 'current' ? 'bg-blue-100 text-blue-700' : 
                        'bg-green-100 text-green-700'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default StudentDashboard;