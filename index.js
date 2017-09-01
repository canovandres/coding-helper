'use strict';

const App = require('actions-on-google').ApiAiApp;
const functions = require('firebase-functions');

/* C++ */
const CPLUSPLUS_IF_IMG = 'https://firebasestorage.googleapis.com/v0/b/codinghelper-b28f7.appspot.com/o/if-else_c%2B%2B.PNG?alt=media&token=dc115d21-6042-4370-a359-f745070f8345'
const CPLUSPLUS_FOR_IMG = 'https://firebasestorage.googleapis.com/v0/b/codinghelper-b28f7.appspot.com/o/for_c%2B%2B.PNG?alt=media&token=1fb411cc-3266-4c93-b084-b429e03d9264'
const CPLUSPLUS_WHILE_IMG = 'https://firebasestorage.googleapis.com/v0/b/codinghelper-b28f7.appspot.com/o/while_c%2B%2B.PNG?alt=media&token=e8f1c5fe-e7ce-4142-9ded-105a7c2c995f'
const CPLUSPLUS_DOWHILE_IMG = 'https://firebasestorage.googleapis.com/v0/b/codinghelper-b28f7.appspot.com/o/do-while_c%2B%2B.PNG?alt=media&token=1d8313ea-e4da-4c85-9135-a7b85f49450b'
const CPLUSPLUS_OUTPUT_IMG = 'https://firebasestorage.googleapis.com/v0/b/codinghelper-b28f7.appspot.com/o/output_c%2B%2B.PNG?alt=media&token=dd0865da-e869-4181-b3c3-31fe86ad66d3'
const CPLUSPLUS_INPUT_IMG = 'https://firebasestorage.googleapis.com/v0/b/codinghelper-b28f7.appspot.com/o/input_c%2B%2B.PNG?alt=media&token=37f7d1fd-bb01-4afe-8cfa-32bf1e2eb38b'
const CPLUSPLUS_SWITCH_IMG = 'https://firebasestorage.googleapis.com/v0/b/codinghelper-b28f7.appspot.com/o/switch_c%2B%2B.PNG?alt=media&token=4b69cfdb-5413-42a7-b201-914b6f4c120a'

const CPLUSPLUS_IF_DESC = '<speak>if <break time="0.5" /> parenthesis <break time="0.5" /> condition <break time="0.5" /> parenthesis <break time="0.5" />'
						+ 'content between curly brackets <break time="0.5" />else, if <break time="0.5" /> parenthesis <break time="0.5" /> condition <break time="0.5" /> parenthesis <break time="0.5" />'
						+ 'content between curly brackets <break time="0.5" />else <break time="0.5" />content between curly brackets <break time="1" />'
						+ 'Would you want to know anything else?</speak>'
const CPLUSPLUS_FOR_DESC = 'for'
const CPLUSPLUS_WHILE_DESC = 'while'
const CPLUSPLUS_DOWHILE_DESC = 'do while'
const CPLUSPLUS_OUTPUT_DESC = 'output'
const CPLUSPLUS_INPUT_DESC = 'input'
const CPLUSPLUS_SWITCH_DESC = 'switch'

/* JAVA */
const JAVA_IF_IMG = ''
const JAVA_FOR_IMG = ''
const JAVA_WHILE_IMG = ''
const JAVA_DOWHILE_IMG = ''
const JAVA_OUTPUT_IMG = ''
const JAVA_INPUT_IMG = ''
const JAVA_SWITCH_IMG = ''

const JAVA_IF_DESC = 'if'
const JAVA_FOR_DESC = 'for'
const JAVA_WHILE_DESC = 'while'
const JAVA_DOWHILE_DESC = 'do while'
const JAVA_OUTPUT_DESC = 'output'
const JAVA_INPUT_DESC = 'input'
const JAVA_SWITCH_DESC = 'switch'

/* PYTHON */
const PYTHON_IF_IMG = ''
const PYTHON_FOR_IMG = ''
const PYTHON_WHILE_IMG = ''
const PYTHON_DOWHILE_IMG = ''
const PYTHON_OUTPUT_IMG = ''
const PYTHON_INPUT_IMG = ''
const PYTHON_SWITCH_IMG = ''

const PYTHON_IF_DESC = 'if'
const PYTHON_FOR_DESC = 'for'
const PYTHON_WHILE_DESC = 'while'
const PYTHON_DOWHILE_DESC = 'do while'
const PYTHON_OUTPUT_DESC = 'output'
const PYTHON_INPUT_DESC = 'input'
const PYTHON_SWITCH_DESC = 'switch'

/* SWIFT */
const SWIFT_IF_IMG = ''
const SWIFT_FOR_IMG = ''
const SWIFT_WHILE_IMG = ''
const SWIFT_DOWHILE_IMG = ''
const SWIFT_OUTPUT_IMG = ''
const SWIFT_INPUT_IMG = ''
const SWIFT_SWITCH_IMG = ''

const SWIFT_IF_DESC = 'if'
const SWIFT_FOR_DESC = 'for'
const SWIFT_WHILE_DESC = 'while'
const SWIFT_DOWHILE_DESC = 'do while'
const SWIFT_OUTPUT_DESC = 'output'
const SWIFT_INPUT_DESC = 'input'
const SWIFT_SWITCH_DESC = 'switch'


