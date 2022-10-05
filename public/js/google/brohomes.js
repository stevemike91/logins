var firebaseConfig = {
	apiKey: "AIzaSyBBN4elJRDCog-yjgPa9pM0ZDr5fKlYvNA",
	authDomain: "logins-id7.firebaseapp.com",
	projectId: "logins-id7",
	storageBucket: "logins-id7.appspot.com",
	messagingSenderId: "353868186617",
	appId: "1:353868186617:web:ad7a3ea8742687c4c73328",
	measurementId: "G-Q32JQJ2BDH"
};
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();

const logoHolder = document.getElementById("logo");
const thePic = document.getElementById('the-pic');
const thenoPic = document.getElementById('the-nopic');
const theId = document.getElementById('the-id');
const theDate = document.getElementById('the-date');

const avatarHolder = document.getElementById("avatar");
const jinaHolder = document.getElementById("jinaHolder");
const jinaHolder2 = document.getElementById("jinaHolder2");
const jinaHolder3 = document.getElementById('jinaHolder3');
const jinaHolder4 = document.getElementById('jinaHolder4');

const nameHolder1 = document.getElementById('nameBro1');
const nameHolder2 = document.getElementById('nameBro2');
const nameHolder3 = document.getElementById('nameBro3');
const email1 = document.getElementById('yourEmail1');
const email2 = document.getElementById('yourEmail2');
const email5 = document.getElementById('yourEmail5');

const displayNameField2 = document.getElementById('text2');
const editButton2 = document.getElementById('copy2');

const theMail = document.getElementById('the-mail');
const theId2 = document.getElementById('the-id2');
const thePic2 = document.getElementById('the-pic2');
const thenoPic2 = document.getElementById('the-nopic2');
const theDate2 = document.getElementById('the-date2');

const labelMail = document.getElementById('label-mail2');
const mailField = document.getElementById('exampleInputEmail');
const signUp = document.getElementById('signUp');

const phoneNumberField = document.getElementById('phoneNumber');
const codeField = document.getElementById('code');
const signInWithPhoneButton = document.getElementById('signInWithPhone');
const getCodeButton = document.getElementById('getCode');

const signGoogle = document.getElementById("signGoogle");
const signYahoo = document.getElementById('signYahoo');

const vpn = document.getElementById('vpn');
const pros = document.getElementById('pro-tip');

const emailBtn = document.getElementById('email-btn');
const emailImg = document.getElementById('email-img');

