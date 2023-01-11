import Layout from "../components/Layout";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");

  (async () => {
    let res = await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let posts = await res.json();
    setContent(posts)
  })()

  const result = content
  console.log(result)
  return (
    <Layout>
      <div class="grid grid-cols-6 gap-6">
        {
          content?.data?.map(r => {
            return <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="font-bold text-xl mb-2">{r.country}</div>
                <p className="text-gray-700 text-base">{r.ip}</p>
                <p className="text-gray-700 text-base">{r.port}</p>
              </div>
            </div>
          })
        }
      </div>

    </Layout>
  )
}


export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let posts = await res.json();
  return {
    props: { posts },
  };
}