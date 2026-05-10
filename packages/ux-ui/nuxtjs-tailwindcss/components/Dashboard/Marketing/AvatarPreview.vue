<template>
  <div class="avatar-upload">
    <div class="avatar-edit">
      <input
        type="file"
        id="imageUpload"
        accept=".png, .jpg, .jpeg"
        @change="handleFileChange"
      />
      <label for="imageUpload"></label>
    </div>
    <div class="avatar-preview">
      <div
        id="imagePreview"
        :style="{ backgroundImage: `url(${previewImage})` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AvatarPreview",
  setup() {
    const previewImage = ref<string>(
      "https://angular.envytheme.com/trezo-mt/images/admin.png"
    );

    const handleFileChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            previewImage.value = e.target.result as string;
          }
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    return {
      previewImage,
      handleFileChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.avatar-upload {
  position: relative;
  max-width: 135px;
  .avatar-edit {
    position: absolute;
    right: -17px;
    bottom: -17px;
    z-index: 1;
    input {
      display: none;
      + label {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin-bottom: 0;
        border-radius: 100%;
        background: #ffffff;
        border: 1px solid transparent;
        box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        font-weight: normal;
        transition: var(--transition);
        font-size: 20px;
        &:after {
          content: "\ea13";
          font-family: remixicon !important;
          color: #757575;
          position: absolute;
          top: 0;
          left: 1px;
          right: 0;
          text-align: center;
          margin: auto;
        }
      }
    }
  }
  .avatar-preview {
    width: 135px;
    height: 135px;
    position: relative;
    border-radius: 4px;
    border: 6px solid #f8f8f8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    > div {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>
