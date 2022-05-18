<template>
  <div class="calendar">
    <client-only>
    <vuejs-datepicker
      :value="new Date(2016, 9, 16)"
      name="uniquename"
      :inline="true"
      :bootstrap-styling="true"
      :language="language"
      @selected="onChange"
    ></vuejs-datepicker>
    </client-only>
      <div class="loading-calendar" v-if="!loaded">
        <div class="loader"></div>
      </div>

  </div>
</template>

<script>
// TODO: change for the proper language
import {en, fr} from 'vuejs-datepicker/dist/locale'
export default {
  name: "Calendar",
  data () {
    return {
      language: fr,
      loaded: false
    }
  },
  methods: {
    onChange: function (date) {
      this.$emit('change', date);
    }
  },
  mounted () {
    this.loaded = true;
  }
};
</script>

<style lang="scss">
.calendar {
  
  .vdp-datepicker__calendar {
    border: none;
    padding: 10px;
    width: 100%;
    background: var(--form_input_bg, #323232);
    display: flex;
    justify-content: center;
    flex-direction: column;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      .day__month_btn {
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        width: fit-content;
      }
    }
    .cell {
      border: none;
      padding: 8px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: calc(14.285714285714286% - 10px);
      margin: 5px;
      font-size: 1.2rem !important;
      border: 1px solid transparent;
      transition: all 0.2s ease !important;
      &:not(.day-header) {
        &:hover {
          background-color: transparent;
          border: 1px solid var(--primary_color, #00a8ff) !important;
        }

        &.selected {
          background-color: var(--primary_color, #00a8ff);
          color: var(--secondary_color, #fff);
          &:hover {
            background-color: var(--primary_color, #00a8ff);
          }
        }
        &.month,
        &.year {
          font-size: 1.2rem;
          width: 100%;
          transition: all 0.3s ease;
          border: none !important;
          &:hover {
            color: var(--primary_color, #00a8ff);
            font-weight: bold;
          }
        }
      }
    }
  }
}
.loading-calendar {
  width: 100%;
  height: 100%;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: var(--primary_color, #00a8ff);
  font-size: 2.5rem;
  font-weight: bold;
  .loader{
    width: 50px;
    height: 50px;
    position: inherit;
    border: 5px solid var(--secondary_color, #00a8ff);
    background-color: transparent;
    border-top: 5px solid transparent;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }
}
</style>
