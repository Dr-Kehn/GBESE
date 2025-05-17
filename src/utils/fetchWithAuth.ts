export async function fetchWithAuth<T = any>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  
    const headers = new Headers(options.headers || {});
    headers.set("Content-Type", "application/json");
  
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  
    const response = await fetch(url, {
      ...options,
      headers,
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data?.message || "Request failed");
    }
  
    return data;
  }
  