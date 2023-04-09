
// import Footer from "../Footer/Footer";
import CustomNavbar from "./CustomNavbar";



const Base =({title = "Welcome to our website", children})=>{
    

    return(
      <>
        <div>
           
               <div className="container-fluid p-0 m-0">
                 <CustomNavbar />
                    {children}
                    {/* <Footer /> */}
                </div>    
           
           

        </div></>
    );

}

export default Base;