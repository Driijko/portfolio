import { writable } from "svelte/store";

function createModals() {
  const {subscribe, update} = writable({
    siteMenu: false,
  });

  return {
    subscribe,
    open: modal => update((modals) => {
      return {...modals, [modal]: true};
    }),
    close: modal => update(modals => {
      return {...modals, [modal]: false};
    }),
  }
}

export const modals = createModals();