import Avatar from './avatar'
import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) => {
  console.log(title)
  return (
    <>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="post-link">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </>
  )
}

export default PostPreview
