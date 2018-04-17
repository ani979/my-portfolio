import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetworkHeader from './social-Network-Header';
import ExampleWork from './example-work';

const mySocialDetails = [
  {
    'title': "LinkedIn Profile",
    'href':"https://www.linkedin.com/in/animesh-shrivastava-13981019/",
    'cssClass': "fab fa-linkedin-in",
    'cssOrigClass': "fab fa-linkedin-in",
    'target':"_blank"
  },
  {
    'title': "GitHub Profile",
    'href':"https://github.com/ani979/",
    'cssClass': "fab fa-github",
    'cssOrigClass': "fab fa-github",
    'target':"_blank"
  },
  {
    'title': "My Resume",
    'href':"/resume/Resume_Animesh.pdf",
    'cssClass': "far fa-file-alt",
    'cssOrigClass': "far fa-file-alt",
    'target':"_self"
  },
  {
    'title': "Blogs",
    'href':"https://blog.animesh.life",
    'cssClass': "fab fa-blogger-b",
    'cssOrigClass': "fab fa-blogger-b",
    'target':"_blank"
  }
]
const myWork = [
  {
    'title':"Work Example",
    'href':"https://example.com",
    'desc':"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc':"example screenshot of a project involving code",
      'src':"images/example1.png",
      'comment':""
    }
  },
  {
    'title':"Work Example",
    'href':"https://example.com",
    'desc':"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc':"example screenshot of a project involving chemistry",
      'src':"images/example2.png",
      'comment':`“Chemistry” by Surian Soosay is licensed under CC BY 2.0
                  https://www.flickr.com/photos/ssoosay/4097410999`
    }
  },
  {
    'title':"Work Example",
    'href':"https://example.com",
    'desc':"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc':"example screenshot of a project involving cats",
      'src':"images/example3.png",
      'comment':`“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

//ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
var mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {

  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    mySocialDetails.map(

      (soc, idx) => {
        soc.cssClass = soc.cssClass + " fa-1x";
      }
    );
  } else {
    mySocialDetails.map(

      (soc, idx) => {
        soc.cssClass = soc.cssOrigClass;
      }
    );
  }
  ReactDOM.render(<SocialNetworkHeader social={mySocialDetails}/>, document.getElementById('social-network'));
}
screenTest(mql);
mql.addListener(screenTest);
//ReactDOM.render(<SocialNetworkHeader social={mySocialDetails}/>, document.getElementById('social-network'));
