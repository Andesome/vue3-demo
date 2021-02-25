<script>
import { h } from "vue";

export default {
  name: 'delete-button',
  props: {
    onClick: {
      type: Function,
      default: () => {}
    },
    item: {
      type: Object,
      default: () => {}
    }
  },
  render() {
    return h("button", { class: "o", onClick: this.onClick }, "delete");
  },
};  
</script>