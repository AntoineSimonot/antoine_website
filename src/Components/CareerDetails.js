import { AnimatePresence, motion } from "framer-motion"

export default function CareerDetails({show}) {
  
  if (show === 1) {

    return(
        <div className="CareerDetails">
            <div className="CareerDetailsContainer">
                <AnimatePresence>
                <motion.div 
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    key="1"
                    className="CareerDetailsContent">
                    <h2>Freelance developer <span>@Fiverr</span></h2>
                    <p>Current </p>
                    <ul>
                        <li>
                            <i class="fas fa-chevron-right"></i>
                            Rated 5* on <span>fiverr</span>
                        </li>
                        <li>
                            <i class="fas fa-chevron-right"></i>
                            Bug fix on MJML projects and <span>Graphic redesign</span> of a email template
                        </li>
                        <li>                             
                            <i class="fas fa-chevron-right"></i>
                            Development of email page in MJML and HTML in responsive design with dark mode
                        </li>

                        <li>                             
                            <i class="fas fa-chevron-right"></i>
                            Use of email test application to check code compatibility with all email clients
                        </li>
                    </ul>
                </motion.div>
                </AnimatePresence>
               
            </div>
        </div>
    )
  }

  if (show === 2) {
    return(
        <div className="CareerDetails">
            <div className="CareerDetailsContainer">
                <motion.div 
                 initial={{ opacity: 0, x: 25 }}
                 animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  key="4" className="CareerDetailsContent">
                    <h2>Front-end <span>@Personnal</span></h2>
                    <p>Feb - Mar 2022</p>
                    <ul>
                    <li>
                        <i class="fas fa-chevron-right"></i>
                            Redux and for Framer motion
                        </li>
                        <li>
                            <i class="fas fa-chevron-right"></i>
                            Natural referencing (SEO) respecting W3C standards
                        </li>
                        <li>
                            <i class="fas fa-chevron-right"></i>
                            Developed interactive web portfolio for personal training using <span>React.js</span>
                        </li>
                        <li>
                            <i class="fas fa-chevron-right"></i>
                            Creation of the entire design of the website integration of models in responsive design
                        </li>
                      
                    </ul>
                </motion.div >
            </div>
        </div>
    )
}
  
  if (show === 3) {
      return(
          <div 
          className="CareerDetails">
              <div className="CareerDetailsContainer">
                  <motion.div 
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    key="2" className="CareerDetailsContent">
                      <h2>Web Integrator <span>@Fab'depan</span></h2>
                      <p>Oct - Nov 2021</p>
                      <ul>                            
                        <li>
                            <i class="fas fa-chevron-right"></i>
                            Integration of models in responsive design
                        </li>
                        <li>
                          <i class="fas fa-chevron-right"></i>
                            Natural referencing (SEO) respecting W3C standards
                        </li>
                        <li>
                            <i class="fas fa-chevron-right"></i>
                            Creation of a showcase site for the company Fab'Dépan with <span>HTML, CSS and JS</span>
                        </li>
                        <li>
                            <i class="fas fa-chevron-right"></i>
                            deployment of the website with the gandi site and regular maintenance of the content
                        </li>
                      </ul>
                  </motion.div >
              </div>
          </div>
      )
  }

  if (show === 4) {
      return(
          <div
          className="CareerDetails">
              <div className="CareerDetailsContainer">
                  <motion.div 
                     initial={{ opacity: 0, x: 25 }}
                     animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    key="3" className="CareerDetailsContent">
                      <h2>Full stack <span>@Ydrazil</span></h2>
                      <p>Jul - Sept 2021</p>
                      <ul>
                          <li>                            
                              <i class="fas fa-chevron-right"></i>
                              Back office creation</li>
                          <li>
                            <i class="fas fa-chevron-right"></i>
                            Fullstack Ruby on <span>Rails developer</span>
                        </li>
                          <li>
                          <i class="fas fa-chevron-right"></i>
Development of an API and integration of the front</li>
                          <li>
                          <i class="fas fa-chevron-right"></i>
Using Teams, <span>Git</span>, Trello and Todoist to work as a team</li>
                      </ul>
                  </motion.div >
              </div>
          </div>
      )
  }


}