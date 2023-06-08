import { Metadata } from 'next';
import Home, { title } from './Home';

export const metadata: Metadata = {title};

export default function HomePage() {
  return <Home/>;
}
