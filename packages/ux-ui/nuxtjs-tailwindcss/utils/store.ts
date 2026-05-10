import { reactive } from "vue";

interface StateStore {
  open: boolean;
  settings: boolean;
  task: boolean;
  label: boolean;
  card: boolean;
  active: boolean;
  onChange: () => void;
  settingsBtn: () => void;
  taskModal: () => void;
  cardModal: () => void;
  activeBtn: () => void;
}

const stateStore: StateStore = reactive({
  open: false,
  settings: false,
  task: false,
  label: false,
  card: false,
  active: false,
  onChange() {
    stateStore.open = !stateStore.open;
  },
  settingsBtn() {
    stateStore.settings = !stateStore.settings;
  },
  taskModal() {
    stateStore.task = !stateStore.task;
  },
  cardModal() {
    stateStore.card = !stateStore.card;
  },
  activeBtn() {
    stateStore.active = !stateStore.active;
  },
});

export default stateStore;
