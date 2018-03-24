import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const myWork =
  {
    'title':"Work Example",
    'href':"https://example.com",
    'desc':"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc':"example screenshot of a project involving code",
      'src':"images/example1.png",
      'comment':""
    }
  };


describe("ExampleWorkModal component", () => {
  let mockCloseModalFn = jest.fn();
  let component = shallow(<ExampleWorkModal example= {myWork} open = {false}/>);
  let openComponent = shallow(<ExampleWorkModal example= {myWork} open = {true} closeModal = {mockCloseModalFn}/>);

  let anchors = component.find("a");
  it("It should contain a single a element ", () => {
    expect(anchors.length).toEqual(1);
  });

  it("It should contain a link to some website", () => {
    expect(anchors.get(0).props.href).toEqual(myWork.href);
  });

  it("Should have modal class set correctly to Be Closed" , () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
  });

  it("Should have modal class set correctly to Be Open" , () => {
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toEqual(true);
  });

  it("Should close when clicking close modal when modal is open" , () => {
    openComponent.find(".modal__closeButton").simulate('click');
    expect(mockCloseModalFn).toHaveBeenCalled();
  });


});
