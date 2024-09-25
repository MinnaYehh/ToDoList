const word = document.querySelector(".word");
const list = document.querySelector(".list");//選取清單
const btn = document.querySelector(".btn");


function newMission (){
if(word.value === ""){
    return;//如果文字欄為空白，直接用return中斷語法
}

const Mission = document.createElement("li");//建立li標籤
Mission.innerHTML = 
`
<input type="checkbox" class="box">
<label>${word.value}</label>
<button class="trash">🗑️</button>
`; 

const trash = Mission.querySelector(".trash");
const box = Mission.querySelector(".box");

trash.addEventListener("click", function(){
    Mission.remove();
});

box.addEventListener("change", function(){
    if(box.checked){
        Mission.style.textDecoration = "line-through";
        Mission.style.color = "#999";
        list.append(Mission);
    }else{
        Mission.style.textDecoration = "none";
        Mission.style.color = "";
        list.prepend(Mission);//把任務移到上方
    }
});


list.append(Mission);//用append把newMission放在list底部
word.value = "";//清空輸入框，方便用戶繼續輸入
}

btn.addEventListener("click",newMission);//只要btn點按（click）就會觸發newMission

word.addEventListener("keyup", function(e){
  if (e.key === "Enter"){
    newMission();//什麼時候執行？當用戶按下enter鍵時
  }
});