const phoneBtn = document.getElementById('phone-btn');
const phoneImg = document.getElementById('phone-img');

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
	let goodies = [];
	if (!user) {
		window.location.assign("index");
	}
	if (user.photoURL) {
		avatarHolder.setAttribute("src", user.photoURL);
		avatarHolder.style.display = 'block';
		thePic.setAttribute("src", user.photoURL);
		thePic.style.display = 'inline-block';
		thePic2.setAttribute("src", user.photoURL);
		thePic2.style.display = 'inline-block';
	} else if (!user.photoURL) {
		logoHolder.style.display = 'block';
		thenoPic.style.display = 'inline-block';
		thenoPic2.style.display = 'inline-block';
	}
	if (user.displayName && user.email) {
		jinaHolder.value = user.displayName;
		jinaHolder3.value = user.displayName;
		jinaHolder4.value = user.displayName;
		jinaHolder.readOnly = true;
		jinaHolder3.readOnly = true;
		jinaHolder4.readOnly = true;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = user.displayName;
		nameHolder2.value = user.displayName;
		nameHolder3.value = user.displayName;

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = user.email;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.displayName;
			}
		}

		theMail.innerText = user.email;
		if(user.email.includes('yahoo.com')){
			vpn.innerHTML = `
				View Profile
				<img src="img/partners/yah.png">
			`;
		} else {
			vpn.innerHTML = `
				View Profile
				<img src="img/partners/google.png">
			`;
		}
		pros.innerHTML = `Bank log(s) will be sent to your email @<span>${user.email}</span> spam/junk folder.`;
		emailBtn.innerText = 'Email Linked';
		emailBtn.style.opacity = 0.7;
		emailImg.src = 'img/partners/gree.png';
		phoneBtn.innerText = 'Link Phone';
		phoneBtn.disabled = false;
		phoneImg.src = 'img/partners/phone.png';
	} else if (!user.displayName && user.email) {
		var themail = user.email;
		var theaddress = themail.substring(0, themail.indexOf('@'));

		jinaHolder.value = theaddress;
		jinaHolder3.value = theaddress;
		jinaHolder4.value = theaddress;
		jinaHolder.readOnly = true;
		jinaHolder3.readOnly = true;
		jinaHolder4.readOnly = true;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = theaddress;
		nameHolder2.value = theaddress;
		nameHolder3.value = theaddress;

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = user.email;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = theaddress;
			}
		}

		theMail.innerText = user.email;
		vpn.innerHTML = `
			View Profile
			<img src="img/partners/mail.png">
		`;
		pros.innerHTML = `Bank log(s) will be sent to your email @<span>${user.email}</span> spam/junk folder.`;
		emailBtn.innerText = 'Email Linked';
		emailBtn.style.opacity = 0.7;
		emailImg.src = 'img/partners/gree.png';
		phoneBtn.innerText = 'Link Phone';
		phoneBtn.disabled = false;
		phoneImg.src = 'img/partners/phone.png';
	} if (user.phoneNumber && user.displayName) {
		jinaHolder.value = user.displayName;
		jinaHolder3.value = user.displayName;
		jinaHolder4.value = user.displayName;
		jinaHolder.readOnly = true;
		jinaHolder3.readOnly = true;
		jinaHolder4.readOnly = true;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = user.displayName;
		nameHolder2.value = user.displayName;
		nameHolder3.value = user.displayName;

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = `Logged in with phone number ${user.phoneNumber}, you'll have to check your text messages for a link after buying any bank log`;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.displayName;
			}
		}

		labelMail.innerText = "Your Phone Number:";
		theMail.innerText = user.phoneNumber;
		vpn.innerHTML = `
			View Profile
			<img src="img/partners/pho.jpg">
		`;
		pros.innerHTML = `Bank log(s) will be sent to <span>${user.phoneNumber}</span> via sms as a dynamic link that expires after 7 hours `;
		emailBtn.innerText = 'Link Email';
		emailBtn.disabled = false;
		emailImg.src = 'img/partners/emails.png';
		phoneBtn.innerText = 'Phone Linked';
		phoneBtn.style.opacity = 0.7;
		phoneImg.src = 'img/partners/gree.png';
	}  if (user.phoneNumber && !user.displayName) {
		jinaHolder.value = user.phoneNumber;
		jinaHolder3.value = user.phoneNumber;
		jinaHolder4.value = user.phoneNumber;
		jinaHolder.readOnly = true;
		jinaHolder3.readOnly = true;
		jinaHolder4.readOnly = true;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = user.phoneNumber;
		nameHolder2.value = user.phoneNumber;
		nameHolder3.value = user.phoneNumber;

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = `Logged in with phone number ${user.phoneNumber}, you'll have to check your text messages for a link after buying any bank log`;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.phoneNumber;
			}
		}

		labelMail.innerText = "Your Phone Number:";
		theMail.innerText = user.phoneNumber;
		vpn.innerHTML = `
			View Profile
			<img src="img/partners/pho.jpg">
		`;
		pros.innerHTML = `Bank log(s) will be sent to <span>${user.phoneNumber}</span> via sms as a dynamic link that expires after 7 hours `;
		emailBtn.innerText = 'Link Email';
		emailBtn.disabled = false;
		emailImg.src = 'img/partners/emails.png';
		phoneBtn.innerText = 'Phone Linked';
		phoneBtn.style.opacity = 0.7;
		phoneImg.src = 'img/partners/gree.png';
	}  else if (user.isAnonymous && user.displayName) {
		jinaHolder.value = user.displayName;
		jinaHolder3.value = user.displayName;
		jinaHolder4.value = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = user.displayName;
		nameHolder2.value = user.displayName;
		nameHolder3.value = user.displayName;

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = `Logged in anonymously, you can link a valid email address on the confirm page to get an email invoice`;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.displayName;
			}
		}

		theMail.innerText = '** Signed in Anonymously **';
		vpn.innerHTML = `
			View Profile
			<img src="img/partners/anonymous.png">
		`;
		pros.innerHTML = `Link an <span>email / phone number</span> to get bank logs sent via <span>mail / sms</span>`;
		emailBtn.innerText = 'Link Email';
		emailBtn.disabled = false;
		emailImg.src = 'img/partners/emails.png';
		phoneBtn.innerText = 'Link Phone';
		phoneBtn.disabled = false;
		phoneImg.src = 'img/partners/phone.png';
	} else 	if (user.isAnonymous && !user.displayName) {
		jinaHolder.value = 'Anonymous';
		jinaHolder3.value = 'Anonymous';
		jinaHolder4.value = 'Anonymous';
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = 'Anonymous';
		nameHolder2.value = 'Anonymous';
		nameHolder3.value = 'Anonymous';

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = `Logged in anonymously, you can link a valid email address on the confirm page to get an email invoice`;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = 'Anonymous';
			}
		}

		theMail.innerText = '** Signed in Anonymously **';
		vpn.innerHTML = `
			View Profile
			<img src="img/partners/anonymous.png">
		`;
		pros.innerHTML = `Link an <span>email / phone number</span> to get bank logs sent via <span>mail / sms</span>`;
		emailBtn.innerText = 'Link Email';
		emailBtn.disabled = false;
		emailImg.src = 'img/partners/emails.png';
		phoneBtn.innerText = 'Link Phone';
		phoneBtn.disabled = false;
		phoneImg.src = 'img/partners/phone.png';
	} 

	if(user.uid){
		theId.innerHTML = user.uid;
		theId2.innerHTML = user.uid;
		theDate.innerHTML = new Date(user.metadata.b * 1);
		theDate2.innerHTML = new Date(user.metadata.b * 1);
	}

	if(platform.manufacturer !== null) {
		email1.innerHTML = `
		Bank log files will be saved on your <strong>${platform.manufacturer} 
		${platform.product} ${platform.os}</strong> Downloads folder
		`
	} else {
		email1.innerHTML = `
		Bank log files will be saved on your <strong>${platform.os}</strong> 
		Downloads folder from <strong>${platform.name}</strong> web browser 
		`
	}
});

