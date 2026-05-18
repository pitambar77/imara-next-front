
export async function getTermscondition() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/termscondition`,
      {
        next: { revalidate: 300 },
      }
    );

    const data = await res.json();

    return data?.[0] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}