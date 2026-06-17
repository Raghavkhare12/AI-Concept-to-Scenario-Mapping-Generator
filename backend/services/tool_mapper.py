TOOLS = {
    "education": {
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "reason": "Excellent for educational explanations."
    },

    "research": {
        "name": "Perplexity",
        "url": "https://www.perplexity.ai",
        "reason": "Provides citations and real-world examples."
    },

    "detailed": {
        "name": "Claude",
        "url": "https://claude.ai",
        "reason": "Strong long-form explanations."
    }
}

def get_tool(data):

    if data.learner_level == "Advanced":
        return TOOLS["detailed"]

    if data.domain in [
        "Healthcare",
        "Banking",
        "Cybersecurity"
    ]:
        return TOOLS["research"]

    return TOOLS["education"]