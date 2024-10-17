//small tips when you click on images, buttons,... 
function alert1() {
  alert("Enter your password in the password box below to see how secure it is! Use the navigation bar on the top to navigate this site. ")
}

function hide() {
  document.getElementById('alert2').style.display = "none";
}

//PASSWORD SECURITY CHECKER CODE STARTS HERE

// your password is graded by:
// - charcters(no max)
// - upper case 5 points
// - lower case 5 points
// - numbers(5 points)
// - special characters(5 points)
// - variety (10 points)
// - distribution(10points)
// - long bonus(no max)

// so variety is like 0kjdh is better than 00000 since more variety of charcater
//long bonus: you get +1 for every character after your 10th character


//

//some variables that may change depending on the above rubric
const totalpoints = 35;
const n = totalpoints / 5;

// this function is in charge for dropdown menus at the bottom.
function reveal(id) {
  const element = document.getElementById(id);
  element.style.display = element.style.display == "none" ? "" : "none";
}
//this function will take in your score and return how safe your password is
function returnSecureness(score) {
  if (score <= n) {
    return ["Very", "Insecure"]
  }
  else if (n < score && score <= 2 * n) {
    return ["Insecure"]
  }
  else if (2 * n < score && score <= 3 * n) {
    return ["Decently", "Secure"]
  }
  else if (3 * n < score && score <= 4 * n) {
    return ["Secure"]
  }
  else {
    return ["Very", "Secure"]
  }
}

// this function takes in a list of words and displays it on the screen with matching styles
function updateSecure(words) {
  const display = document.getElementById("secureDisplay")

  if (Array.isArray(words)) {
    display.innerHTML = words.join(" ")
    display.className = words.join("")
  }
  else {
    display.innerHTML = "Type something to see the result!"
    display.className = "empty"
  }

}
// these next functions are for every category you are graded in(1 per category)

const length = (pw) => {
  return pw.length * 10 / 15
}

const variety = (pw) => {
  var li = [];
  for (var i = 0; i < pw.length; i++) {
    const c = pw[i];
    if (!li.includes(c)) {
      li.push(c);
    }
  }
  const v1 = li.length > 10 ? 10 : li.length;
  return v1;
}

const numbers2 = (p) => {
  const r = /[0-9]{1}/g;
  const m = p.match(r)?.length
  return (m > 5 ? 5 : m) || 0;
}

const uppercase = (pw) => {
  const r = /A-Z{1}/g
  const matches = pw.match(r)?.length;
  return (matches > 5 ? 5 : matches) || 0;
}

const lowercase = (pw) => {
  const r = /a-z{1}/g
  const matches = pw.match(r)?.length;
  return (matches > 5 ? 5 : matches) || 0;
}

const special = pw => {
  const r = /[^a-zA-Z0-9]{1}/g;
  const matches = pw.match(r)?.length;
  return (matches > 5 ? 5 : matches) || 0;
}

function nrc(pw) {
  var a = 10;
  var list = [];
  for (var i = 0; i < pw.length; i++) {
    const l = pw[i]
    if (!list.includes(l)) {
      list.push(l);
    }
    else {
      a -= 0.3;
    }
  }
  return (a < 0 ? 0 : a);
}

const lb = (p) => {
  return (p.length > 10 ? (p.length - 10) : 0)
}
//log for formula
const logb = (b, v) => Math.log(v) / Math.log(b)

// this function takes in your password and returns the score of how safe your password is
function getNumber(password) {
  // getting scores in all of the criteria
  const len = length(password);
  const vari = variety(password);
  const num = numbers2(password);
  const upper = uppercase(password);
  const lower = lowercase(password);
  const spec = special(password);
  const b = lb(password)
  // crazy formula for the total score
  return (13 * logb(6, len) + b) / (5 - (vari * 4 / 10)) + upper + lower + num + spec;
}


//this function displays how safe your password is and is triggered everything you type something into the input box(e is the event)
function passwordChange(e) {
  const a = e.target.value
  var li;
  if (a.length == 0) {
    li = 1234;
  }
  else {
    const num = getNumber(a);
    li = returnSecureness(num);
  }
  updateSecure(li);
}

//this makes it so that everything the input box is typed into the above function is called



// Password Generator CODE STARTS HERE

