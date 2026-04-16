export async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
    next: { revalidate: 300 },
  });

  return res.json();
}