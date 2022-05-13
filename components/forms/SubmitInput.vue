<template>
  <div class="flex--full">
    <div class="btn-container">
      <label class="btn submit">
        <input type="submit" name="submit" value="1" class="hide" />
        <span class="btn btn--primary bg--primary">
          <span class="btn__text">Soumettre</span>
          <span class="btn__line"></span>
        </span>
      </label>
      <button
        type="reset"
        class="btn btn--secondary-plus clear-form"
        title="Réinitialiser"
      >
        <span class="btn__text">Réinitialiser</span>
        <span class="btn__icon far fa-plus"></span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubmitInput",
  props: {
    input: null,
  },
};
</script>

<style lang="scss" scoped>
.btn-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
}
.btn {
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 55px;
  transition: $transition;
  z-index: 1;
  .btn--primary.bg--primary {
    background-color: var(--primary_bg, #1a1a1a);
    color: var(--contrast_color, #ffffff);
    &:hover {
      background-color: var(--contrast_color, #ffffff);
      color: var(--primary_bg, #1a1a1a);
    box-shadow: inset 0 0 0 4px var(--primary_bg, #ffffff);
  }
  }
  .btn__text {
    font-family: var(--small-font_fontFamily);
    font-weight: var(--small-font_fontWeight);
    font-size: var(--small-font_fontSize);
    font-style: var(--small-font_fontStyle);
    line-height: var(--small-font_lineHeight);
    letter-spacing: var(--small-font_letterSpacing);
    text-transform: var(--small-font_textTransform);
    padding: 0 20px;
  }
  &:hover {
    box-shadow: inset 0 0 0 4px var(--primary_bg, #1a1a1a);
  }
}
</style>
