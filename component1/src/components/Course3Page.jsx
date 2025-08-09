import './css/styles.css'
import { useLocation, useNavigate } from 'react-router-dom';
import image3 from './images/kirill-sh-ohBcGYJ8brQ-unsplash.jpg'

function Course3Page() {
  const location = useLocation();
  const navigate = useNavigate();
  const buttonIdentifier = new URLSearchParams(location.search).get('button');

  const handleGoBack = () => {
      navigate('/');
  };
  
  return (
    <div>
     
        <div >
            <h2 className=' app-header-main-page app-header'>Implementing Automation for Cisco Enterprise Solutions</h2>
            <img src={image3} className="course-img"/>
        </div>
       
            <button className="btn btn-primary app-button-hover-effect" >
           Enrol
            </button>
  
        <div className='course-container'>
            <p>This course highlights the tools and the benefits of leveraging programmability and automation in the 
                Cisco-powered Enterprise Campus and WAN. You will also examine platforms including IOS XE software for 
                device-centric automation, Cisco DNA Center for the intent-based enterprise network, Cisco Software-Defined WAN, 
                and Cisco Meraki. Their current ecosystem of APIs, software development toolkits, and relevant workflows are 
                studied in detail together with open industry standards, tools, and APIs, such as Python, Ansible, Git, 
                JSON/YAML, NETCONF/RESTCONF, and YANG.</p>
        </div>
            
            
        <div className="course-objectives">
                      
            <ul>                
                <li>Get familiar with different API styles (REST, RPC) and synchronous and asynchronous API requests</li>
                <li>Learn how to use Postman software development tool in order to test the API calls</li>
                <li>Learn how to automate repetitive tasks using Ansible automation engine</li>
                <li>Explore a Python programming language, Python libraries and Python virtual environments and learn how can they 
                    be used for automation of network configuration tasks</li>
                <li>Get introduced to GIT version control system and its common operations</li>
                <li>Learn how to leverage the various models and APIs of the Cisco IOS XE platform to perform day-zero operations, 
                    improve troubleshooting methodologies with custom tools, augment the CLI using scripts, and integrate various 
                    workflows using Ansible and Python</li>
                <li>Learn about the paradigm shift of model-driven telemetry and the building blocks of a working solution</li>
                <li>Learn how to leverage the tools and APIs to automate Cisco DNA infrastructure managed by Cisco DNA Center</li>
                <li>Demonstrate workflows (configuration, verification, health checking, and monitoring) using Python, Ansible, 
                    and Postman</li>
                <li>Understand Cisco SD-WAN solution components, implement a Python library that works with the Cisco SD-WAN APIs 
                    to perform configuration, inventory management, and monitoring tasks, and implement reusable Ansible roles to
                     automate provisioning new branch sites on an existing Cisco SD-WAN infrastructure</li>
                <li>Learn how to leverage the tools and APIs to automate Cisco Meraki managed infrastructure and demonstrate 
                    workflows (configuration, verification, health checking, monitoring) using Python, Ansible, and Postman</li>
            </ul>

        </div>

        <div className="app-buttons text-center">
            <button onClick={handleGoBack}>Return to course list</button>
        </div>
    </div>
 
   );
}

export default Course3Page;   
