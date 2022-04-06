import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ViewEpisodes from '../components/ViewEpisodes';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ViewEpisodes />
    </Layout>
  );
}
