import { NavLink, Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
      <div className="container-fluid bg-white">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-1536x236.png" alt="guvi.in" style={{ height: "150px", width:"90%", marginLeft:"auto", marginRight:"auto", display:"block"  }}/>
      </div>
      <ul className="nav">
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="fullstackdevelopment">fullstackdevelopment</NavLink>
        </li>
        <li>
          <NavLink to="datascience">datascience</NavLink>
        </li>
        <li>
          <NavLink to="cypersecurity">cypersecurity</NavLink>
        </li>
        <li>
          <NavLink to="career">career</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
