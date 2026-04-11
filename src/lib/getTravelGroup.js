export async function getTravelGroup(slug) {
  try {
    const groupRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/travelgroup/slug/${slug}`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!groupRes.ok) return null;

    const group = await groupRes.json();

    const seoRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${group._id}&referenceType=travelgroup`,
      {
        next: { revalidate: 300 },
      }
    );

    const seo = seoRes.ok ? await seoRes.json() : null;

    return {
      ...group,
      seo,
    };
  } catch (error) {
    console.error("Travelgroup fetch error:", error);
    return null;
  }
}