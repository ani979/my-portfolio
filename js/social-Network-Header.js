import React from 'react'

class SocialNetworkHeader extends React.Component {
  render() {
    return(
      <div className="navbar-collapse collapse wrapper">
              <ul className="navbar-right socialMedia">
                <li className="socialWrapper"><a className="social"
                   title="LinkedIn Profile"
                   target="_blank"
                   href="https://www.linkedin.com/in/animesh-shrivastava-13981019/">
                  <i className="fa fa-linkedin fa-2x"></i>
                </a></li>
                  <li className="socialWrapper"><a className="social"
                   title="GitHub Profile"
                   target="_blank"
                   href="https://github.com/ani979/">
                  <i className="fa fa-github fa-2x"></i>
                </a></li>
                  <li className="socialWrapper"><a className="social"
                   title="My Resume"
                   href="/resume/Resume_Animesh.pdf">
                  <i className="fa fa-file-text fa-2x"></i>
                </a></li>
                {/* <li><a className="social " href="https://www.hackerrank.com/ani979">
                  <i className="fa fa-fire"></i></a>
                </li> */}
              </ul>
            </div>
    );
  }
}

export default SocialNetworkHeader;
