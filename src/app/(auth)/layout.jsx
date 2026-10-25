import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";

<<<<<<< HEAD


const AuthLayout = ({ children }) => {
  return (


      <div>
        <Navbar />
        {children}
        <Toaster/>
      </div>
   
  );
};

export default AuthLayout;
=======
const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Toaster />
    </div>
  );
};

export default AuthLayout;
>>>>>>> 2ddff8cfda7a60f68748f1ac4d3747340abacc23
