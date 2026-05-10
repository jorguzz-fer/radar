<template>
  <form @submit.prevent="handleSubmit">
    <div
      class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
    >
      <div class="trezo-card-content">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[25px]">
          <div class="sm:col-span-2">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              ID
            </label>
            <input
              type="text"
              v-model="formData.id"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter ID"
            />
          </div>
          <div>
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              First Name
            </label>
            <input
              type="text"
              v-model="formData.firstName"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Last Name
            </label>
            <input
              type="text"
              v-model="formData.lastName"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Email Address
            </label>
            <input
              type="email"
              v-model="formData.email"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark: 플랫폼:text-gray-400 focus:border-primary-500"
              placeholder="Enter Email Address"
            />
          </div>
          <div>
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Phone Number
            </label>
            <input
              type="tel"
              v-model="formData.phone"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Enter Phone Number"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Disease Description
            </label>
            <TextEditor class="h-[179px]" />
          </div>
          <div class="sm:col-span-2">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Appointment Date
            </label>
            <input
              type="date"
              v-model="formData.appointmentDate"
              class="h-[55px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
            />
          </div>

          <div class="sm:col-span-2">
            <label
              class="mb-[10px] text-black dark:text-white font-medium block"
            >
              Add Avatar
            </label>

            <div id="fileUploader">
              <div
                class="relative flex items-center justify-center overflow-hidden rounded-md py-[88px] px-[20px] border border-gray-200 dark:border-[#172036]"
              >
                <div class="flex items-center justify-center">
                  <div
                    class="w-[35px] h-[35px] border border-gray-100 dark:border-[#15203c] flex items-center justify-center rounded-md text-primary-500 text-lg ltr:mr-[12px] rtl:ml-[12px]"
                  >
                    <i class="ri-upload-2-line"></i>
                  </div>
                  <p class="!leading-[1.5]">
                    <strong class="text-black dark:text-white">
                      Click to upload
                    </strong>
                    <br />
                    your file here
                  </p>
                </div>
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  @change="handleFileUpload"
                  class="absolute top-0 left-0 right-0 bottom-0 rounded-md z-[1] opacity-0 cursor-pointer"
                />
              </div>

              <!-- Image Previews -->
              <div v-if="imagePreviews.length" class="mt-4 w-[150px] h-[150px]">
                <div
                  v-for="(preview, index) in imagePreviews"
                  :key="index"
                  class="relative inline-block"
                >
                  <img
                    :src="preview"
                    alt="Preview"
                    class="object-cover rounded-md"
                  />
                  <button
                    @click="removeFile(index)"
                    class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="trezo-card mb-[25px]">
      <div class="trezo-card-content">
        <button
          type="button"
          @click="resetForm"
          class="font-medium inline-block transition-all rounded-md md:text-md ltr:mr-[15px] rtl:ml-[15px] py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-danger-500 text-white hover:bg-danger-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="font-medium inline-block transition-all rounded-md md:text-md py-[10px] md:py-[12px] px-[20px] md:px-[22px] bg-primary-500 text-white hover:bg-primary-400"
        >
          <span class="inline-block relative ltr:pl-[29px] rtl:pr-[29px]">
            <i
              class="material-symbols-outlined ltr:left-0 rtl:right-0 absolute top-1/2 -translate-y-1/2"
            >
              add
            </i>
            Add Patient
          </span>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TextEditor from "@/components/Common/TextEditor.vue";

export default defineComponent({
  name: "AddPatient",
  components: {
    TextEditor,
  },
  setup() {
    const formData = ref({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      appointmentDate: "",
    });

    const files = ref<File[]>([]);
    const imagePreviews = ref<string[]>([]);

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files) {
        const newFiles = Array.from(input.files);
        newFiles.forEach((file) => {
          files.value.push(file);
          if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
              if (e.target?.result) {
                imagePreviews.value.push(e.target.result as string);
              }
            };
            reader.readAsDataURL(file);
          }
        });
      }
    };

    const removeFile = (index: number) => {
      files.value.splice(index, 1);
      imagePreviews.value.splice(index, 1);
    };

    const handleSubmit = () => {
      console.log("Form Data:", formData.value);
      console.log("Files:", files.value);
    };

    const resetForm = () => {
      formData.value = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        appointmentDate: "",
      };
      files.value = [];
      imagePreviews.value = [];
    };

    return {
      formData,
      files,
      imagePreviews,
      handleFileUpload,
      removeFile,
      handleSubmit,
      resetForm,
    };
  },
});
</script>
