import styles from './App.module.css';
import { AppBar } from '../components/AppBar';
import { Loader } from '../components/UI/Loader/Loader';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const NotFoundPageView = lazy(() =>
  import('../views/NotFoundPageView/NotFoundPageView')
);
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));
const ProjectsView = lazy(() => import('../views/ProjectsView/ProjectsView'));
export const App = () => {
  return (
    <>
      <AppBar />
      {/*<Suspense fallback={<Loader />}>*/}
      <Suspense>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="*" element={<NotFoundPageView />} />
        </Routes>
      </Suspense>
    </>
  );
};
