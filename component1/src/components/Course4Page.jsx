import './css/styles.css'
import { useLocation, useNavigate } from 'react-router-dom';
import image4 from './images/imgix-klWUhr-wPJ8-unsplash.jpg'

function Course4Page() {
  const location = useLocation();
  const navigate = useNavigate();
  const buttonIdentifier = new URLSearchParams(location.search).get('button');

  const handleGoBack = () => {
      navigate('/');
  };
  
  return (
    <div>
     
        <div >
            <h2 className=' app-header-main-page app-header'>Implementing Cisco SD-WAN Solutions</h2>
            <img src={image4} className="course-img"/>
        </div>
       
            <button className="btn btn-primary app-button-hover-effect" >
           Enrol
            </button>
  
        <div className='course-container'>
            <p>You will learn best practices for configuring routing protocols in the data center and the branch, and how to 
                implement advanced control, data, and application-aware policies. This training also covers Cisco SD-WAN 
                deployment and migration options, placement of controllers, how to deploy WAN Edge devices, multicast and 
                quality of service (QoS), how to configure Direct Internet Access (DIA) breakout, and how to deploy a 
                Multi-Region Cisco SD-WAN fabric. You will also learn about the various Application Quality of Experience 
                (AppQoE) traffic optimization capabilities. Finally, the training looks at the different Cisco SD-WAN security
                 options available.</p>
        </div>
            
            
        <div className="course-objectives">
                      
            <ul>                
                <li>Describe the Cisco SD-WAN solution and how modes of operation differ in traditional WAN versus Cisco SD-WAN</li>
                <li>Describe options for Cisco SD-WAN cloud and on-premises deployment</li>
                <li>Explain how to deploy WAN Edge devices</li>
                <li>Compare the Zero-Touch Provisioning (ZTP) and traditional Plug-n-Play (PnP) processes and examine technical 
                    specifics for on-premises deployment</li>
                <li>Describe configuration groups and feature profiles for configuration management</li>
                <li>Describe device and feature configuration templates</li>
                <li>Describe options for providing scalability, high availability, and redundancy</li>
                <li>Explain how dynamic routing protocols are deployed in Cisco SD-WAN environment, on the service side and 
                    transport side</li>
                <li>Describe Cisco SD-WAN policy concepts, which includes how policies are defined, attached, distributed, and
                     applied</li>
                <li>Define and implement advanced control policies, such as policies for custom topologies and service insertion</li>
                <li>Describe the Multi-Region Cisco SD-WAN fabric feature</li>
                <li>Define and implement advanced data policies, such as policies for traffic engineering and QoS</li>
                <li>Describe the Application Quality of Experience (AppQoE) capabilities available in Cisco SD-WAN</li>
                <li>Define and implement an application-aware routing (AAR) policy</li>
                <li>Implement Direct Internet Access (DIA) and Cisco SD-WAN Cloud OnRamp options</li>
                <li>Describe Cisco SD-WAN security components and integration</li>
                <li>Describe how to design pure and hybrid Cisco SD-WAN solutions, as well as how to perform a migration to 
                    Cisco SD-WAN</li>
                <li>Describe the different tools and options available for managing a Cisco SD-WAN fabric</li>
                <li>Describe the different options available for monitoring the Cisco SD-WAN fabric</li>
                <li>Describe Cisco SD-WAN support for multicast</li>
            </ul>

        </div>

        <div className="app-buttons text-center">
            <button onClick={handleGoBack}>Return to course list</button>
        </div>
    </div>
 
   );
}

export default Course4Page;   
