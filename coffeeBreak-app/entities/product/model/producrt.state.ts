import { atom } from 'jotai';
import { Product } from './product.model';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';

export const productAtom = atom<ProductState>({
  products: [],
  isLoading: false,
  error: null,
});

export const loadProducrtAtom = atom(
  async (get) => {
    return get(productAtom);
  },
  async (get, set, request: string) => {
    try {
      set(productAtom, {
        isLoading: true,
        products: [],
        error: null,
      });
      const { data } = await axios.get<Product[]>(request);
      set(productAtom, {
        isLoading: false,
        products: data,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(productAtom, {
          isLoading: false,
          products: [],
          error: error.request?.data.message,
        });
      }
    }
  }
);

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}
