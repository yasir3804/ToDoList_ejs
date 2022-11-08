const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=[];
app.get("/", function(req, res){

// var currentDay= new Date();
// var day="";
// switch (currentDay) {
//   case 0:
//     day="sunday";
//     break;
//     case 1:
//       day="monday";
//       break;
//       case 2:
//         day="tuesday";
//         break;
//         case 3:
//           day="wednesday";
//           break;
//           case 4:
//             day="thursday";
//             break;
//             case 5:
//               day="friday";
//               break;
//               case 5:
//                 day="saturday";
//                 break;
//   default:
//     console.log("Error:The current day is "+currentDay);
// }
//   res.render("lists",{weekDay:day})
// });
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
var day = today.toLocaleDateString("en-GB", options);
res.render("lists",{weekDay:day,addNewItem:items})
});

app.post("/",(req,res)=>{
  items.push(req.body.newItem)
  res.redirect("/")
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
