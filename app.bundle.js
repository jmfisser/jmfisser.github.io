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
        _this.platformCoordinates = _this.LoadRandomCoordinates(100, { x: 400, y: 600 }, 250, 300);
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
        this.LoadRandomCoordinates(30, { x: 100, y: 200 }, 300, 200)
            .forEach(function (p) {
            _this.clouds.push(_this.add.sprite(p.x, p.y, 'cloud'));
        });
        this.platformCoordinates.forEach(function (p, index) {
            if (Math.random() > 0.5) {
                var cherry = _this.physics.add.staticSprite(p.x, p.y - 80, 'cherry');
                cherry.setScale(0.5);
                cherry.body.setSize(0.5 * cherry.width, 0.5 * cherry.height);
                cherry.body.x = p.x - 0.25 * cherry.width;
                cherry.body.y = p.y - 0.25 * cherry.height - 80;
                _this.cherries.push(cherry);
                _this.platformIndexOfCherry.push(index);
            }
            var platform = _this.physics.add.staticSprite(p.x, p.y, 'platform');
            platform.setScale(0.6);
            platform.body.setSize(0.6 * platform.width, 0.6 * platform.height);
            platform.body.x = p.x - 0.3 * platform.width;
            platform.body.y = p.y - 0.3 * platform.height;
            _this.platforms.push(platform);
            platform.body.checkCollision.down = false;
            platform.body.checkCollision.right = false;
            platform.body.checkCollision.left = false;
            _this.platformMovements.push(Math.random() > 0.8);
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
                x: start.x + index * (pitch + Math.floor((Math.random() - 0.5) * 0.07 * pitch)),
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
        this.data.set('score', -(this.platforms[0].x - this.center[0]) / 5 + 100 * this.data.get('cherries'));
        this.text.setText([
            'Score:   ' + this.PadScore(this.data.get('score')),
            'Hiscore: ' + this.PadScore(this.data.get('hiscore')),
        ]);
    };
    GameScene.prototype.PadScore = function (score, padding) {
        if (padding === void 0) { padding = 6; }
        return (new Array(padding + 1).join(' ') + score).slice(-padding);
    };
    GameScene.prototype.GameOver = function () {
        this.UpdateScore();
        this.text.destroy();
        if (this.hiscore || this.data.get('hiscore') < this.data.get('score')) {
            this.hiscore = true;
            this.data.set('hiscore', this.data.get('score'));
        }
        this.data.set('cherries', 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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O0FBRVcsWUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdHYW1lJyxcbn07XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBwcml2YXRlIGZyb2c6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUgJiB7IGJvZHk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IH07XG4gIHByaXZhdGUgcGxhdGZvcm1zOiBQaGFzZXIuVHlwZXMuUGh5c2ljcy5BcmNhZGUuU3ByaXRlV2l0aFN0YXRpY0JvZHlbXTtcbiAgcHJpdmF0ZSBjaGVycmllczogUGhhc2VyLlR5cGVzLlBoeXNpY3MuQXJjYWRlLlNwcml0ZVdpdGhTdGF0aWNCb2R5W107XG4gIHByaXZhdGUgY2xvdWRzOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlW107XG4gIHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gIHByaXZhdGUgcGxhdGZvcm1JbmRleE9mQ2hlcnJ5OiBudW1iZXJbXSA9IFtdO1xuICBwcml2YXRlIGNlbnRlciA9IFs0MDAsIDQwMF07XG4gIHByaXZhdGUgaGlzY29yZSA9IGZhbHNlO1xuICBwcml2YXRlIHBsYXRmb3JtQ29vcmRpbmF0ZXMgPSB0aGlzLkxvYWRSYW5kb21Db29yZGluYXRlcygxMDAsIHsgeDogNDAwLCB5OiA2MDAgfSwgMjUwLCAzMDApO1xuICBwcml2YXRlIHBsYXRmb3JtTW92ZW1lbnRzOiBib29sZWFuW10gPSBbXTtcbiAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoXCJmcm9nXCIsIFwiLi9hc3NldHMvZnJvZy5wbmdcIik7XG4gICAgdGhpcy5sb2FkLmltYWdlKFwiY2hlcnJ5XCIsIFwiLi9hc3NldHMvY2hlcnJ5LnBuZ1wiKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoXCJjbG91ZFwiLCBcIi4vYXNzZXRzL2Nsb3VkLnBuZ1wiKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoXCJwbGF0Zm9ybVwiLCBcIi4vYXNzZXRzL3BsYXRmb3JtLnBuZ1wiKTtcbiAgICB0aGlzLmRhdGEuc2V0KCdzY29yZScsIDApO1xuICAgIHRoaXMuZGF0YS5zZXQoJ2NoZXJyaWVzJywgMCk7XG4gICAgdGhpcy5kYXRhLnNldCgnaGlzY29yZScsIDApO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMuY2xvdWRzID0gW107XG4gICAgdGhpcy5jaGVycmllcyA9IFtdO1xuXG4gICAgY29uc3QgZ3JhcGhpY3MgPSB0aGlzLmFkZC5ncmFwaGljcygpO1xuXG4gICAgZ3JhcGhpY3MuZmlsbEdyYWRpZW50U3R5bGUoMHg0MTY5RTEsIDB4NDE2OUUxLCAweDg3Q0VFQiwgMHg4N0NFRUIsIDEpO1xuICAgIGdyYXBoaWNzLmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FtZXJhcy5tYWluLndpZHRoLCB0aGlzLmNhbWVyYXMubWFpbi53aWR0aCk7XG5cbiAgICB0aGlzLkxvYWRSYW5kb21Db29yZGluYXRlcygzMCwgeyB4OiAxMDAsIHk6IDIwMCB9LCAzMDAsIDIwMClcbiAgICAgIC5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvdWRzLnB1c2godGhpcy5hZGQuc3ByaXRlKHAueCwgcC55LCAnY2xvdWQnKSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMucGxhdGZvcm1Db29yZGluYXRlcy5mb3JFYWNoKChwLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgY29uc3QgY2hlcnJ5ID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNTcHJpdGUocC54LCBwLnkgLSA4MCwgJ2NoZXJyeScpO1xuICAgICAgICBjaGVycnkuc2V0U2NhbGUoMC41KTtcbiAgICAgICAgY2hlcnJ5LmJvZHkuc2V0U2l6ZSgwLjUgKiBjaGVycnkud2lkdGgsIDAuNSAqIGNoZXJyeS5oZWlnaHQpO1xuICAgICAgICBjaGVycnkuYm9keS54ID0gcC54IC0gMC4yNSAqIGNoZXJyeS53aWR0aDtcbiAgICAgICAgY2hlcnJ5LmJvZHkueSA9IHAueSAtIDAuMjUgKiBjaGVycnkuaGVpZ2h0IC0gODA7XG4gICAgICAgIHRoaXMuY2hlcnJpZXMucHVzaChjaGVycnkpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtSW5kZXhPZkNoZXJyeS5wdXNoKGluZGV4KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGxhdGZvcm0gPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY1Nwcml0ZShwLngsIHAueSwgJ3BsYXRmb3JtJyk7XG4gICAgICBwbGF0Zm9ybS5zZXRTY2FsZSgwLjYpO1xuICAgICAgcGxhdGZvcm0uYm9keS5zZXRTaXplKDAuNiAqIHBsYXRmb3JtLndpZHRoLCAwLjYgKiBwbGF0Zm9ybS5oZWlnaHQpO1xuICAgICAgcGxhdGZvcm0uYm9keS54ID0gcC54IC0gMC4zICogcGxhdGZvcm0ud2lkdGg7XG4gICAgICBwbGF0Zm9ybS5ib2R5LnkgPSBwLnkgLSAwLjMgKiBwbGF0Zm9ybS5oZWlnaHQ7XG4gICAgICB0aGlzLnBsYXRmb3Jtcy5wdXNoKHBsYXRmb3JtKTtcbiAgICAgIHBsYXRmb3JtLmJvZHkuY2hlY2tDb2xsaXNpb24uZG93biA9IGZhbHNlO1xuICAgICAgcGxhdGZvcm0uYm9keS5jaGVja0NvbGxpc2lvbi5yaWdodCA9IGZhbHNlO1xuICAgICAgcGxhdGZvcm0uYm9keS5jaGVja0NvbGxpc2lvbi5sZWZ0ID0gZmFsc2U7XG4gICAgICB0aGlzLnBsYXRmb3JtTW92ZW1lbnRzLnB1c2goTWF0aC5yYW5kb20oKSA+IDAuOCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZyb2cgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSh0aGlzLmNlbnRlclswXSwgdGhpcy5jZW50ZXJbMV0sICdmcm9nJykgYXMgYW55O1xuICAgIHRoaXMuZnJvZy5zZXRTY2FsZSgwLjMpO1xuICAgIHRoaXMucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcy5mcm9nKTtcbiAgICB0aGlzLmZyb2cuYm9keS5zZXRTaXplKDE2MCwgMTYwKTtcbiAgICB0aGlzLmZyb2cuYm9keS5zZXREcmFnKDEwMCwgMTAwKTtcbiAgICB0aGlzLnBsYXRmb3Jtcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmZyb2csIHApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhLnNldCgnc2NvcmUnLCAwKTtcbiAgICB0aGlzLmhpc2NvcmUgPSBmYWxzZTtcbiAgICB0aGlzLnRleHQgPSB0aGlzLmFkZC50ZXh0KDQwLCB0aGlzLmNhbWVyYXMubWFpbi5oZWlnaHQgLSA4MCwgJycsIHsgZm9udDogJzI0cHggQ291cmllcicgfSkuc2V0T3JpZ2luKDApO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aW1lLm5vdztcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgY29uc3QgY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgIGlmICh0aGlzLkNoZWNrV2l0aGluQm91bmRzKCkpIHtcbiAgICAgIHRoaXMuVXBkYXRlU2NvcmUoKTtcbiAgICAgIHRoaXMuTW92ZShjdXJzb3JLZXlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGN1cnNvcktleXMuc3BhY2UuaXNEb3duKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95KCkge1xuICAgIHRoaXMuZnJvZy5kZXN0cm95KCk7XG4gICAgdGhpcy5wbGF0Zm9ybXMuZm9yRWFjaChwID0+IHAuZGVzdHJveSgpKTtcbiAgICB0aGlzLmNoZXJyaWVzLmZvckVhY2goYyA9PiBjLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5jbG91ZHMuZm9yRWFjaChjID0+IGMuZGVzdHJveSgpKTtcbiAgICB0aGlzLnRleHQuZGVzdHJveSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBMb2FkUmFuZG9tQ29vcmRpbmF0ZXMoYW1vdW50LCBzdGFydDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCBwaXRjaCwgZmx1Y3R1YXRpb24pOiBhbnlbXSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbe1xuICAgICAgeDogc3RhcnQueCxcbiAgICAgIHk6IHN0YXJ0LnlcbiAgICB9XTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYW1vdW50ICsgMTsgaW5kZXgrKykge1xuICAgICAgY29vcmRpbmF0ZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgIHg6IHN0YXJ0LnggKyBpbmRleCAqIChwaXRjaCArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wNyAqIHBpdGNoKSksXG4gICAgICAgICAgeTogc3RhcnQueSAtIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZsdWN0dWF0aW9uKVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBwcml2YXRlIE1vdmUoY3Vyc29yS2V5czogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZyb2cuYm9keS50b3VjaGluZy5ub25lICYmIGN1cnNvcktleXMudXAuaXNEb3duICYmIHRoaXMuZnJvZy5ib2R5LnZlbG9jaXR5LnkgPT09IDApIHtcbiAgICAgIHRoaXMuZnJvZy5ib2R5LnNldFZlbG9jaXR5WSgtNjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mcm9nLmJvZHkuc2V0VmVsb2NpdHlZKHRoaXMuZnJvZy5ib2R5LnZlbG9jaXR5LnkgKyAxNSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVycmllcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgaWYgKE1hdGguYWJzKGMuYm9keS54IC0gdGhpcy5mcm9nLmJvZHkueCkgPCA0MCAmJiBNYXRoLmFicyhjLmJvZHkueSAtIHRoaXMuZnJvZy5ib2R5LnkpIDwgNDApIHtcbiAgICAgICAgYy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGMuYm9keS5wb3NpdGlvbi5zZXQoYy5ib2R5LnBvc2l0aW9uLngsIC0xMDAwKTtcbiAgICAgICAgdGhpcy5kYXRhLnNldCgnY2hlcnJpZXMnLCB0aGlzLmRhdGEuZ2V0KCdjaGVycmllcycpICsgMSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgY2hhbmdlWCA9IDA7XG4gICAgY29uc3QgY2hhbmdlWSA9IDYgKiBNYXRoLnNpbigwLjAwNCAqICh0aGlzLnRpbWUubm93IC0gdGhpcy5zdGFydFRpbWUpKTtcbiAgICBpZiAoY3Vyc29yS2V5cy5yaWdodC5pc0Rvd24pIHtcbiAgICAgIHRoaXMuZnJvZy5mbGlwWCA9IGZhbHNlO1xuICAgICAgY2hhbmdlWCA9IC0xO1xuICAgIH0gZWxzZSBpZiAoY3Vyc29yS2V5cy5sZWZ0LmlzRG93bikge1xuICAgICAgdGhpcy5mcm9nLmZsaXBYID0gdHJ1ZTtcbiAgICAgIGNoYW5nZVggPSAxO1xuICAgIH1cblxuICAgIHRoaXMucGxhdGZvcm1zLmZvckVhY2goKHAsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBkWCA9IDUgKiBjaGFuZ2VYO1xuICAgICAgY29uc3QgZFkgPSAodGhpcy5wbGF0Zm9ybU1vdmVtZW50c1tpbmRleF0gPyBjaGFuZ2VZIDogMCk7XG4gICAgICBwLnNldFgocC54ICsgZFgpO1xuICAgICAgcC5zZXRZKHAueSArIGRZKTtcbiAgICAgIHAuYm9keS5wb3NpdGlvbi5zZXQocC5ib2R5LnBvc2l0aW9uLnggKyBkWCwgcC5ib2R5LnBvc2l0aW9uLnkgKyBkWSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoZXJyaWVzLmZvckVhY2goKGMsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBkWCA9IDUgKiBjaGFuZ2VYO1xuICAgICAgYy5zZXRYKGMueCArIGRYKTtcbiAgICAgIGMuYm9keS5wb3NpdGlvbi5zZXQoYy5ib2R5LnBvc2l0aW9uLnggKyBkWCwgYy5ib2R5LnBvc2l0aW9uLnkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jbG91ZHMuZm9yRWFjaChjID0+IHtcbiAgICAgIGMuc2V0WChjLnggKyBjaGFuZ2VYKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgQ2hlY2tXaXRoaW5Cb3VuZHMoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZnJvZy5ib2R5LnkgPiB0aGlzLmNhbWVyYXMubWFpbi5oZWlnaHQpIHtcbiAgICAgIHRoaXMuR2FtZU92ZXIoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgVXBkYXRlU2NvcmUoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLnNldCgnc2NvcmUnLCAtKHRoaXMucGxhdGZvcm1zWzBdLnggLSB0aGlzLmNlbnRlclswXSkgLyA1ICsgMTAwICogdGhpcy5kYXRhLmdldCgnY2hlcnJpZXMnKSk7XG4gICAgdGhpcy50ZXh0LnNldFRleHQoW1xuICAgICAgJ1Njb3JlOiAgICcgKyB0aGlzLlBhZFNjb3JlKHRoaXMuZGF0YS5nZXQoJ3Njb3JlJykpLFxuICAgICAgJ0hpc2NvcmU6ICcgKyB0aGlzLlBhZFNjb3JlKHRoaXMuZGF0YS5nZXQoJ2hpc2NvcmUnKSksXG4gICAgXSk7XG4gIH1cblxuICBwcml2YXRlIFBhZFNjb3JlKHNjb3JlOiBudW1iZXIsIHBhZGRpbmcgPSA2KTogc3RyaW5nIHtcbiAgICByZXR1cm4gKG5ldyBBcnJheShwYWRkaW5nICsgMSkuam9pbignICcpICsgc2NvcmUpLnNsaWNlKC1wYWRkaW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgR2FtZU92ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5VcGRhdGVTY29yZSgpO1xuICAgIHRoaXMudGV4dC5kZXN0cm95KCk7XG5cbiAgICBpZiAodGhpcy5oaXNjb3JlIHx8IHRoaXMuZGF0YS5nZXQoJ2hpc2NvcmUnKSA8IHRoaXMuZGF0YS5nZXQoJ3Njb3JlJykpIHtcbiAgICAgIHRoaXMuaGlzY29yZSA9IHRydWU7XG4gICAgICB0aGlzLmRhdGEuc2V0KCdoaXNjb3JlJywgdGhpcy5kYXRhLmdldCgnc2NvcmUnKSk7XG4gICAgfVxuICAgIHRoaXMuZGF0YS5zZXQoJ2NoZXJyaWVzJywgMCk7XG5cbiAgICBjb25zdCBnYW1lT3ZlclRleHQgPSBbXG4gICAgICAnR2FtZSBvdmVyJyxcbiAgICAgIHRoaXMuaGlzY29yZSA/ICdOZXcgaGlzY29yZSEnIDogJycsXG4gICAgICAnU2NvcmU6ICAgJyArIHRoaXMuUGFkU2NvcmUodGhpcy5kYXRhLmdldCgnc2NvcmUnKSksXG4gICAgICAnSGlzY29yZTogJyArIHRoaXMuUGFkU2NvcmUodGhpcy5kYXRhLmdldCgnaGlzY29yZScpKSxcbiAgICAgICdQcmVzcyBzcGFjZSB0byB0cnkgYWdhaW4uJ1xuICAgIF07XG4gICAgY29uc3QgY2VudGVyID0gdGhpcy5HZXRDZW50ZXIoKTtcbiAgICB0aGlzLnRleHQgPSB0aGlzLmFkZC50ZXh0KGNlbnRlci54LCBjZW50ZXIueSwgZ2FtZU92ZXJUZXh0LCB7IGZvbnQ6ICc0OHB4IENvdXJpZXInLCBhbGlnbjogJ2NlbnRlcicgfSkuc2V0T3JpZ2luKDAuNSk7XG4gIH1cblxuICBwcml2YXRlIEdldENlbnRlcigpOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLmNhbWVyYXMubWFpbi53b3JsZFZpZXcueCArIHRoaXMuY2FtZXJhcy5tYWluLndpZHRoIC8gMixcbiAgICAgIHk6IHRoaXMuY2FtZXJhcy5tYWluLndvcmxkVmlldy55ICsgdGhpcy5jYW1lcmFzLm1haW4uaGVpZ2h0IC8gMlxuICAgIH07XG4gIH1cbn1cblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdTYW1wbGUnLFxuICBzY2VuZTogR2FtZVNjZW5lLFxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgfSxcbiAgfSxcblxuICBwYXJlbnQ6ICdnYW1lJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzg3Q0VFQicsXG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=