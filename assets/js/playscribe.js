var obtainedJSON = false;


function generatePractice(){
    // choose random question
    let currentQuestion = questions[Math.floor(Math.random() * questionNumber) + 1];
    document.getElementById("question").innerHTML = currentQuestion;
    
    //let parsedCorpus = JSON.parse('./shakespeare.js');
    console.log(getText());
}

function toggleWritingArea(){
    // get reference to textArea
    let writingArea = document.getElementById('writingArea');
    
    //console.log(getComputedStyle(writingArea).display);
    
    // toggle styles
    if(getComputedStyle(writingArea).display === 'none'){
        writingArea.style.display = 'flex';
    }else{
        if(getComputedStyle(writingArea).display === 'flex'){
            writingArea.style.display = 'none';
        }
    }
}

const questionNumber = 47;
const questions = {
    "1": "What are the given circumstances of the play’s action? Geographical location? Historical period? Time of day? Economic environment? Political situation? Social milieu? Religious system?",
    "2": "From what perspective do we see the events of the play? Psychological? Ethical? Heroic? Religious? Political?",
    "3": "What has the dramatist selected of the possible events of the story to put into actual scenes? Which events are simply reported or revealed through exposition?",
    "4": "Drama is action and the essence of action is conflict. Insofar as a situation contains conflict, it is dramatic: no conflict, no drama. Drama is the process of resolving conflict, and what is most important in dramatic analysis is to perceive the conflict inherent in the play. Conflict creates characters, or characters—their opposing desires or needs—create conflict. To understand a dramatic text or playscript, it is necessary to discover and expose the conflict. What, then, is the conflict in the play in terms of opposing principles? What kinds of qualities are associated with either side, or with all sides? Or, considering the principal characters as “ideas” or ethical/moral agents, into what sort of dialectic can you convert the plot? What is opposing what?",
    "5": "Where has the dramatist pitched the emphasis in his story, as an unfolding action? (For example, the long and careful approach to the “kill” in Hamlet versus the relatively quick “kill” followed by the long and haunted aftermath in Macbeth.) What has happened before the play, and what happens during the play? (For instance, the late point of attack in Oedipus Tyrannos, whose plot has a considerable past, versus the early point of attack in King Lear, in which the past is virtually nonexistent.)",
    "6": "How many acts and scenes are there? Did the play’s author note them or were these divisions added later? What motivates the divisions of the play and how are they marked (curtains, blackouts, etc.)?",
    "7": "Are there subplots? If so, how is each related to the main action?",
    "8": "What alignments, parallels, or repetitions do you notice? (For example, the triple revenge plot in Hamlet; the blind Teiresias who can really “see” from the start as contrasted with the blind Oedipus who can really “see” only at the end of the play.)",
    "9": "What general or universal experience does the plot seem to be dramatizing?",
    "10": "Assuming that each character is necessary to the plot, what is the dramatic function of each? (For instance, why does Shakespeare give Hamlet a close friend, but no friend to Macbeth or Othello?)",
    "11": "Do several characters participate in the same “flaw” or kind of fallibility? (For example, Gloucester and Lear are both blind to the true nature of filial love.)",
    "12": "Is there a wide range of character “positions” respecting such antitheses as innocence-guilt, good-evil, honorableness-dishonorableness, reason-irrationality, etc.?",
    "13": "What qualities or aspects of character are stressed: the physical, the social, the psychological, or the moral or ethical? (For instance, Ibsen’s “ethical” character versus Chekhov’s character of “mood” or frustrated sensibility: Aeschylus’s “grand,” sculptural character versus Euripides’ “psychopathic” character.) ",
    "14": "How is character revealed? By symbols and imagery (Macbeth’s preoccupation with blood and time)? By interaction with various other characters (Hamlet with Horatio and Ophelia)? By what the character says? By what others say about the character? By what the character does? (the most important). By descriptions of the character in the stage directions?",
    "15": "How do character traits activate the drama? (Note how a character’s traits are invariably involved in his or her acts as motives for, or causes of, those acts.)",
    "16": "Consider each character as a “voice” in the play’s overall dialectic, contributing to theme, idea, or meaning.",
    "17": "What evidence of change can you detect? What seems to have been the source of this change, and what does it signify for the play’s theme or the final nature of the character’s identity?",
    "18": "How is the character’s change expressed dramatically? (For example, in a “recognition” speech, in a newfound attitude, in a behavioral gesture, etc.)",
    "19": "What happens during this dialogue and as a result of this dialogue?",
    "20": "What does this passage reveal about the inner life and motives of each character?",
    "21": "What does this scene reveal about the relationships of the characters to each other?",
    "22": "What does this section reveal about the plot or about any of the circumstances contributing to the complication or resolution of the plot?",
    "23": "What are the most notable moments or statements in this dialogue?",
    "24": "Are there any implicit or unspoken matters in this scene that deserve attention?",
    "25": "What facial expressions, physical gestures, or bodily movements are implied by the dialogue?",
    "26": "What props or set pieces are explicitly or implicitly called for in the dialogue or the stage directions?",
    "27": "What vocal inflections or tone of voice does a line suggest?",
    "28": "Where might the characters increase or decrease the volume or speed of their delivery?",
    "29": "Where might the characters pause in delivering their lines?",
    "30": "Where might the characters stand on stage and in relation to each other at the beginning of the scene and at later points in the same scene?",
    "31": "Do all the characters use language in much the same way, or does each have his or her own verbal characteristics?",
    "32": "What are the dominant image patterns? (For instance, disease-decay-death imagery in Hamlet.) Do characters seem to share a particular pattern, or it exclusive to one character? (For example, Othello gradually begins to pick up Iago’s sexual-bestial imagery as he becomes more convinced of Desdemona’s guilt.)",
    "33": "What combinations or conflations of image patterns can you detect? (For instance, in Hamlet, in the lines “By the o’ergrowth of some complexion, / Oft breaking down the pales and forts of reason,” the imagery of cancer, or pollution by “overgrowth,” is conflated with military imagery.)",
    "34": "Explain the presence of such rhetorical devices as: sudden shifts from verse to prose; rhymed couplets; “set” speeches that give the appearance of being standard or conventional (Polonius’s advice to Laertes in Hamlet); choral speeches; formal “debates”; etc. These devices are often used to emphasize, or italicize, certain aspects of meaning and theme.",
    "35": "How, generally, would you distinguish the use of language and imagery in this play from that of other plays? (For example, dramatic verse speech tends, on the whole, to “recite” the content directly and faithfully, presenting all the implications on the word-surface; as dialogue in plays becomes more realistic—becomes prose, that is—particularly from the nineteenth century forward, there is an increasing rift between what is actually said and what is implied, or latent, in the language.)",
    "36": "In what ways does the language of the play—its imagery; style; tempo or rhythm; tone; descriptive, informational, or ideational content; and level of probability or internal consistency—help to create the sense of a unique “world,” or circumscribed space, appropriate to this play and no other? (For instance, Macbeth’s dark, “metaphysical” space versus Hamlet’s dense and various world of objects, people, animals, and processes.)",
    "37": "What is the dramatist’s attitude toward the materials of his or her play? (Skeptical? Critical? Ironic? Sympathetic? Neutral or objective? Etc.)",
    "38": "What features or elements of the play seem to be the source of the dramatist’s attitude? (A reasonable or reasoning character you can trust? A choral element? A didactic voice detectable in the content as a whole? An allegorical quality? The way in which the incidents are arranged? A set of symbols? A balance or equilibrium of opposed readings of the world?)",
    "39": "What is the nature of the play’s world order? (Fatalistic? Benign? Malignant? Just? Neutral?) Another way of asking this: Are there operative gods, and what share of the responsibility for events do they hold?",
    "40": "What is the source of your impression of this world order? Remember that meaning in drama is usually implied, rather than stated directly. It is suggested by the relationships among the characters; the ideas associated with unsympathetic and sympathetic characters; the conflicts and their resolution; and such devices as spectacle, music, and song. What, then, is the source of your impression of the play’s meaning?",
    "41": "If the play departs from realism or representationalism, what devices are used to establish the internal logic of the action?",
    "42": "Are changes in the dramatic action paralleled by changes in visual elements such as lighting, costume, make-up, and scenery? How important is such visual detail to the dramatic action?",
    "43": "For what kind of theatrical space was the play intended by its author? Are some of the play’s characteristics the result of dramatic conventions in use at the time the work was written?",
    "44": "How extensive are the stage directions? Were they written by the author or interpolated by someone else? What type of information do they convey? Are they important to the dramatic action?",
    "45": "Is the play a translation? Can you compare it to the original? Can you compare it with other translations? Are there significant differences between the source and a translation, such as the rendering of the author’s original French verse in English prose?",
    "46": "Is there any difference between playing time (the time it takes to perform the play) and illusory time (the time the action is supposed to take)? What is the relationship between the two, if any?",
    "47": "Is there anything special about the title? Does it focus on a character, the setting, or a theme? Is it taken from a quotation or is it an allusion? Does the title contain a point of view, suggest a mood, or otherwise “organize” the action of the play?",
    "48": "Does the play clearly fall into one of the major dramatic categories (tragedy, comedy, etc.)? What conventional features of its type does the play exhibit (subject matter, situations, character types)? Does knowledge of the genre contribute to an understanding of this play?"
}

function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://www.gutenberg.org/files/100/100-h/100-h.htm');
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            return request.responseText;
        }
    }
}