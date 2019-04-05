class Person {
	constructor(attr){
		this.name = attr.name
		this.age = attr.age
		this.location = attr.location
		this.gender = attr.gender
	}
	speak(){
		return `Hello. My name is ${this.name}, I am from ${this.location}.`
	}
}

class Instructor extends Person {
	constructor(attr){
		super(attr)
		this.specialty = attr.specialty
		this.favLanguage = attr.favLanguage
		this.catchPhrase = attr.catchPhrase
	}
	demo(subject){
		return `Today we are learning about ${subject}.`
	}
	grade(student, subject){
		return `${student.name} recives a perfect score on ${subject}.`
	}
	gradeAssignment(student){
		let rndm = Math.random()
		if (rndm >= 0.5){
			let newGrade = student.grade() + 1
			return newGrade
		} else {
			let newGrade = student.grade() - 1
			return newGrade
		}
		
	}
	graduateStudent(student){
		if (this.newGrade >= 70){
			return `${student.name} graduates Lambda School!`
		} else {
			return `${student.name} does not graduate Lambda School.`
		}
	}
}

class Student extends Person {
	constructor(attr){
		super(attr)
		this.previousBackground = attr.previousBackground
		this.className = attr.className
		this.favSubjects = attr.favSubjects
		
	}
	listsSubjects(array){
		return `${this.name}'s favorite subjects are: ${array[0]}, ${array[1]}, ${array[2]}.`
	}
	PRAssignment(subject){
		return `${this.name} has submitted a PR for ${subject}.`
	}
	sprintChallenge(subject){
		return `${this.name} has begun sprint challenge on ${subject}.`
	}
	grade(){
		return Math.floor(Math.random() * 100) + 1
		
	}

}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const mimi = new Instructor({
  name: 'Mimi',
  location: 'Chicago',
  age: 25,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'back-end',
  catchPhrase: `I don't gotta dance, I make coding moves.`
});

const bob = new Student({
	name: 'Bob',
	age: 29,
	location: 'Round Rock',
	gender: 'male',
	previousBackground: 'HTML and CSS',
	className: 'JS101',
	favSubjects: ['HTML', 'CSS', 'JavaScript'],
	
})

const jade = new Student({
	name: 'Jade',
	age: 31,
	location: 'New York City',
	gender: 'female',
	previousBackground: 'UX Design',
	className: 'UX404',
	favSubjects: ['CSS', 'Design', 'UX/UI']
})

console.log(fred.speak()) // Hello. My name is Fred, I am from Bedrock.
console.log(jade.speak()) // Hello. My name is Jade, I am from New York City.
console.log(fred.demo('JavaScript')) // Today we are learning about JavaScript.
console.log(mimi.grade(bob, 'Python')) // Bob recives a perfect score on Python.
console.log(bob.listsSubjects(bob.favSubjects)) // Bob's favorite subjects are: HTML, CSS, JavaScript.
console.log(jade.PRAssignment('Ruby')) // Jade has submitted a PR for Ruby.
console.log(jade.sprintChallenge('JavaScript')) // Jade has begun sprint challenge on JavaScript.
console.log(mimi.gradeAssignment(bob)) // Bob will graduate Lambda School if he passes.
console.log(mimi.graduateStudent(bob))