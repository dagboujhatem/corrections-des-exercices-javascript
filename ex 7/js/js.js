  function member(id, name, grade){
      id=id;
      name=name;
      grade=grade;
      toString: function(){return this.id +' : '+ this.name +' , '+ this.grade ;}
    }


function team(){
  team= new array();
  add: function(member){
  team.push(member);
  }
}

var member1 = member(1, "amira", "grade1");

alert(member1.toString());
