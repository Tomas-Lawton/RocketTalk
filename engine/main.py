
#   // please use more complex or advanced vocabulary. middle school level
#   // bilingual mode. target -> spanish. spanish -> target. like what we do with french.
#   // story mode

#   // a way of changing the amount of feedback given.

#   // !!!!!!!!!!!!!!!!!! ask james about this
#   // I say things, teacher tells do better through corrections and feedback being explained.
#   // I want you to act as an interviewer and english teacher. I will be the other person and you will ask me the questions about the topic of making friends in Spanish language. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. If I make any English mistakes, I want you to correct me and explain the correction. Give a clear explanation of each correction. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is "Hi"

#   // debating

#   // ESL teacher here, 20+ years of experience. It's a little bit of an exaggeration to say "I'm about to put every English teacher out of a job because of Chatgpt". Although it is AI and it will certainly grow and develop, at this moment:  1) you already have to have a level of (written) English to teach it and/or ask it questions. 2) you have to know (as you demonstrated) that all its observations and feedback are there. It missed quite a few and you have the knowledge to ask it to dig deeper) 3) you are a NES, which is like having Michael Jordan teach you how to dribble. 4) it's yet to develop nuance. 5) not everyone has access to this technology 6) not easy for some generations and/or age groups 7) people will still seek human interaction and guidance. I'm not saying it won't get there, but AT THIS STAGE you should take into consideration all the key points above (and I'm sure there are more) before making such a bold statement. Sure, it's a fantastic AID for now. We'll see what happens with it later.


import os
from dotenv import load_dotenv

load_dotenv()

HUGGINGFACEHUB_API_TOKEN = os.getenv('HUGGINGFACEHUB_API_TOKEN')


from langchain.llms import OpenAI

llm = OpenAI(temperature=0.9)  # model_name="text-davinci-003"
prompt = "Writing in Spanish, I want you to act as an interviewer and Spanish teacher. I will be the other person and you will ask me the questions about the topic of making friends. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. If I make any Spanish mistakes, I want you to correct me and explain the correction in English. Give a clear explanation of each correction. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is 'Hola!'"
print(llm(prompt))

next_prompt = input()
print(llm(prompt))



# from langchain import HuggingFaceHub

# # https://python.langchain.com/en/latest/modules/models/llms/integrations/huggingface_hub.html
# llm=HuggingFaceHub(repo_id="google/flan-t5-xl", model_kwargs={"temperature":0.9, "max_length":64})
# prompt = "Why gravity is lower on moon compared to earth?"
# print(llm(prompt))

# from langchain import PromptTemplate

# template = "Write a {adjective} poem about {subject}"

# prompt = PromptTemplate(
#     input_variables=["adjective", "subject"],
#     template=template,
# )

# prompt.format(adjective='sad', subject='ducks')

# llm(prompt.format(adjective='sad', subject='ducks'))

# print(llm(prompt.format(adjective='sad', subject='ducks')))

# template = """
# I want you to act as a naming consultant for new companies.

# Here are some examples of good company names:

# - search engine, Google
# - social media, Facebook
# - video sharing, YouTube

# The name should be short, catchy and easy to remember.

# What is a good name for a company that makes {product}?
# """

# prompt = PromptTemplate(
#     input_variables=["product"],
#     template=template,
# )
# prompt = prompt.format(product='news articles')

# llm(prompt=prompt)

