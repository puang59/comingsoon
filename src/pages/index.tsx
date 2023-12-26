import Head from "next/head";
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>moodlib</title>
        <meta name="description" content="your daily emotion diary" />
        <link rel="icon" href="/faviconMoodlib.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0b0923] to-[#0e1027]">
        <h1 className="bg-gradient-to-br from-[#3a97e8] to-[#7a76f1] bg-clip-text text-8xl font-extrabold text-transparent drop-shadow-2xl">
          moodlib
        </h1>
        <h1 className="mt-4 bg-gradient-to-br from-[#bfe1ff] to-[#9f9cff] bg-clip-text text-xl text-transparent drop-shadow-2xl">
          COMING SOON
        </h1>
      </main>
    </>
  );
}