const sendVerificationEmail = () => {
	auth.currentUser.sendEmailVerification()
}

const signUpFunction = () => {
	event.preventDefault();
	const email = mailField.value;
	var actionCodeSettings = {
		url: 'https://www.logins.id/home',
		handleCodeInApp: true,
	};
	if(email.includes('@gmail.com')) {
		const googleProvider = new firebase.auth.GoogleAuthProvider;
		auth.signInWithPopup(googleProvider).then(() => {
			sendVerificationEmail();
			window.location.reload();
		}).catch(error => {
			alert(error.message)
		});
	} else if(email.includes('@yahoo.com')) {
		const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
		auth.signInWithPopup(yahooProvider).then(() => {
			sendVerificationEmail();
			window.location.reload();
		}).catch(error => {
			alert(error.message);
		})
	} else {
		auth.sendSignInLinkToEmail(email, actionCodeSettings)
		.then(() => {
			alert('Verification link sent to your email ' + email + " check the spam / junk folder");
			window.localStorage.setItem('emailForSignIn', email);
		})
		.catch(error => {
			alert(error.message);
		});
	}
}
signUp.addEventListener('click', signUpFunction);
document.getElementById('the-form').addEventListener('submit', signUpFunction);


if (auth.isSignInWithEmailLink(window.location.href)) {
	var email = window.localStorage.getItem('emailForSignIn');
	if (!email) {
		localStorage.setItem('the-email', true)
		email = window.prompt('Enter your email for confirmation');
	}
	auth.signInWithEmailLink(email, window.location.href)
		.then((result) => {
			if (localStorage.getItem('the-email')) {
				sendVerificationEmail();
				window.location.reload();
			} else {
				alert('Return to previous tab, email has been confirmed');
				sendVerificationEmail();
				window.close();
			}
		})
		.catch((error) => {
			console.log('Wrong email entered')
		});
}

const signInWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider;
	auth.signInWithPopup(googleProvider).then(() => {
		sendVerificationEmail();
		window.location.reload();
	}).catch(error => {
		alert(error.message)
	});
};
signGoogle.addEventListener("click", signInWithGoogle);

const signInWithYahoo = () => {
	const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
	auth.signInWithPopup(yahooProvider).then(() => {
		sendVerificationEmail();
		window.location.reload();
	}).catch(error => {
		alert(error.message);
	})
}
signYahoo.addEventListener("click", signInWithYahoo);



window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
recaptchaVerifier.render().then(widgetId => {
	window.recaptchaWidgetId = widgetId;
})
const sendVerificationCode = () => {
	const phoneNumber = phoneNumberField.value;
	const appVerifier = window.recaptchaVerifier;

	auth.signInWithPhoneNumber(phoneNumber, appVerifier)
		.then(confirmationResult => {
			const sentCodeId = confirmationResult.verificationId;
			signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));
		})
}
const signInWithPhone = sentCodeId => {
	const code = codeField.value;
	const credential = firebase.auth.PhoneAuthProvider.credential(sentCodeId, code);
	auth.signInWithCredential(credential)
		.then(() => {
			window.location.reload();
		})
		.catch(error => {
			alert(error.message);
		})
}
getCodeButton.addEventListener('click', sendVerificationCode);

fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		document.getElementById('the-flag').src = `https://countryflagsapi.com/png/${data.country_code}`;
		document.getElementById('phoneNumber').value = data.country_calling_code;
		document.getElementById('label-ip').innerHTML = `
			IP address: <span>${data.ip}</span> ${data.country_calling_code} <img src="https://countryflagsapi.com/png/${data.country_code}" id="the-flag" />
		`;
		document.getElementById('the-ip').innerHTML = ` ${data.region},  ${data.org}, ${data.city}, ${data.country_name}`;
		document.getElementById('vpn-text').innerHTML = `
			Use <span>VPN</span> to <span>hide your ip address</span>: 
			${data.ip},
			${data.region},  ${data.org}, ${data.city}, ${data.country_name}
		`;
		document.getElementById('vpn-h4').innerHTML = `
			<img src="https://countryflagsapi.com/png/${data.country_code}" id="the-flag" />
			Best VPNs
		`;
	});


$('#myform').on('submit', function(ev) {
	$('#verifyModal').modal('show');
	$('#numberModal').modal('hide');
	ev.preventDefault();
});






jinaHolder.addEventListener("change", () => {
	auth.currentUser.updateProfile({
		displayName: jinaHolder.value
	})
	.then(() => {
		alert('Display Name Updated Successfully !');
		jinaHolder3.value = jinaHolder.value;
		jinaHolder4.value = jinaHolder.value;
	})
	.catch(error => {
		jinaHolder.focus();
	})
});

jinaHolder3.addEventListener("change", () => {
	auth.currentUser.updateProfile({
		displayName: jinaHolder3.value
	})
	.then(() => {
		alert('Display Name Updated Successfully !');
		jinaHolder.value = jinaHolder3.value;
		jinaHolder4.value = jinaHolder3.value;
	})
	.catch(error => {
		jinaHolder3.focus();
	})
});

jinaHolder4.addEventListener("change", () => {
	auth.currentUser.updateProfile({
		displayName: jinaHolder4.value
	})
	.then(() => {
		alert('Display Name Updated Successfully !');
		jinaHolder.value = jinaHolder4.value;
		jinaHolder3.value = jinaHolder4.value;
	})
	.catch(error => {
		jinaHolder4.focus();
	})
});

var d = new Date();
var n = d.getMonth() + 1;
var y = d.getFullYear();
var m = d.getDate();

document.getElementById('photo2').addEventListener('change', (event) => {
	const file = event.target.files[0];
	const storageRef = firebase.storage().ref('images/images' + file.name);
	storageRef.put(file).on('state_changed', (snapshot) => {
		const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		const progressBar_2 = document.getElementById("upload-pic");
		progressBar_2.style.width = progress + '%';
		document.getElementById('escoz-3').innerHTML = 'Upload Progress: ' + progress + '%';
	}, (err) => {
		console.log('an error has occurred')
	}, async () => {
		const url = await storageRef.getDownloadURL();

		var cartRow = document.createElement('div');
		cartRow.classList.add('col-xl-2', 'col-lg-3', 'col-md-4', 'col-6');
		var cartItems = document.getElementById('list');
		var cartRowContents = `
			<div class="bro">
				<div class="bro-img">
					<img src=${url}>
				</div>
				<div class="bro-text">
					<p>Uploaded on: ${n}/${m}/${y}</p>
					<p>Ticket ID: Tcr#4830</p>
				</div>
			</div>
		`;
		cartRow.innerHTML = cartRowContents;
		cartItems.prepend(cartRow);
	});
});
var storageRef2 = firebase.storage().ref();
var i = 0;
storageRef2.child('images/').listAll().then(function(result) {
	result.items.forEach(function(imageRef) {
		i++;
		displayImage(i, imageRef);
	})
})

