<template>
  <div
    class="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md"
  >
    <div
      class="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between"
    >
      <div class="trezo-card-title">
        <h5 class="!mb-0">Recent Lab Reports</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="table-responsive overflow-x-auto">
        <table class="w-full">
          <tbody class="text-black dark:text-white">
            <tr v-for="(report, index) in reports" :key="index">
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <div class="flex items-center gap-[10px]">
                  <div class="w-[28px]">
                    <img
                      :src="getFileIcon(report.fileName)"
                      class="inline-block"
                      alt="file-icon"
                    />
                  </div>
                  <div>
                    <span class="font-semibold inline-block mb-[3px]">
                      {{ report.fileName }}
                    </span>
                    <span
                      class="block text-gray-500 dark:text-gray-400 text-xs"
                    >
                      submitted by
                      <span class="text-black dark:text-white">
                        {{ report.submittedBy }}
                      </span>
                      <!-- <span v-if="report.date" class="ml-1">
                        on {{ formatDate(report.date) }}
                      </span> -->
                    </span>
                  </div>
                </div>
              </td>
              <td
                class="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[11px] ltr:first:pl-0 rtl:first:pr-0 border-b border-primary-50 dark:border-[#172036] ltr:last:pr-0 rtl:last:pl-0 ltr:last:text-right rtl:last:text-left"
              >
                <button
                  type="button"
                  class="lh-1 inline-block text-primary-500 text-[20px]"
                  @click="handleDownload(report)"
                >
                  <i class="ri-download-2-line"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "@/assets/images/icons/pdf.png";
import image2 from "@/assets/images/icons/jpg.png";
import image3 from "@/assets/images/icons/doc.png";

interface LabReport {
  fileName: string;
  submittedBy: string;
  date?: Date | string;
  fileType?: string;
  downloadUrl?: string;
}

export default defineComponent({
  name: "RecentLabReports",
  setup() {
    const reports = ref<LabReport[]>([
      {
        fileName: "Blood Report.pdf",
        submittedBy: "Andrew",
        date: new Date(),
      },
      {
        fileName: "X-ray Report.jpg",
        submittedBy: "Joanna",
        date: new Date(Date.now() - 86400000), // Yesterday
      },
      {
        fileName: "Creatinine Report.pdf",
        submittedBy: "David",
        date: new Date(Date.now() - 172800000), // 2 days ago
      },
      {
        fileName: "Blood Report.pdf",
        submittedBy: "Zinia",
        date: new Date(Date.now() - 259200000), // 3 days ago
      },
      {
        fileName: "ECG Report.doc",
        submittedBy: "Bella",
        date: new Date(Date.now() - 345600000), // 4 days ago
      },
      {
        fileName: "Blood Report.pdf",
        submittedBy: "Jonathon",
        date: new Date(Date.now() - 432000000), // 5 days ago
      },
    ]);

    const getFileIcon = (fileName: string): string => {
      const extension = fileName.split(".").pop()?.toLowerCase();
      switch (extension) {
        case "pdf":
          return image1;
        case "jpg":
        case "jpeg":
          return image2;
        case "doc":
        case "docx":
          return image3;
        default:
          return image1;
      }
    };

    const formatDate = (date: Date | string): string => {
      if (!date) return "";
      const d = new Date(date);
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    };

    const handleDownload = (report: LabReport) => {
      console.log("Downloading:", report.fileName);
      // Add your download logic here
    };

    return {
      reports,
      getFileIcon,
      formatDate,
      handleDownload,
    };
  },
});
</script>
