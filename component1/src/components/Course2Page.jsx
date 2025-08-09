import './css/styles.css'
import { useLocation, useNavigate } from 'react-router-dom';
import image2 from './images/nasa-Q1p7bh3SHj8-unsplash.jpg'

function Course2Page() {
  const location = useLocation();
  const navigate = useNavigate();
  const buttonIdentifier = new URLSearchParams(location.search).get('button');

  const handleGoBack = () => {
      navigate('/');
  };
  
  return (
    <div>
     
        <div >
            <h2 className=' app-header-main-page app-header'>Implementing Cisco Enterprise Advanced Routing and Services</h2>
            <img src={image2} className="course-img"/>
        </div>
       
            <button className="btn btn-primary app-button-hover-effect" >
           Enrol
            </button>
  
        <div className='course-container'>
            <p>This training covers advanced routing and infrastructure technologies, expanding on the topics covered in the 
                Implementing and Operating Cisco Enterprise Network Core Technologies (ENCOR) training.</p>
        </div>
        <div className='course-container'>
            <p>This training prepares you for the 300-410 ENARSI exam.</p>
        </div>
            
        <div className="course-objectives">
                      
            <ul>                
                <li>Configure, optimize, and troubleshoot enhanced interior gateway routing protocol (EIGRP)</li>
                <li>Configure, optimize, and troubleshoot open shortest path first (OSPF)v2 and OSPFv3</li>
                <li>Implement and troubleshoot route redistribution using filtering mechanisms</li>
                <li>Implement and troubleshoot path control using policy-based routing (PBR) and IP service level agreement (SLA)</li>
                <li>Configure, optimize, and troubleshoot border gateway protocol (BGP)</li>
                <li>Implement multiprotocol BGP (MP-BGP)</li>
                <li>Describe the features of multiprotocol label switching (MPLS)</li>
                <li>Describe the major architectural components of an MPLS virtual private network (VPN)</li>
                <li>Identify the routing and packet forwarding functionalities for MPLS VPNs</li>
                <li>Explain how packets are forwarded in an MPLS VPN environment</li>
                <li>Implement Cisco internetwork operating system (IOS) dynamic multipoint VPNs (DMVPNs)</li>
                <li>Implement and troubleshoot dynamic host configuration protocol (DHCP)</li>
                <li>Describe the tools available to secure the IPV6 first hop</li>
                <li>Troubleshoot Cisco router security features</li>
                <li>Troubleshoot infrastructure security and services</li>
                <li>Troubleshoot network issues with Cisco DNA Center Assurance</li>
            </ul>

        </div>

        <div className="app-buttons text-center">
            <button onClick={handleGoBack}>Return to course list</button>
        </div>
    </div>
 
   );
}

export default Course2Page;   
