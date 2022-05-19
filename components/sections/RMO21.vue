<template>
  <section class="section RMO21 bg--alt">
    <div class="padd">
      <div class="wrap--half">
        <div class="RMO21__grail">
          <aside class="RMO21__aside visible once fade-left alive">
            <div class="RMO21__filters sticky sticky--top bg--main">
              <form
                class="calendar_filters filters__masonry"
                id="filters"
                method="post"
              >
                <div class="filter-iceberg filters__calendar">
                  <calendar @change="changeDate"></calendar>
                </div>
                <div class="filter-iceberg iceberg filters__accordion">
                  <div class="iceberg__head active">
                    <div class="subtitle-font">Par catégorie</div>
                    <span class="iceberg__icon fas fa-caret-down"></span>
                  </div>
                  <div
                    class="iceberg__body filter_container"
                    style="display: block"
                  >
                    <ul>
                      <li class="subtitle-font filter_sub active">
                        <label class="iceberg block">
                          <input
                            type="radio"
                            class="hide"
                            name="filters[categ]"
                            value=""
                            checked="checked"
                          />
                          <span>Voir tout</span>
                        </label>
                      </li>
                      <li class="subtitle-font filter_sub">
                        <label class="iceberg block">
                          <input
                            type="radio"
                            class="hide"
                            name="filters[categ]"
                            value="3c81d90c-5c2b-11ec-b611-1fc7817da4c7"
                          />
                          <span>Catégotie 1</span>
                        </label>
                      </li>
                      <li class="subtitle-font filter_sub">
                        <label class="iceberg block">
                          <input
                            type="radio"
                            class="hide"
                            name="filters[categ]"
                            value="3c824b58-5c2b-11ec-b6d9-1fcd50b90511"
                          />
                          <span>Sous-Catégories 1</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="filter-iceberg iceberg">
                  <div class="iceberg__head active">
                    <div class="subtitle-font">Par filtre</div>
                    <span class="iceberg__icon fas fa-caret-down"></span>
                  </div>
                  <div
                    class="iceberg__body filter_container"
                    style="display: block"
                  >
                    <ul>
                      <li class="subtitle-font filter_sub active">
                        <label class="iceberg block">
                          Voir tout
                          <input
                            type="checkbox"
                            class="hide"
                            name="filters[tag_id]"
                            value=""
                            checked="checked"
                          />
                        </label>
                      </li>
                      <li class="subtitle-font filter_sub">
                        <label class="iceberg block">
                          <input
                            type="checkbox"
                            class="hide"
                            name="filters[tag_id]"
                            value="9cd45afe-592a-11ec-b817-95f0e16c9b88"
                          />
                          <span>Evenement</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </aside>
          <div class="RMO21__main">
            <div class="open-filters hide">
              <span
                class="btn btn--secondary-plus"
                title="Afficher les filtres"
              >
                <span>
                  <span class="btn__text">Afficher les filtres</span>
                  <span class="btn__icon far fa-sliders-h"></span>
                </span>
              </span>
            </div>
            <div class="date h3 margin">
              <h2 class="current_date_here">{{currentDateFormatted}}</h2>
            </div>
            <div id="place_events_here">
              <p>Aucun événement pour cette date</p>
              <span> {{events}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "RMO21",
  props: {
    section: null,
  },
  data() {
    return {
      currentDate: new Date(),
      events: [],
    }
  },
  methods: {
    changeDate(date) {
      this.currentDate = date;
      // get timestamp from date
      let timestamp = new Date(date).getTime();
      this.getEvents(timestamp);
    },
    async getEvents(timestamp) {
      this.events = await this.$store.dispatch("fetchQueryObjects", {
        route: 'fetch_events_by_date',
        params: {
          timestamp,
          language: 'fr',
        }
      });
    },
  },
  computed: {
    currentDateFormatted() {
      // TODO: change for the proper language
      return this.currentDate.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.RMO21 {
  &__grail {
    display: grid;
    grid-template-columns: 450px minmax(10px, 2fr);
    grid-gap: 30px;
    gap: 30px;
  }
  &__aside {
  }
  &__filters {
    transition: max-height $transition;
    max-height: calc(100vh - #{var(--nav-height)} - 20px);
    overflow-y: auto;
    padding: 25px;

    .filter-iceberg {
      background-color: var(--form_input_bg, $form_input-bg);
      color: var(--form_input_color, $form_input-color);

      & + .filter-iceberg {
        margin-top: 25px;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    &__grail {
      grid-template-columns: 420px minmax(10px, 2fr);
    }
    &__filters {
      max-height: none;
    }
  }
  @media screen and (max-width: 768px) {
    &__grail {
      grid-template-columns: 1fr;
      gap: 60px;
      grid-gap: 60px;
    }
    .filters {
      &__masonry {
        columns: 2;
        column-gap: 25px;
      }
    }
  }
  @media #{$phones} {
    .filters__masonry {
      columns: 1;
    }
    .filter-iceberg {
      max-width: 475px;
      margin: 0 auto;
    }
  }
}

.calendar {
  overflow: hidden;
  background-color: var(--form_input_bg, $form_input-bg);
  color: var(--form_input_color, $form_input-color);
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  .calendar_header {
    position: relative;
    padding: 35px 40px 20px;
    color: var(--form_input_color, $form_input-color);

    .months {
      @extend .small-font;
      position: relative;
      // width: 415px;
      cursor: pointer;
      text-align: center;
      z-index: 1;

      &_list {
        display: none;
        position: absolute;
        top: 100%;
        right: 50%;
        @include transform(translateX(50%));
        max-width: 150%;
        width: 200px;
        text-align: center;
        box-shadow: 0 30px 30px rgba(0, 0, 0, 10%);
        z-index: 9;

        ul {
          display: block;
          position: relative;
          max-height: 200px;
          overflow: auto;
          padding: 10px 0;
          background: var(--contrast_bg, $contrast_bg);

          li {
            @extend .small-font;
            transition: background $transition, color $transition;
            display: block;
            position: relative;
            padding: 4px 15px;
            margin: 0;
            color: var(--form_input_color, $form_input-color);

            &:hover,
            &.active {
              transition: background 0.22s, color 0.22s;
              background: var(--primary_bg, $primary_bg);
              color: var(--primary_color, $primary_color);
            }
          }
        }
      }

      &_btn {
        transition: background $transition, color $transition;
        width: 32px;
        height: 32px;
        background: var(--secondary_bg, $secondary_bg);
        color: var(--secondary_color, $secondary_color);
        text-align: center;
        line-height: 32px;
        cursor: pointer;

        &::before {
          @extend %fas;
        }

        &.prev {
          &::before {
            content: "\f0d9";
          }
        }
        &.next {
          &::before {
            content: "\f0da";
          }
        }

        &:hover {
          background-color: var(--primary_bg, $primary_bg);
          color: var(--primary_color, $primary_color);
        }
      }
    }

    .dropdown {
      display: inline-block;
      vertical-align: middle;
      padding-right: 30px;
      position: relative;

      &::before {
        @extend %fas;
        content: "\f0d7";
        display: block;
        position: absolute;
        top: 50%;
        @include transform(translateY(-50%));
        right: 10px;
        font-size: 1.1rem;
      }
    }

    // .filters{
    //     display: inline-block;
    //     position: relative;
    //     z-index: 1;
    //     vertical-align: middle;
    //     // width: 400px;
    // }

    // .btn_toggle{
    //     display: inline-block;
    //     vertical-align: middle;
    //     width: 50px;
    //     height: 50px;
    //     color: var(--contrast_bg, $contrast_bg);
    //     border-radius: 50%;
    //     text-align: center;
    //     padding: 15px 15px 15px 17px;
    //     font-size: 20px;
    //     margin-left: 1.5vw;
    //     cursor: pointer;

    //     &:last-child{
    //         margin-left: 0.5vw;
    //     }
    // }
  }

  #month_container {
    transition: opacity $transition;
    padding: 0 0 25px;

    &.loading {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .week {
    display: flex;
    justify-content: space-evenly;
    margin: 0 -2px;
    padding: 0 25px;

    &_header {
      background: var(--secondary_bg, $secondary_bg);
      color: var(--secondary_color, $secondary_color);
      border-top: solid 1px var(--main_bg, $main_bg);
      border-bottom: solid 1px var(--main_bg, $main_bg);
      margin-bottom: 10px;

      .day_date {
        height: auto;
      }
    }
  }

  .day {
    &_wrap {
      font-size: 0;
    }

    &_date {
      flex: 0 0 calc(100% / 7);
      position: relative;
      height: 50px;
      padding: 2px;
      cursor: pointer;

      &[data-timestamp=""] {
        opacity: 0.5;
        pointer-events: none;
      }

      &.today .day_content {
        background-color: var(--secondary_bg, $secondary_bg);
        color: var(--secondary_color, $secondary_color);
      }
      &:hover .day_content {
        background: var(--contrast_bg, $contrast_bg);
        color: var(--contrast_color, $contrast_color);
      }
      &.active .day_content {
        background-color: var(--primary_bg, $primary_bg);
        color: var(--primary_color, $primary_color);
      }
    }

    &_content {
      transition: color $transition, background $transition;
      position: relative;
      max-width: 60px;
      height: 100%;
      margin: 0 auto;
      padding: 7px 2px 10px;
      overflow: hidden;
      color: var(--form_input_color, $form_input-color);
    }

    &_number {
      @extend .small-font;
      font-size: 1.4rem;
    }

    &_events {
      margin: -2px;
      font-size: 0;

      .pellet {
        display: inline-block;
        position: relative;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 2px;

        &:nth-child(n + 3) {
          display: none;
        }

        &.more_events {
          span {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            @include transform(translate(-50%, -50%));
            color: var(--form_input_color, $form_input-color);
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .day {
      &_content {
        padding-bottom: 5px;
      }
    }
  }
  @media #{$small_phones} {
    .calendar_header {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
