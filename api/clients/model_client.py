# /api/clients/model_client.py

import os
import time
from typing import Optional

class Config:
    """Centralized config for API keys and model settings."""
    API_KEY: Optional[str] = os.getenv("FOUNDATION_MODEL_API_KEY", "your_api_key_here")
    MODEL_NAME: str = os.getenv("FOUNDATION_MODEL_NAME", "foundation-model-name")
    PROVIDER: str = os.getenv("FOUNDATION_MODEL_PROVIDER", "openai")

class ModelClient:
    """A simple wrapper for calling foundation models."""

    def __init__(self, api_key: str, model_name: str, provider: str = "openai"):
        self.api_key = api_key
        self.model_name = model_name
        self.provider = provider

    def call_model(self, prompt: str, max_tokens: int = 500, temperature: float = 0.7) -> str:
        """
        Sends a prompt to the foundation model and returns the response.
        Right now this simulates a call, but you'll plug in the real provider later.
        """
        print(f"\n[INFO] Sending prompt to {self.provider.upper()} model `{self.model_name}`...")
        time.sleep(0.5)  # simulate latency
        return f"<< simulated {self.provider} response to: {prompt} >>"
