import Link from "next/link"

const Layout = ({ children }) => {
    return (
      <div>
        <Link href="/users" >
            <div className="mx-5 p-5">
                ←
            </div>
        </Link>
        
        <main>{children}</main>
        {/* Add your footer component or code here */}
      </div>
    );
  };
   
  export default Layout;