import http from 'http'

const port = 300;

const server = http.createServer((req, res) => {

    if (req.url === '/myself') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain");
        res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t\tRESUME\n")
        res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
        res.write("\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t PERSONAL INFORMATION\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t----------------------\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t      PAVAN KOTNI\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t\tAGE:25\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t     DOB:23/12/2005\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\tMOBILE NUMBER:9985794617\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t   EMAIL-ADDRESS:kotnipavan8@gmail.com\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t     FATHER NUMBER:k.malleswara rao\n")
        res.write("\t\t\t\t\t\t\t\t\t   ADDRESS:3-142,satyavaram,narasannapeta,srikakulam,andhra pradesh-532421\n")
        res.write("\n") 
        res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
        res.write("\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t    EDUCATIONAL DETAILS\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t   ---------------------\n")
        res.write("\t\t\t\t\t\t\t\t\t\t     2017 to 2021-BTECH(COMPUTER SCIENCE AND ENGINEERING)\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t     SRKR ENGINEERING COLLEGE-BHIMAVARAM\n")
        res.write("\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t2015 to 2017-INTERMEDIATE(MPC) \n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t    SRI CHAITANYA JUNIOR COLLEGE-SRIKAKULAM\n")
        res.write("\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t    2014 to 2015-SSC(10th)\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t     RAVINDRA BHARATHI SCHOOL-NARASANNAPETA\n")
        res.write("\n")
        res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
        res.write("\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t\t EXPERIENCE\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t\t------------\n")
        res.write("\t\t\t\t\t\t\t\t\t\t         2YEARS-IN AMAZON AS A BLOCK CHAIN DEVELOPER\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t   1YEAR-IN GOOGLE AS A SOFTWARE DEVELOPER\n")
        res.write("\n")
        res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
        res.write("\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t     PROFESSIONAL SKILLS\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t    ---------------------\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t  java,python,oracle,sql,web develop\n")
        res.write("\n")
        res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
        res.write("\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t     INTRAPERSONAL SKILLS\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t    ----------------------\n")
        res.write("\t\t\t\t\t\t\t\t\t\tHOBBIES          -\tlistening music,reading books\n")
        res.write("\t\t\t\t\t\t\t\t\t\tSTRENGTH         -\tgood at group disscussion,self confident,self motivated\n")
        res.write("\t\t\t\t\t\t\t\t\t\tWEEKNESS         -\tcan't handle multiple tasks at a time\n")
        res.write("\t\t\t\t\t\t\t\t\t\tLANGUAGES KNOWN  -\tenglish,hindi,telugu\n")
        res.write("\n")
        res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
        res.write("\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t\t  DESCRIPTION\n")
        res.write("\t\t\t\t\t\t\t\t\t\t\t\t\t -------------\n")
        res.write("\t\t\t\t\t\t\t      \ttoday i am here to declare that above given information is true to the best of my knowledge\n")
        res.write("\n")
        res.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")
        res.end()
    }

    else if (req.url === '/html') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        const pavan=`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; color: #333; text-align: center;">
    <div style="width: 80%; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="border-top: 2px solid #0044cc; border-bottom: 2px solid #0044cc; padding: 10px 0; background-color: #0044cc; color: #ffffff;">
            <h1 style="margin: 0; font-size: 24px;">RESUME</h1>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0044cc; border-bottom: 1px solid #0044cc; padding-bottom: 5px; margin-bottom: 10px;">Personal Information</h2>
            <div style="margin-left: auto; margin-right: auto;">
                <p><strong>Name:</strong> <span style="color: #0e0e0e;"><b>Pavan Kotni</b></span></p>
                <p><strong>Age:</strong> 25</p>
                <p><strong>Date of Birth:</strong> 23/12/2005</p>
                <p><strong>Mobile Number:</strong> 9985794617</p>
                <p><strong>Email:</strong> <span style="color: #0044cc;">kotnipavan8@gmail.com</span></p>
                 <p><strong>Father's Name:</strong> K. Malleswara Rao</p>
                <p><strong>Address:</strong> 3-142, Satyavaram, Narasannapeta, Srikakulam, Andhra Pradesh - 532421</p>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0044cc; border-bottom: 1px solid #0044cc; padding-bottom: 5px; margin-bottom: 10px;">Educational Details</h2>
            <div style="margin-left: auto; margin-right: auto;">
                <p><strong>2017 to 2021:</strong> B.Tech (Computer Science and Engineering), SRKR Engineering College, Bhimavaram</p>
                <p><strong>2015 to 2017:</strong> Intermediate (MPC), Sri Chaitanya Junior College, Srikakulam</p>
                <p><strong>2014 to 2015:</strong> SSC (10th), Ravindra Bharathi School, Narasannapeta</p>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0044cc; border-bottom: 1px solid #0044cc; padding-bottom: 5px; margin-bottom: 10px;">Experience</h2>
            <div style="margin-left: auto; margin-right: auto;">
                <p><strong>2 Years:</strong> Amazon as a Blockchain Developer</p>
                <p><strong>1 Year:</strong> Google as a Software Developer</p>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0044cc; border-bottom: 1px solid #0044cc; padding-bottom: 5px; margin-bottom: 10px;">Professional Skills</h2>
            <div style="list-style-type: none; padding: 0; margin: 0; text-align: center;">
                <p>Java</p>
                <p>Python</p>
                <p>Oracle</p>
                <p>SQL</p>
                <p>Web Development</p>
            </div>
        </div>

       <div style="margin-bottom: 20px;">
            <h2 style="color: #0044cc; border-bottom: 1px solid #0044cc; padding-bottom: 5px; margin-bottom: 10px;">Interpersonal Skills</h2>
            <div style="list-style-type: none; padding: 0; margin: 0; text-align: center;">
                <p><strong>Hobbies:</strong> Listening to music, Reading books</p>
                <p><strong>Strengths:</strong> Good at group discussions, Self-confident, Self-motivated</p>
                <p><strong>Weakness:</strong> Can't handle multiple tasks at a time</p>
                <p><strong>Languages Known:</strong> English, Hindi, Telugu</p>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0044cc; border-bottom: 1px solid #0044cc; padding-bottom: 5px; margin-bottom: 10px;">Description</h2>
            <p>Today I am here to declare that the above given information is true to the best of my knowledge.</p>
        </div>

        <div style="border-top: 2px solid #0044cc; border-bottom: 2px solid #0044cc; padding: 10px 0; background-color: #0044cc; color: #ffffff;"></div>
    </div>
</body>
</html>
`

        res.write(pavan)
        res.end()
    }

    else if (req.method === 'POST' && req.url === '/recivedata') {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json");
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        console.log(body)
        res.end()
    }

    else if (req.url === '/senddata') {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json");
        const data = [{ Name: "PAVAN KOTNI", Age:25,Dob:"23/12/2005",Mobileno:9985794617,Email:"kotnipavan8@gmail.com",Fathername:"K. Malleswara Rao",Address:["3-142", "Satyavaram", "Narasannapeta", "Srikakulam", "Andhra Pradesh - 532421" ]},{Educationdetails :[ {Btech:["2017 to 2021:Computer Science and Engineering", "SRKR Engineering College", "Bhimavaram"]},{ Intermediate :["2015 to 2017:MPC", "Sri Chaitanya Junior College", "Srikakulam"]},{Ssc:["2014 to 2015: 10th", "Ravindra Bharathi School", "Narasannapeta"]}]},{Experience:["2 Years: Amazon as a Blockchain Developer","1 Year: Google as a Software Developer"]},{Professionalskills:["java","python","oracle","sql","web development"]},{Interpersonalskills:[{Hobbies:[" Listening to music","Reading books"]},{Strengths:[" Good at group discussions", "Self-confident"," Self-motivated"]},{Weakness: "Can't handle multiple tasks at a time"},{LanguagesKnown: ["English", "Hindi", "Telugu"]}]},{Description:"Today I am here to declare that the above given information is true to the best of my knowledge."}]
        res.end(JSON.stringify(data))
    }

    else {
        res.statusCode = 400
        res.end("Page Not Found\n")
    }
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});