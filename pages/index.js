import styles from '../styles/Home.module.css'
import client from '../lib/apollo-client'
import { gql } from "@apollo/client";
import Link from 'next/link'


function Home({ events }) {
  return (
    <div >
      <main className={styles.main}>
        <h1>Welcome to No'fuimo</h1>
        <Link href="/events">
          <a>Go to events list</a>
        </Link>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Events {
        events {
          id
          title
        }
      }
    `,
  });

  return {
    props: {
      events: data.events.slice(0, 4),
    },
  };
}

export default Home
