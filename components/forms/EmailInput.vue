<template>
  <div class="input--text flex--half">
    <label>
      <span class="input__label"
        >{{input.title}} <span class="optional" v-if="input.required == 0">(Optionnel)</span></span
      >

      <input
        type="email"
        :name="input.id"
        placeholder="Courriel"
        autocomplete="email"
        value=""
      />
    </label>
  </div>
</template>
<script>
export default {
  name: "EmailInput",
  props: {
    input: {
      type: Object,
      required: true,
    },
  },
};
</script>
