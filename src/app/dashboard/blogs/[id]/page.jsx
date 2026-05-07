import BlogCreateForm from "@/components/Blogs/BlogCreateForm";


export default async function Page({ params }) {
  const { id } =await params;
  return <BlogCreateForm id={id} />;
}