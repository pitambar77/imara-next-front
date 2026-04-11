export async function getDestinationLanding() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/destinationlanding`,
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch destination landing");
  }

  const data = await res.json();

  return data?.[0] || null;
}
