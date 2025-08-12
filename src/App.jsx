import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Route transition component
const PageTransition = ({ children }) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      transition={{ 
        type: "tween",
        duration: 0.4,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Main App component with routing
function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'var(--toast-bg)',
            color: 'var(--toast-text)',
            border: '1px solid var(--toast-border)',
          },
          success: {
            style: {
              background: 'var(--toast-success-bg)',
              color: 'var(--toast-success-text)',
              border: '1px solid var(--toast-success-border)',
            },
          },
          error: {
            style: {
              background: 'var(--toast-error-bg)',
              color: 'var(--toast-error-text)',
              border: '1px solid var(--toast-error-border)',
            },
          },
        }}
      />
      
      <AnimatePresence mode="popLayout">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            } 
          />
          <Route 
            path="/home" 
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            } 
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
