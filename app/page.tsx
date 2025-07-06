import { BlogPostsPreview } from "app/components/posts";
import { ProjectsPostsPreview } from "app/components/projects";
import Skills from "./components/skills";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image src={"profile.jpg"} width={130} height={130} alt={"profile photo"} className="rounded-full mb-4"/>
      <h1 className="mb-8 text-2xl font-semibold tracking-normal">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Software Developer based in Dallas, TX, with a 
        background in Computer Science and Data Science from Iowa 
        State University. I have a passion for writing clean, 
        maintainable code, always prioritizing simplicity and 
        functionality. Keeping things simple is a big part of how I 
        approach both life and coding. This is where I share my 
        projects, ideas, and experiments, and I’m always looking to 
        connect with others who appreciate building thoughtful, 
        efficient solutions.`}
      </p>

      <div className="my-8">
        <h2 className="mb-4 text-lg font-semibold tracking-normal">
          Technical Skills
        </h2>
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          {/* <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Java
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {">_React"}
          </p> */}
          <Skills />
        </div>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-lg font-semibold tracking-normal">Blog</h2>
        <BlogPostsPreview />
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-lg font-semibold tracking-normal">
          Projects
        </h2>
        <ProjectsPostsPreview />
      </div>
    </section>
  );
}
