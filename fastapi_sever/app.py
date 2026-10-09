from fastapi import FastAPI
from pydantic import BaseModel

class Student(BaseModel):
    stuname: str
    studept: str
    stuusername: str
    stupassword: str
    stuage: int
    stumarks: float

app = FastAPI()

@app.get("/getStudents")
def getStudents():
    return {"message": "Get students method called"}

@app.post("/addStudent")
def addStudent(stu: Student):
    return {"student_details": stu}

@app.put("/updateStudent")
def updateStudent():
    return {"message": "Update student method called"}

@app.delete("/deleteStudent")
def deleteStudent():
    return {"message": "Delete student method called"}

@app.get("/getParticularStudent/{id}")
def getParticularStudent(id: int):
    return {"userid": id}

@app.get("/filterdept")
def filterdept(dept: str = "CSE", mark: int = 45):
    return {
        "message": "Filtering students",
        "dept": dept,
        "mark": mark
    }