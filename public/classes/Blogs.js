export class Blogs {
    constructor() {
        this.blogs = [];
    }
    static fetchBlogs() {
        fetch('../../public/data.json')
            .then((res) => res.json())
            .then((blogs) => console.log(blogs))
            .catch((err) => console.log(err));
    }
    get() {
        return this.blogs;
    }
}
