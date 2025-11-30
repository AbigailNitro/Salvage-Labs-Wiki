function favChar() {
    let Character =
    document.getElementById('character').value.toLowerCase();
    let result = document.getElementById("formResult")
    let paragraph = document.getElementById("comment")
    let answer = "";
    switch (Character) {
        //robots!
        case "amor":
            answer = "Looks can be deceiving...";
            break;
        case "c0nnie":
            answer = "The most levelheaded, good choice!";
            break;
        case "c0nnie":
            answer = "The most levelheaded, good choice!";
            break;
        case "sai":
            answer = "Everyone loves a morally grey character!";
            break;
        case "n":
            answer = "Get in line buddy.";
            break;
        case "assistant":
            answer = "Really??? I mean... alright...";
            break;
        //computers!
        case "aqua":
            answer = "As the number one Aqua fan, I approve.";
            break;
        case "dav3":
            answer = "Assistant is that you? Just kidding, Dav3's awesome.";
            break;
        case "ch33se":
            answer = "I've got some bad news for you...";
            break;
        case "002":
            answer = "YOU DON'T EVEN KNOW ANYTHING ABOUT HIM YET!";
            break;
        case "silva":
            answer = "(Don't tell anyone I told you this, but I actually designed her...)";
            break;
        //humans!
        case "leo":
            answer = "Grown ass man using :3";
            break;
        case "victor":
            answer = "Nobody thinks you're cool dude.";
            break;
        case "amber":
            answer = "As the number one Aqua fan, really?!?!";
            break;
        case "simon":
            answer = "There's actually no way";
            break;
        case "nalani":
            answer = "You should see more of her soon!";
            break;
        //easter eggs
        case "chime":
            answer = "Dude that's my sona... ALSO SHE'S NOT CANON!";
            break;
        case "yes man":
            answer = "Shroomsie get off my website.";
            break;
        case "radon":
            answer = "WRONG ACCOUNT!!!";
            break;
        case "gerson":
            answer = "As long as we don't give up, we can save them all.";
            break;
        case "bacon":
            answer = "That's right everybody... it's your favorite boy...";
            break;
        case "/01":
            answer = "DO NOT LET AQUA FIND OUT!!!";
            break;
        case "01":
            answer = "DO NOT LET AQUA FIND OUT!!!";
            break;
        case "noodle":
            answer = "Don't trust her...";
            break;
        case "shroomsie":
            answer = "I get it, I look up to her artistic ability a lot";
            break;
        case "shr00msi3":
            answer = "I get it, I look up to her artistic ability a lot";
            break;
        case "shr00msie":
            answer = "I get it, I look up to her artistic ability a lot";
            break;
        case "jimmy":
            answer = "That makes you the #1 amor hater by default";
            break;
        case "the lunch machine":
            answer = "I'm guessing you're a joe addict...";
            break;
        case "cup":
            answer = "YOU GET IT!!!";
            break;
        default:
            answer = "Character not recognized! Please don't forget the numbers!";
            break;
    }
paragraph.innerHTML = answer;
result.style.display = "block";

}


