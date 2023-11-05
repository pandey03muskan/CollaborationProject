import './PortalStrength.css'
import backgroundImage from '../Images/HumanResourceStrength.jpeg';
import Staff from '../Images/Staff.jpg';
import student from '../Images/student.png';
import faculty from '../Images/Faculty-Icon.png';
function PortalStrength(){
    return(
        <div className="portalstrengthOuter">
            <div className="student">
                <div><img src={student} height="50px" width="50px"></img><p><b>1600+</b><br></br>Student</p></div>
                <div><img src={Staff} height="50px" width="50px"></img><p><b>1700+</b><br></br>Staff</p></div>
                <div><img src={faculty} height="50px" width="50px"></img><p><b>1000+</b><br></br>Faculty</p></div>
            </div>
        </div>
    );
}
export default PortalStrength;