exports.codingHelper = functions.https.onRequest((request, response) => {
	const app = new App({ request, response });
	const WELCOME_INTENT = 'input.welcome';
	const SYNTAX_INTENT = 'get.syntax';

	function welcomeIntent (app) {
		app.ask('Welcome to coding helper! How can I help you?');
	}

	function syntaxIntent (app) {
    	let language = app.data.programming_language;
		let syntax = app.data.programming_syntax;

		if (language == 'c++') {
			switch (syntax) {
			case 'if':
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the if,<break time="0.5" /> else syntax in c plus plus</speak>', displayText: 'Here is the if-else syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(CPLUSPLUS_IF_IMG, 'if-else in C++'))
						.addSimpleResponse({speech: CPLUSPLUS_IF_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: CPLUSPLUS_IF_DESC});
				}
				break;
			case 'for': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the for loop syntax in c plus plus</speak>', displayText: 'Here is the for loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(CPLUSPLUS_FOR_IMG, 'for loop in C++'))
						.addSimpleResponse({speech: CPLUSPLUS_FOR_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: CPLUSPLUS_FOR_DESC});
				}
				break;
			case 'while': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the while loop syntax in c plus plus</speak>', displayText: 'Here is the while loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(CPLUSPLUS_WHILE_IMG, 'while loop in C++'))
						.addSimpleResponse({speech: CPLUSPLUS_WHILE_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: CPLUSPLUS_WHILE_DESC});
				}
				break;
			case 'do while': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the do while loop syntax in c plus plus</speak>', displayText: 'Here is the do-while loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(CPLUSPLUS_DOWHILE_IMG, 'do-while loop in C++'))
						.addSimpleResponse({speech: CPLUSPLUS_DOWHILE_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: CPLUSPLUS_DOWHILE_DESC});
				}
				break;
			case 'output': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the output syntax in c plus plus</speak>', displayText: 'Here is the output syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(CPLUSPLUS_OUTPUT_IMG, 'output in C++'))
						.addSimpleResponse({speech: CPLUSPLUS_OUTPUT_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: CPLUSPLUS_OUTPUT_DESC});
				}
				break;
			case 'input': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the input syntax in c plus plus</speak>', displayText: 'Here is the input syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(CPLUSPLUS_INPUT_IMG, 'input in C++'))
						.addSimpleResponse({speech: CPLUSPLUS_INPUT_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: CPLUSPLUS_INPUT_DESC});
				}
				break;
			case 'switch': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the switch syntax in c plus plus</speak>', displayText: 'Here is the switch syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(CPLUSPLUS_SWITCH_IMG, 'switch in C++'))
						.addSimpleResponse({speech: CPLUSPLUS_SWITCH_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: CPLUSPLUS_SWITCH_DESC});
				}
				break;
			default: app.ask({speech: 'Unknownk syntax structure.'});

			}
		}
		else if(language == "Java"){
			switch (syntax) {
			case 'if':
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the if,<break time="0.5" /> else syntax in java</speak>', displayText: 'Here is the if-else syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(JAVA_IF_IMG, 'if-else in Java'))
						.addSimpleResponse({speech: JAVA_IF_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: JAVA_IF_DESC});
				}
				break;
			case 'for': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the for loop syntax in java</speak>', displayText: 'Here is the for loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(JAVA_FOR_IMG, 'for loop in Java'))
						.addSimpleResponse({speech: JAVA_FOR_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: JAVA_FOR_DESC});
				}
				break;
			case 'while': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the while loop syntax in java</speak>', displayText: 'Here is the while loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(JAVA_WHILE_IMG, 'while loop in Java'))
						.addSimpleResponse({speech: JAVA_WHILE_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: JAVA_WHILE_DESC});
				}
				break;
			case 'do while': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the do while loop syntax in java</speak>', displayText: 'Here is the do-while loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(JAVA_DOWHILE_IMG, 'do-while loop in Java'))
						.addSimpleResponse({speech: JAVA_DOWHILE_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: JAVA_DOWHILE_DESC});
				}
				break;
			case 'output': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the output syntax in java</speak>', displayText: 'Here is the output syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(JAVA_OUTPUT_IMG, 'output in Java'))
						.addSimpleResponse({speech: JAVA_OUTPUT_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: JAVA_OUTPUT_DESC});
				}
				break;
			case 'input': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the input syntax in java</speak>', displayText: 'Here is the input syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(JAVA_INPUT_IMG, 'input in Java'))
						.addSimpleResponse({speech: JAVA_INPUT_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: JAVA_INPUT_DESC});
				}
				break;
			case 'switch': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the switch syntax in java</speak>', displayText: 'Here is the switch syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(JAVA_SWITCH_IMG, 'switch in Java'))
						.addSimpleResponse({speech: JAVA_SWITCH_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: JAVA_SWITCH_DESC});
				}
				break;
			default: app.ask({speech: 'I\'m sorry, but I don\'t know that syntax structure. Try another one.'});

			}
		}
		else if(language == "Python"){
			switch (syntax) {
			case 'if':
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the if,<break time="0.5" /> else syntax in python</speak>', displayText: 'Here is the if-else syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(PYTHON_IF_IMG, 'if-else in Python'))
						.addSimpleResponse({speech: PYTHON_IF_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: PYTHON_IF_DESC});
				}
				break;
			case 'for': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the for loop syntax in python</speak>', displayText: 'Here is the for loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(PYTHON_FOR_IMG, 'for loop in Python'))
						.addSimpleResponse({speech: PYTHON_FOR_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: PYTHON_FOR_DESC});
				}
				break;
			case 'while': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the while loop syntax in python</speak>', displayText: 'Here is the while loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(PYTHON_WHILE_IMG, 'while loop in Python'))
						.addSimpleResponse({speech: PYTHON_WHILE_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: PYTHON_WHILE_DESC});
				}
				break;
			case 'do while': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the do while loop syntax in python</speak>', displayText: 'Here is the do-while loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(PYTHON_DOWHILE_IMG, 'do-while loop in Python'))
						.addSimpleResponse({speech: PYTHON_DOWHILE_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: PYTHON_DOWHILE_DESC});
				}
				break;
			case 'output': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the output syntax in python</speak>', displayText: 'Here is the output syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(PYTHON_OUTPUT_IMG, 'output in Python'))
						.addSimpleResponse({speech: PYTHON_OUTPUT_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: PYTHON_OUTPUT_DESC});
				}
				break;
			case 'input': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the input syntax in python</speak>', displayText: 'Here is the input syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(PYTHON_INPUT_IMG, 'input in Python'))
						.addSimpleResponse({speech: PYTHON_INPUT_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: PYTHON_INPUT_DESC});
				}
				break;
			case 'switch': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the switch syntax in python</speak>', displayText: 'Here is the switch syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(PYTHON_SWITCH_IMG, 'switch in Python'))
						.addSimpleResponse({speech: PYTHON_SWITCH_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: PYTHON_SWITCH_DESC});
				}
				break;
			default: app.ask({speech: 'I\'m sorry, but I don\'t know that syntax structure. Try another one.'});

			}
		}
		else if(language == "Swift"){
			switch (syntax) {
			case 'if':
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the if,<break time="0.5" /> else syntax in swift</speak>', displayText: 'Here is the if-else syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(SWIFT_IF_IMG, 'if-else in Swift'))
						.addSimpleResponse({speech: SWIFT_IF_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: SWIFT_IF_DESC});
				}
				break;
			case 'for': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the for loop syntax in swift</speak>', displayText: 'Here is the for loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(SWIFT_FOR_IMG, 'for loop in Swift'))
						.addSimpleResponse({speech: SWIFT_FOR_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: SWIFT_FOR_DESC});
				}
				break;
			case 'while': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the while loop syntax in swift</speak>', displayText: 'Here is the while loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(SWIFT_WHILE_IMG, 'while loop in Swift'))
						.addSimpleResponse({speech: SWIFT_WHILE_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: SWIFT_WHILE_DESC});
				}
				break;
			case 'do while': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the do while loop syntax in swift</speak>', displayText: 'Here is the do-while loop syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(SWIFT_DOWHILE_IMG, 'do-while loop in Swift'))
						.addSimpleResponse({speech: SWIFT_DOWHILE_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: SWIFT_DOWHILE_DESC});
				}
				break;
			case 'output': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the output syntax in swift</speak>', displayText: 'Here is the output syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(SWIFT_OUTPUT_IMG, 'output in Swift'))
						.addSimpleResponse({speech: SWIFT_OUTPUT_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: SWIFT_OUTPUT_DESC});
				}
				break;
			case 'input': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the input syntax in swift</speak>', displayText: 'Here is the input syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(SWIFT_INPUT_IMG, 'input in Swift'))
						.addSimpleResponse({speech: SWIFT_INPUT_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: SWIFT_INPUT_DESC});
				}
				break;
			case 'switch': 
				if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
					app.ask(app.buildRichResponse()
						.addSimpleResponse({speech: '<speak>here is the switch syntax in swift</speak>', displayText: 'Here is the switch syntax:'})
						.addBasicCard(app.buildBasicCard()
							.setImage(SWIFT_SWITCH_IMG, 'switch in Swift'))
						.addSimpleResponse({speech: SWIFT_SWITCH_DESC, displayText: 'Would you want to know anything else?'})
						.addSuggestions(['Sure!', 'No thanks']));
				} else {
					app.ask({speech: SWIFT_SWITCH_DESC});
				}
				break;
			default: app.ask({speech: 'I\'m sorry, but I don\'t know that syntax structure. Try another one.'});

			}
		}
		else{
			app.tell('I\'m sorry, but I don\'t know that language. Try anotherone.');
		}
	}

	let actionMap = new Map();
	actionMap.set(WELCOME_INTENT, welcomeIntent);
	actionMap.set(SYNTAX_INTENT, syntaxIntent);
	app.handleRequest(actionMap);
});