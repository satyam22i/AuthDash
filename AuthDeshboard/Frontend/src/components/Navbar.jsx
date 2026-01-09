export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <span>Dashboard</span>
      <button onClick={() => {
        localStorage.removeItem("token");
        window.location = "/login";
      }}>
        Logout
      </button>
    </div>
  );
}
