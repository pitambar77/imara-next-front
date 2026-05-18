import TermCondition from "@/Pages/PrivacyPolicy/TermCondition";
import { getTermscondition } from "@/lib/getTermscondition";

export async function generateMetadata() {
  const data = await getTermscondition();

  if (!data) {
    return { title: "Page Not Found" };
  }

  // Fetch SEO from SEO collection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=termscondition`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || data.title,

    description: seo?.metaDescription || data.subtitle,

    keywords: seo?.keywords || "Privacy, enquiry",

    alternates: {
      canonical:
        seo?.canonicalUrl || "https://imarakilelenisafaris.com/terms-and-conditions",
    },

    openGraph: {
      title: seo?.metaTitle || data.title,

      description: seo?.metaDescription || data.subtitle,

      images: [seo?.ogImage || data.image],

      url: seo?.canonicalUrl || "https://imarakilelenisafaris.com/terms-and-conditions",
    },
  };
}

export default async function Page() {
  const landing = await getTermscondition();

  // Fetch SEO again for schema injection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${landing._id}&referenceType=termscondition`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();


  return (
    <>
      {/* Schema from Admin */}
      {seo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schemaMarkup),
          }}
        />
      )}

      <TermCondition landing={landing} />
    </>
  );
}
