export async function getZanzibarLanding() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/zanzibardetails`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Zanzibar landing data");
  }

  const data = await res.json();

  return data?.[0] || null;
}