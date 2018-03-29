import React from 'react'

class SocialNetworkHeader extends React.Component {
  render() {
    let socialDetails = this.props.social;
    return(
      <div className="navbar-collapse collapse wrapper">
        <ul>
          {
            socialDetails.map(
              (soc, idx) => {
                return (

                    <li className="socialWrapper"><a className="social"
                       title={soc.title}
                       target={soc.target}
                       href={soc.href}>
                      <i className={"fa " + soc.cssClass}></i>
                    </a></li>
                )
              }
            )
          }
        </ul>
      </div>
    );
  }
}

export default SocialNetworkHeader;