function generatePassword() {
  const possibleWords = ['apple', 'banana', 'cherry', 'orange', 'grape', 'strawberry', 'avocado', 'sushi', 'possible', 'words', 'shoes', 'mateo', 'curry', 'latin', 'america', 'europe', 'africa', 'london', 'asia', 'antartica', 'untitled', 'document', 'extensions', 'help', 'cringe', 'emotional', 'basketball', 'baseball', 'swimming', 'typing', 'turnover', 'dreamliner', 'boeing', 'airbus', 'mcdonell', 'lockeed', 'martin', 'northup', 'grumman', 'nimitz', 'rockwell', 'gambit', 'santa', 'christmas', 'halloween', 'christmas', 'north', 'south', 'china', 'germany', 'united', 'states', 'canada', 'india', 'brazil', 'mexico', 'honda', 'odyssey', 'toyota', 'chevrolet', 'nissan', 'murano', 'rogue', 'water', 'earth', 'encore', 'enclave', 'enchant', 'exterior', 'interior', 'terrain', 'tundra', 'grassland', 'greenland', 'disney', 'southwest', 'northeast', 'northwest', 'southeast', 'jetblue', 'spirit', 'country', 'mercury', 'venus', 'jupiter', 'asteriod', 'saturn', 'neptune', 'uranus', 'pluto', 'hawaii', 'california', 'nevada', 'enterprise', 'president', 'senate', 'house', 'senator', 'congress', 'represent', 'kamala', 'harris', 'clinton', 'hillary', 'sanders', 'oahu', 'island', 'tahiti', 'indonesia', 'travel', 'airways', 'airline', 'ariport', 'traffic', 'airship', 'economy', 'security', 'preview', 'precheck', 'delta', 'united', 'frontier', 'allegiant', 'breeze', 'avelo', 'singapore', 'british', 'indigo', 'scoot', 'philadelphia', 'phillipines', 'google', 'twitter', 'facebook', 'microsoft', 'amazon', 'addidas', 'converse', 'python', 'javascript', 'frequently', 'tools', 'sports', 'characters', 'harry', 'potter', 'hermione', 'granger', 'ronald', 'weasley', 'question', 'statement', 'percent', 'modular', 'arithmetic', 'three', 'seven', 'eight', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'center', 'drawing', 'pencil', 'eraser', 'ruler', 'calculator', 'practice', 'blending', 'sketchbook', 'thumbs', 'script', 'deploy', 'artificial', 'monetary', 'digital', 'artificial', 'intelligence', 'bookshelf', 'umbrella', 'shirt', 'caltrain', 'train', 'automobile', 'website', 'cringe', 'lettuce', 'carrot', 'eggplant', 'cucumber', 'potato', 'tomato', 'period', 'quotation', 'disagree', 'fishes', 'shark', 'whale', 'sunfish', 'halibut', 'jellyfish', 'octopus', 'squid', 'shrimp', 'manta', 'sting', 'stingray', 'dragon', 'guava', 'punchbowl', 'diamond', 'honolulu', 'highway', 'freeway', 'burger', 'taco', 'kentucky', 'pepperoni', 'cheese', 'sausage', 'meatball', 'pasta', 'noodles', 'corn', 'grains', 'vegetables', 'fruits', 'protein', 'dairy', 'yogurt', 'chicken', 'supermarket', 'bathroom', 'spaces', 'history', 'creative', 'writing', 'career', 'checker', 'chess', 'cracking', 'authentication', 'trees', 'flowers', 'plants', 'white', 'black', 'green', 'turtle', 'junior', 'johnson', 'emperor', 'king', 'queen', 'knight', 'prince', 'princess', 'princeton', 'harvard', 'peasant', 'farmer', 'teacher', 'doctor', 'nurse', 'police', 'surgeon', 'surgeries', 'surgery', 'office', 'building', 'structure', "coding", "running", "security", "checker","chess", "fablab", "bayside", "error", "syntax", "debug", "bug", "crash", "fix", "loop", "repeat", "condition", "html", "javascript", "python", "java", "block", "comment", "variable", "function", "loop", "array", "string", "integer", "float","house", "fish", "plane", "jet", "military", "ship", "boat", "airport", "dock", "bus", "train", "car", "truck", "motorcycle", "bicycle", "scooter", "school", "college", "university", "graduate", "professor", "teacher", "student", "principal","cosmetology", "hairdresser", "barber", "beauty", "makeup", "hair", "shampoo", "conditioner", "soap", "shave", "haircut", "nail", "costco", "target", "safeway", "lucky", "china", "russia", "france", "germany", "united", "states", "canada", "india", "brazil", "mexico", ]
  const possibleChars = ['!', '?', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', ';', ':', ',', '.', '~', ']', '[', '{', '}', '|', '`', '<', '>', '/', '(',]
  const word1 = possibleWords[Math.floor(Math.random() * possibleWords.length)]
  let word2 = possibleWords[Math.floor(Math.random() * possibleWords.length)]
  word2 = word2.charAt(0).toUpperCase() + word2.slice(1)
  const wordString = word1 + word2
  const number = Math.floor(Math.random() * (900) + 100);
  const specialChar = possibleChars[Math.floor(Math.random() * possibleChars.length)]
  const password = wordString + number + specialChar

  return password
}

function renderPassword() {
  const password = generatePassword()
  document.getElementById("yourpassword").value = password
}

function togglePassword() {
  const checkboxElem = document.getElementById("showPassword")
  if (checkboxElem.checked) {
    document.getElementById("passwordBox").type = "text"

  } else {
    document.getElementById("passwordBox").type = "password"
  }
}


// others:

document.getElementById("passwordBox").addEventListener("keyup", passwordChange)

