from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import google.generativeai as genai
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

os.environ["GOOGLE_API_KEY"] = "AIzaSyB5gNorlHGLlwpoYIaQ8QAz3AUZpFk06lc"

def create_chatbot(user_input):
    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
    model = genai.GenerativeModel(model_name='gemini-1.5-flash')

    return model.generate_content(user_input).text

def split_response(response_text):
    # Split the response text into scenario and choices
    scenario_part = response_text.split("**Choice 1:")[0].strip()
    choices_part = response_text.split("**Choice 1:")[1]  
    if scenario_part.startswith("## Scenario"):
        scenario_part = scenario_part.replace("## Scenario", "").strip()
        scenario_part = scenario_part.replace(":", "").strip()

    choice_1 = choices_part.split("**Choice 2:")[0].strip()
    choice_2 = choices_part.split("**Choice 2:")[1].split("**Choice 3:")[0].strip()
    choice_3 = choices_part.split("**Choice 3:")[1].split("**Choice 4:")[0].strip()
    choice_4 = choices_part.split("**Choice 4:")[1].strip()

    if choice_1.startswith("**Choice"):
        choice_1 = choice_1.replace("**Choice", "").strip()
    if choice_2.startswith("**Choice"):
        choice_2 = choice_2.replace("**Choice", "").strip()
    if choice_3.startswith("**Choice"):
        choice_3 = choice_3.replace("**Choice", "").strip()
    if choice_4.startswith("**Choice"):
        choice_4 = choice_4.replace("**Choice", "").strip()

    choice_1 = choice_1.replace("**", " - ").strip()
    choice_2 = choice_2.replace("**", " - ").strip()
    choice_3 = choice_3.replace("**", " - ").strip()
    choice_4 = choice_4.replace("**", " - ").strip()

    return {
        'scenario': scenario_part,
        'choices': {
            'choice_1': choice_1,
            'choice_2': choice_2,
            'choice_3': choice_3,
            'choice_4': choice_4
        }
    }

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message');
    wordList = user_input.split()
    if 'iambatman' in user_input:
        tempResponse = "Generate a financial scenario and choices for a character with the following stats: \n" + "- Name: " + wordList[1] + "\n- Job: " + wordList[2] + " - Salary: " + wordList[3] + " - Savings: " + wordList[4] + " - Debt: " + wordList[5] + ". Give one paragraph with the Heading Scenario and then give four choice with the titles 'Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'. In the entire paragraph, do not use any sort of currency like dollars or rupees, instead use Coins. \n\n"
        response_text = create_chatbot(tempResponse)
        split_data = split_response(response_text)
        return jsonify(split_data) 
    tempResponse = "Now continue that financial scenario and choices for the character with the following stats: \n" + "- Name: " + wordList[1] + "\n- Job: " + wordList[2] + " - Salary: " + wordList[3] + " - Savings: " + wordList[4] + " - Debt: " + wordList[5] + ". Give one paragraph with the Heading Scenario and then give four choice with the titles 'Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'. In the entire paragraph, do not use any sort of currency like dollars or rupees, instead use Coins. \n\n"
    chatbot_response = create_chatbot(tempResponse)  
    split_data = split_response(chatbot_response)
    return jsonify(split_data) 

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
