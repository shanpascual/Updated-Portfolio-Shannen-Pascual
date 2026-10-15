import { Link } from 'react-router';
import PageHeader from '../components/layout/PageHeader';

export default function NotFound() {
  return (
    <PageHeader
      title="Page"
      accent="Not Found"
      crumb="404"
      intro="The page you're looking for doesn't exist or may have moved."
    >
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
      <Link to="/projects" className="btn btn-ghost-light">
        See Projects
      </Link>
    </PageHeader>
  );
}
