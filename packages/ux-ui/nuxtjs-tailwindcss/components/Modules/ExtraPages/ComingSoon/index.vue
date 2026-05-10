<template>
  <div class="coming-soon-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="trezo-form ml-auto mr-auto">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
              <div
                class="coming-soon-timer text-center border-radius position-relative z-1"
                :style="{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }"
              >
                <h4 class="fw-light text-white">TIME LEFT UNTIL LAUNCHING</h4>
                <div class="countdown-container">
                  <div class="countdown-value lh-1 text-warning fw-bold">
                    {{ countdown.days }}
                  </div>
                  <div class="countdown-label fw-light lh-1">Days</div>
                  <div class="countdown-item position-relative d-inline-block">
                    <div class="countdown-value lh-1 text-warning fw-bold">
                      {{ countdown.hours }}
                    </div>
                    <div class="countdown-label fw-light lh-1">Hours</div>
                  </div>
                  <div class="countdown-item position-relative d-inline-block">
                    <div class="countdown-value lh-1 text-warning fw-bold">
                      {{ countdown.minutes }}
                    </div>
                    <div class="countdown-label fw-light lh-1">Minutes</div>
                  </div>
                  <div class="countdown-item position-relative d-inline-block">
                    <div class="countdown-value lh-1 text-warning fw-bold">
                      {{ countdown.seconds }}
                    </div>
                    <div class="countdown-label fw-light lh-1">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="coming-soon-content">
                <div class="logo">
                  <v-img src="@/assets/images/logo-big.svg" alt="logo" />
                  <v-img
                    src="@/assets/images/white-logo-big.svg"
                    class="d-none"
                    alt="logo"
                  />
                </div>
                <div class="title">
                  <h1 class="fw-semibold">
                    We're working on launching soon, stay tuned!
                  </h1>
                  <p>We're coming soon..</p>
                </div>
                <form>
                  <div class="trezo-form-group">
                    <v-label class="main-label d-block fw-medium text-black">
                      Be the first to know when our site is live
                    </v-label>
                    <v-text-field label="example@trezo.com"></v-text-field>
                  </div>
                  <v-btn type="button">
                    <v-icon>mdi-autorenew</v-icon>
                    Send
                  </v-btn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";

import bgImage from "@/assets/images/coming-soon.jpg";

export default defineComponent({
  name: "ComingSoon",
  setup() {
    const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    let countdownInterval: ReturnType<typeof setInterval> | undefined;

    const startCountdown = () => {
      const targetDate = new Date("2025-12-31T23:59:59").getTime();

      countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
          countdown.value.days = Math.floor(
            timeDifference / (1000 * 60 * 60 * 24)
          );
          countdown.value.hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          countdown.value.minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          countdown.value.seconds = Math.floor(
            (timeDifference % (1000 * 60)) / 1000
          );
        } else {
          countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          clearInterval(countdownInterval);
        }
      }, 1000);
    };

    onMounted(() => {
      startCountdown();
    });

    onBeforeUnmount(() => {
      clearInterval(countdownInterval);
    });

    return {
      image: bgImage,
      countdown,
    };
  },
});
</script>

