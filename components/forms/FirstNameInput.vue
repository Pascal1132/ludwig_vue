<template>
  <label>
    <span class="input__label">Prénom </span>

    <input
      type="text"
      name="6a6d2e4e-cc3e-11ea-ae24-ddec99161d58"
      :placeholder="input.placeholder"
      autocomplete="given-name"
      value=""
    />
  </label>
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
