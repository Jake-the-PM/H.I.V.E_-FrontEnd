import '../styles/globals.css';
import { NavSidebar } from '../components/hive/NavSidebar';
import { Header } from '../components/hive/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <NavSidebar />
      <div className="flex-1 sm:pl-72">
        <Header />
        <main className="container py-6 px-4">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;