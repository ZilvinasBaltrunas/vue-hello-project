import Home from '@/pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Blog from './pages/blog'
import Contacts from './pages/contacts'
import Gallery from './pages/gallery'
import SingleImage from './pages/gallery/singleimage'
import Page404 from './pages/404Page'

export default [
  {
    name: 'Home',
    path: '/',
    alias: '/home',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Projects',
    path: '/projects',
    component: Projects
  },
  {
    name: 'Blog',
    path: '/blog',
    component: Blog
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: Contacts
  },
  {
    name: 'Gallery',
    path: '/gallery',
    component: Gallery
  },
  {
    name: 'SingleImage',
    path: 'gallery/:id',
    component: SingleImage
  },
  {
    path: '*',
    component: Page404
  }
]
