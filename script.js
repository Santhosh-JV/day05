var resume = {
    "name": "Santhosh JV",
    "label": "Programmer",
    "email": "santhoshjv3@gmail.com",
    "phone": "(91)9876543210",
    "summary": "Seeking a beginner role to enhance and explore my technical knowledge gained at GUVI in the last three months.",
    "location": {
        "address": "4th street",
        "postalCode": "600045",
        "city": "Chennai",
        "state": "TamilNadu"
      },
    "skills": [{
        "name": "Web Development",
        "level": "Intermediate",
        "keywords": [
          "HTML",
          "CSS",
          "JavaScript"
        ]
      }]
}

 for(var i in resume){
    console.log(i,resume[i]);
} 
