import Dashboard from '@/views/dashboard'
import AxiosRequest from '@/views/axios'
import SignIn from '@/views/signin'
import BlogHome from '@/views/blog/BlogHome'
import Article from '@/views/blog/Article'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/axios', name: 'Axios Request', component: AxiosRequest },
  { path: '/signin', name: 'Sign In', component: SignIn },
  { path: '/blog', name: 'Blog', component: BlogHome },
  { path: '/blog/article', name: 'Article', component: Article }
]

export default routes
