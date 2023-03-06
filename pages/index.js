import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1>Registration</h1>
    <form action = "/api/register" method="post">
    
    <lebel>
    Email
    </lebel>
    <input type = "email" name = "email" placeholder="email"/>

    <lebel>
    password
    </lebel>
    <input type = "password" name = "password"/>

    <lebel>
    importer/exporter
    </lebel>
    <input name = "usertype" placeholder="importer/exporter"/>

    <input type = "submit" value="register"/>
    </form>

    <h1>Login</h1>
      <form action="/api/login" method="post">
        <label>
          EMail Address
        </label>
        <input type='email' name='email' placeholder='Type your email'></input>
        <label>
          Pasword
        </label>
        <input type='password' name='password' placeholder='Type your password'></input>
        <label>
          importer/exporter
        </label>
        <input name = "usertype" placeholder="importer/exporter"/>
        <input type='submit' value='Login'></input>

      </form>
    </>
  )
}
