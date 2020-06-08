// const opn = require('opn');				// 브라우저 실행 module
// var portfinder = require('portfinder'); // available port find module
//
// var express = require('express');
// var app = express();
// var router;
// // var router = require('./router/main')(app); // main.js를 불러와서 app에 전달
// // var http= require('http');
// // var fs = require('fs');
// // var url = require('url');
//
// app.set('views', __dirname + '/views/blockly/apps/blocklyduino'); // 서버가 읽을수 있게 html 경로 지정
// app.set('view engine', 'ejs'); // ejs 엔진으로 설정
// app.engine('html', require('ejs').renderFile); // ejs 엔진으로 html 렌더링.
//
//
// app.use(express.static(__dirname + '/public')); // public 경로에 js , png 파일 모두 끌어옴.
// app.use(express.static(__dirname + '/public/icon'));
// app.use(express.static(__dirname + '/public/Resource'));
// app.use(express.static(__dirname + '/public/msg'));
// app.use(express.static(__dirname + '/public/media'));
// app.use(express.static(__dirname + '/blockly/media'));
//
// // default가 8000번인데, 8000번은 web port로 많이 사용하므로.. 잘 사용되지 않는 숫자로 잡음 @HTS
// // portfinder.basePort = 53825;
// // portfinder.basePort = 3000;
// portfinder.basePort = 13500;
//
// var web_port;
// var server;
// var io;
//
// portfinder.getPort(function (err, port)
// {
// 	// console.log("[portfinder]port = ", port);
// 	// console.log("[portfinder]err = ", err);
//
// 	router = require('./router/main')(app);
//
// 	web_port = port;
//
// 	// nodejs는 비동기식으로, port available을 구하기 이전에 server가 실행되므로,
// 	// port를 먼저 찾고, server를 실행시키는 구조로 만듦. @HTS
// 	server = app.listen(web_port, function () {
// 		console.log("Express server has started on port " + web_port)
//
// 		// Specify the app to open in
// 		// chrome으로 localhost접속 페이지 열기.
// 		// opn('http://127.0.0.1:'+web_port, {app: 'chrome'});
// 	});
//
// 	var socketio = require('socket.io');
// 	io = socketio.listen(server);
//
// 	var socket;
// 	// connection event handler
// 	// connection이 수립되면 event handler function의 인자로 socket이 들어온다
// 	var connection_io = io.on('connection', function (socket) {
//
// 		// console.log("socket = ", socket);
//
// 		socket = socket;
//
// 		// 접속한 클라이언트의 정보가 수신되면
// 		socket.on('BT_Start', function (data) {
// 			console.log('BT_Start!!!!!!!!!!!!!!!!!!!!!!!!!!!');
//
// 			// socket에 클라이언트 정보를 저장한다
// 			socket.name = data.name;
// 			socket.userid = data.userid;
//
// 			// 접속된 모든 클라이언트에게 메시지를 전송한다
// 			io.emit('login', data.name);
// 		});
//
// 		// 클라이언트로부터의 메시지가 수신되면
// 		socket.on('chat', function (data) {
// 			console.log('Message from %s: %s', socket.name, data.msg);
//
// 			var msg = {
// 				from: {
// 					name: socket.name,
// 					userid: socket.userid
// 				},
// 				msg: data.msg
// 			};
//
// 			// 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
// 			// socket.broadcast.emit('chat', msg);
//
// 			// 메시지를 전송한 클라이언트에게만 메시지를 전송한다
// 			// socket.emit('s2c chat', msg);
//
// 			// 접속된 모든 클라이언트에게 메시지를 전송한다
// 			io.emit('s2c chat', msg);
//
// 			// 특정 클라이언트에게만 메시지를 전송한다
// 			// io.to(id).emit('s2c chat', data);
// 		});
//
// 		// force client disconnect from server
// 		socket.on('forceDisconnect', function () {
// 			socket.disconnect();
// 		})
//
// 		socket.on('disconnect', function () {
// 			console.log('user disconnected: ' + socket.name);
// 		});
// 	});
// });
//
// // var server = app.listen(web_port, function () {
// 	// console.log("Express server has started on port 3000")
//
// 	// Specify the app to open in
// 	// chrome으로 localhost접속 페이지 열기.
// 	// opn('http://localhost:'+web_port, {app: 'chrome'});
// // });
//
//
//
// exports.end_emit = function() {
// 	io.emit('s2c chat', 'end');
// }
//
// exports.get_web_port = function() {
// 	return web_port;
// }
