import * as React from "react";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";

const jsdom = require('jsdom');

// Create a fake DOM for testing
global.window = new jsdom.JSDOM().window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;

import InfoItem from "../components/InfoItem";

let rootContainer: any;

//Creates a div to render the test
beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

//Removes the div after test is complete
afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

// InfoItem
describe("Testing InfoItem.tsx component", () => {
  it("Renders info-item with title and value inside", () => {
    act(() => {
      ReactDOM.render(<InfoItem title="Artist" value="Ozzy Osbourne" />, rootContainer);
    });
    const container = rootContainer.querySelector('.info-item');
    expect(container.textContent).to.equal("Artist: Ozzy Osbourne");
  });
});
