export default function Welcome({ message = "World" }) {
  const myh1Style = { color: "red", fontSize: "900", backgroundColor: "black" };
  return <h1 style={myh1Style}>Hello, {message}!</h1>;
}
