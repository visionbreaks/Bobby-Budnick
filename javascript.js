var advice = ['You call that a problem?  I have turds that try harder than you',
             'Life aint nuthin but suds nugs and cocoa puffs junior',
             'uh... Can you repeat the question?',
              ...AWFUL WAFFLE!!!',
             'aw geez grow a pair',
             'nobody told me tonight was amatuer night.  Get this loser outta here',
             'Let me guess you also cant pee next to people either',
             'In times like this all you can do is put the peanut butter on an close your eyes',
             'get ahold of yourself yer cryin like a weenie']
function new_advice(){
  
  var random_number = math.floor(math.random()*(advice.length));
}
document.getElementById('advice_display').innerHTML=advice[random_number]
