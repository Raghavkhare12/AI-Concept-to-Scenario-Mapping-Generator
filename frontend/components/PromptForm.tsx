"use client";
import toast from "react-hot-toast";
import { useState } from "react";
import { api } from "../lib/api";
import { Loader2 } from "lucide-react";
export default function PromptForm() {
  const [formData, setFormData] = useState({
    ai_concept: "Machine Learning",
    domain: "Healthcare",
    learner_level: "Beginner",
    explanation_style: "Analogy-Based",
    scenario_depth: "Basic",
    include_workflow: true,
    include_future_scope: true,
    custom_requirements: "",
  });

  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [recommendedTool, setRecommendedTool] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generatePrompt = async () => {
    try {
      setLoading(true);

      const response = await api.post(
        "/generate",
        formData
      );

      setGeneratedPrompt(
        response.data.generated_prompt
      );

      setRecommendedTool(
        response.data.recommended_tool
      );
    } catch (error) {
      console.error(error);
      alert("Failed to generate prompt");
    } finally {
      setLoading(false);
    }
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(
      generatedPrompt
    );

    toast.success("Prompt copied!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        AI Concept-to-Scenario Mapping Generator
      </h1>
      <p className="text-gray-400">
        Generate prompts that connect AI concepts with real-world industry scenarios.
      </p>
      <div className="grid gap-4">

        <select
          name="ai_concept"
          value={formData.ai_concept}
          onChange={handleChange}
          className="border border-gray-700 bg-gray-900 text-white p-3 rounded"
        >
          <option>Machine Learning</option>
          <option>Deep Learning</option>
          <option>Natural Language Processing</option>
          <option>Computer Vision</option>
          <option>OCR</option>
          <option>Recommendation Systems</option>
          <option>Chatbots</option>
          <option>Generative AI</option>
          <option>Predictive Analytics</option>
        </select>

        <select
          name="ai_concept"
          value={formData.ai_concept}
          onChange={handleChange}
          className="border border-gray-700 bg-gray-900 text-white p-3 rounded"
        >
          <option>Machine Learning</option>
          <option>Deep Learning</option>
          <option>Natural Language Processing</option>
          <option>Computer Vision</option>
          <option>OCR</option>
          <option>Recommendation Systems</option>
          <option>Chatbots</option>
          <option>Generative AI</option>
          <option>Predictive Analytics</option>
        </select>

        <select
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          className="border border-gray-700 bg-gray-900 text-white p-3 rounded"
        >
          <option>Healthcare</option>
          <option>Banking</option>
          <option>Insurance</option>
          <option>Education</option>
          <option>Retail</option>
          <option>Agriculture</option>
          <option>Manufacturing</option>
          <option>Transportation</option>
          <option>Cybersecurity</option>
          <option>E-Commerce</option>
        </select>

        <select
          name="learner_level"
          value={formData.learner_level}
          onChange={handleChange}
          className="border border-gray-700 bg-gray-900 text-white p-3 rounded"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <select
          name="explanation_style"
          value={formData.explanation_style}
          onChange={handleChange}
          className="border border-gray-700 bg-gray-900 text-white p-3 rounded"
        >
          <option>Analogy-Based</option>
          <option>Technical</option>
          <option>Business-Focused</option>
          <option>Student-Friendly</option>
        </select>

        <select
          name="scenario_depth"
          value={formData.scenario_depth}
          onChange={handleChange}
          className="border border-gray-700 bg-gray-900 text-white p-3 rounded"
        >
          <option>Basic</option>
          <option>Intermediate</option>
          <option>Detailed</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.include_workflow}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                include_workflow: e.target.checked,
              }))
            }
          />
          Include Workflow Explanation
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.include_future_scope}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                include_future_scope: e.target.checked,
              }))
            }
          />
          Include Future Applications
        </label>

        <textarea
          name="custom_requirements"
          value={formData.custom_requirements}
          onChange={handleChange}
          rows={4}
          placeholder="Additional instructions..."
          className="border border-gray-700 bg-gray-900 text-white p-3 rounded"
        />


        <button
          onClick={generatePrompt}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              Generating...
            </>
          ) : (
            "Generate Prompt"
          )}
        </button>
      </div>

      {generatedPrompt && (
        <div className="border rounded p-4 space-y-4">
          <h2 className="text-xl font-semibold">
            Generated Prompt
          </h2>

          <pre className="whitespace-pre-wrap text-sm max-h-96 overflow-y-auto">
            {generatedPrompt}
          </pre>

          <button
            onClick={copyPrompt}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Copy Prompt
          </button>
          <div className="border rounded p-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">
              Sample Run
            </h2>

            <p>
              <strong>AI Concept:</strong>{" "}
              {formData.ai_concept}
            </p>

            <p>
              <strong>Domain:</strong>{" "}
              {formData.domain}
            </p>

            <p>
              <strong>Learner Level:</strong>{" "}
              {formData.learner_level}
            </p>

            <p>
              <strong>Style:</strong>{" "}
              {formData.explanation_style}
            </p>

            <p>
              <strong>Depth:</strong>{" "}
              {formData.scenario_depth}
            </p>
          </div>
          </div>
        )}

      {recommendedTool && (
        <div className="border rounded p-4 space-y-3">
          <h2 className="text-xl font-semibold">
            Recommended AI Tool
          </h2>

          <p>
            <strong>Name:</strong>{" "}
            {recommendedTool.name}
          </p>

          <p>
            <strong>Reason:</strong>{" "}
            {recommendedTool.reason}
          </p>

          <a
            href={recommendedTool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            Open Tool
          </a>
        </div>
      )}
    </div>
  );
}