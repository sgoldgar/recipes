import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="header">
      <Link href="/" className="hover:underline">
        Home
      </Link>
    </h2>
  )
}

export default Header
