import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Suspense } from 'react';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Treasure Run'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">
                            <Suspense>
                                {children}
                            </Suspense>
                        </main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}