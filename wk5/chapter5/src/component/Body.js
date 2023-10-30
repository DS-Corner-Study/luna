import "./Body.css";

function Body({ children }) {
  console.log(children);
  return (
    <div className="body">
      <h1>body</h1>
      <div className="body">{children}</div>
    </div>
  );
}

export default Body;