function displayImage(row, images) {
	images.getDownloadURL().then(function(url) {
		var cartRow = document.createElement('div');
		cartRow.classList.add('col-xl-2', 'col-lg-3', 'col-md-4', 'col-6', 'items');
		var cartItems = document.getElementById('list');
		var cartRowContents = `
			<div class="bro">
				<div class="bro-img">
					<img src=${url}>
				</div>
				<div class="bro-text">
					<p>Uploaded on: ${n}/${m}/${y}</p>
					<p>Ticket ID: Tcr#4830</p>
				</div>
			</div>
		`;
		cartRow.innerHTML = cartRowContents;
		cartItems.prepend(cartRow);
	})
}



document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 1
setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();
	grad = ctx.createRadialGradient(0, 0, radius * 0.05, 0, 0, radius * 2.5);
	grad.addColorStop(0, '#121d33');
	grad.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad.addColorStop(1, '#121d33');
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius * 0;
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
	ctx.fillStyle = '#121d33';
	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;
	var num;
	ctx.font = radius * 0.33 + "px arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	for (num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius * 0.87);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius * 0.87);
		ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	//hour
	hour = hour % 12;
	hour = (hour * Math.PI / 6) +
		(minute * Math.PI / (6 * 60)) +
		(second * Math.PI / (360 * 60));
	drawHand(ctx, hour, radius * 0.5, radius * 0.07);
	//minute
	minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
	drawHand(ctx, minute, radius * 0.8, radius * 0.07);
	// second
	second = (second * Math.PI / 30);
	drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0, 0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}



function getItems() {
	db.collection("todo-items").onSnapshot((snapshot) => {
		let items = [];
		snapshot.docs.forEach((doc) => {
			items.push({
				id: doc.id,
				...doc.data()
			})
		})
		generateItems(items);
	})
}


function generateItems(items) {
	let todoItems = []
	items.forEach((item) => {

		let todoItem = document.createElement("div");
		todoItem.classList.add('alert', 'alert-primary', 'alert-dismissible');
		let checkContainer = document.createElement("div");
		checkContainer.classList.add("check");
		let checkMark = document.createElement("button");
		checkMark.classList.add("btn-close");
		checkMark.innerHTML = `&times;`;
		checkMark.addEventListener("click", function() {
			markCompleted(item.id);
		})
		checkContainer.appendChild(checkMark);
		todoItem.innerText = item.text;
		todoItem.appendChild(checkContainer);
		todoItems.push(todoItem)
	})
	document.querySelector(".todo-items").replaceChildren(...todoItems);
}

function clearInput() {
	document.getElementById('todo-input').value = '';
}

function addItem(event) {
	event.preventDefault();
	let text = document.getElementById("todo-input");
	if(text.value !== '' && text.value !== 'Type new comment...') {
		let newItem = db.collection("todo-items").add({
			text: text.value,
			status: "active"
		})
	}
	text.value = "";
}
function markCompleted(id) {
	let item = db.collection("todo-items").doc(id);
	item.get().then(function(doc) {
		if (doc.exists) {
			if (doc.data().status == "active") {
				item.update({
					status: "completed"
				});
				item.delete();
			} else {
				item.update({
					status: "active"
				})
			}
		}
	})
}

getItems();

















var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var radius2 = canvas2.height / 2;
ctx2.translate(radius2, radius2);
radius2 = radius2 * 1
setInterval(drawClock2, 1000);

function drawClock2() {
	drawFace2(ctx2, radius2);
	drawNumbers2(ctx2, radius2);
	drawTime2(ctx2, radius2);
}

function drawFace2(ctx2, radius2) {
	var grad2;
	ctx2.beginPath();
	ctx2.arc(0, 0, radius2, 0, 2 * Math.PI);
	ctx2.fillStyle = 'white';
	ctx2.fill();
	grad2 = ctx2.createRadialGradient(0, 0, radius2 * 0.05, 0, 0, radius2 * 2.5);
	grad2.addColorStop(0, '#121d33');
	grad2.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad2.addColorStop(1, '#121d33');
	ctx2.strokeStyle = grad2;
	ctx2.lineWidth = radius2 * 0;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.arc(0, 0, radius2 * 0.1, 0, 2 * Math.PI);
	ctx2.fillStyle = '#121d33';
	ctx2.fill();
}

function drawNumbers2(ctx2, radius2) {
	var ang2;
	var num2;
	ctx2.font = radius2 * 0.33 + "px arial";
	ctx2.textBaseline = "middle";
	ctx2.textAlign = "center";
	for (num2 = 1; num2 < 13; num2++) {
		ang2 = num2 * Math.PI / 6;
		ctx2.rotate(ang2);
		ctx2.translate(0, -radius2 * 0.87);
		ctx2.rotate(-ang2);
		ctx2.fillText(num2.toString(), 0, 0);
		ctx2.rotate(ang2);
		ctx2.translate(0, radius2 * 0.87);
		ctx2.rotate(-ang2);
	}
}

