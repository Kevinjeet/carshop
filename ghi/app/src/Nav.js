import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Cars.</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-itme">
              <NavLink className ="nav-link" to="/technicians">Technicians</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className ="nav-link" to="/technicians/create">Add a Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className ="nav-link" to="/appointments">Service Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className ="nav-link" to="/appointments/create">Create a service appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className ="nav-link" to="/appointments/history">Service History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newmanufacturer">New Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturerlist">List of Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newcarmodel">New Car Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/carmodelslist">List of Car Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newauto">New Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/autolist">List of Autos</NavLink>
            </li>
            <li className="nav-time">
              <NavLink className="nav-link" to="/newsale">New Sale</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salelist">List of Sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newcustomer">New Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customerlist">List of Customer</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" to="/newsalesperson">New Salesperson</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" to="/salespeoplelist">List of Saleperson</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" to="salespersonhistoy">Salesperson History</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
