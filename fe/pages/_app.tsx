import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'

import { userService } from "../utils"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState("");

  const authCheck = async (url: string) => {
    const privatePaths = ['/'];
    const path = url.split('?')[0];
    const user_ = await userService.getUser()
    setUser(user_);

    if (privatePaths.includes(path) && user_ == "") {
      router.push('/login');
    } else if (!privatePaths.includes(path) && user_ != "") {
      router.push('/');
    }
  }

  useEffect(() => {
    (() => authCheck(router.asPath))();
    const handleRouteChange = () => setUser("");

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', authCheck);
    }
  }, [])

  return (
    <>
      <Head>
        <title>Todo-App</title>
      </Head>
      <Component {...pageProps} user={user}/>
    </>
  )
}
