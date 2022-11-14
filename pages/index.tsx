import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../assets/img/logo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Log in</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className="card-body">
            <Image className='mx-auto' src={logo} alt='' />
            <h3 className="font-bold text-center text-stone-400">Dashboard Kit</h3>
            <h2 className="card-title font-bold text-center">Log In to Dashboard Kit</h2>
            <h4 className="text-sm text-center text-stone-400">Enter your email and password below</h4>
            <div className="form-control w-full max-w-xs">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">EMAIL</span>
                </label>
                <input type="email" placeholder="Email address" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">PASSWORD</span>
                  <a className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <input type="password" placeholder="Password" className="input input-bordered" />
              </div>
            </div>
            <div className="form-control mt-6">
              <Link href="/overview">
                <button className="btn btn-wide bg-indigo-600 border-4 border-indigo-500/100">Log In</button>
              </Link>
              <h4 className="font-light">Don't have an account?</h4><h4> Sign up</h4>
            </div>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
