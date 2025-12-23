import { Product } from "@/types/fakestore";

const API_BASE = "https://fakestoreapi.com";

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getAllProducts(): Promise<Product[]> {
  return fetchJson<Product[]>("/products");
}

export async function getCategories(): Promise<string[]> {
  return fetchJson<string[]>("/products/categories");
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return fetchJson<Product[]>(`/products/category/${encodeURIComponent(category)}`);
}

export async function getProductById(id: string | number): Promise<Product> {
  return fetchJson<Product>(`/products/${id}`);
}



