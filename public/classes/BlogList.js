export class BlogList {
    constructor(endpoint) {
        this.fetchBlogs = function (endpoint) {
            return fetch(endpoint)
                .then((res) => res.json())
                .then((res) => res)
                .catch((err) => err);
        };
        this.endpoint = endpoint;
        this.blogs = this.fetchBlogs(this.endpoint);
    }
    getBlogs() {
        return this.blogs;
    }
}
