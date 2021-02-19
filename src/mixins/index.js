const HelloMixin = {
  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log('hello from mixin!');
    },
  },
};

const ConsoleMixin = {
  created() {
    this.console();
  },
  methods: {
    console() {
      console.log('console.log minx!');
    },
  },
};

export { HelloMixin };
export { ConsoleMixin };

// export default HelloMixin;
