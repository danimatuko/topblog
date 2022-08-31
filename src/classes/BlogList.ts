import { Iblog } from './../interfaces/Iblog';
import { Blog } from './Blog';

export class BlogList {
  private blogs: Promise<any>;
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.blogs = this.fetchBlogs(this.endpoint);
  }

  fetchBlogs = function (endpoint: string) {
    return fetch(endpoint)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err);
  };

  getBlogs(): Promise<any> {
    return this.blogs;
  }
}



