import { useEffect } from 'react'
import Navbar from '../Navbar.jsx'
import MyServerImage from '../../assets/images/HomelabbingImages/MyServer.jpg'
import jellyfinImage from '../../assets/images/HomelabbingImages/Jellyfin.png'
import jellyfinLogo from '../../assets/images/HomelabbingImages/jellyfin_logo.png'
import piholeLogo from '../../assets/images/HomelabbingImages/pihole_logo.png'
import dockerLogo from '../../assets/images/HomelabbingImages/docker_logo.png'
import cloudflareLogo from '../../assets/images/HomelabbingImages/cloudflare2.png'
import serverrackLogo from '../../assets/images/HomelabbingImages/server-rack.png'
import homeserverImage from '../../assets/images/HomelabbingImages/homeserver.png'
import radarrLogo from '../../assets/images/HomelabbingImages/radarr.png'
import sonarrLogo from '../../assets/images/HomelabbingImages/sonarr.png'
import jellyseerrLogo from '../../assets/images/HomelabbingImages/jellyseerr.webp'
import prowlarrLogo from '../../assets/images/HomelabbingImages/prowlarr.png'
import mullvadLogo from '../../assets/images/HomelabbingImages/mullvad.png'
import '../../style/hobbies/Homelabbing.css'

function Homelabbing() {

  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <div className="Homelabbing">

        {/* INTRO */}
        <section className="section intro">
          <div className="content">
            <h1>My Homelab</h1>
            <p>
              My interest for homelabbing started in October 2025, when I got my
              first NAS — a <strong>Synology DS124</strong>.  
              It quickly turned into a playground for self-hosting, media,
              and learning how servers actually work.
            </p>
          </div>
        </section>

        {/* DS124 */}
        <section className="section ds124">
          <div className="content split">
            <div className="text">
              <h2>My Synology DS124</h2>

              <ul className="pill-list">
                <li>1 GB DDR4 RAM</li>
                <li>Quad-core 1.7 GHz</li>
                <li>1 × 1GbE</li>
                <li>2 × USB 3.2</li>
                <li>Low power usage</li>
                <li>Beginner-friendly GUI</li>
              </ul>

              <p>
                The main reason i got the DS124 was the low price and the beginner friendly interface. 
                It has an nice GUI, which makes everything 10x easier for beginners, but still allows users to access it via SSH. 
                There is however a major drawback, since it only has room for one 3.5 HHD/2.5 SSD. This means i only got 4tb or storage (and no room for a failed harddrive) and 1gb DDR4 ram. 
              </p>
            </div>

            <div className="image">
              <img src={MyServerImage} alt="My Synology DS124 NAS" />
              <p className="caption">My old Synology DS124 NAS</p>
            </div>
          </div>
        </section>

        <section className="section new-server">
          <div className="content split">
            <div className="text">
              <h2>My Home Server</h2>

              <ul className="pill-list">
                  <li>AMD Ryzen 7 3700X (16 threads)</li>
                  <li>16 GB RAM</li>
                  <li>NVIDIA GTX 960</li>
                  <li>~4 TB storage pool</li>
                  <li>Ubuntu Server 26.04</li>
                  <li>Runs 24/7</li>
                </ul>

                <p>
                  After outgrowing the DS124, I moved everything over to a proper
                  home server built around a Ryzen 7 3700X. With 16GB of RAM and a
                  real CPU behind it, I can finally run multiple services and
                  containers at once instead of being limited to one app at a time.
                  The GTX 960 handles hardware transcoding, and storage is split
                  across a dedicated pool for appdata and media, giving me much more
                  headroom than the single-bay DS124 ever could.
                  <br> 
                  </br>
                  My Future plans for the server is switching the ugly cabbinet, changing the CPU cooler, such that is looks
                  more asthetic and doens't make any sound. 
                </p>
            </div>
            <div className="image new-server-image">
              <img src={homeserverImage} alt="My home server running Ubuntu 26.04" />
              <p className="caption">My current home server</p>
            </div>
          </div>
        </section>

        {/* JELLYFIN */}
        <section className="section jellyfin">
          <div className="content">
            <div className="title-with-logo">
              <h2>My Media Server</h2>
              <img src={jellyfinLogo} alt="Jellyfin Logo" className="title-logo" />
            </div>
            <p>
              I was quite tired on relying on Netflix, Viaplay etc. to have the shows that i liked. One of the first things i therefore
              chose to have on my server was Jellyfin. 
            </p>
            <div className="jellyfin-image">
              <img src={jellyfinImage} alt="Jellyfin"/>
            </div>
            <p>
              Jellyfin enables you to collect, manage, and stream your media. Run the Jellyfin server on your system and gain access to the leading free-software entertainment system, bells and whistles included.
            </p>
            <p>
              Since Jellyfin build for Movies, Shows, Music, Live TV & DVR, Books, Photos and Syncplay, my main goal is to have both Movies, TV-Shows but also Family Photos/Films. Due to my server only having one HDD, 
              I won't put files on the server, that i cant afford to lose.
            </p>
            <p>
              I set up Prowlarr, Sonarr, and Radarr to make finding "Linux ISOs" a lot easier. 
              I also added Jellyseerr on top, so picking and requesting new content is as simple 
              as a couple of clicks. This means my family and I can find what we want and have 
              it ready to watch in no time.
            </p>
            <div className="logo-strip">
            <div className="logo-item">
              <img src={prowlarrLogo} alt="Prowlarr" />
              <span>Prowlarr</span>
            </div>
            <div className="logo-item">
              <img src={sonarrLogo} alt="Sonarr" />
              <span>Sonarr</span>
            </div>
            <div className="logo-item">
              <img src={radarrLogo} alt="Radarr" />
              <span>Radarr</span>
            </div>
            <div className="logo-item">
              <img src={jellyseerrLogo} alt="Jellyseerr" />
              <span>Jellyseerr</span>
            </div>
            <div className="logo-item">
              <img src={mullvadLogo} alt="Mullvad VPN" />
              <span>Mullvad</span>
            </div>
          </div>
          </div>
        </section>

        <section className="section other-things">
          <div className="content">
            <div className="other-things-title">
              <h2>Other Services Running on My Server</h2>
            </div>
            
            <div className="projects-grid">
              {/* Pi-hole Card */}
              <div className="project-card">
                <div className="project-icon">
                  <img src={piholeLogo} alt="pihole logo"/>
                </div>
                <h3>Pi-hole</h3>
                <p>
                  I use Pi-hole for Network-wide ad blocking which is running in Docker. It's satisfying watching it 
                  filter out thousands of ad requests daily without needing browser extensions 
                  on every device.
                </p>
              </div>

              {/* File Server & Docker Card */}
              <div className="project-card">
                <div className="project-icon">
                  <img src={dockerLogo} alt="docker logo"/>
                </div>
                <h3>File Server & Containers</h3>
                <p>
                  My NAS serves as a central file server for backups and sharing between devices. 
                  Everything runs in Docker containers, making it easy to experiment without 
                  breaking my system.
                </p>
              </div>
              <div className="project-card">
                  <div className="project-icon">
                     <img src={cloudflareLogo} alt="cloudflare log"/>
                  </div>
                  <h3>Self hosting on Cloud flare</h3>
                    <p>
                    I host this website on my own server, which gives me full control over how everything runs.
                     I use Cloudflare to handle traffic, improve performance, and add an extra layer of security.
                  </p>
              </div>
              <div className="project-card">
                  <div className="project-icon">
                     <img src={serverrackLogo} alt="Serverrack logo"/>
                  </div>
                  <h3>File managment</h3>
                  <p>
                    I also use my server to store important files, images, and other projects.
                    It works as my personal cloud storage, where I keep everything organized and accessible.
                  </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Homelabbing
