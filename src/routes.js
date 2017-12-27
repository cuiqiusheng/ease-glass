import App from 'Containers/App'
import Landing from 'Containers/Landing'
import Login from 'Containers/Login'

export function createRoutes() {
  return [
    {
      path: '/',
      component: Landing,
      exact: true
    },
    {
      path: '/login',
      component: Login,
      exact: true
    },
    {
      path: '/home',
      component: App
      // exact: true
    }
  ]
}
