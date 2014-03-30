from pymongo import MongoClient
from bson.objectid import ObjectId
import pymongo

client = MongoClient()
client = MongoClient('localhost', 27017)
db = client.database
instructions= db.instructions

def sample_data():
    instruct=[]
    for text in range(10):
        instruct.append(text)
    instance = { "title": "some title"
                 , "added_by": "Lindsey"
                , "email": "something@gmail.com"
                , "instructions": instruct
                }

#def login(input_user,input_pass):
#    user = users.find_one({"username": input_user,"password":input_pass})
#    if user == None:
#        return "Invalid login creditionals" 
#   next_instructions_page(users)

def get_titles():
    result =[]
    for instruction in instructions.find():
        result.append( { "instr_id":str(instruction['_id']), "title": instruction['title'] } )  
    return result

def get_instructions(instr_id):
    return instructions.find_one( {"_id": ObjectId(instr_id)} ) 

def insert(form):
    post =  {
            "title": form['title'],
            "added_by": form['added_by'],
            "email": form['email'],
            "instructions": [ form['0text'], form['1text'],form['2text'],form['3text'] ]   
            }
    return instructions.insert(post)
