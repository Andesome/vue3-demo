<script>
import { h } from "vue";

export default {
  name: 'delete-button',
  props: {
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  render() {
    console.log('render:', this)
    return h("button", { class: "custome-button", onClick: this.onClick }, "delete");
  },
};  
</script>