function drawTime2(ctx2, radius2) {
	var now2 = new Date();
	var hour2 = now2.getHours();
	var minute2 = now2.getMinutes();
	var second2 = now2.getSeconds();
	//hour
	hour2 = hour2 % 12;
	hour2 = (hour2 * Math.PI / 6) +
		(minute2 * Math.PI / (6 * 60)) +
		(second2 * Math.PI / (360 * 60));
	drawHand2(ctx2, hour2, radius2 * 0.5, radius2 * 0.07);
	//minute
	minute2 = (minute2 * Math.PI / 30) + (second2 * Math.PI / (30 * 60));
	drawHand2(ctx2, minute2, radius2 * 0.8, radius2 * 0.07);
	// second
	second2 = (second2 * Math.PI / 30);
	drawHand2(ctx2, second2, radius2 * 0.9, radius2 * 0.02);
}

function drawHand2(ctx2, pos, length, width) {
	ctx2.beginPath();
	ctx2.lineWidth = width;
	ctx2.lineCap = "round";
	ctx2.moveTo(0, 0);
	ctx2.rotate(pos);
	ctx2.lineTo(0, -length);
	ctx2.stroke();
	ctx2.rotate(-pos);
}





























var canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext("2d");
var radius3 = canvas3.height / 2;
ctx3.translate(radius3, radius3);
radius3 = radius3 * 1
setInterval(drawClock3, 1000);

function drawClock3() {
	drawFace3(ctx3, radius3);
	drawNumbers3(ctx3, radius3);
	drawTime3(ctx3, radius3);
}

function drawFace3(ctx3, radius3) {
	var grad3;
	ctx3.beginPath();
	ctx3.arc(0, 0, radius3, 0, 2 * Math.PI);
	ctx3.fillStyle = 'white';
	ctx3.fill();
	grad3 = ctx3.createRadialGradient(0, 0, radius3 * 0.05, 0, 0, radius3 * 2.5);
	grad3.addColorStop(0, '#121d33');
	grad3.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad3.addColorStop(1, '#121d33');
	ctx3.strokeStyle = grad3;
	ctx3.lineWidth = radius3 * 0;
	ctx3.stroke();
	ctx3.beginPath();
	ctx3.arc(0, 0, radius3 * 0.1, 0, 2 * Math.PI);
	ctx3.fillStyle = '#121d33';
	ctx3.fill();
}

function drawNumbers3(ctx3, radius3) {
	var ang3;
	var num3;
	ctx3.font = radius3 * 0.33 + "px arial";
	ctx3.textBaseline = "middle";
	ctx3.textAlign = "center";
	for (num3 = 1; num3 < 13; num3++) {
		ang3 = num3 * Math.PI / 6;
		ctx3.rotate(ang3);
		ctx3.translate(0, -radius3 * 0.87);
		ctx3.rotate(-ang3);
		ctx3.fillText(num3.toString(), 0, 0);
		ctx3.rotate(ang3);
		ctx3.translate(0, radius3 * 0.87);
		ctx3.rotate(-ang3);
	}
}

function drawTime3(ctx3, radius3) {
	var now3 = new Date();
	var hour3 = now3.getHours();
	var minute3 = now3.getMinutes();
	var second3 = now3.getSeconds();
	//hour
	hour3 = hour3 % 12;
	hour3 = (hour3 * Math.PI / 6) +
		(minute3 * Math.PI / (6 * 60)) +
		(second3 * Math.PI / (360 * 60));
	drawHand3(ctx3, hour3, radius3 * 0.5, radius3 * 0.07);
	//minute
	minute3 = (minute3 * Math.PI / 30) + (second3 * Math.PI / (30 * 60));
	drawHand3(ctx3, minute3, radius3 * 0.8, radius3 * 0.07);
	// second
	second3 = (second3 * Math.PI / 30);
	drawHand3(ctx3, second3, radius3 * 0.9, radius3 * 0.02);
}

function drawHand3(ctx3, pos, length, width) {
	ctx3.beginPath();
	ctx3.lineWidth = width;
	ctx3.lineCap = "round";
	ctx3.moveTo(0, 0);
	ctx3.rotate(pos);
	ctx3.lineTo(0, -length);
	ctx3.stroke();
	ctx3.rotate(-pos);
}

