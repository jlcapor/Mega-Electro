import { create } from "zustand";

export type Modal = "login" | "signup" | "search" | "facets-mobile";

interface ModalStore {
  modals: Partial<Record<Modal, boolean>>
  openModal: (modal: Modal) => void
  closeModal: (modal: Modal) => void
  closeAllModals: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
  modals: {},

  openModal: (modalId: Modal) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: true },
    })),

  closeModal: (modalId: Modal) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: false },
  })),

  closeAllModals: () =>
    set((state) => ({
      modals: (Object.keys(state.modals) as Modal[]).reduce(
        (acc, modal) => {
          acc[modal] = false;
          return acc;
        },
        {} as Partial<Record<Modal, boolean>>,
      ),
    })),
}));
