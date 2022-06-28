import type { NextPage } from "next";
import { ReactEventHandler, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_USER_SEARCH } from "../apollo/queries/search";
import { InView } from "react-intersection-observer";

const PAGE_SIZE = 5;

const Home: NextPage = () => {
  const [query, setQuery] = useState<string>("");
  const [pageInfo, setPageInfo] = useState<any>("");
  const [runSearchQuery, { called, loading, data, fetchMore }] = useLazyQuery(
    GET_USER_SEARCH,
    {
      variables: {
        first: PAGE_SIZE,
        query: query,
      },
    }
  );

  useEffect(() => {
    if (data && data.search && data.search.pageInfo)
      setPageInfo(data.search.pageInfo);
  }, [query, data]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    runSearchQuery({
      variables: {
        first: PAGE_SIZE,
        query,
      },
    });
  };
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>A nextjs app for github user search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <form className="m-4 flex" onSubmit={handleSubmit}>
          <input
            className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            placeholder="type a user name"
            value={query}
            onChange={handleSearch}
          />
          <button
            type="submit"
            className="px-8 rounded-r-lg bg-blue-400  text-gray-300 font-bold p-4 uppercase border-blue-300 border-t border-b border-r"
          >
            Search
          </button>
        </form>
        {/* <div
          key={item.node.id}
          className=" w-1/3 relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded-xl mt-16"
        >
          <div className="flex flex-col flex-wrap justify-center">
            <div className=" flex justify-center">
              <div className="relative">
                <Image
                  src={item.node.avatarUrl}
                  width={150}
                  height={150}
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    3,360
                  </span>
                  <span className="text-sm text-slate-400">Photos</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    2,454
                  </span>
                  <span className="text-sm text-slate-400">Followers</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    564
                  </span>
                  <span className="text-sm text-slate-400">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {item.node.name}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
              {item.node.location}
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  {item.node.bio}
                </p>
                <a
                  href="javascript:;"
                  className="font-normal text-slate-700 hover:text-slate-400"
                >
                  Follow Account
                </a>
              </div>
            </div>
          </div>

          <a
            href={`https://github.com/${item.node.login}`}
            className={styles.card}
          >
            <h2>{item.node.name} </h2>
            <p>{item.node.bio}</p>
          </a>
        </div> */}

        <section className="flex gap-1 items-center justify-center flex-wrap">
          {data &&
            data.search.edges.map((item) => (
              <div
                key={item.node.id}
                className="w-1/4 flex flex-col justify-center rounded-md shadow-lg bg-slate-50"
              >
                <div className="my-2 rounded-full">
                  <Image
                    src={item.node.avatarUrl}
                    width={100}
                    height={100}
                    className="my-2 rounded-full"
                  />
                </div>
                <h2 className="text-center text-2xl font-medium my-3">
                  {item.node.name}
                </h2>
              </div>
            ))}
          {data && (
            <InView
              onChange={async (inView) => {
                // if (inView) {
                const { endCursor } = data.search.pageInfo;

                fetchMore({
                  variables: { after: endCursor },
                  updateQuery: (prevResult, { fetchMoreResult }) => {
                    console.log(
                      prevResult.search.edges.length,
                      fetchMoreResult.search.edges.length
                    );
                    fetchMoreResult.search.edges = [
                      ...prevResult.search.edges,
                      ...fetchMoreResult.search.edges,
                    ];
                    fetchMoreResult.search.pageInfo =
                      fetchMoreResult.search.pageInfo;
                    return fetchMoreResult;
                  },
                });
                //  }
              }}
            />
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
