import * as React from "react";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";

const jsdom = require('jsdom');

// Create a fake DOM for testing
global.window = new jsdom.JSDOM().window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;

import Aside from "../components/Aside";
import mock from '../mocks/eminem.json';

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

describe("Testing Aside.tsx component", () => {
  it("Renders aside with infos about the song", () => {
    act(() => {
      ReactDOM.render(<Aside selected={mock[0]} />, rootContainer);
    });
    const container = rootContainer.querySelector('aside');
    expect(container.textContent).to.equal("Song: The Real Slim ShadyArtist: EminemAlbum: Curtain Call: The HitsDuration: 284 secondsSee On Deezer");
  });
});
