<template>
  <EventDetailsImage />
  <div class="2xl:grid 2xl:grid-cols-5 gap-[25px]">
    <div class="2xl:col-span-3">
      <div
        class="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md"
      >
        <div
          class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
        >
          <div class="trezo-card-title">
            <h5 class="!mb-0">Event Details</h5>
          </div>
        </div>
        <div class="trezo-card-content">
          <span
            class="block text-black dark:text-white font-semibold mb-[10px]"
          >
            Annual Conference 2025
          </span>
          <p>
            The Annual Conference 2025 is a flagship event organized by ABC
            Corporation. This conference aims to bring together industry
            leaders, experts, and enthusiasts to discuss the latest trends,
            innovations, and challenges in our field. Participants can expect
            insightful keynote sessions, engaging panel discussions, and
            valuable networking opportunities.
          </p>
          <div class="md:flex items-center mt-[20px]">
            <div
              class="flex items-center ltr:mr-[30px] rtl:ml-[30px] ltr:last:mr-0 rtl:last:ml-0 mt-[20px] md:mt-0"
            >
              <div
                class="rounded-full text-primary-500 flex items-center justify-center bg-[#f4f6fc] dark:bg-[#15203c] w-[70px] h-[70px]"
              >
                <i class="material-symbols-outlined !text-[35px]"> schedule </i>
              </div>
              <div class="ltr:ml-[15px] rtl:mr-[15px]">
                <span class="block text-black dark:text-white font-semibold">
                  Time
                </span>
                <span class="block mt-[3px]"> 01 Dec 2025, 09:00 AM </span>
              </div>
            </div>
            <div
              class="flex items-center ltr:mr-[30px] rtl:ml-[30px] ltr:last:mr-0 rtl:last:ml-0 mt-[20px] md:mt-0"
            >
              <div
                class="rounded-full text-info-500 flex items-center justify-center bg-[#f4f6fc] dark:bg-[#15203c] w-[70px] h-[70px]"
              >
                <i class="material-symbols-outlined !text-[35px]"> place </i>
              </div>
              <div class="ltr:ml-[15px] rtl:mr-[15px]">
                <span class="block text-black dark:text-white font-semibold">
                  Location
                </span>
                <span class="block mt-[3px]"> Convention Center </span>
              </div>
            </div>
            <div
              class="flex items-center ltr:mr-[30px] rtl:ml-[30px] ltr:last:mr-0 rtl:last:ml-0 mt-[20px] md:mt-0"
            >
              <div
                class="rounded-full text-purple-500 flex items-center justify-center bg-[#f4f6fc] dark:bg-[#15203c] w-[70px] h-[70px]"
              >
                <i class="material-symbols-outlined !text-[35px]">
                  event_seat
                </i>
              </div>
              <div class="ltr:ml-[15px] rtl:mr-[15px]">
                <span class="block text-black dark:text-white font-semibold">
                  Event Seat
                </span>
                <span class="block mt-[3px]"> 50 </span>
              </div>
            </div>
          </div>
          <div
            class="mt-[20px] md:mt-[30px] pt-[10px] md:pt-[20px] border-t border-dashed border-gray-100 dark:border-[#172036]"
          >
            <button
              type="button"
              class="inline-block rounded-md font-medium md:text-md bg-primary-500 border border-primary-500 text-white py-[11px] px-[27px] transition-all hover:bg-primary-400 hover:border-primary-400 mt-[10px] ltr:mr-[6px] rtl:ml-[6px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <span class="flex items-center">
                <i
                  class="material-symbols-outlined !text-[20px] ltr:mr-[8px] rtl:ml-[8px]"
                >
                  local_activity
                </i>
                Get Ticket
              </span>
            </button>
            <button
              type="button"
              class="inline-block rounded-md font-medium md:text-md border border-gray-100 dark:border-[#172036] py-[11px] px-[27px] transition-all hover:border-primary-500 mt-[10px] ltr:mr-[6px] rtl:ml-[6px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <span class="flex items-center">
                <i
                  class="material-symbols-outlined !text-[20px] ltr:mr-[8px] rtl:ml-[8px]"
                >
                  event
                </i>
                Add To Calendar
              </span>
            </button>
            <button
              type="button"
              class="inline-block rounded-md font-medium md:text-md border border-gray-100 dark:border-[#172036] py-[11px] px-[27px] transition-all hover:border-primary-500 mt-[10px] ltr:mr-[6px] rtl:ml-[6px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <span class="flex items-center">
                <i
                  class="material-symbols-outlined !text-[20px] ltr:mr-[8px] rtl:ml-[8px]"
                >
                  favorite_border
                </i>
                5937
              </span>
            </button>
            <button
              type="button"
              class="inline-block rounded-md font-medium md:text-md border border-gray-100 dark:border-[#172036] py-[11px] px-[27px] transition-all hover:border-primary-500 mt-[10px] ltr:mr-[6px] rtl:ml-[6px] ltr:last:mr-0 rtl:last:ml-0"
            >
              <span class="flex items-center">
                <i
                  class="material-symbols-outlined !text-[20px] ltr:mr-[8px] rtl:ml-[8px]"
                >
                  share
                </i>
                2582
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="2xl:col-span-2">
      <EventInfo />
    </div>
  </div>
  <div class="lg:grid lg:grid-cols-2 gap-[25px] mb-[25px]">
    <AboutThisEvent />

    <Speakers />
  </div>
