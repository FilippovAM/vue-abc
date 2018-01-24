import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ClassRoom from '@/pages/ClassRoom'
import StudProfile from '@/pages/StudProfile'
import StudReports from '@/pages/StudReports'
import StudClasses from '@/pages/StudClasses'
import TeacherClasses from '@/pages/TeacherClasses'
import TeacherHours from '@/pages/TeacherHours'
import TeacherTasks from '@/pages/TeacherTasks'
import TeacherProfile from '@/pages/TeacherProfile'
import TeacherNotifications from '@/pages/TeacherNotifications'
import StudentNotifications from '@/pages/StudentNotifications'
import PostClassReport from '@/components/PostClassReport'
import StudMonthlyReport from '@/pages/StudMonthlyReport'
import StudMonthlyReportNotes from '@/pages/StudMonthlyReportNotes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/class-room',
      name: 'ClassRoom',
      component: ClassRoom
    },
    {
      path: '/student/profile',
      name: 'StudProfile',
      component: StudProfile
    },
    {
      path: '/student/reports',
      name: 'StudReports',
      component: StudReports
    },
    {
      path: '/student/classes',
      name: 'StudClasses',
      component: StudClasses
    },
    {
      path: '/teacher/classes',
      name: 'TeacherClasses',
      component: TeacherClasses
    },
    {
      path: '/teacher/hours',
      name: 'TeacherHours',
      component: TeacherHours
    },
    {
      path: '/teacher/tasks',
      name: 'TeacherTasks',
      component: TeacherTasks
    },
    {
      path: '/teacher/profile',
      name: 'TeacherProfile',
      component: TeacherProfile
    },
    {
      path: '/teacher/notifications',
      name: 'TeacherProfile',
      component: TeacherNotifications
    },
    {
      path: '/student/notifications',
      name: 'StudentNotifications',
      component: StudentNotifications
    },
    {
      path: '/class-room/post-report',
      name: 'PostClassReport',
      component: PostClassReport
    },
    {
      path: '/student/monthly-report/1',
      name: 'StudMonthlyReport',
      component: StudMonthlyReport
    },
    {
      path: '/student/monthly-report/2',
      name: 'StudMonthlyReportNotes',
      component: StudMonthlyReportNotes
    }
  ]
})
