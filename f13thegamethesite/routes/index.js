
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'F13 The Game: The Site', link: '/part1' });
};

/*
* Let's get Part 1, shall we?
*/
exports.part1 = function(req, res){
	res.render('gamepage', { title: 'The Start', heading: 'The campers show up', description: 'These campers are ready to GET IT ON', choice1: 'Do Drugs', choice2: 'Drink Beer', link1: '/drugs', link2: '/beer'});

	if(timeToDie(Math.floor((Math.random()*10)+1))) {
		res.redirect('/death');
	}
};

/*
* Drugs!
*/
exports.drugs = function(req, res){
	res.render('gamepage', { title: 'WEED!', heading: 'Smokin\' a Doob', description: 'We\'re smoking some crazy weed, man', choice1: 'Drink Beer', choice2: 'Go Skinny Dipping', link1: '/beer', link2: '/nudity'});

	if(timeToDie(Math.floor((Math.random()*10)+1))) {
		res.redirect('/death');
	}
};

/*
* Beer!
*/
exports.beer = function(req, res){
	res.render('gamepage', { title: 'BREWSKIS', heading: 'DRINKIN\' SOME BEER!', description: 'The campers are downing a lot of beer. WHAT COULD HAPPEN NEXT?', choice1: 'Skinny Dipping!', choice2: 'Have Some SEX!', link1: '/nudity', link2: '/sex'});
	
	if(timeToDie(Math.floor((Math.random()*10)+1))) {
		res.redirect('/death');
	}
};

/*
* Gratuitous Nudity!
*/
exports.nudity = function(req, res){
	res.render('gamepage', { title: 'NUDITY!', heading: 'We\' got some nudity!', description: 'You get the idea.', choice1: 'Time For Sex', choice2: 'Time For Drugs', link1: '/sex', link2: '/drugs'});

	if(timeToDie(Math.floor((Math.random()*10)+1))) {
		res.redirect('/death');
	}
};

/*
* Lots and lots of bumpin' uglies! 
*/
exports.sex = function(req, res){
	res.render('gamepage', { title: 'XXX', heading: 'Makin\' Love', description: 'This is censored as this is a PG-13 game', choice1: 'Shower Time!', choice2: 'Drug Time!', link1: '/nudity', link2: '/drugs'});
	
	if(timeToDie(Math.floor((Math.random()*10)+1))) {
		res.redirect('/death');
	}
};

/*
* DEATH
*/
exports.death = function(req, res) {
	res.render('gamepage', {title: 'You\'re Dead', heading: 'You\'re Dead', description: 'Jason Killed You.'});
}

function timeToDie(playerNum) {
	var thisNum = Math.floor((Math.random()*10)+1);
	console.log(thisNum + " vs " + playerNum);
	return (playerNum === thisNum);
}
