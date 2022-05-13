<template>
<div class="input--text flex--half">
  <label>
    <span class="input__label">{{input.title}} <span class="optional" v-if="input.required == '0'">(Optionnel)</span></span>

    <input
      type="text"
      :name="input.id"
      :placeholder="input.placeholder"
      autocomplete="given-name"
      value=""
    />
  </label>
</div>
</template>
<script>
export default {
  name: "FirstNameInput",
  props: {
    input: {
      type: Object,
      required: true,
    },
  },
};
</script>
