from fastapi import APIRouter

from schemas.prompt_schema import PromptRequest
from services.prompt_service import generate_prompt
from services.tool_mapper import get_tool

router = APIRouter()

@router.post("/generate")
def generate(data: PromptRequest):

    prompt = generate_prompt(data)

    tool = get_tool(data)

    return {
        "generated_prompt": prompt,
        "recommended_tool": tool
    }