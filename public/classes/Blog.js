export class Blog {
    constructor(author, title, body) {
        this.id = Date.now() + Math.random();
        this.author = author;
        this.title = title;
        this.body = body;
    }
    createElement() {
        const div = document.createElement('div');
        div.innerHTML = `
     <div class="blog bg-white rounded-md py-6 px-10">
        <h2 class="title text-3xl mb-2 font-semibold text-primary">
          Lorem, ipsum dolor
        </h2>
        <small class="author text-sm text-slate-500 font-bold"
          >Jhon Doe</small
        >
        <p class="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          unde, vero beatae iusto ad repellendus a autem enim, dolorum aut
          ullam aspernatur, commodi quos perferendis dolores corrupti
          reprehenderit? Exercitationem consectetur dolorem, molestiae
          assumenda placeat atque necessitatibus dolore iure culpa rem?
        </p>

        <button class="bg-primary py-3 px-5 text-white font-semibold">
          READ MORE
        </button>
    </div>`;
        return div;
    }
    template() {
        ` <div class="blog bg-white rounded-md py-6 px-10">
          <h2 class="title text-3xl mb-2 font-semibold text-primary">
            Lorem, ipsum dolor
          </h2>
          <small class="author text-sm text-slate-500 font-bold"
            >Jhon Doe</small
          >
          <p class="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            unde, vero beatae iusto ad repellendus a autem enim, dolorum aut
            ullam aspernatur, commodi quos perferendis dolores corrupti
            reprehenderit? Exercitationem consectetur dolorem, molestiae
            assumenda placeat atque necessitatibus dolore iure culpa rem?
          </p>

          <button class="bg-primary py-3 px-5 text-white font-semibold">
            READ MORE
          </button>
        </div>`;
        return new DOMParser().parseFromString(this.title, 'text/xml');
    }
    render() {
        var _a;
        (_a = document.querySelector('.blogs')) === null || _a === void 0 ? void 0 : _a.append(this.createElement());
    }
}
