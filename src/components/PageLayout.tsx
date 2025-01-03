import { FC, ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 container py-4">
        {children}
      </main>
      <footer className="bg-light py-3 text-center mt-auto">
        <p>© 2024 MiAplicación. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PageLayout;
