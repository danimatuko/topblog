export class Blog {
  private id: number;
  private author: string;
  private title: string;
  private body: string;

  constructor(author: string, title: string, body: string) {
    this.id = Date.now() + Math.random();
    this.author = author;
    this.title = title;
    this.body = body;
  }

  createElement() {
    const div = document.createElement('div');
    div.innerHTML = `
     <div class="blog bg-white rounded-md py-6 mb-5 px-10">
        <h2 class="title text-3xl mb-2 font-semibold text-primary">
        ${this.title}
        </h2>
        <small class="author text-sm text-slate-500 font-bold"
          >${this.author}
          </small>
        <p class="my-3">
          ${this.body}
        </p>
        <a href='/${this.id}' class="bg-primary py-3 px-5 text-white font-semibold"/>
          READ MORE  
        </a>
    </div>`;

    return div;
  }

  render() {
    document.querySelector('.blogs')?.append(this.createElement());
  }
}
