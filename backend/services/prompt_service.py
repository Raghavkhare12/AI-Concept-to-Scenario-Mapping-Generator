from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_prompt(data):

    instruction = f"""
You are an AI Educator and Industry Expert.

Generate a high-quality prompt that explains how an AI concept is applied in a real-world industry scenario.

AI Concept:
{data.ai_concept}

Industry Domain:
{data.domain}

Learner Level:
{data.learner_level}

Explanation Style:
{data.explanation_style}

Scenario Depth:
{data.scenario_depth}

Additional Requirements:
{data.custom_requirements}

The generated prompt should ask the AI to provide:

1. Concept Overview
2. Beginner-Friendly Explanation
3. Real Industry Scenario
4. Step-by-Step Workflow
5. Analogy-Based Explanation
6. Benefits
7. Challenges
"""

    if data.include_workflow:
        instruction += """
8. Workflow Explanation
"""

    if data.include_future_scope:
        instruction += """
9. Future Applications
"""

    instruction += """

Adjust explanation according to learner level.

For beginners:
- Use simple language
- Use analogies

For advanced learners:
- Include technical details

Return only the final prompt.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": instruction
            }
        ],
        temperature=0.5
    )

    return response.choices[0].message.content