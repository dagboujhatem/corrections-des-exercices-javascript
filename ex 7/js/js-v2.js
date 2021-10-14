// factory function

function member(id, name, grade){
  return { 
    id,
    name,
    grade,
    toString(){
      console.log(this.id +' : '+ this.name +' , '+ this.grade);
    }
  }
}

function team(){
  return {
    array:[],
    add(member){
      this.array.push(member);
    }
  }
}

var member1 = member(1, "amira", "grade1");
var member2 = member(2, "fathi", "grade5");
var member3 = member(3, "jamil", "grade5");
const team1 = team();
const team2 = team();

team1.add(member1);
team1.add(member2);
team2.add(member3);

team1.array.forEach(member => {
  member.toString()
});
team2.array.forEach(member => {
  member.toString()
});


// Constructor function

function Member(id, name, grade){
  this.id = id;
  this.name = name;
  this.grade = grade;
  this.toString = function() {
    console.log(this.id +' : '+ this.name +' , '+ this.grade);
  }
}

function Team() {
  this.array = [];
  this.add = function (member) {
    this.array.push(member);
  }
}

const constructMemeber1 = new Member(4, 'mahdi', 'grade2')
const constructMemeber2 = new Member(5, 'hatem', 'grade2')

const constructTeam1 = new Team()
constructTeam1.add(constructMemeber1)
constructTeam1.add(constructMemeber2)

constructTeam1.array.forEach(member => {
  member.toString()
});