import './globals.css'
import { Providers } from '../redux/provider'

export const metadata = {
  title: 'Outdoorsy Rentals',
  description: 'Hot single RVs near you!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}