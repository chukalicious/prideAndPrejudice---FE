const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <button className="btn btn-ghost normal-case text-3xl font-serif font-semibold italic">
          Pride & Prejudice Trivia
        </button>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="user avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="justify-between">Your Games</button>
            </li>
            <li>
              <button>Create Account</button>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
