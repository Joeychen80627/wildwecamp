var peoplearr = [["adult1","child1","show1",], ["adult2","child2","show2"], ["adult3","child3","show3"], ["adult4","child4","show4"]];
var project = [
    ["img\special-time\13.jpg","登山帳篷｜單人開帳｜","一個人一帳篷，不拼帳，每帳可接受至多2位六歲以內兒童或嬰兒不佔床，若不符合規定恕無法接受出團。"],
    ["img\special-time\20.jpg","登山帳篷｜雙人開帳｜","二個人一帳篷，不拼帳，每帳可接受至多1位六歲以內兒童或嬰兒不佔床，若不符合規定恕無法接受出團。"],
    ["img\special-time\21.jpg","登山帳篷｜三人開帳｜","三個人一帳篷，不拼帳，若不符合規定恕無法接受出團。"],
    ["img\special-time\22.jpg","體驗遊程｜自備帳篷｜","不含所有裝備。"]]

function get(i) {
    var adult = document.getElementById(peoplearr[i][0]).value;
    var child = document.getElementById(peoplearr[i][1]).value;
    var totalprice = adult*4800+child*100;
    document.getElementById(peoplearr[i][2]).innerHTML="TWD "+totalprice;
    localStorage.setItem(peoplearr[i][0],adult) 
    localStorage.setItem(peoplearr[i][1],child)
    localStorage.setItem(peoplearr[i][2],totalprice)
}

$( function() {
    $( "input" ).checkboxradio();
  } );
  $( function() {
       var spinner = $( "#spinner" ).spinner();
       $( "button" ).button();
  } );

  $(function() {
  $( "#datepicker" ).datepicker({
    dateFormat:"yy-mm-dd",
    showButtonPanel: true,
    orientation: "top",
    beforeShowDay: function(day) {
    var day = day.getDay();
    if (day == 2 || day == 3 || day == 4) {
        return [false, "somecssclass"]
    } else {
        return [true, "someothercssclass"]
    }}
  });
});
      



var i, xprice;
  function get(i) {
   
    switch (i) {
      case 1:
            document.getElementById("valuein").value="登山帳篷｜單人開帳｜TWD 4,800";
            xprice=4800;
      break;
      case 2: 
            document.getElementById("valuein").value="登山帳篷｜雙人開帳｜TWD 3,800";
            xprice=3800;
      break;
      case 3: 
            document.getElementById("valuein").value="登山帳篷｜三人開帳｜TWD 3,450";
            xprice=3450;
      break;
      case 4: 
            document.getElementById("valuein").value="體驗遊程｜自備帳篷｜TWD 2,800";
            xprice=2800;
      break;
      
    }
      localStorage.setItem("activity",document.getElementById("valuein").value);
  }

              
  function getOrederInfo() {
    var activity = localStorage.getItem("activity");
    switch (activity) {
      case "登山帳篷｜單人開帳｜TWD 4,800" : xprice=4800; break;
      case "登山帳篷｜雙人開帳｜TWD 3,800" : xprice=3800; break;
      case "登山帳篷｜三人開帳｜TWD 3,450" : xprice=3450; break;
      case "體驗遊程｜自備帳篷｜TWD 2,800" : xprice=2800; break;
    }
    var leavingDate = $( "#datepicker" ).datepicker("getDate");
    var adult = document.getElementById("adult").value;
    var child = document.getElementById("child").value;
    var totalprice = adult*xprice+child*100;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var currentTime = new Date();
    
    document.getElementById("current").value=currentTime.getFullYear()+'年/'+(currentTime.getMonth()+1)+'月/'+currentTime.getDate()+'日    '+currentTime.getHours()+'時:'+currentTime.getMinutes()+'分:'+currentTime.getSeconds()+'秒';

    alert("\t請確認訂購明細後報名\t\n\n出發日期:"+$.datepicker.formatDate("yy-mm-dd", leavingDate)+"\n訂購方案:"+activity+"\n訂購人數: 成人人數："+adult+" 人, "+"   兒童人數："+child+" 人\n訂購金額: TWD "+totalprice+"\n訂購人:"+name+"\n電子信箱:"+email+"\n聯絡電話:"+phone+"\n\n\t請確認訂購明細後報名\t");         

    localStorage.setItem("leavingDate",$.datepicker.formatDate("yy-mm-dd", leavingDate));
    localStorage.setItem("adult",adult);
    localStorage.setItem("child",child);
    localStorage.setItem("totalprice",totalprice);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("phone",phone);
    localStorage.setItem("currentTime",currentTime.getFullYear()+'年/'+(currentTime.getMonth()+1)+'月/'+currentTime.getDate()+'日    '+currentTime.getHours()+'時:'+currentTime.getMinutes()+'分:'+currentTime.getSeconds()+'秒');



    
    
  }

 




