<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" style="max-width: 738px">
      <div class="modal-content p-4 p-md-5">
        <div class="modal-header p-0 border-0">
          <h3 class="mb-0">Add Card Detail</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-0 pt-4">
          <form action="">
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Full Name</label>
                  <input
                    type="text"
                    class="form-control h-55"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Card Number</label>
                  <input
                    type="text"
                    class="form-control h-55"
                    placeholder="Enter card number"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">Expiry Date</label>
                  <input type="date" class="form-control h-55" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-4">
                  <label class="label text-secondary">CVV</label>
                  <input
                    type="number"
                    class="form-control h-55"
                    placeholder="212"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer border-0 p-0">
          <button
            type="button"
            class="btn btn-danger text-white px-3"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-primary hover-bg px-3">
            Add Card
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddCardDetailModal",
});
</script>
