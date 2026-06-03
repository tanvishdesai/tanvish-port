"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  
  // repoName is an array like ['tanvishdesai', 'repo-name']
  const repoNameArray = params.repoName as string[];
  const repoName = repoNameArray ? decodeURIComponent(repoNameArray.join('/')) : "";

  const project = useQuery(api.projects.getProjectByRepoName, { repoName });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fafafa] pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <button 
            onClick={() => router.back()}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </button>

          {project === undefined ? (
            <div className="animate-pulse space-y-4">
              <div className="h-8 w-1/3 bg-black/5 rounded"></div>
              <div className="h-4 w-2/3 bg-black/5 rounded"></div>
              <div className="h-64 w-full bg-black/5 rounded mt-8"></div>
            </div>
          ) : project === null ? (
            <div className="py-20 text-center">
              <h1 className="text-2xl font-bold">Project Not Found</h1>
              <p className="mt-2 text-black/60">We couldn't find a project matching this repository.</p>
            </div>
          ) : (
            <article>
              <header className="mb-10">
                <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl">{project.title}</h1>
                <p className="mt-4 text-lg text-black/70 leading-relaxed">{project.abstract || project.classification}</p>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-outline inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-black/80 bg-white"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                  {project.topics?.map(topic => (
                    <span key={topic} className="ghost-chip px-3 py-2 text-xs font-mono text-black/75 bg-black/5 rounded-md">
                      {topic}
                    </span>
                  ))}
                </div>
              </header>

              <div className="prose prose-slate prose-img:rounded-xl prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
                {project.readmeContent ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {project.readmeContent}
                  </ReactMarkdown>
                ) : (
                  <div className="text-center py-10 text-black/50 italic">
                    README content is being synced from GitHub...
                  </div>
                )}
              </div>
            </article>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
