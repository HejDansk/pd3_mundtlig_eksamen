import os

print("--- Starting API Key Check ---")

# 1. Try to get the environment variable
api_key = os.getenv("ELEVEN_API_KEY")

# 2. Check if the variable was found
if api_key:
    print("✅ SUCCESS: The API Key was found in the environment.")
    # We will print the first 5 and last 4 characters to help you verify
    # it's the correct key without showing the whole secret.
    print(f"   Key starts with: '{api_key[:5]}'")
    print(f"   Key ends with:   '{api_key[-4:]}'")
else:
    print("❌ FAILURE: The 'ELEVEN_API_KEY' was NOT found in this script's environment.")
    print("\n   This means the terminal session you are using does NOT have the variable.")
    print("   >>> The most likely cause is that you did not RESTART your terminal or IDE (VS Code/PyCharm) after setting the variable in the Windows GUI. <<<")

print("\n--- Check Complete ---")