import BlogDetail from "@/Pages/Travelguide/BlogDetail";


export default async function Page({ params }) {
  const { slug } = await params;

  return <BlogDetail slug={slug} />;
}