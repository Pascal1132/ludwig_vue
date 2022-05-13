<template>
  <div class="input--select flex--full" data-select2-id="select2-data-5-pmz7">
    <label>
      <span class="input__label"
        >Menu déroulant <span class="optional">(Optionnel)</span></span
      >
      <v-select
        class="v-select"
        :options="Object.values(input.options)"
        :name="input.id"
        :searchable="true"
        :placeholder="input.placeholder"
      />
    </label>
  </div>
</template>
<script>
export default {
  name: "SelectInput",
  props: {
    input: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">

</style>
