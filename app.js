var username= prompt ('please enter your username');
var userAge= prompt ('please enter your age');
alert ('welcome to my website');
var timeNow= prompt ('please enter the time');
if (timeNow >= 12){
  document.write('good evening')
  document.write('<img src="https://thefoodellers.com/wp-content/uploads/2020/01/Treasury-at-night-Petra-Jordan-scaled.jpeg">')
 };
 if (timeNow < 12){
    document.write('good morning')
     document.write ('<img src="https://imgk.timesnownews.com/story/GM.png?tr=w-600,h-450">')};
     // new comment
     
//  hello 
var favPlace= prompt ('please enter your favourate touristic place in jordan');

while(favPlace !== 'dead sea'&& favPlace !== 'jerash'){
  favPlace = prompt('Please enter dead sea or jerash');
}
var userChoose;

if (favPlace === 'dead sea' ){
  userChoose= '<img src="https://velvetescape.com/wp-content/uploads/2011/11/IMG_2370-3-1280x920.jpg">';
} 
else if (favPlace === 'jerash' ){
  userChoose= '<img src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2019/01/shutterstock_174061010.jpg">';
}

var imagesNumber= prompt('How many images do you want?');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}