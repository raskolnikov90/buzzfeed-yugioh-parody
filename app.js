const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
	{
		id: 0,
		text: 'Pick a vacation destination',
		answers: [
			{
				text: 'Domino city',
				image: "https://64.media.tumblr.com/f5f18bce4bdcbd566285977820972e86/tumblr_pn4o3j0HsO1vhk9c0o9_r1_1280.png",
				alt: 'Domino City',
			},
			{
				text: 'Ancient Egypt',
				image: "https://i.kym-cdn.com/photos/images/original/001/557/043/647.jpg",
				alt: 'Pick in Egypt and god cards',
			},
			{
				text: 'Shadow Realm',
				image: "https://static.wikia.nocookie.net/evil/images/5/54/The_Shadow_Realm.jpg/revision/latest?cb=20180405180010",
				alt: 'Shadow Realm',
			},
			{
				text: 'KaibaLand',
				image: "https://static.wikia.nocookie.net/yugioh/images/3/3e/KaibaCorp.png/revision/latest?cb=20121216210628",
				alt: 'KaibaLand in the anime',
			}

		]
	},
	{
		id: 1,
		text: 'Pick some card you like',
		answers: [
			{
				text: 'Dark Magician',
				image: "https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzcyNjk5ODA5MTI4/top-10-cards-you-need-for-your-dark-magician-deck.jpg",
				alt: 'TCG Dark Magician card',
			},
			{
				text: 'Blue Eyes White Dragon',
				image: "https://m.media-amazon.com/images/I/51W6duELHdL._AC_.jpg",
				alt: 'TCG Blue Eyes White Dragon',
			},
			{
				text: 'Dark Master Zorc',
				image: "https://m.media-amazon.com/images/I/71KZY5Q9sUL._AC_SY879_.jpg",
				alt: 'TCG Zorc Card',
			},
			{
				text: 'Jinzo The Psycho Shocker',
				image: "https://m.media-amazon.com/images/I/51o+DL37whL._AC_.jpg",
				alt: 'TCG Jinzo Card',
			}

		]

	},
	{
		id: 2,
		text: 'Pick your hobbie',
		answers: [

			{
				text: 'Having fun with friends',
				image: "https://storage.googleapis.com/ygoprodeck.com/pics_artgame/2295831.jpg",
				alt: 'symbol of friendship',
			},

			{
				text: 'Inventing new game technology',
				image: "https://64.media.tumblr.com/d79f31de9ab57390c85b7d10342fad9b/tumblr_inline_mre1uwVKSK1qz4rgp.jpg",
				alt: 'Kaiba working on something',
			},
			{
				text: 'Punishing people in Shadow Games',
				image: "https://static.wikia.nocookie.net/yugioh/images/4/4a/Mai%27s_soul_room.png/revision/latest?cb=20170901221401",
				alt: 'Yami Marik penalty game for Mai',
			},
			{
				text: 'Gambling',
				image: "https://static.zerochan.net/Graceful.Dice.full.3200042.jpg",
				alt: 'Grateful dice art',
			},
		]
	}

]


answers = [
	{
		combination:['Ancient Egypt', 'Dark Magician', 'Having fun with friends'],
		Text: 'Yami Yugi/Pharaoh Atem!',
		image: 'https://static.wikia.nocookie.net/yugioh/images/9/92/Virtual_Dark_Yugi.png/revision/latest?cb=20170205152337',
		alt: 'Atem in Dark side of dimensions'
	},
	{
		combination:['Ancient Egypt', 'Dark Magician', 'Punishing people in Shadow Games'],
		Text: 'Yami Yugi/Pharaoh Atem!',
		image: 'https://static.wikia.nocookie.net/yugioh/images/9/92/Virtual_Dark_Yugi.png/revision/latest?cb=20170205152337',
		alt: 'Atem in Dark side of dimensions'
	},
	{
		combination:['Domino city', 'Jinzo The Psycho Shocker', 'Gambling'],
		Text: 'Jonouchi Katsuya!',
		image: 'https://static.zerochan.net/Jounouchi.Katsuya.full.1827620.jpg',
		alt: 'Joey Meme Face'
	},
	{
		combination:['Domino city', 'Jinzo The Psycho Shocker', 'Having fun with friends'],
		Text: 'Jonouchi Katsuya!',
		image: 'https://static.zerochan.net/Jounouchi.Katsuya.full.1827620.jpg',
		alt: 'Joey Meme Face'
	},
	{
		combination:['KaibaLand', 'Blue Eyes White Dragon', 'Inventing new game technology'],
		Text: 'Seto Kaiba!',
		image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29d10f01-3648-43ad-ad7f-789dcff485d6/de2jrvb-1fdbd74e-36da-4696-be1e-26290beb4f9b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5ZDEwZjAxLTM2NDgtNDNhZC1hZDdmLTc4OWRjZmY0ODVkNlwvZGUyanJ2Yi0xZmRiZDc0ZS0zNmRhLTQ2OTYtYmUxZS0yNjI5MGJlYjRmOWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FNPY2rQ9yBFW7Lmi2loy3D2fUplloruGj5GkqZyofCk',
		alt: 'Kaiba dark side of dimensions'
	},

	{
		combination:['Shadow Realm', 'Dark Master Zorc', 'Punishing people in Shadow Games'],
		Text: 'Yami Bakura!',
		image: 'https://preview.redd.it/39s4mamgsyh21.jpg?auto=webp&s=3dc0ece9b2f7242b3e87bb5c83fc499e9688a685',
		alt: 'Yami Bakura creepy smile'
	},


]


