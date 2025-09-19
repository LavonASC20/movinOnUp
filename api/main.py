# /api/main.py

import sys
from clients.model_client import Config, ModelClient

def main():
    # Ensure we have an API key (even if it's a placeholder)
    if not Config.API_KEY or Config.API_KEY == "your_api_key_here":
        print("[WARNING] No valid API key found. Using placeholder mode.")

    client = ModelClient(
        api_key=Config.API_KEY,
        model_name=Config.MODEL_NAME,
        provider=Config.PROVIDER,
    )

    print("=== Foundation Model Console Caller ===")
    print("Type 'quit' to exit.\n")

    while True:
        user_prompt = input("You: ")

        if user_prompt.lower() in {"quit", "exit"}:
            print("Goodbye!")
            break

        try:
            result = client.call_model(user_prompt)
            print("\n--- Model Output ---")
            print(result)
            print("--------------------\n")
        except Exception as e:
            print(f"[ERROR] Failed to call model: {e}")

if __name__ == "__main__":
    main()
