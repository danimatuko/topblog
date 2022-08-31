'use strict';
import { Blog } from './classes/Blog.js';
import { BlogList } from './classes/BlogList.js';
class App {
    static init() {
        this.router();
        //router
        const bloglist = new BlogList('../../public/data.json');
        bloglist
            .getBlogs()
            .then((blogs) => {
            for (let blog of blogs) {
                blog = new Blog(blog.author, blog.title, blog.body);
                // console.log(blog);
                blog.render();
            }
        })
            .catch((err) => console.log(err));
    }
    static getPathname() {
        return location.pathname.split('/').slice(-1).toString();
    }
    static router() {
        switch (this.getPathname()) {
            case 'home.html':
                console.log('home');
                break;
            case 'blogs.html':
                console.log('blogs');
                break;
            default:
                return location.pathname;
        }
    }
}
App.init();
