<template>
  <section class="section RMO04 bg--alt">
    <div class="padd" v-if="form">
      <div class="wrap">
        <div class="box box-padd--big bg--main">
          <div class="padd padd--small padd--bottom">
            <div class="h4"><h2>{{form.title}}</h2></div>
          </div>
          <form
            enctype="multipart/form-data"
            method="POST"
            action="https://ludwig.local/form_validation"
          >
            <div class="flex flex--gap flex--wrap flex--forever align--end">
              <!-- FIRST NAME -->
              <div class="input--text flex--half" v-for="(input) in form.input" :key="input.id">
                <!--<label>
                  <span class="input__label">Prénom </span>

                  <input
                    type="text"
                    name="6a6d2e4e-cc3e-11ea-ae24-ddec99161d58"
                    placeholder="Prénom"
                    autocomplete="given-name"
                    value=""
                  />
                </label>-->
                <LazyComponent
                  :is="'form-' + input.type" :input="input"></LazyComponent>
              </div>

              <!--
              <div class="input--text flex--half">
                <label>
                  <span class="input__label">Nom </span>

                  <input
                    type="text"
                    name="6a6dd470-cc3e-11ea-815f-1da3e3f546f2"
                    placeholder="Nom"
                    autocomplete="family-name"
                    value=""
                  />
                </label>
              </div>

              
              <div class="input--text flex--half">
                <label>
                  <span class="input__label"
                    >Courriel <span class="optional">(Optionnel)</span></span
                  >

                  <input
                    type="email"
                    name="6a6efe18-cc3e-11ea-8b6f-47c985843221"
                    placeholder="Courriel"
                    autocomplete="email"
                    value=""
                  />
                </label>
              </div>


              <div class="input--text flex--half">
                <label>
                  <span class="input__label"
                    >Téléphone <span class="optional">(Optionnel)</span></span
                  >

                  <input
                    type="text"
                    name="6a6f822a-cc3e-11ea-bf1b-d5f9028902e7"
                    placeholder="Téléphone"
                    autocomplete="tel"
                    value=""
                  />
                </label>
              </div>


              <div class="input--select flex--full">
                <label>
                  <span class="input__label"
                    >Menu déroulant
                    <span class="optional">(Optionnel)</span></span
                  >

                  <select
                    autocomplete="off"
                    name="6a701c94-cc3e-11ea-a582-bd5bb7a5da74"
                    data-select2-id="select2-data-1-ebn6"
                    tabindex="-1"
                    class="select2-hidden-accessible"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="select2-data-3-hah6">
                      Placeholder
                    </option>

                    <option value="Option 1">Option 1</option>

                    <option value="Option 2">Option 2</option></select
                  ><span
                    class="select2 select2-container select2-container--"
                    dir="ltr"
                    data-select2-id="select2-data-2-0ida"
                    style="width: 100%"
                    ><span class="selection"
                      ><span
                        class="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabindex="0"
                        aria-disabled="false"
                        aria-labelledby="select2-6a701c94-cc3e-11ea-a582-bd5bb7a5da74-mz-container"
                        aria-controls="select2-6a701c94-cc3e-11ea-a582-bd5bb7a5da74-mz-container"
                        ><span
                          class="select2-selection__rendered"
                          id="select2-6a701c94-cc3e-11ea-a582-bd5bb7a5da74-mz-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Placeholder"
                          >Placeholder</span
                        ><span
                          class="select2-selection__arrow"
                          role="presentation"
                          ><b role="presentation"></b></span></span></span
                    ><span class="dropdown-wrapper" aria-hidden="true"></span
                  ></span>
                </label>
              </div>

              <div class="input--text flex--full">
                <label>
                  <span class="input__label"
                    >Message <span class="optional">(Optionnel)</span></span
                  >

                  <textarea
                    name="6a706f32-cc3e-11ea-9441-8d844ae5e171"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </label>
              </div>

              <!-- SUBMIT -->
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
                    type="button"
                    class="btn btn--secondary-plus clear-form"
                    title="Réinitialiser"
                  >
                    <span class="btn__text">Réinitialiser</span>
                    <span class="btn__icon far fa-plus"></span>
                  </button>
                </div>
              </div>

              <input
                type="hidden"
                name="quackform"
                value="525aa8f8-c45b-11ea-9827-f931b3d66575"
              />
              <input
                type="hidden"
                name="page_id"
                value="00000000-0000-0000-0000-000000000001"
              />
              <input
                type="hidden"
                name="department_id"
                value="b31b1bdc-050e-11eb-a88a-00505691f34d"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "RMO04",
  props: {
    section: null,
    forms: null,
  },
  computed: {
    form: function () {
      return this.forms?.[0] ?? null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
