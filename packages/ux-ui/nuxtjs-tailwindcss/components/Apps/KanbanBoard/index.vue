<template>
  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
    <div>
      <!-- To Do -->
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0">To Do</h5>
          </div>
        </div>
        <div class="trezo-card-content">
          <div
            class="bg-purple-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                Project Requirements
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user6.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user7.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user8.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 5 days left </span>
            </div>
          </div>
          <div
            class="bg-secondary-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                WordPress Theme
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user9.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user10.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 6 days left </span>
            </div>
          </div>
          <div
            class="bg-success-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                UX/UI Design
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user11.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user12.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user13.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 7 days left </span>
            </div>
          </div>
          <div
            class="bg-orange-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                Project Analysis
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user14.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user15.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 8 days left </span>
            </div>
          </div>
          <div
            class="bg-primary-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                Competitor Research
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user16.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user17.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 9 days left </span>
            </div>
          </div>

          <button
            type="button"
            class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
            @click="stateStoreInstance.activeBtn"
          >
            <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
              <i
                class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
              >
                add
              </i>
              Add New Card
            </span>
          </button>
        </div>
      </div>
    </div>

    <div>
      <!-- Doing -->
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0">Doing</h5>
          </div>
        </div>
        <div class="trezo-card-content">
          <div
            class="bg-orange-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                React Template
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user18.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user19.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 5 days left </span>
            </div>
          </div>
          <div
            class="bg-purple-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                Laravel Project
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user10.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user21.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user22.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 6 days left </span>
            </div>
          </div>
          <div
            class="bg-danger-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                Project Requirements
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user23.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 7 days left </span>
            </div>
          </div>
          <div
            class="bg-success-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                UX/UI Design
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user24.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user25.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 8 days left </span>
            </div>
          </div>

          <button
            type="button"
            class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
            @click="stateStoreInstance.activeBtn"
          >
            <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
              <i
                class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
              >
                add
              </i>
              Add New Card
            </span>
          </button>
        </div>
      </div>
    </div>

    <div>
      <!-- Done -->
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0">Done</h5>
          </div>
        </div>
        <div class="trezo-card-content">
          <div
            class="bg-primary-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                Admin Template
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user26.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user27.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user28.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 5 days left </span>
            </div>
          </div>
          <div
            class="bg-purple-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                eCommerce Template
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user29.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user30.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 6 days left </span>
            </div>
          </div>
          <div
            class="bg-success-100 dark:bg-[#15203c] rounded-md mb-[20px] md:mb-[25px] p-[20px] md:p-[25px]"
          >
            <div
              class="flex justify-between items-center mb-[8px] md:mb-[12px]"
            >
              <span class="text-black dark:text-white block font-semibold">
                Shopify Theme
              </span>
              <button
                type="button"
                class="inline-block transition-all text-black dark:text-white hover:text-primary-500"
              >
                <i class="material-symbols-outlined !text-lg"> edit </i>
              </button>
            </div>
            <p>
              A brief description of the project, its objectives, and its
              importance to the organization.
            </p>
            <div class="flex items-center justify-between md:mt-[20px]">
              <div class="flex items-center">
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user11.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user12.jpg"
                />
                <img
                  alt="user-image"
                  class="rounded-full w-[34px] h-[34px] border-[2px] border-white dark:border-[#0c1427] ltr:-mr-[10px] rtl:-ml-[10px] ltr:last:mr-0 rtl:last:ml-0"
                  src="@/assets/images/users/user13.jpg"
                />
              </div>
              <span class="block text-secondary-500"> 7 days left </span>
            </div>
          </div>

          <button
            type="button"
            class="inline-block transition-all rounded-md font-medium px-[13px] py-[6px] text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white"
            @click="stateStoreInstance.activeBtn"
          >
            <span class="inline-block relative ltr:pl-[22px] rtl:pr-[22px]">
              <i
                class="material-symbols-outlined !text-[22px] absolute ltr:-left-[4px] rtl:-right-[4px] top-1/2 -translate-y-1/2"
              >
                add
              </i>
              Add New Card
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "@/utils/store";

export default defineComponent({
  name: "KanbanBoard",
  setup() {
    const stateStoreInstance = stateStore;

    return {
      stateStoreInstance,
    };
  },
});
</script>
