import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="bg-purple-100 p-3 shadow-gray-300 shadow-sm">
      <Container>
        <div className="flex justify-between items-center container mx-auto ">
          <h1 className="text-3xl font-bold">PH University</h1>
          <div className="item-center">
            <ul className="item-center">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Faculty</a>
              </li>
              <li>
                <a href="#">Student</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <button className="bg-purple-400 text-white rounded-lg p-3">
              New Assignment
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
