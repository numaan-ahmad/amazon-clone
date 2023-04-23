import React from "react";
import Head from "next/head";
import { getSession, useSession } from "next-auth/client";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

const Home = ({ products }) => {
  const [session, loading] = useSession();

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      session,
      products,
    },
  };
};
