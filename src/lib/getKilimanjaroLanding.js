export async function getKilimanjaroLanding() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/kilimanjarolanding`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Kilimanjaro landing");
  }

  const data = await res.json();

  return data?.[0] || null;
}