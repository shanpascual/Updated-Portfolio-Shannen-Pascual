import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import BlurText from '../reactbits/BlurText';
import './page-header.css';

/**
 * Dark rounded banner shared by every inner page, echoing the home page's dark panels.
 * @param {{ title: string, accent: string, crumb: string, intro: string, children?: import('react').ReactNode }} props
 */
export default function PageHeader({ title, accent, crumb, intro, children }) {
  return (
    <header className="page-header">
      <div className="page-header-panel">
        <div className="page-header-glow" aria-hidden="true" />
        <div className="container page-header-inner">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-current="page">
                <ChevronRight size={16} aria-hidden="true" />
                {crumb}
              </li>
            </ol>
          </nav>

          <h1 className="page-title">
            <span className="sr-only">
              {title} {accent}
            </span>
            <span aria-hidden="true" className="page-title-line">
              {title && <BlurText text={title} delay={70} trigger="load" className="page-title-blur" />}
              <BlurText text={accent} delay={70} trigger="load" className="page-title-blur accent" />
            </span>
          </h1>

          <p className="page-intro">{intro}</p>
          {children && <div className="page-header-actions">{children}</div>}
        </div>
      </div>
    </header>
  );
}
