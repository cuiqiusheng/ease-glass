import App from 'Containers/App'
import Landing from 'Containers/Landing'
import Login from 'Containers/Login'

export function createRoutes() {
  return [
    {
      path: '/landing',
      component: Landing,
      exact: true
    },
    {
      path: '/login',
      component: Login,
      exact: true
    },
    {
      path: '/',
      component: App
      // exact: true
    }
  ]
}
