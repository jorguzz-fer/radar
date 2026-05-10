<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]"
    id="clickToSeeCode"
  >
    <ExampleInput />

    <SizingInput />

    <FormTextinput />

    <DisabledInput />

    <FileInput />

    <DatalistsInput />
  </div>

  <PageTitle pageTitle="Select" subTitle="Forms" />

  <!-- Select -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px] mb-[25px]">
    <DefaultSelect />

    <DisabledSelect />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/Common/PageTitle.vue";
import ExampleInput from "./ExampleInput.vue";
import SizingInput from "./SizingInput.vue";
import FormTextinput from "./FormTextinput.vue";
import DisabledInput from "./DisabledInput.vue";
import FileInput from "./FileInput.vue";
import DatalistsInput from "./DatalistsInput.vue";
import DefaultSelect from "./DefaultSelect.vue";
import DisabledSelect from "./DisabledSelect.vue";

export default defineComponent({
  name: "InputSelect",
  components: {
    PageTitle,
    ExampleInput,
    SizingInput,
    FormTextinput,
    DisabledInput,
    FileInput,
    DatalistsInput,
    DefaultSelect,
    DisabledSelect,
  },
});
</script>
