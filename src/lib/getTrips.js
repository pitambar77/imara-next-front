export async function getTrips() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/packages`, {
    next: { revalidate: 300 }, // cache for 60 seconds
  });

  if (!res.ok) {
    throw new Error("Failed to fetch trips");
  }

  return res.json();
}