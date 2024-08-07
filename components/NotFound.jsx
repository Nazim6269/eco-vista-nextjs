import Link from 'next/link';
import Card from './Card';

const NotFound = () => {
  return (
    <Card>
      <h6 className="feature-name">Not Found this location ???</h6>
      <div className="feature-main">
        <span className="feature-name">
          <Link href="/">Got to home</Link>
        </span>
      </div>
    </Card>
  );
};

export default NotFound;
