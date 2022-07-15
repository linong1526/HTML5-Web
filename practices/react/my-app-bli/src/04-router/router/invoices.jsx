// import { Link,Outlet } from "react-router-dom";
import { NavLink,Outlet } from "react-router-dom";
import { getInvoices } from "../data";
export default function Expenses() {
  let Invoices = getInvoices()
  return (
    <div style={{display:"flex"}}>
      <nav
      style={{
        boderRight:"solid 1px",
        padding:"1rem"
      }}
      >
        {
          Invoices.map((invoices)=>
            // <Link
            // <NavLink
            // normal string<NavLink className="red"
            // function
            <NavLink className={({ isActive }) => isActive ? "red" : "blue"}
            style={{display:"blok",margin:"1rem 0"}}
            to={`/invoices/${invoices.number}`}
            key={invoices.number}
            >
              {invoices.name}
            {/* </Link> */}
            </NavLink>
          )
        }
      </nav>
      <Outlet />
    </div>
  )
}


// useSearchParams 待续....