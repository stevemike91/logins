const mailField = document.getElementById('exampleInputEmail');
const signUp = document.getElementById('signUp');
const signFacebook = document.getElementById('signFacebook');
const signGoogle = document.getElementById("signGoogle");
const signGithub = document.getElementById('signGithub');
const signYahoo = document.getElementById('signYahoo');

const signGoogle2 = document.getElementById("signGoogle2");
const signYahoo2 = document.getElementById('signYahoo2');

const signAnony = document.getElementById('signAnony');

const phoneNumberField = document.getElementById('phoneNumber');
const codeField = document.getElementById('code');
const signInWithPhoneButton = document.getElementById('signInWithPhone');
const getCodeButton = document.getElementById('getCode');

localStorage.setItem('banklogs',[])

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

const auth = firebase.auth();


const sendVerificationEmail = () => {
	auth.currentUser.sendEmailVerification().then(() => {
		alert('Verification email sent to your inbox, check the spam/junk folder')
	}).catch(error => {
		console.log(error.message);
	});
}

const signUpFunction = () => {
	event.preventDefault();
	const email = mailField.value;
	var actionCodeSettings = {
		url: 'https://www.logins.id',
		handleCodeInApp: true,
	};

	if(email.includes('@gmail.com')) {
		const googleProvider = new firebase.auth.GoogleAuthProvider;
		auth.signInWithPopup(googleProvider).then(() => {
			sendVerificationEmail();
			window.location.assign('dashboard');
			}).catch(error => {
				alert(error.message)
			});
	} else if(email.includes('@yahoo.com')) {
		const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
		auth.signInWithPopup(yahooProvider).then(() => {
			sendVerificationEmail();
			window.location.assign('dashboard');
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
				window.location.assign('dashboard');
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

const signInAnony = () => {
	auth.signInAnonymously().then(() => {
		window.location.assign('dashboard');
	}).catch(error => {
		alert(error.message)
	});
};
signAnony.addEventListener("click", signInAnony);

const signInWithFacebook = () => {
	const facebookProvider = new firebase.auth.FacebookAuthProvider;
	auth.signInWithPopup(facebookProvider).then(() => {
		sendVerificationEmail();
		window.location.assign('dashboard');
	}).catch(error => {
		alert(error.message)
	});
};
signFacebook.addEventListener("click", signInWithFacebook);

const signInWithGithub = () => {
	const githubProvider = new firebase.auth.GithubAuthProvider;
	auth.signInWithPopup(githubProvider).then(() => {
		sendVerificationEmail();
		window.location.assign('dashboard');
	}).catch(error => {
		alert(error.message)
	});
};
signGithub.addEventListener("click", signInWithGithub);


const signInWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider;
	auth.signInWithPopup(googleProvider).then(() => {
		sendVerificationEmail();
		window.location.assign('dashboard');
	}).catch(error => {
		alert(error.message)
	});
};
signGoogle.addEventListener("click", signInWithGoogle);
signGoogle2.addEventListener("click", signInWithGoogle);

const signInWithYahoo = () => {
	const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
	auth.signInWithPopup(yahooProvider).then(() => {
		sendVerificationEmail();
		window.location.assign('dashboard');
	}).catch(error => {
		alert(error.message);
	})
}
signYahoo.addEventListener("click", signInWithYahoo);
signYahoo2.addEventListener("click", signInWithYahoo);


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
			window.location.assign('dashboard');
		})
		.catch(error => {
			alert(error.message);
		})
}
getCodeButton.addEventListener('click', sendVerificationCode);

auth.onAuthStateChanged(user => {
	if (user) {
		window.location.assign('dashboard');
	}
});

fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		document.getElementById('the-flag').src = `https://countryflagsapi.com/png/${data.country_code}`;
		document.getElementById('phoneNumber').value = data.country_calling_code;
	});

$('#myform').on('submit', function(ev) {
	$('#coModal').modal('show');
	$('#phoneModal').modal('hide');
	ev.preventDefault();
});

document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};

function changeImage() {
    var image = document.getElementById('theIcon');
    if(image.classList.contains('fa-toggle-on')){
        image.classList.remove('fa-toggle-on')
        image.classList.add('fa-toggle-off');
    } else if(image.classList.contains('fa-toggle-off')){
        image.classList.remove('fa-toggle-off')
        image.classList.add('fa-toggle-on');
    }
}
