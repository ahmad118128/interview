import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import {
  ThemeProvider as MuiThemeProvider,
  styled,
  ThemeProvider,
} from '@mui/material/styles';
import theme from '@/theme';
import SideMenu from '@/components/SideMenu';
import { Grid } from '@mui/material';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <MuiThemeProvider theme={theme}>
            <main className="container">
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <SideMenu />
                </Grid>
                <Grid item xs>
                  <div className="gridContainer">{children}</div>
                </Grid>
                <Grid item xs={12}>
                  <Footer />
                </Grid>
              </Grid>
            </main>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