<style lang="scss" scoped>
.coming-soon-area {
  background-color: var(--whiteColor);
  overflow-x: hidden;
  height: 100vh;
  padding: {
    top: 30px;
    bottom: 30px;
  }
  &.dark-theme {
    background-color: #0a0e19;
  }
  .trezo-form {
    max-width: 1255px;
    padding: {
      left: 12.5px;
      right: 12.5px;
    }
    .coming-soon-timer {
      margin-right: -25px;
      padding: 180px 50px;
      background: {
        size: cover;
        repeat: no-repeat;
        position: center center;
      }
      &::before {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        content: "";
        opacity: 0.7;
        border-radius: 7px;
        position: absolute;
        background: #000000;
      }
      h4 {
        letter-spacing: 4.5px;
        margin-bottom: 25px;
      }
      .countdown-container {
        .countdown-value {
          margin-bottom: 5px;
          font-size: 100px;
        }
        .countdown-label {
          font-size: 16px;
          color: #f5f2f5;
        }
        .countdown-item {
          margin: {
            top: 30px;
            left: 30px;
            right: 30px;
          }
          .countdown-value {
            margin-bottom: 10px;
            font-size: 42px;
          }
          .countdown-label {
            font-size: 14px;
          }
          &::before {
            top: 50%;
            right: -33px;
            content: ":";
            line-height: 1;
            font-size: 30px;
            margin-top: -15px;
            position: absolute;
            color: var(--whiteColor);
            transform: translateY(-50%);
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;

            &::before {
              display: none;
            }
          }
        }
      }
    }
    .coming-soon-content {
      padding-left: 90px;

      .title {
        margin: {
          top: 23px;
          bottom: 25px;
        }
        h1 {
          font-size: 36px;
          margin-bottom: 12px;
        }
        p {
          font-size: 16px;
          line-height: 1.5;
        }
      }
      form {
        .trezo-form-group {
          margin-bottom: 17px;

          .v-label {
            margin-bottom: 12px;
          }
        }
        button {
          width: 100%;
          height: auto;
          min-width: auto;
          padding: 12px 25px;
          border-radius: 7px;
          color: var(--whiteColor);
          background-color: var(--primaryColor);
          display: flex;
          align-items: center;
          justify-content: center;

          & {
            font: {
              size: 16px;
              weight: 500;
            }
          }
          i {
            margin-right: 5px;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .coming-soon-area {
    .trezo-form {
      max-width: 100%;

      .coming-soon-timer {
        padding: 60px 17px;
        margin: {
          right: 0;
          bottom: 25px;
        }
        h4 {
          letter-spacing: 1.5px;
          margin-bottom: 17px;
        }
        .countdown-container {
          .countdown-value {
            font-size: 50px;
          }
          .countdown-label {
            font-size: 14px;
          }
          .countdown-item {
            margin: {
              top: 20px;
              left: 20px;
              right: 20px;
            }
            .countdown-value {
              margin-bottom: 8px;
              font-size: 30px;
            }
            .countdown-label {
              font-size: 13px;
            }
            &::before {
              right: -24px;
              font-size: 25px;
              margin-top: -12px;
            }
          }
        }
      }
      .coming-soon-content {
        padding-left: 0;

        .title {
          margin: {
            top: 17px;
            bottom: 15px;
          }
          h1 {
            font-size: 22px;
          }
          p {
            font-size: 13px;
          }
        }
        form {
          .form-group {
            .v-label {
              margin-bottom: 10px;
            }
          }
          button {
            padding: 12px 25px;
            font-size: 13px;
            i {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .coming-soon-area {
    .trezo-form {
      max-width: 540px;

      .coming-soon-content {
        .title {
          margin: {
            top: 20px;
            bottom: 17px;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .coming-soon-area {
    .trezo-form {
      max-width: 720px;

      .coming-soon-timer {
        padding: 100px 30px;
        margin: {
          right: 0;
          bottom: 25px;
        }
      }
      .coming-soon-content {
        padding-left: 0;

        .title {
          margin: {
            top: 20px;
            bottom: 20px;
          }
          h1 {
            font-size: 24px;
          }
          p {
            font-size: 14px;
          }
        }
        form {
          button {
            font-size: 14px;
            padding: 12px 25px;
            i {
              font-size: 22px;
            }
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .coming-soon-area {
    .trezo-form {
      max-width: 960px;

      .coming-soon-timer {
        margin-right: 0;
        padding: 150px 30px;

        h4 {
          letter-spacing: 2.5px;
        }
      }
      .coming-soon-content {
        padding-left: 15px;

        .title {
          h1 {
            font-size: 26px;
          }
          p {
            font-size: 15px;
          }
        }
        form {
          button {
            font-size: 15px;
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .coming-soon-area {
    .trezo-form {
      max-width: 1140px;

      .coming-soon-timer {
        margin-right: 0;
      }
      .coming-soon-content {
        padding-left: 25px;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .coming-soon-area {
    .trezo-form {
      .form-image {
        margin-right: -45px;
      }
      .coming-soon-content {
        padding-left: 120px;
      }
    }
  }
}
</style>
