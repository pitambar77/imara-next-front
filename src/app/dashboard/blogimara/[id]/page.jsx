import BlogImaraForm from "@/components/Blogs/BlogImaraForm";


export default async function Page({ params }) {
  const { id } =await params;
  return <BlogImaraForm id={id} />;
}