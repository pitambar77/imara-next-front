// import TeamPage from "@/Pages/Team/TeamPage";


// export default function Page() {
//   return <TeamPage />;
// }

import TeamPage from "@/Pages/Team/TeamPage";

/* ================= FETCH TEAM DATA ================= */

export async function getTeamData() {
  const res = await fetch(
    "https://imarabackend.imarakilelenisafaris.com/api/team",
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch team data");
  }

  const data = await res.json();
  return data[0];
}

/* ================= METADATA ================= */

export async function generateMetadata() {
  const teamData = await getTeamData();

  if (!teamData) {
    return { title: "Team Page Not Found" };
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${teamData._id}&referenceType=team`,
    { next: { revalidate: 300 } }
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || teamData.title,
    description: seo?.metaDescription || teamData.subtitle,
    keywords: seo?.keywords,

    alternates: {
      canonical:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/team",
    },

    openGraph: {
      title: seo?.metaTitle || teamData.title,
      description: seo?.metaDescription || teamData.subtitle,
      images: [seo?.ogImage || teamData.image],
      url:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/team",
    },
  };
}

/* ================= PAGE ================= */

export default async function Page() {
  const teamData = await getTeamData();

  if (!teamData) {
    return <div>Team page not found</div>;
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${teamData._id}&referenceType=team`,
    { next: { revalidate: 300 } }
  );

  const seo = await seoRes.json();

  return (
    <>
      {seo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schemaMarkup),
          }}
        />
      )}

      <TeamPage page={teamData} />
    </>
  );
}