import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Projects = lazy(() => import('../pages/Projects'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const Team = lazy(() => import('../pages/Team'));
const Contact = lazy(() => import('../pages/Contact'));
const Testimonials = lazy(() => import('../pages/Testimonials'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogDetail = lazy(() => import('../pages/BlogDetail'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Awards = lazy(() => import('../pages/Awards'));
const Careers = lazy(() => import('../pages/Careers'));
const Industries = lazy(() => import('../pages/Industries'));
const Technology = lazy(() => import('../pages/Technology'));
const News = lazy(() => import('../pages/News'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Legal = lazy(() => import('../pages/Legal'));
const ThankYou = lazy(() => import('../pages/ThankYou'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));

const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)' }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ width: 48, height: 48, border: '4px solid var(--color-border)', borderTopColor: 'var(--color-primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto var(--spacing-lg)' }}></div>
      <p style={{ color: 'var(--color-text-lighter)' }}>Loading...</p>
    </div>
  </div>
);

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/news" element={<News />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy" element={<Legal />} />
      <Route path="/terms" element={<Legal />} />
      <Route path="/cookies" element={<Legal />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
