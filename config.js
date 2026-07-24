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
      "passage title":"Sam and the Camp Map",
      "skill":"Mixed short vowels and common digraphs",
      "passage text":"Sam had a map in his hand. He sat on a flat rock near the camp. His pal, Ben, had a red bag with snacks and a small cup. Sam said, “The path bends past that big stump. Then it runs by the pond.” Ben shut the bag and stood up. The two pals went down the path. A quick chipmunk ran past them and hid in a patch of grass. Sam and Ben did not stop. At the pond, they saw six ducks swim and splash. One duck flapped its wings and made a big fuss. Ben held up the map. “We must turn left at the pond,” he said. The path led them back to camp. Sam set the map on the bench. Ben put the snack bag next to it. They grinned because the map had helped them find the right path."
    },
    {
      "passage id":"2",
      "passage title":"The Red Hen's Shed",
      "skill":"Short e, blends, and digraphs",
      "passage text":"Meg had a red hen that slept in a shed. Each day, Meg went to the shed with a pan of feed. The hen would step from her nest and peck at the grain. One wet day, Meg saw that the shed had a crack near the left wall. Rain dripped in and made the hen’s bed damp. Meg went to get her dad. They brought a plank, a small hammer, and a set of nails. Dad held the plank while Meg helped him check the spot. They fixed the crack and swept the wet mess from the shed. Then Meg spread fresh straw in the nest. The red hen stepped in, sat down, and gave a soft cluck. Meg set the feed pan by the wall. She felt glad that the shed was dry and safe again. That night, the hen slept well in her fresh bed."
    }
  ]
};
