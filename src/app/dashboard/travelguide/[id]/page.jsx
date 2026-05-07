import BlogForm from "@/components/BlogForm";

export default async function Page({ params }) {
  const { id } = await params;
  return <BlogForm id={id} />;
}
