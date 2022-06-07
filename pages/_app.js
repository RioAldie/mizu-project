import '../styles/globals.css';
import AuthContextProvider from './context/AuthContex';
import App from 'next/app'

class MyApp extends App {
  render () {
  const { Component, pageProps } = this.props
    return <AuthContextProvider><Component {...pageProps} /></AuthContextProvider>
}
}
export default MyApp;
