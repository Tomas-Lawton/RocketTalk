import os
from dotenv import load_dotenv

load_dotenv()

HUGGINGFACEHUB_API_TOKEN = os.getenv('HUGGINGFACEHUB_API_TOKEN')


from langchain.llms import OpenAI

llm = OpenAI(temperature=0.9)  # model_name="text-davinci-003"
prompt = "Why the color of the sky is blue?"
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

