import { AppProps } from 'next/app';
import { Header } from '../components/Header';


import '../styles/global.scss';
import { AuthProvider } from './web/containers/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
