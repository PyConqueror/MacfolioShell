
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

async function open_terminal(){
  await delay(1000)
  createText("Connecting to server via SSH port 21...");
  await delay(1000);
  createText("Connected succesfully!");
  await delay(1000);
  createText("Starting the server...");
  await delay(1500);
  createText("Welcome to my private server!")
  createText("You can run several commands:");
  createCode("whoami", "Who am i and what do i do.");
  createCode("help", "See all commands.");
  createCode("social -a", "All my social networks.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# visitor";
  span1.textContent = " in";
  span2.textContent = " ~/Server";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createCode("projects", "Projects i have build ;)");
    createCode("whoami", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("contact -a", "View my contact details.");
    createCode("quote -m", "My Favourite quote.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/PyConqueror/MERN-Stack-Chat-Web-App' target='_blank'><i class='fab fa-github white'></i> CommuniTalk - MERN Stack Chat Web App</a>")
    createText("<a href='https://github.com/PyConqueror/420-Burger-Joint' target='_blank'><i class='fab fa-github white'></i> 420 Burger Joint - Restaurant Food Review Platform</a>")
    createText("<a href='https://github.com/PyConqueror/Hospital-Management-System' target='_blank'><i class='fab fa-github white'></i> HMS - Hospital Management System</a>")
    createText("<a href='https://github.com/PyConqueror/2D-Pong' target='_blank'><i class='fab fa-github white'></i> 2D Pong - Retro style 2D-Pong Web Game</a>")
    createText("<a href='https://github.com/PyConqueror/MacfolioShell' target='_blank'><i class='fab fa-github white'></i> MacFolioShell - Mac Terminal themed portfolio website (this website)</a>")
  }
  else if(value === "whoami"){
    trueValue(value);
    createText("My name is Wan")
    createText("Passionate about technology and problem-solving, I am a Junior Python/Backend Developer with a strong foundation in Computer Systems & Network Technology. Trained intensively in software engineering at General Assembly Melbourne, I bring hands-on experience from network engineering to dynamic backend development. Proficient in Python and the MERN stack, I'm known for being a fast learner and a collaborative team player who's committed to ongoing learning and professional growth. I am always eager to tackle new challenges and innovate in the tech space.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/PyConqueror' target='_blank'><i class='fab fa-github white'></i> github.com/PyConqueror</a>")
    createText("<a href='https://www.linkedin.com/in/wanaqim/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/wanaqim</a>")
  }
  else if(value === "contact -a"){
    trueValue(value);
    createText("Electronic Mail : wanaqim@gmail.com");
    createText("Telephonic Device Number : +6013-7793179");
  }
  else if(value === "quote -m"){
    trueValue(value);
    createText("Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.");
    createText("-Steve Jobs");
  }

  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  else if(value === "quote"){
    trueValue(value);
    createText("Didn't you mean: quote -m?")
  }

  else if(value === "contact"){
    trueValue(value);
    createText("Didn't you mean: contact -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();