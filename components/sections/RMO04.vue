<template>
  <section class="section RMO04 bg--alt">
    <div class="padd" v-if="form">
      <div class="wrap">
        <div class="box box-padd--big bg--main" data-aos="zoom-in-up" data-aos-easing="ease-in-out">
          <div class="padd padd--small padd--bottom">
            <div class="h4">
              <h2>{{ form.title }}</h2>
            </div>
          </div>
          <form
            @submit="submit"
            enctype="multipart/form-data"
            method="POST"
            action="https://ludwig.local/form_validation"
            
          >
            <div class="flex flex--gap flex--wrap flex--forever align--end">
              <component
                v-for="input in form.inputs"
                :key="input.id"
                :is="input.type"
                :input="input"
              ></component>
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
  methods: {
    submit: function (e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const data = {};
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.RMO04 {
  form .flex--gap > * {
    padding: 15px;
  }
}
</style>
