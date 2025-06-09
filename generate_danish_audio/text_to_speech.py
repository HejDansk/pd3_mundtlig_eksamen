import os
import pandas as pd
import time
import random
#from dotenv import load_dotenv
from elevenlabs.client import ElevenLabs
from elevenlabs import save

def text_to_speech_from_csv(csv_file_path, output_directory="."):
    """
    Reads a CSV file, converts text from a specified column to speech,
    and saves the audio as MP3 files with a random delay between each.

    Args:
        csv_file_path (str): The path to the input CSV file.
        output_directory (str): The directory to save the output MP3 files.
    """

    elevenlabs_key = os.getenv("ELEVEN_API_KEY") # Ensure the ELEVEN_API_KEY is set in the environment

    # Initialize the ElevenLabs client
    try:
        client = ElevenLabs(api_key=elevenlabs_key)
    except Exception as e:
        print(f"Error initializing ElevenLabs client: {e}")
        print("Please ensure your ELEVEN_API_KEY is set in your environment variables or .env file.")
        return

    # Create the output directory if it doesn't exist
    os.makedirs(output_directory, exist_ok=True)

    # Load the CSV file into a pandas DataFrame
    try:
        df = pd.read_csv(csv_file_path)
    except FileNotFoundError:
        print(f"Error: The file '{csv_file_path}' was not found.")
        return
    except Exception as e:
        print(f"An error occurred while reading the CSV file: {e}")
        return

    # Iterate over the rows of the DataFrame
    for index, row in df.iterrows():
        text_to_convert = row["danish_text"]
        output_filename = row["audio_filename"]

        # Ensure that the text and filename are not empty
        if pd.isna(text_to_convert) or not text_to_convert.strip():
            print(f"Skipping row {index + 1} due to empty text.")
            continue
        if pd.isna(output_filename) or not output_filename.strip():
            print(f"Skipping row {index + 1} due to empty filename.")
            continue

        print(f"Processing row {index + 1}: Generating audio for '{output_filename}'...")

        try:
            # Generate the audio using the ElevenLabs API
            audio = client.text_to_speech.convert(
                text=text_to_convert,
                voice_id="FVQMzxJGPUBtfz1Azdoy",  # Pre-made voice ID, you can change this
                model_id="eleven_multilingual_v2",
                output_format="mp3_44100_128",
            )

            # Specify the full output file path
            output_file_path = os.path.join(output_directory, output_filename)

            save(audio,output_file_path)

            print(f"Audio saved to '{output_file_path}'")

        except Exception as e:
            print(f"An error occurred while processing row {index + 1}: {e}")

        # Add a random wait between 5 and 10 seconds before the next iteration
        # This is done to avoid overwhelming the API with requests in a short period.
        if index < len(df) - 1: # No need to wait after the last item
            wait_time = random.uniform(5, 10)
            print(f"Waiting for {wait_time:.2f} seconds before the next request...")
            time.sleep(wait_time)

    print("\nProcessing complete.")

if __name__ == "__main__":
    # Name of your CSV file
    INPUT_CSV_FILE = "translation.csv"
    # Directory where you want to save the MP3 files
    OUTPUT_AUDIO_DIRECTORY = "../audio_files"

    text_to_speech_from_csv(INPUT_CSV_FILE, OUTPUT_AUDIO_DIRECTORY)