const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
	questions.forEach(question =>{
		const titleBlock = document.createElement('div')
		titleBlock.id = question.id 
		titleBlock.classList.add('title-block')
		const titleHeading = document.createElement('h2')
		titleHeading.textContent = question.text
		titleBlock.append(titleHeading)
		questionDisplay.append(titleBlock)

		const answersBlock = document.createElement('div')
		answersBlock.id = question.id + "-questions"
		answersBlock.classList.add('answer-options')

		unansweredQuestions.push(question.id)

		question.answers.forEach(answer => {
			const answerBlock = document.createElement('div')
			answerBlock.classList.add('answer-block')
			answerBlock.addEventListener('click', ()=> handleClick(question.id, answer.text))

			const answerImage = document.createElement('img')
			answerImage.setAttribute('src', answer.image)
			answerImage.setAttribute('alt', answer.alt)

			const answerTitle = document.createElement('h3')
			answerTitle.textContent = answer.text


			answerBlock.append(answerImage, answerTitle)
			answersBlock.append(answerBlock)


		})

		questionDisplay.append(answersBlock)

	})
}

populateQuestions()

const handleClick = (questionId, chosenAnswer)=>{
	if(unansweredQuestions.includes(questionId)){
		chosenAnswers.push(chosenAnswer)
		console.log(chosenAnswers)
		const itemToRemove = unansweredQuestions.indexOf(questionId)
		if (itemToRemove > -1) {
			unansweredQuestions.splice(itemToRemove, 1)
		}

		disableQuestionBlock(questionId, chosenAnswer)
		const lowestQuestionId = Math.min(...unansweredQuestions)
		location.href = '#' + lowestQuestionId

		if (!unansweredQuestions.length ) {
			location.href = '#answer'
			showAnswer()
		}
	}
}

const showAnswer = () => {
	let result = answers[Math.floor(Math.random() * 5)]
	answers.forEach(answer =>{

		if ((chosenAnswers.includes(answer.combination[0]) &&
			chosenAnswers.includes(answer.combination[1])) ||
			(chosenAnswers.includes(answer.combination[0]) &&
			chosenAnswers.includes(answer.combination[2])) ||
			(chosenAnswers.includes(answer.combination[1]) &&
			chosenAnswers.includes(answer.combination[2]))

			) {
			result = answer
		}
			

	})


	const answerBlock = document.createElement('div')
	answerBlock.classList.add('result-block')
	const answerTitle = document.createElement('h3')
	answerTitle.textContent = result.Text
	const answerImage = document.createElement('img')
	answerImage.setAttribute('src', result.image)
	answerImage.setAttribute('alt', result.alt)

	answerBlock.append(answerTitle, answerImage)
	answerDisplay.append(answerBlock)

	const allAnswerBlocks = document.querySelectorAll('.answer-block')
	Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
	const currentQuestionBlock = document.getElementById(questionId + '-questions')

	Array.from(currentQuestionBlock.children).forEach(block => {
		if (block.children.item(1).innerHTML != chosenAnswer) {
			block.style.opacity = '50%'
		}
	})

}