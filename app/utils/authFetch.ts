// utils/authFetch.ts
export const authFetch = async (url: string, token: string, options = {}) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    ...(options as any).headers,
  };

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    if (res.status === 401) {
      throw new Error("Unauthorized");
    }
    throw new Error("Request failed");
  }

  return res.json();
};
