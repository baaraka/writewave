import Categories from "@/components/Categories";
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 mt-24">
      <h1 className="font-bold text-4xl md:text-5xl">
        Hey {"it's"} BarakaCodes here. Discover creative ideas and top stories
        that make headlines around the world.
      </h1>

      <Categories />
      <div className="flex gap-12">
        <PostList />
      </div>
    </main>
  );
}
