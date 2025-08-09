import './css/styles.css'
import { useLocation, useNavigate } from 'react-router-dom';
import image1 from './images/lightsaber-collection-T-IN5o3kxyA-unsplash.jpg'


function Course1Page() {
  const location = useLocation();
  const navigate = useNavigate();
  const buttonIdentifier = new URLSearchParams(location.search).get('button');

  const handleGoBack = () => {
      navigate('/');
  };
  
  return (
    <div>
     
        <div >
            <h2 className=' app-header-main-page app-header'>Implementing and Operating Cisco Enterprise Network Core Technologies</h2>
            <img src={image1} className="course-img"/>
        </div>
       
            <button className="btn btn-primary app-button-hover-effect" >
           Enrol
            </button>
  
        <div className='course-container'>
            <p>This training prepares you for the 350-401 ENCOR exam. If passed, you earn the Cisco Certified Specialist – Enterprise Core certification 
                and satisfy the core exam requirements for the Cisco Certified Network Professional (CCNP) Enterprise, 
                Cisco Certified Internetwork Expert (CCIE) Enterprise Infrastructure, and CCIE Enterprise Wireless certifications.</p>
        </div>
            
            
        <div className="course-objectives">
                      
            <ul>                
                <li>Illustrate the hierarchical network design model and architecture using the access, distribution, and core layers</li>
                <li>Compare and contrast the various hardware and software switching mechanisms and operation while defining the Ternary Content Addressable Memory (TCAM) 
                    and Content Addressable Memory (CAM) along with process switching, fast switching, and Cisco Express Forwarding concepts</li>
                <li>Troubleshoot Layer 2 connectivity using virtual local area networks (VLANs) and trunking</li>
                <li>Implement redundant switched networks using Spanning Tree Protocol (STP)</li>
                <li>Troubleshoot link aggregation using EtherChannel</li>
                <li>Describe the features, metrics, and path selection concepts of Enhanced Interior Gateway Routing Protocol (EIGRP)</li>
                <li>Implement and optimize Open Shortest Path First (OSPF)v2 and OSPFv3, including adjacencies, packet types, areas, summarization, and route filtering 
                    for internet protocol (IP)v4 and IPv6</li>
                <li>Implement External Border Gateway Protocol (EBGP) interdomain routing, path selection, and single and dual-homed networking</li>
                <li>Implement network redundancy using protocols including Hot Standby Routing Protocol (HSRP) and Virtual Router Redundancy Protocol (VRRP)</li>
                <li>Implement internet connectivity within enterprise using static and dynamic Network Address Translation (NAT)</li>
                <li>Describe the virtualization technology of servers, switches, and the various network devices and components</li>
                <li>Implement overlay technologies, such as Virtual Routing and Forwarding (VRF), Generic Routing Encapsulation (GRE), virtual private network (VPN), 
                    and Location Identifier Separation Protocol (LISP)</li>
                <li>Describe the components and concepts of wireless networking including radio frequency (RF) and antenna characteristics, and define the specific 
                    wireless standards</li>
                <li>Describe the various wireless deployment models available, including autonomous access point (AP) deployments and cloud-based designs within the 
                    centralized Cisco Wireless LAN Controller (WLC) architecture</li>
                <li>Describe wireless roaming and location services</li>
                <li>Describe how APs communicate with WLCs to obtain software, configurations, and centralized management</li>
                <li>Configure and verify Extensible Authentication Protocol (EAP), WebAuth, and pre-shared key (PSK) wireless client authentication on a WLC</li>
                <li>Troubleshoot wireless client connectivity issues using various available tools</li>
                <li>Troubleshoot enterprise networks using services such as Network Time Protocol (NTP), Simple Network Management Protocol (SNMP), Cisco 
                    Internetwork Operating System (Cisco IOS) IP Service Level Agreements (SLAs), NetFlow, and Cisco IOS Embedded Event Manager</li>
                <li>Explain the use of available network analysis and troubleshooting tools, which include show and debug commands, as well as best practices in 
                    troubleshooting</li>
                <li>Configure secure administrative access for Cisco IOS devices using the command-line interface (CLI) access, Role-Based Access Control (RBAC), 
                    access control list (ACL), and Secure Shell (SSH), and explore device hardening concepts to secure devices from less secure applications, such as 
                    Telnet and HTTP</li>
                <li>Implement scalable administration using authentication, authorization, and accounting (AAA) and the local database, while exploring the features and 
                    benefits</li>
                <li>Describe the enterprise network security architecture, including the purpose and function of VPNs, content security, logging, endpoint security, 
                    personal firewalls, and other security features</li>
                <li>Explain the purpose, function, features, and workflow of Cisco Catalyst Center Assurance for intent-based networking (IBN), network visibility, 
                    proactive monitoring, and application experience</li>
                <li>Describe the components and features of the Cisco SD-Access solution, including the nodes, fabric control plane, and data plane, while illustrating 
                    the purpose and function of the virtual extensible LAN (VXLAN) gateways</li>
                <li>Define the components and features of Cisco SD-WAN solutions, including the orchestration plane, management plane, control plane, and data plane</li>
                <li>Describe the concepts, purpose, and features of multicast protocols, including Internet Group Management Protocol (IGMP) v2/v3, Protocol-Independent
                    Multicast (PIM) dense mode/sparse mode, and rendezvous points</li>
                <li>Describe the concepts and features of Quality of Service (QoS), and describe the need within the enterprise network</li>
                <li>Explain basic Python components and conditionals with script writing and analysis</li>
                <li>Describe network programmability protocols such as Network Configuration Protocol (NETCONF) and Representational State Transfer Configuration 
                    Protocol (RESTCONF)</li>
                <li>Describe application programming interfaces (APIs) in Cisco Catalyst Center and Cisco Catalyst SD-WAN Manager</li>
            </ul>

        </div>

        <div className="app-buttons text-center">
            <button onClick={handleGoBack}>Return to course list</button>
        </div>
    </div>
 
   );
}

export default Course1Page;   