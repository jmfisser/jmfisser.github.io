/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.GameScene = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.platformIndexOfCherry = [];
        _this.center = [400, 400];
        _this.hiscore = false;
        _this.platformMovements = [];
        return _this;
    }
    GameScene.prototype.preload = function () {
        this.load.image("frog", "./assets/frog.png");
        this.load.image("cherry", "./assets/cherry.png");
        this.load.image("cloud", "./assets/cloud.png");
        this.load.image("platform", "./assets/platform.png");
        this.data.set('score', 0);
        this.data.set('cherries', 0);
        this.data.set('hiscore', 0);
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.platforms = [];
        this.clouds = [];
        this.cherries = [];
        var graphics = this.add.graphics();
        graphics.fillGradientStyle(0x4169E1, 0x4169E1, 0x87CEEB, 0x87CEEB, 1);
        graphics.fillRect(0, 0, this.cameras.main.width, this.cameras.main.width);
        this.platformCoordinates = this.LoadRandomCoordinates(100, { x: 400, y: 600 }, 250, 300);
        this.LoadRandomCoordinates(30, { x: 100, y: 200 }, 350, 200)
            .forEach(function (p) {
            var cloud = _this.add.sprite(p.x, p.y, 'cloud');
            var scale = 0.4 + Math.random();
            cloud.setScale(scale);
            _this.clouds.push(cloud);
        });
        this.platformCoordinates.forEach(function (p, index) {
            var platform = _this.physics.add.staticSprite(p.x, p.y, 'platform');
            var scale = 0.3 + 0.3 * Math.random();
            var scaledWidth = Math.floor(scale * platform.width);
            var scaledHeight = Math.floor(scale * platform.height);
            platform.setScale(scale);
            platform.body.setSize(scaledWidth, scaledHeight);
            platform.body.x = p.x - 0.5 * scaledWidth;
            platform.body.y = p.y - 0.5 * scaledHeight;
            _this.platforms.push(platform);
            platform.body.checkCollision.down = false;
            platform.body.checkCollision.right = false;
            platform.body.checkCollision.left = false;
            _this.platformMovements.push(Math.random() > 0.8);
        });
        this.platformCoordinates.forEach(function (p, index) {
            if (Math.random() > 0.3) {
                return;
            }
            var cherry = _this.physics.add.staticSprite(p.x, p.y - 80, 'cherry');
            cherry.setScale(0.5);
            cherry.body.setSize(0.5 * cherry.width, 0.5 * cherry.height);
            cherry.body.x = p.x - 0.25 * cherry.width;
            cherry.body.y = p.y - 0.25 * cherry.height - 80;
            _this.cherries.push(cherry);
            _this.platformIndexOfCherry.push(index);
        });
        this.frog = this.physics.add.sprite(this.center[0], this.center[1], 'frog');
        this.frog.setScale(0.3);
        this.physics.add.existing(this.frog);
        this.frog.body.setSize(160, 160);
        this.frog.body.setDrag(100, 100);
        this.platforms.forEach(function (p) {
            _this.physics.add.collider(_this.frog, p);
        });
        this.data.set('score', 0);
        this.data.set('cherries', 0);
        this.hiscore = false;
        this.text = this.add.text(40, this.cameras.main.height - 80, '', { font: '24px Courier' }).setOrigin(0);
        this.startTime = this.time.now;
    };
    GameScene.prototype.update = function () {
        var cursorKeys = this.input.keyboard.createCursorKeys();
        if (this.CheckWithinBounds()) {
            this.UpdateScore();
            this.Move(cursorKeys);
            return;
        }
        if (cursorKeys.space.isDown) {
            this.destroy();
            this.create();
        }
    };
    GameScene.prototype.destroy = function () {
        this.frog.destroy();
        this.platforms.forEach(function (p) { return p.destroy(); });
        this.cherries.forEach(function (c) { return c.destroy(); });
        this.clouds.forEach(function (c) { return c.destroy(); });
        this.text.destroy();
    };
    GameScene.prototype.LoadRandomCoordinates = function (amount, start, pitch, fluctuation) {
        var coordinates = [{
                x: start.x,
                y: start.y
            }];
        for (var index = 1; index < amount + 1; index++) {
            coordinates.push({
                x: start.x + index * (pitch + Math.floor((Math.random() - 0.5) * 0.05 * pitch)),
                y: start.y - Math.floor(Math.random() * fluctuation)
            });
        }
        return coordinates;
    };
    GameScene.prototype.Move = function (cursorKeys) {
        var _this = this;
        if (!this.frog.body.touching.none && cursorKeys.up.isDown && this.frog.body.velocity.y === 0) {
            this.frog.body.setVelocityY(-650);
        }
        else {
            this.frog.body.setVelocityY(this.frog.body.velocity.y + 15);
        }
        this.cherries.forEach(function (c) {
            if (Math.abs(c.body.x - _this.frog.body.x) < 40 && Math.abs(c.body.y - _this.frog.body.y) < 40) {
                c.visible = false;
                c.body.position.set(c.body.position.x, -1000);
                _this.data.set('cherries', _this.data.get('cherries') + 1);
            }
        });
        var changeX = 0;
        var changeY = 6 * Math.sin(0.004 * (this.time.now - this.startTime));
        if (cursorKeys.right.isDown) {
            this.frog.flipX = false;
            changeX = -1;
        }
        else if (cursorKeys.left.isDown) {
            this.frog.flipX = true;
            changeX = 1;
        }
        this.platforms.forEach(function (p, index) {
            var dX = 5 * changeX;
            var dY = (_this.platformMovements[index] ? changeY : 0);
            p.setX(p.x + dX);
            p.setY(p.y + dY);
            p.body.position.set(p.body.position.x + dX, p.body.position.y + dY);
        });
        this.cherries.forEach(function (c, index) {
            var dX = 5 * changeX;
            c.setX(c.x + dX);
            c.body.position.set(c.body.position.x + dX, c.body.position.y);
        });
        this.clouds.forEach(function (c) {
            c.setX(c.x + changeX);
        });
    };
    GameScene.prototype.CheckWithinBounds = function () {
        if (this.frog.body.y > this.cameras.main.height) {
            this.GameOver();
            return false;
        }
        return true;
    };
    GameScene.prototype.UpdateScore = function () {
        this.data.set('score', this.Score);
        this.text.setText([
            'Score:   ' + this.PadScore(this.data.get('score')),
            'Hiscore: ' + this.PadScore(this.data.get('hiscore')),
        ]);
    };
    Object.defineProperty(GameScene.prototype, "Score", {
        get: function () {
            return -(this.platforms[0].x - this.center[0]) / 5 + 100 * this.data.get('cherries');
        },
        enumerable: false,
        configurable: true
    });
    GameScene.prototype.PadScore = function (score, padding) {
        if (padding === void 0) { padding = 6; }
        return (new Array(padding + 1).join(' ') + score).slice(-padding);
    };
    GameScene.prototype.GameOver = function () {
        this.text.destroy();
        if (this.hiscore || this.data.get('hiscore') < this.Score) {
            this.hiscore = true;
            this.data.set('hiscore', this.Score);
        }
        var gameOverText = [
            'Game over',
            this.hiscore ? 'New hiscore!' : '',
            'Score:   ' + this.PadScore(this.data.get('score')),
            'Hiscore: ' + this.PadScore(this.data.get('hiscore')),
            'Press space to try again.'
        ];
        var center = this.GetCenter();
        this.text = this.add.text(center.x, center.y, gameOverText, { font: '48px Courier', align: 'center' }).setOrigin(0.5);
    };
    GameScene.prototype.GetCenter = function () {
        return {
            x: this.cameras.main.worldView.x + this.cameras.main.width / 2,
            y: this.cameras.main.worldView.y + this.cameras.main.height / 2
        };
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
var gameConfig = {
    title: 'Sample',
    scene: GameScene,
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },
    parent: 'game',
    backgroundColor: '#87CEEB',
};
exports.game = new Phaser.Game(gameConfig);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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SCxnQkFBQztBQUFELENBQUMsQ0E5TjhCLE1BQU0sQ0FBQyxLQUFLLEdBOE4xQztBQTlOWSw4QkFBUztBQWdPdEIsSUFBTSxVQUFVLEdBQWlDO0lBQy9DLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFNBQVM7SUFDaEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBRWpCLEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVTtRQUN4QixNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVc7S0FDM0I7SUFFRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsUUFBUTtRQUNqQixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsS0FBSztTQUNiO0tBQ0Y7SUFFRCxNQUFNLEVBQUUsTUFBTTtJQUNkLGVBQWUsRUFBRSxTQUFTO0NBQzNCLENBQUM7QUFFVyxZQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0dhbWUnLFxufTtcblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgZnJvZzogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSAmIHsgYm9keTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHkgfTtcbiAgcHJpdmF0ZSBwbGF0Zm9ybXM6IFBoYXNlci5UeXBlcy5QaHlzaWNzLkFyY2FkZS5TcHJpdGVXaXRoU3RhdGljQm9keVtdO1xuICBwcml2YXRlIGNoZXJyaWVzOiBQaGFzZXIuVHlwZXMuUGh5c2ljcy5BcmNhZGUuU3ByaXRlV2l0aFN0YXRpY0JvZHlbXTtcbiAgcHJpdmF0ZSBjbG91ZHM6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVbXTtcbiAgcHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgcHJpdmF0ZSBwbGF0Zm9ybUluZGV4T2ZDaGVycnk6IG51bWJlcltdID0gW107XG4gIHByaXZhdGUgY2VudGVyID0gWzQwMCwgNDAwXTtcbiAgcHJpdmF0ZSBoaXNjb3JlID0gZmFsc2U7XG4gIHByaXZhdGUgcGxhdGZvcm1Db29yZGluYXRlcztcbiAgcHJpdmF0ZSBwbGF0Zm9ybU1vdmVtZW50czogYm9vbGVhbltdID0gW107XG4gIHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLmltYWdlKFwiZnJvZ1wiLCBcIi4vYXNzZXRzL2Zyb2cucG5nXCIpO1xuICAgIHRoaXMubG9hZC5pbWFnZShcImNoZXJyeVwiLCBcIi4vYXNzZXRzL2NoZXJyeS5wbmdcIik7XG4gICAgdGhpcy5sb2FkLmltYWdlKFwiY2xvdWRcIiwgXCIuL2Fzc2V0cy9jbG91ZC5wbmdcIik7XG4gICAgdGhpcy5sb2FkLmltYWdlKFwicGxhdGZvcm1cIiwgXCIuL2Fzc2V0cy9wbGF0Zm9ybS5wbmdcIik7XG4gICAgdGhpcy5kYXRhLnNldCgnc2NvcmUnLCAwKTtcbiAgICB0aGlzLmRhdGEuc2V0KCdjaGVycmllcycsIDApO1xuICAgIHRoaXMuZGF0YS5zZXQoJ2hpc2NvcmUnLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLmNsb3VkcyA9IFtdO1xuICAgIHRoaXMuY2hlcnJpZXMgPSBbXTtcblxuICAgIGNvbnN0IGdyYXBoaWNzID0gdGhpcy5hZGQuZ3JhcGhpY3MoKTtcblxuICAgIGdyYXBoaWNzLmZpbGxHcmFkaWVudFN0eWxlKDB4NDE2OUUxLCAweDQxNjlFMSwgMHg4N0NFRUIsIDB4ODdDRUVCLCAxKTtcbiAgICBncmFwaGljcy5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbWVyYXMubWFpbi53aWR0aCwgdGhpcy5jYW1lcmFzLm1haW4ud2lkdGgpO1xuXG4gICAgdGhpcy5wbGF0Zm9ybUNvb3JkaW5hdGVzID0gdGhpcy5Mb2FkUmFuZG9tQ29vcmRpbmF0ZXMoMTAwLCB7IHg6IDQwMCwgeTogNjAwIH0sIDI1MCwgMzAwKTtcblxuICAgIHRoaXMuTG9hZFJhbmRvbUNvb3JkaW5hdGVzKDMwLCB7IHg6IDEwMCwgeTogMjAwIH0sIDM1MCwgMjAwKVxuICAgICAgLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgY29uc3QgY2xvdWQgPSB0aGlzLmFkZC5zcHJpdGUocC54LCBwLnksICdjbG91ZCcpO1xuICAgICAgICBjb25zdCBzY2FsZSA9IDAuNCArIE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGNsb3VkLnNldFNjYWxlKHNjYWxlKTtcbiAgICAgICAgdGhpcy5jbG91ZHMucHVzaChjbG91ZCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMucGxhdGZvcm1Db29yZGluYXRlcy5mb3JFYWNoKChwLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcGxhdGZvcm0gPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY1Nwcml0ZShwLngsIHAueSwgJ3BsYXRmb3JtJyk7XG4gICAgICBjb25zdCBzY2FsZSA9IDAuMyArIDAuMyAqIE1hdGgucmFuZG9tKCk7XG4gICAgICBjb25zdCBzY2FsZWRXaWR0aCA9IE1hdGguZmxvb3Ioc2NhbGUgKiBwbGF0Zm9ybS53aWR0aCk7XG4gICAgICBjb25zdCBzY2FsZWRIZWlnaHQgPSBNYXRoLmZsb29yKHNjYWxlICogcGxhdGZvcm0uaGVpZ2h0KTtcbiAgICAgIHBsYXRmb3JtLnNldFNjYWxlKHNjYWxlKTtcbiAgICAgIHBsYXRmb3JtLmJvZHkuc2V0U2l6ZShzY2FsZWRXaWR0aCwgc2NhbGVkSGVpZ2h0KTtcbiAgICAgIHBsYXRmb3JtLmJvZHkueCA9IHAueCAtIDAuNSAqIHNjYWxlZFdpZHRoO1xuICAgICAgcGxhdGZvcm0uYm9keS55ID0gcC55IC0gMC41ICogc2NhbGVkSGVpZ2h0O1xuICAgICAgdGhpcy5wbGF0Zm9ybXMucHVzaChwbGF0Zm9ybSk7XG4gICAgICBwbGF0Zm9ybS5ib2R5LmNoZWNrQ29sbGlzaW9uLmRvd24gPSBmYWxzZTtcbiAgICAgIHBsYXRmb3JtLmJvZHkuY2hlY2tDb2xsaXNpb24ucmlnaHQgPSBmYWxzZTtcbiAgICAgIHBsYXRmb3JtLmJvZHkuY2hlY2tDb2xsaXNpb24ubGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy5wbGF0Zm9ybU1vdmVtZW50cy5wdXNoKE1hdGgucmFuZG9tKCkgPiAwLjgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wbGF0Zm9ybUNvb3JkaW5hdGVzLmZvckVhY2goKHAsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuMykgeyByZXR1cm47IH1cblxuICAgICAgY29uc3QgY2hlcnJ5ID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNTcHJpdGUocC54LCBwLnkgLSA4MCwgJ2NoZXJyeScpO1xuICAgICAgY2hlcnJ5LnNldFNjYWxlKDAuNSk7XG4gICAgICBjaGVycnkuYm9keS5zZXRTaXplKDAuNSAqIGNoZXJyeS53aWR0aCwgMC41ICogY2hlcnJ5LmhlaWdodCk7XG4gICAgICBjaGVycnkuYm9keS54ID0gcC54IC0gMC4yNSAqIGNoZXJyeS53aWR0aDtcbiAgICAgIGNoZXJyeS5ib2R5LnkgPSBwLnkgLSAwLjI1ICogY2hlcnJ5LmhlaWdodCAtIDgwO1xuICAgICAgdGhpcy5jaGVycmllcy5wdXNoKGNoZXJyeSk7XG4gICAgICB0aGlzLnBsYXRmb3JtSW5kZXhPZkNoZXJyeS5wdXNoKGluZGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZnJvZyA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKHRoaXMuY2VudGVyWzBdLCB0aGlzLmNlbnRlclsxXSwgJ2Zyb2cnKSBhcyBhbnk7XG4gICAgdGhpcy5mcm9nLnNldFNjYWxlKDAuMyk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzLmZyb2cpO1xuICAgIHRoaXMuZnJvZy5ib2R5LnNldFNpemUoMTYwLCAxNjApO1xuICAgIHRoaXMuZnJvZy5ib2R5LnNldERyYWcoMTAwLCAxMDApO1xuICAgIHRoaXMucGxhdGZvcm1zLmZvckVhY2gocCA9PiB7XG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuZnJvZywgcCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRhdGEuc2V0KCdzY29yZScsIDApO1xuICAgIHRoaXMuZGF0YS5zZXQoJ2NoZXJyaWVzJywgMCk7XG4gICAgdGhpcy5oaXNjb3JlID0gZmFsc2U7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy5hZGQudGV4dCg0MCwgdGhpcy5jYW1lcmFzLm1haW4uaGVpZ2h0IC0gODAsICcnLCB7IGZvbnQ6ICcyNHB4IENvdXJpZXInIH0pLnNldE9yaWdpbigwKTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGltZS5ub3c7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCkge1xuICAgIGNvbnN0IGN1cnNvcktleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcbiAgICBpZiAodGhpcy5DaGVja1dpdGhpbkJvdW5kcygpKSB7XG4gICAgICB0aGlzLlVwZGF0ZVNjb3JlKCk7XG4gICAgICB0aGlzLk1vdmUoY3Vyc29yS2V5cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjdXJzb3JLZXlzLnNwYWNlLmlzRG93bikge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpIHtcbiAgICB0aGlzLmZyb2cuZGVzdHJveSgpO1xuICAgIHRoaXMucGxhdGZvcm1zLmZvckVhY2gocCA9PiBwLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5jaGVycmllcy5mb3JFYWNoKGMgPT4gYy5kZXN0cm95KCkpO1xuICAgIHRoaXMuY2xvdWRzLmZvckVhY2goYyA9PiBjLmRlc3Ryb3koKSk7XG4gICAgdGhpcy50ZXh0LmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgTG9hZFJhbmRvbUNvb3JkaW5hdGVzKGFtb3VudCwgc3RhcnQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgcGl0Y2gsIGZsdWN0dWF0aW9uKTogYW55W10ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3tcbiAgICAgIHg6IHN0YXJ0LngsXG4gICAgICB5OiBzdGFydC55XG4gICAgfV07XG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGFtb3VudCArIDE7IGluZGV4KyspIHtcbiAgICAgIGNvb3JkaW5hdGVzLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICB4OiBzdGFydC54ICsgaW5kZXggKiAocGl0Y2ggKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMDUgKiBwaXRjaCkpLFxuICAgICAgICAgIHk6IHN0YXJ0LnkgLSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmbHVjdHVhdGlvbilcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBNb3ZlKGN1cnNvcktleXM6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mcm9nLmJvZHkudG91Y2hpbmcubm9uZSAmJiBjdXJzb3JLZXlzLnVwLmlzRG93biAmJiB0aGlzLmZyb2cuYm9keS52ZWxvY2l0eS55ID09PSAwKSB7XG4gICAgICB0aGlzLmZyb2cuYm9keS5zZXRWZWxvY2l0eVkoLTY1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnJvZy5ib2R5LnNldFZlbG9jaXR5WSh0aGlzLmZyb2cuYm9keS52ZWxvY2l0eS55ICsgMTUpO1xuICAgIH1cblxuICAgIHRoaXMuY2hlcnJpZXMuZm9yRWFjaChjID0+IHtcbiAgICAgIGlmIChNYXRoLmFicyhjLmJvZHkueCAtIHRoaXMuZnJvZy5ib2R5LngpIDwgNDAgJiYgTWF0aC5hYnMoYy5ib2R5LnkgLSB0aGlzLmZyb2cuYm9keS55KSA8IDQwKSB7XG4gICAgICAgIGMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBjLmJvZHkucG9zaXRpb24uc2V0KGMuYm9keS5wb3NpdGlvbi54LCAtMTAwMCk7XG4gICAgICAgIHRoaXMuZGF0YS5zZXQoJ2NoZXJyaWVzJywgdGhpcy5kYXRhLmdldCgnY2hlcnJpZXMnKSArIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGNoYW5nZVggPSAwO1xuICAgIGNvbnN0IGNoYW5nZVkgPSA2ICogTWF0aC5zaW4oMC4wMDQgKiAodGhpcy50aW1lLm5vdyAtIHRoaXMuc3RhcnRUaW1lKSk7XG4gICAgaWYgKGN1cnNvcktleXMucmlnaHQuaXNEb3duKSB7XG4gICAgICB0aGlzLmZyb2cuZmxpcFggPSBmYWxzZTtcbiAgICAgIGNoYW5nZVggPSAtMTtcbiAgICB9IGVsc2UgaWYgKGN1cnNvcktleXMubGVmdC5pc0Rvd24pIHtcbiAgICAgIHRoaXMuZnJvZy5mbGlwWCA9IHRydWU7XG4gICAgICBjaGFuZ2VYID0gMTtcbiAgICB9XG5cbiAgICB0aGlzLnBsYXRmb3Jtcy5mb3JFYWNoKChwLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZFggPSA1ICogY2hhbmdlWDtcbiAgICAgIGNvbnN0IGRZID0gKHRoaXMucGxhdGZvcm1Nb3ZlbWVudHNbaW5kZXhdID8gY2hhbmdlWSA6IDApO1xuICAgICAgcC5zZXRYKHAueCArIGRYKTtcbiAgICAgIHAuc2V0WShwLnkgKyBkWSk7XG4gICAgICBwLmJvZHkucG9zaXRpb24uc2V0KHAuYm9keS5wb3NpdGlvbi54ICsgZFgsIHAuYm9keS5wb3NpdGlvbi55ICsgZFkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGVycmllcy5mb3JFYWNoKChjLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZFggPSA1ICogY2hhbmdlWDtcbiAgICAgIGMuc2V0WChjLnggKyBkWCk7XG4gICAgICBjLmJvZHkucG9zaXRpb24uc2V0KGMuYm9keS5wb3NpdGlvbi54ICsgZFgsIGMuYm9keS5wb3NpdGlvbi55KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2xvdWRzLmZvckVhY2goYyA9PiB7XG4gICAgICBjLnNldFgoYy54ICsgY2hhbmdlWCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIENoZWNrV2l0aGluQm91bmRzKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZyb2cuYm9keS55ID4gdGhpcy5jYW1lcmFzLm1haW4uaGVpZ2h0KSB7XG4gICAgICB0aGlzLkdhbWVPdmVyKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIFVwZGF0ZVNjb3JlKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YS5zZXQoJ3Njb3JlJywgdGhpcy5TY29yZSk7XG4gICAgdGhpcy50ZXh0LnNldFRleHQoW1xuICAgICAgJ1Njb3JlOiAgICcgKyB0aGlzLlBhZFNjb3JlKHRoaXMuZGF0YS5nZXQoJ3Njb3JlJykpLFxuICAgICAgJ0hpc2NvcmU6ICcgKyB0aGlzLlBhZFNjb3JlKHRoaXMuZGF0YS5nZXQoJ2hpc2NvcmUnKSksXG4gICAgXSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBTY29yZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAtKHRoaXMucGxhdGZvcm1zWzBdLnggLSB0aGlzLmNlbnRlclswXSkgLyA1ICsgMTAwICogdGhpcy5kYXRhLmdldCgnY2hlcnJpZXMnKTtcbiAgfVxuXG4gIHByaXZhdGUgUGFkU2NvcmUoc2NvcmU6IG51bWJlciwgcGFkZGluZyA9IDYpOiBzdHJpbmcge1xuICAgIHJldHVybiAobmV3IEFycmF5KHBhZGRpbmcgKyAxKS5qb2luKCcgJykgKyBzY29yZSkuc2xpY2UoLXBhZGRpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBHYW1lT3ZlcigpOiB2b2lkIHtcbiAgICB0aGlzLnRleHQuZGVzdHJveSgpO1xuXG4gICAgaWYgKHRoaXMuaGlzY29yZSB8fCB0aGlzLmRhdGEuZ2V0KCdoaXNjb3JlJykgPCB0aGlzLlNjb3JlKSB7XG4gICAgICB0aGlzLmhpc2NvcmUgPSB0cnVlO1xuICAgICAgdGhpcy5kYXRhLnNldCgnaGlzY29yZScsIHRoaXMuU2NvcmUpO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVPdmVyVGV4dCA9IFtcbiAgICAgICdHYW1lIG92ZXInLFxuICAgICAgdGhpcy5oaXNjb3JlID8gJ05ldyBoaXNjb3JlIScgOiAnJyxcbiAgICAgICdTY29yZTogICAnICsgdGhpcy5QYWRTY29yZSh0aGlzLmRhdGEuZ2V0KCdzY29yZScpKSxcbiAgICAgICdIaXNjb3JlOiAnICsgdGhpcy5QYWRTY29yZSh0aGlzLmRhdGEuZ2V0KCdoaXNjb3JlJykpLFxuICAgICAgJ1ByZXNzIHNwYWNlIHRvIHRyeSBhZ2Fpbi4nXG4gICAgXTtcbiAgICBjb25zdCBjZW50ZXIgPSB0aGlzLkdldENlbnRlcigpO1xuICAgIHRoaXMudGV4dCA9IHRoaXMuYWRkLnRleHQoY2VudGVyLngsIGNlbnRlci55LCBnYW1lT3ZlclRleHQsIHsgZm9udDogJzQ4cHggQ291cmllcicsIGFsaWduOiAnY2VudGVyJyB9KS5zZXRPcmlnaW4oMC41KTtcbiAgfVxuXG4gIHByaXZhdGUgR2V0Q2VudGVyKCk6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHRoaXMuY2FtZXJhcy5tYWluLndvcmxkVmlldy54ICsgdGhpcy5jYW1lcmFzLm1haW4ud2lkdGggLyAyLFxuICAgICAgeTogdGhpcy5jYW1lcmFzLm1haW4ud29ybGRWaWV3LnkgKyB0aGlzLmNhbWVyYXMubWFpbi5oZWlnaHQgLyAyXG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ1NhbXBsZScsXG4gIHNjZW5lOiBHYW1lU2NlbmUsXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICB9LFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuXG4gIHBhcmVudDogJ2dhbWUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjODdDRUVCJyxcbn07XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==