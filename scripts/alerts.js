const alertText = document.getElementById("alertContent");
const alertBg = document.getElementById("alertBg");

const delay_ = ms => new Promise(res => setTimeout(res, ms));

const messages = [
    "uh... this button doesn't work yet, there is nothing down here, except eternal darkness...",
    "why are you still clicking this",
    "stop",
    "ok, you've been warned",
    `Memories broken
    The truth goes unspoken
    I’ve even forgotten my name
    
    I don’t know the season
    Or what is the reason
    I’m standing here holding my blade
    
    A desolate place
    Without any trace
    It’s only the cold wind I feel
    
    It’s me that I spite
    As I stand up and fight
    The only thing I know for real
    
    There will be blood-shed
    The man in the mirror nods his head
    
    The only one left
    Will ride upon the dragon’s back
    
    Because the mountains don’t give back what they take
    Oh no
    There will be blood-shed
    It’s the only thing I’ve ever known
    
    Losing my identity
    Wondering have I gone insane
    To find the truth in front of me
    I must climb this mountain range
    Looking downward from this deadly height
    And never realizing why I fight `,
    "yes i love metal gear rising, how did you know",
    "also i use arch btw",
    "ok this is actually the end, you'll just get undefined from now on... totally a feature and not a bug, trust me bro."
]

i = 0;

async function customAlert(message) {
    alertText.innerText = messages[i];
    i = (i+1 % messages.length);

    alertBg.style.opacity = 1.0;

    await delay_(5000);

    alertBg.style.opacity = 0.0;

}