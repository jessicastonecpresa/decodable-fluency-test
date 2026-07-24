window.DFC_CONFIG = {
  // Paste the published CSV links for the teacher's Google Sheet tabs.
  rosterCsvUrl: "PASTE_PUBLISHED_ROSTER_CSV_URL_HERE",
  passagesCsvUrl: "PASTE_PUBLISHED_PASSAGES_CSV_URL_HERE",

  // Google Form submission settings.
  googleForm: {
    formResponseUrl: "PASTE_GOOGLE_FORM_RESPONSE_URL_HERE",
    fields: {
      timestamp: "",
      studentId: "",
      studentName: "",
      grade: "",
      teacher: "",
      passageId: "",
      passageTitle: "",
      skill: "",
      durationSeconds: "",
      totalWords: "",
      spokenWords: "",
      correctWords: "",
      errors: "",
      wpm: "",
      accuracy: "",
      transcript: ""
    }
  },

  // Demo data lets the website work immediately before teacher setup.
  demoStudents: [
    {"student id":"1","student name":"Maya","grade":"1","teacher":"Demo Teacher"},
    {"student id":"2","student name":"Sam","grade":"1","teacher":"Demo Teacher"}
  ],

  demoPassages: [
    {
      "passage id":"1",
      "passage title":"Sam Has a Map",
      "skill":"Short vowels in CVC words",
      "passage text":"Sam has a map. The cat is on the mat. Sam can tap the map. The cat can nap in a hat."
    },
    {
      "passage id":"2",
      "passage title":"The Red Hen",
      "skill":"Short e",
      "passage text":"The red hen is in the pen. Ben can pet the hen. The hen can peck and step."
    }
  ]
};
