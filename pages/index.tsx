import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>
        Alijah: {count}
      </div>
      <div>

        <button onClick={() => {
          setCount(count + 1)
        }}>
          Add
        </button>

        <button onClick={() => {
          setCount(count - 1)
        }}>
          Minus
        </button>

      </div>
    </div>
  )
}

export default Home
