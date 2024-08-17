import '@/app/_styles/globals.css';
import Navigation from './_component/Navigation';

export const metadata = {
  title: {
    template: '%s / base Next',
    default: 'Welcome / base Next',
  },
  description: 'This is base Next',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <header>
        <Navigation />
      </header>
    </html>
  );
}
