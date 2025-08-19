import { create } from 'zustand';

type UiState = {
    cartOpen: boolean;
    setCartOpen: (o: boolean) => void;
};

export const useUi = create<UiState>((set) => ({
    cartOpen: false,
    setCartOpen: (cartOpen) => set({ cartOpen }),
}));