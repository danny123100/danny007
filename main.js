// Paste the code from Firebase 
var config = {
  apiKey: "AIzaSyCBKpNIs1wkNUI0UtQXO4_6uBpx1V6FjTg",
    authDomain: "nctu007-8e07c.firebaseapp.com",
    databaseURL: "https://nctu007-8e07c.firebaseio.com",
    projectId: "nctu007-8e07c",
    storageBucket: "nctu007-8e07c.appspot.com",
    messagingSenderId: "610685778437"
    
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});