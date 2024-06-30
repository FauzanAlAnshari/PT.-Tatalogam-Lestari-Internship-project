const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const navMenu = document.querySelector('#checkbox');
const drawer = document.querySelector('#drawer-backdrop');
const userAvatar = document.querySelector('.user-avatar');
const dropdownAvatar = document.querySelector('.dropdown-avatar');
const body = document.getElementsByTagName('body');


// NOTE: This is function for header scroll
window.onscroll = function() {
    headerScroll();
}

function headerScroll() {
    if (document.documentElement.scrollTop >= 200 ) {
        header.classList.add('scroll');    
    } else {
        header.classList.remove('scroll'); 
    }
}

// NOTE: This is function for sidebar active
navMenu.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    header.classList.toggle('active');
    drawer.classList.toggle('active');
    // NOTE: This is function for close sidebar when user clicks anywhere
    drawer.addEventListener('click', function() {
        if (navMenu.checked = true ) {
            navMenu.checked = false;
            sidebar.classList.remove('active');
            header.classList.remove('active');
            drawer.classList.remove('active');
        }
    })
}
);



// NOTE: This is function for typewriter hero
// The typewriter element
const typeWriterElement = document.getElementById('typewriter');

// The TextArray: 
const textArray = ["Setia","Integritas","Gratitute", "Anggapan Positif", "Professional"];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');

// function to generate the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);


AOS.init();