interface NavbarProps {
  title: string;
}

export function Navbar(props: NavbarProps) {
  return (
    <nav>
      <h1>{props.title}</h1>
    </nav>
  );
}

export default Navbar;
