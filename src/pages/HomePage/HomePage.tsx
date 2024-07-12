import { IPost } from "../../interfaces";
import PostCard from "../../components/PostCard/PostCard";
import { NavBar } from "../../components/NavBar/NavBar";
import './_HomePage.scss'

export default function HomePage() {
  const posts = [
    {
      _id: "12345",
      user_id: "01",
      title: "Title",
      description: "string",
      photos_url: ["https://media.istockphoto.com/id/523382423/es/foto/problemas-medioambientales.jpg?s=612x612&w=0&k=20&c=1ic-c9OMY_f3QT4toSbziwqrfEu8zU-ICRF8Xiev02g="],
      labels: ["cat1", "cat2"],
      district: "string",
      likes: 10,
      createdAt: "string",
      updatedAt: "string",
    },
    {
      _id: "12345",
      user_id: "02",
      title: "Title2",
      description: "string",
      photos_url: ["https://img.freepik.com/vector-gratis/ilustracion-contaminaciones-tierra_1308-39766.jpg"],
      labels: ["cat1", "cat2"],
      district: "string",
      likes: 20,
      createdAt: "string",
      updatedAt: "string",
    },
    {
      _id: "12345",
      user_id: "02",
      title: "Title2",
      description: "string",
      photos_url: ["https://concepto.de/wp-content/uploads/2021/04/contaminacion-ambiental-e1618532000745.jpg", "456"],
      labels: ["cat1", "cat2"],
      district: "string",
      likes: 20,
      createdAt: "string",
      updatedAt: "string",
    },
    {
      _id: "12345",
      user_id: "02",
      title: "Title2",
      description: "string",
      photos_url: ["123", "456"],
      labels: ["cat1", "cat2"],
      district: "string",
      likes: 20,
      createdAt: "string",
      updatedAt: "string",
    },
  ];

  return (
    <>
      < NavBar />
      <div className="homePage">
        <div className="homePage__categories">
          {/* categorias a mostrar*/}
        </div>
        <div className="homePage__cards">
          {posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      </div>
    </>
  );
}
