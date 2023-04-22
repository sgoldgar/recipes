import { getPostBySlug } from "../../utils/api";
import markdownToHtml from "../../utils/markdownToHtml";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);
  console.log(post)

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container post">
      <main>
        <div className="w-full h-16  text-white">
          <h1 className="text-2xl">{post.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  );
}