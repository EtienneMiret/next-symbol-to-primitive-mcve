import { Metadata } from 'next';
import Home, { title } from './Home';
import { fullTitle } from '../utils';

export const metadata: Metadata = {
  title: fullTitle(title),
};

export default function HomePage() {
  return <Home/>;
}