</template>

<script>
import EventDetailsImage from "./EventDetailsImage.vue";
import EventInfo from "./EventInfo.vue";
import AboutThisEvent from "./AboutThisEvent.vue";
import Speakers from "./Speakers.vue";

export default {
  name: "EventDetails",
  components: {
    EventDetailsImage,
    EventInfo,
    AboutThisEvent,
    Speakers,
  },
};
</script>

<style lang="scss">
.event-details-card {
  .event-details-content {
    .title {
      margin-bottom: 12px;
    }
    .info {
      margin-top: 20px;

      .icon {
        width: 70px;
        height: 70px;
        margin-right: 15px;
        background-color: #f4f6fc;

        i {
          left: 0;
          right: 0;
          top: 50%;
          font-size: 35px;
          margin-top: -1px;
          position: absolute;
          transform: translateY(-50%);
        }
      }
      span {
        &:not(:first-child) {
          margin-top: 6px;
        }
      }
      .d-flex {
        margin-right: 25px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
    .form-btn-box {
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px dashed #e0e0e0;
      button {
        color: var(--bodyColor);
        border-color: var(--primaryColor);
        background-color: var(--whiteColor);
        border: 1px solid #c2cada;
        &:nth-child(1) {
          color: var(--whiteColor) !important;
          border-color: var(--primaryColor) !important;
          background-color: var(--primaryColor) !important;
        }
        &:last-child {
          margin-right: 0 !important;
        }
        &:hover {
          color: var(--whiteColor);
          border-color: var(--primaryColor);
          background-color: var(--primaryColor);
          border: 1px solid var(--primaryColor);
        }
      }
    }
    h5 {
      margin: {
        bottom: 18px;
        top: 25px;
      }
    }
    .list {
      li {
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .features-list {
      margin-top: 20px;

      li {
        margin-bottom: 12px;
        padding-left: 15px;

        &::before {
          left: 0;
          top: 50%;
          width: 6px;
          height: 6px;
          content: "";
          position: absolute;
          border-radius: 50%;
          transform: translateY(-50%);
          background: var(--primaryColor);
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .event-details-card {
    .event-details-content {
      .info {
        margin-top: 0;

        .d-flex {
          margin: {
            top: 15px;
            right: 0;
          }
        }
        .icon {
          width: 55px;
          height: 55px;
          margin-right: 12px;

          i {
            font-size: 30px;
            margin-top: 0;
          }
        }
      }
      .form-btn-box {
        margin-top: 15px;
        padding-top: 5px;
      }
      h5 {
        margin: {
          bottom: 12px;
          top: 20px;
        }
      }
      .list {
        li {
          margin-bottom: 12px;
        }
      }
      .features-list {
        margin-top: 15px;

        li {
          margin-bottom: 12px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .event-details-card {
    .event-details-content {
      .info {
        margin-top: 20px;

        .icon {
          width: 65px;
          height: 65px;

          i {
            font-size: 40px;
          }
        }
      }
      .form-btn-box {
        margin-top: 25px;
        padding-top: 25px;
      }
      h5 {
        margin: {
          bottom: 15px;
          top: 25px;
        }
      }
    }
  }
}
</style>
