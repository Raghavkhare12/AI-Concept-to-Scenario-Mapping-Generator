export default function ProjectExplanation() {
  return (
    <div className="border rounded p-4 space-y-3">
      <h2 className="text-2xl font-bold">
        Design Decisions
      </h2>

      <div>
        <h3 className="font-semibold">
          Input Fields
        </h3>

        <p>
          AI concept, industry domain, learner level, and explanation style were selected to bridge theory and practical applications.
        </p>
      </div>

      <div>
        <h3 className="font-semibold">
          Prompt Structure
        </h3>

        <p>
         The prompt forces the AI to connect abstract AI concepts with realistic industry workflows and examples.  
        </p>
      </div>

      <div>
        <h3 className="font-semibold">
          Tool Recommendation
        </h3>

        <p>
          ChatGPT is recommended for learning, Perplexity for cited examples, and Claude for advanced technical explanations.
        </p>
      </div>
    </div>
  );
}