interface NavbarProps {
    title: string;
}

export function Navbar(props: NavbarProps) {
    return [
        <h1>{props.title}</h1>
    ]
}