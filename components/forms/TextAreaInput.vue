<template>
<div class="input--text flex--full">
  <label>
    <span class="input__label">{{input.title}} <span class="optional" v-if="input.required == '0'">(Optionnel)</span></span>

    <textarea
      type="text"
      :name="input.id"
      :placeholder="input.placeholder"
      autocomplete="given-name"
      value=""
      rows="4"
    />
  </label>
</div>
</template>
<script>
export default {
  name: "TextAreaInput",
  props: {
    input: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
textarea {
  transition: box-shadow 0.35s cubic-bezier(.68,.16,.39,.98),background 0.35s cubic-bezier(.68,.16,.39,.98);
    display: block;
    position: relative;
    width: 100%;
    padding: 16px 30px;
    height: auto;
    line-height: unset;
    background: var(--form_input_bg,#F5F5F5);
    color: var(--form_input_color,#1A1A1A);
    box-shadow: inset 0 0 0 1px var(--form_input_bg,#F5F5F5);
    text-transform: none;
    caret-color: var(--primary_bg,#1A1A1A);
    //background-image: url(../images/SVG/check.svg);
    background-size: 0;
    background-position: 100% 50%;
    background-repeat: no-repeat;
}
</style>
