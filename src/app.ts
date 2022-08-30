'use strict';
import { Blog } from './classes/Blog.js';
import { BlogList } from './classes/BlogList.js';

class Main {
  static init() {
    //router
    const hodi = new Blog('Hodi', "I'm running away", 'blah blah blah....');

    hodi.render();
  }
}

Main.init();
