from pydantic import BaseModel

class PromptRequest(BaseModel):
    ai_concept: str
    domain: str
    learner_level: str
    explanation_style: str
    scenario_depth: str
    include_workflow: bool
    include_future_scope: bool
    custom_requirements: str