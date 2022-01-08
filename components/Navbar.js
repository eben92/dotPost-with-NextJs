import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <a className='navbar-brand'>Note App</a>
      </Link>
      <Link href='/create'>
        <a className='create'>Create note</a>
      </Link>
    </nav>
  );
};

export default Navbar;
