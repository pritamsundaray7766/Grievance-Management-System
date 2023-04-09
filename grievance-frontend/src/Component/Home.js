import img1 from '../Images/cutm2.jpg';
import Base from './Base';
export default function Home() {
  return (
    
    <Base>
      
       <h2 className='text-lg-center fw-bold font'> WELCOME TO GRIEVANCE MANAGEMENT SYSTEM </h2>
      <img src={img1} className="img-fluid" alt="Can't Load Item"></img>
    
    </Base>
  )
}
