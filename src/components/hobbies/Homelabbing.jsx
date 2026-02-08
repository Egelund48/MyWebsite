import Navbar from '../Navbar.jsx'
import MyServerImage from '../../assets/images/HomelabbingImages/MyServer.jpg'
import '../../style/hobbies/Homelabbing.css'

function Homelabbing() {
  return (
    <>
      <Navbar />
      
      <div className="Homelabbing">
        <div className="content">
          <h1>Homelabbing</h1>
          <h2>
            My interest for homelabbing started in october 2025, when i got a <strong>Synology DS124 - NAS Server.</strong> 
            <div className="my-server">
                <img src={MyServerImage} alt="My current NAS"/>
                <p className="caption">My current Synology DS124 NAS</p>
            </div>
                It has the following specs: 
                <ul className="spec-list">
                    <li>1 GB DDR4 RAM and a quad-core 1.7 GHz processor</li>
                    <li>Networking: 1 × RJ-45 1GbE with broad protocol support (SMB, NFS, FTP, iSCSI, WebDAV)</li>
                    <li>2 × USB 3.2 Gen 1 Type-A ports for external storage and expansion</li>
                    <li>Low powerusage and a 60mm fan, which is effective and (mostly) silent</li>
                </ul>

                The main reason i got the DS124 was the low price and the beginner friendly interface. 
                It has an amazing GUI, which makes everything 10x easier for beginners, but still allows users to access it via SSH. 
                There is however a major drawback, since it only has room for one 3.5 HHD/2.5 SSD. This means i only got 4tb or storage (and no room for a failed harddrive). 
          </h2>
        </div>
      </div>
    </>
  )
}

export default Homelabbing