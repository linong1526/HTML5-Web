// import { Link,Outlet } from "react-router-dom";
import { NavLink,Outlet,useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";
export default function  Invoices() {
  let invoices  = getInvoices()
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{display:"flex"}}>
      <nav
      style={{
        boderRight:"solid 1px",
        padding:"1rem"
      }}
      >
        <input
          value={searchParams.get("filter") ?? ""}
          onChange={(event)=>{
            let filter=event.target.value
            if(filter){
              setSearchParams({filter})
            }else{
              setSearchParams({})
            }
          }}
        />
        {
          invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoices)=>
            // <Link
            // <NavLink
            // normal string<NavLink className="red"
            // function
            <NavLink className={({ isActive }) => isActive ? "red" : "blue"}
            style={{display:"blok",margin:"1rem 0"}}
            to={`/invoices/${invoices.number}`}
            key={invoices.number}
            >
              <br/>{invoices.name}
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