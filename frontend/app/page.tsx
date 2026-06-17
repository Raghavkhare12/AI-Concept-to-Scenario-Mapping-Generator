import PromptForm from "../components/PromptForm";
import ProjectExplanation from "../components/ProjectExplanation";

export default function Home() {
  return (
    <main className="min-h-screen p-8 space-y-8">
      <PromptForm />
      <div className="max-w-4xl mx-auto">
       <ProjectExplanation />
      </div>
    </main>
  );
}