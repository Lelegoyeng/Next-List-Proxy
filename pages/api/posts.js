import clientPromise from "../../lib/mongodb";

export async function getServerSideProps(context) {
    const client = await clientPromise;
  
    const db = client.db("test");
  
    let users = await db.collection("proxy").find({}).toArray();
    users = JSON.parse(JSON.stringify(users));
  
    return {
      props: { users },
    };
  }

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("test");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("posts").insertOne(bodyObject);
      res.json(newPost.ops[0]);
      break;
    case "GET":
      const posts = await db.collection("proxy").find({}).toArray();
      res.json({ status: 200, data: posts });
      break;
  }
}