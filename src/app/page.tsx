import { getAllPosts } from "./utils/api";
import PostPreview from "./components/post-preview";

export default function Home() {
  const posts = getAllPosts(["title", "excerpt", "coverImage", "slug", "favorite"]);
  const favorites = posts.filter(post => post.favorite);
  return (
    <div className="container home">
      <main>
        <div className="space-y-4">
          <h1 className="text-center text-5xl">Recipe Collection</h1>
        </div>

        <div className="h-12"></div>

        <div>
          {favorites.map((post) => (
            <div key={post.title}>
              <PostPreview title={post.title} coverImage={post.coverImage} excerpt={post.excerpt} slug={post.slug} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}