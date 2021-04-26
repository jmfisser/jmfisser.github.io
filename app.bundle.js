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

/***/ "./src/components/cherry.component.ts":
/*!********************************************!*\
  !*** ./src/components/cherry.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cherry = void 0;
var Cherry = /** @class */ (function () {
    function Cherry(scene, location) {
        this.scale = 0.5;
        this.speed = 5;
        this.heightAbovePlatform = 80;
        this.eatingDistance = 40;
        this.cherry = scene.physics.add.staticSprite(location.x, location.y - this.heightAbovePlatform, Cherry.objectName);
        this.cherry.setScale(this.scale);
        this.cherry.body.setSize(this.scale * this.cherry.width, this.scale * this.cherry.height);
        this.cherry.body.x = location.x - this.scale / 2 * this.cherry.width;
        this.cherry.body.y = location.y - this.scale / 2 * this.cherry.height - this.heightAbovePlatform;
    }
    Cherry.preload = function (scene) {
        scene.load.image(Cherry.objectName, Cherry.asset);
    };
    Cherry.prototype.destroy = function () {
        this.cherry.destroy();
    };
    Cherry.prototype.move = function (delta) {
        var dX = this.speed * delta.x;
        var dY = delta.y;
        this.cherry.setX(this.cherry.x + dX);
        this.cherry.setY(this.cherry.y + dY);
        this.cherry.body.position.set(this.cherry.body.position.x + dX, this.cherry.body.position.y + dY);
    };
    Cherry.prototype.removeFromScreen = function () {
        this.cherry.visible = false;
        this.cherry.body.position.set(this.cherry.body.position.y, -1000);
    };
    Cherry.prototype.withinEatingDistance = function (playerLocation) {
        return Math.abs(this.cherry.body.x - playerLocation.x) < this.eatingDistance &&
            Math.abs(this.cherry.body.y - playerLocation.y) < this.eatingDistance;
    };
    Cherry.objectName = 'cherry';
    Cherry.asset = './assets/cherry.png';
    return Cherry;
}());
exports.Cherry = Cherry;


/***/ }),

/***/ "./src/components/cloud.component.ts":
/*!*******************************************!*\
  !*** ./src/components/cloud.component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloud = void 0;
var Cloud = /** @class */ (function () {
    function Cloud(scene, location) {
        this.scale = 0.4 + Math.random();
        this.cloud = scene.add.sprite(location.x, location.y, Cloud.objectName);
        this.cloud.setScale(this.scale);
    }
    Cloud.preload = function (scene) {
        scene.load.image(Cloud.objectName, Cloud.asset);
    };
    Cloud.prototype.destroy = function () {
        this.cloud.destroy();
    };
    Cloud.prototype.move = function (delta) {
        this.cloud.setX(this.cloud.x + delta.x);
        this.cloud.setY(this.cloud.y + delta.y);
    };
    Cloud.objectName = 'cloud';
    Cloud.asset = './assets/cloud.png';
    return Cloud;
}());
exports.Cloud = Cloud;


/***/ }),

/***/ "./src/components/full-screen-text.component.ts":
/*!******************************************************!*\
  !*** ./src/components/full-screen-text.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FullScreenText = void 0;
var FullScreenText = /** @class */ (function () {
    function FullScreenText(scene) {
        this.style = {
            font: '48px Courier',
            align: 'center',
            stroke: '#000',
            strokeThickness: 4,
        };
        var location = this.screenCenter(scene);
        this.text = scene.add.text(location.x, location.y, '', this.style).setOrigin(0.5);
    }
    FullScreenText.prototype.update = function (newText) {
        this.text.setText(newText);
    };
    FullScreenText.prototype.destroy = function () {
        this.text.destroy();
    };
    FullScreenText.prototype.screenCenter = function (scene) {
        return {
            x: scene.cameras.main.worldView.x + scene.cameras.main.width / 2,
            y: scene.cameras.main.worldView.y + scene.cameras.main.height / 2
        };
    };
    return FullScreenText;
}());
exports.FullScreenText = FullScreenText;


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./cherry.component */ "./src/components/cherry.component.ts"), exports);
__exportStar(__webpack_require__(/*! ./cloud.component */ "./src/components/cloud.component.ts"), exports);
__exportStar(__webpack_require__(/*! ./full-screen-text.component */ "./src/components/full-screen-text.component.ts"), exports);
__exportStar(__webpack_require__(/*! ./platform.component */ "./src/components/platform.component.ts"), exports);
__exportStar(__webpack_require__(/*! ./player.component */ "./src/components/player.component.ts"), exports);
__exportStar(__webpack_require__(/*! ./score.component */ "./src/components/score.component.ts"), exports);


/***/ }),

/***/ "./src/components/platform.component.ts":
/*!**********************************************!*\
  !*** ./src/components/platform.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = void 0;
var Platform = /** @class */ (function () {
    function Platform(scene, location, firstPlatform) {
        this.speed = 5;
        this._isMoving = false;
        this._platform = scene.physics.add.staticSprite(location.x, location.y, Platform.objectName);
        this.scale = 0.3 + 0.3 * Math.random();
        this.resize(location);
        this._platform.body.checkCollision.down = false;
        this._platform.body.checkCollision.right = false;
        this._platform.body.checkCollision.left = false;
        this._isMoving = firstPlatform ? false : Math.random() > 0.8;
    }
    Object.defineProperty(Platform.prototype, "body", {
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    Platform.preload = function (scene) {
        scene.load.image(Platform.objectName, Platform.asset);
    };
    Platform.prototype.move = function (delta) {
        var dX = this.speed * delta.x;
        var dY = this._isMoving ? delta.y : 0;
        this._platform.setX(this._platform.x + dX);
        this._platform.setY(this._platform.y + dY);
        this._platform.body.position.set(this._platform.body.position.x + dX, this._platform.body.position.y + dY);
    };
    Platform.prototype.destroy = function () {
        this._platform.destroy();
    };
    Platform.prototype.resize = function (originalLocation) {
        var scaledWidth = Math.floor(this.scale * this._platform.width);
        var scaledHeight = Math.floor(this.scale * this._platform.height);
        this._platform.setScale(this.scale);
        this._platform.body.setSize(scaledWidth, scaledHeight);
        this._platform.body.x = originalLocation.x - 0.5 * scaledWidth;
        this._platform.body.y = originalLocation.y - 0.5 * scaledHeight;
    };
    Platform.objectName = 'platform';
    Platform.asset = './assets/platform.png';
    return Platform;
}());
exports.Platform = Platform;


/***/ }),

/***/ "./src/components/player.component.ts":
/*!********************************************!*\
  !*** ./src/components/player.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(scene) {
        this.scale = 0.3;
        var location = { x: scene.cameras.main.width / 3, y: scene.cameras.main.height * 1 / 2 };
        this.player = scene.physics.add.sprite(location.x, location.y, Player.objectName);
        this.player.setScale(this.scale);
        scene.add.existing(this.player);
        this.player.body.setSize(160, 160);
        this.player.body.setDrag(100, 100);
        this.endOfScreenY = scene.cameras.main.height;
    }
    Object.defineProperty(Player.prototype, "location", {
        get: function () {
            return {
                x: this.player.body.x,
                y: this.player.body.y
            };
        },
        enumerable: false,
        configurable: true
    });
    Player.preload = function (scene) {
        scene.load.image(Player.objectName, Player.asset);
    };
    Player.prototype.isDead = function () {
        return this.player.body.y > this.endOfScreenY;
    };
    Player.prototype.addCollider = function (scene, platforms) {
        var _this = this;
        platforms.forEach(function (platform) {
            scene.physics.add.collider(_this.player, platform.body);
        });
    };
    Player.prototype.destroy = function () {
        this.player.destroy();
    };
    Player.prototype.move = function (cursorKeys) {
        if (this.feetOnGround && cursorKeys.up.isDown) {
            this.player.body.setVelocityY(-650);
        }
        else {
            this.player.body.setVelocityY(this.player.body.velocity.y + 15);
        }
        if (cursorKeys.left.isDown) {
            this.faceLeft();
        }
        else if (cursorKeys.right.isDown) {
            this.faceRight();
        }
    };
    Player.prototype.faceLeft = function () {
        this.player.flipX = true;
    };
    Player.prototype.faceRight = function () {
        this.player.flipX = false;
    };
    Object.defineProperty(Player.prototype, "feetOnGround", {
        get: function () {
            return !this.player.body.touching.none && this.player.body.velocity.y === 0;
        },
        enumerable: false,
        configurable: true
    });
    Player.objectName = 'frog';
    Player.asset = './assets/frog.png';
    return Player;
}());
exports.Player = Player;


/***/ }),

/***/ "./src/components/score.component.ts":
/*!*******************************************!*\
  !*** ./src/components/score.component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
var Score = /** @class */ (function () {
    function Score(scene, hiscore) {
        this.hiscore = hiscore;
        this.distanceTravelled = 0;
        this.cherries = 0;
        this.newHiscore = false;
        this.distanceFromLeftBottomCorner = { x: 40, y: 80 };
        this.style = {
            font: '24px Courier',
            stroke: '#000',
            strokeThickness: 2,
        };
        var location = {
            x: this.distanceFromLeftBottomCorner.x,
            y: scene.cameras.main.height - this.distanceFromLeftBottomCorner.y
        };
        this.text = scene.add.text(location.x, location.y, '', this.style).setOrigin(0);
    }
    Object.defineProperty(Score.prototype, "score", {
        get: function () {
            return this.distanceTravelled / 5 + 100 * this.cherries;
        },
        enumerable: false,
        configurable: true
    });
    Score.prototype.destroy = function () {
        this.text.destroy();
    };
    Score.prototype.update = function () {
        this.text.setText([
            'Score:   ' + this.padScore(this.score),
            'Hiscore: ' + this.padScore(this.hiscore),
        ]);
    };
    Score.prototype.updateHiscore = function () {
        if (this.hiscore < this.score) {
            this.hiscore = this.score;
            this.newHiscore = true;
        }
        return this.hiscore;
    };
    Score.prototype.addCherry = function () {
        this.cherries++;
    };
    Score.prototype.gameOverText = function () {
        return [
            'Game over',
            this.newHiscore ? 'New hiscore!' : '',
            'Score:   ' + this.padScore(this.score),
            'Hiscore: ' + this.padScore(this.hiscore),
            'Press space to try again.'
        ];
    };
    Score.prototype.padScore = function (score, padding) {
        if (padding === void 0) { padding = 6; }
        return (new Array(padding + 1).join(' ') + score).slice(-padding);
    };
    return Score;
}());
exports.Score = Score;


/***/ }),

/***/ "./src/logic/coordinate.logic.ts":
/*!***************************************!*\
  !*** ./src/logic/coordinate.logic.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinateLogic = void 0;
var CoordinateLogic = /** @class */ (function () {
    function CoordinateLogic() {
    }
    CoordinateLogic.randomCoordinates = function (amount, start, pitch, fluctuation) {
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
    return CoordinateLogic;
}());
exports.CoordinateLogic = CoordinateLogic;


/***/ }),

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.GameScene = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var components_1 = __webpack_require__(/*! ./components */ "./src/components/index.ts");
var coordinate_logic_1 = __webpack_require__(/*! ./logic/coordinate.logic */ "./src/logic/coordinate.logic.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.platforms = [];
        _this.cherries = [];
        _this.clouds = [];
        return _this;
    }
    GameScene.prototype.preload = function () {
        components_1.Player.preload(this);
        components_1.Platform.preload(this);
        components_1.Cherry.preload(this);
        components_1.Cloud.preload(this);
        this.data.set('hiscore', 0);
    };
    GameScene.prototype.create = function () {
        this.addBackground();
        this.addWorld();
        this.addHUD();
    };
    GameScene.prototype.update = function () {
        var cursorKeys = this.input.keyboard.createCursorKeys();
        if (this.checkWithinBounds()) {
            this.score.update();
            this.move(cursorKeys);
            return;
        }
        if (cursorKeys.space.isDown) {
            this.destroy();
            this.create();
        }
    };
    GameScene.prototype.addBackground = function () {
        var _this = this;
        var graphics = this.add.graphics();
        graphics.fillGradientStyle(0x4169E1, 0x4169E1, 0x87CEEB, 0x87CEEB);
        graphics.fillRect(0, 0, this.cameras.main.width, this.cameras.main.width);
        coordinate_logic_1.CoordinateLogic.randomCoordinates(30, { x: 100, y: 200 }, 350, 200)
            .forEach(function (coordinate) {
            _this.clouds.push(new components_1.Cloud(_this, coordinate));
        });
    };
    GameScene.prototype.addWorld = function () {
        var _this = this;
        var platformCoordinates = coordinate_logic_1.CoordinateLogic.randomCoordinates(100, { x: 400, y: 600 }, 250, 300);
        platformCoordinates.forEach(function (coordinate, index) {
            _this.platforms.push(new components_1.Platform(_this, coordinate, index === 0));
            if (Math.random() < 0.3) {
                _this.cherries.push(new components_1.Cherry(_this, coordinate));
            }
        });
        this.player = new components_1.Player(this);
        this.player.addCollider(this, this.platforms);
    };
    GameScene.prototype.addHUD = function () {
        this.score = new components_1.Score(this, this.data.get('hiscore'));
        this.fullScreenText = new components_1.FullScreenText(this);
    };
    GameScene.prototype.destroy = function () {
        __spreadArrays([
            this.player
        ], this.platforms, this.cherries, this.clouds, [
            this.fullScreenText,
            this.score
        ]).forEach(function (c) { return c.destroy(); });
        this.platforms = [];
        this.clouds = [];
        this.cherries = [];
    };
    GameScene.prototype.move = function (cursorKeys) {
        var _this = this;
        this.player.move(cursorKeys);
        this.cherries.forEach(function (cherry) {
            if (cherry.withinEatingDistance(_this.player.location)) {
                cherry.removeFromScreen();
                _this.score.addCherry();
            }
        });
        var changeX = 0;
        var changeY = 6 * Math.sin(0.004 * (this.time.now));
        if (cursorKeys.right.isDown) {
            changeX = -1;
        }
        else if (cursorKeys.left.isDown) {
            changeX = 1;
        }
        this.platforms.forEach(function (platform) {
            platform.move({ x: changeX, y: changeY });
        });
        this.cherries.forEach(function (cherry) {
            cherry.move({ x: changeX, y: 0 });
        });
        this.clouds.forEach(function (cloud) {
            cloud.move({ x: changeX, y: 0 });
        });
        this.score.distanceTravelled -= 5 * changeX;
    };
    GameScene.prototype.checkWithinBounds = function () {
        if (this.player.isDead()) {
            this.gameOver();
            return false;
        }
        return true;
    };
    GameScene.prototype.gameOver = function () {
        this.score.destroy();
        this.data.set('hiscore', this.score.updateHiscore());
        this.fullScreenText.update(this.score.gameOverText());
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
var gameConfig = {
    title: 'Jump!',
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
};
exports.game = new Phaser.Game(gameConfig);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hlcnJ5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jbG91ZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZnVsbC1zY3JlZW4tdGV4dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxhdGZvcm0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BsYXllci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NvcmUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9jb29yZGluYXRlLmxvZ2ljLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckpBO0lBY0UsZ0JBQVksS0FBbUIsRUFBRSxRQUFvQjtRQVQ3QyxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBT2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ25HLENBQUM7SUFWTSxjQUFPLEdBQWQsVUFBZSxLQUFtQjtRQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBVUQsd0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBSyxLQUFpQjtRQUNwQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELGlDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQscUNBQW9CLEdBQXBCLFVBQXFCLGNBQTBCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjO1lBQ3JFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9FLENBQUM7SUF6Q00saUJBQVUsR0FBVyxRQUFRLENBQUM7SUFDOUIsWUFBSyxHQUFXLHFCQUFxQixDQUFDO0lBeUMvQyxhQUFDO0NBQUE7QUEzQ1ksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbkI7SUFXRSxlQUFZLEtBQW1CLEVBQUUsUUFBb0I7UUFQN0MsVUFBSyxHQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFRMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBUE0sYUFBTyxHQUFkLFVBQWUsS0FBbUI7UUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQU9ELHVCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQkFBSSxHQUFKLFVBQUssS0FBaUI7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBdEJNLGdCQUFVLEdBQVcsT0FBTyxDQUFDO0lBQzdCLFdBQUssR0FBVyxvQkFBb0IsQ0FBQztJQXNCOUMsWUFBQztDQUFBO0FBeEJZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWxCO0lBU0Usd0JBQVksS0FBbUI7UUFQdkIsVUFBSyxHQUE0QztZQUN2RCxJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsUUFBUTtZQUNmLE1BQU0sRUFBRSxNQUFNO1lBQ2QsZUFBZSxFQUFFLENBQUM7U0FDbkIsQ0FBQztRQUdBLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxPQUEwQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLHFDQUFZLEdBQXBCLFVBQXFCLEtBQW1CO1FBQ3RDLE9BQU87WUFDTCxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNoRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztTQUNsRSxDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQztBQTVCWSx3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YzQiw2R0FBbUM7QUFDbkMsMkdBQWtDO0FBQ2xDLGlJQUE2QztBQUM3QyxpSEFBcUM7QUFDckMsNkdBQW1DO0FBQ25DLDJHQUFrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hsQztJQWlCRSxrQkFBWSxLQUFtQixFQUFFLFFBQW9CLEVBQUUsYUFBdUI7UUFYdEUsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBV2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDL0QsQ0FBQztJQWhCRCxzQkFBVywwQkFBSTthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRU0sZ0JBQU8sR0FBZCxVQUFlLEtBQW1CO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFZRCx1QkFBSSxHQUFKLFVBQUssS0FBaUI7UUFDcEIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyx5QkFBTSxHQUFkLFVBQWUsZ0JBQTRCO1FBQ3pDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7SUFDbEUsQ0FBQztJQTdDTSxtQkFBVSxHQUFXLFVBQVUsQ0FBQztJQUNoQyxjQUFLLEdBQVcsdUJBQXVCLENBQUM7SUE2Q2pELGVBQUM7Q0FBQTtBQS9DWSw0QkFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQ0NyQjtJQW1CRSxnQkFBWSxLQUFtQjtRQWhCdEIsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQWlCM0IsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUMzRixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hELENBQUM7SUFuQkQsc0JBQVcsNEJBQVE7YUFBbkI7WUFDRSxPQUFPO2dCQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQixDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFTSxjQUFPLEdBQWQsVUFBZSxLQUFtQjtRQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBWUQsdUJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDaEQsQ0FBQztJQUVELDRCQUFXLEdBQVgsVUFBWSxLQUFtQixFQUFFLFNBQXFCO1FBQXRELGlCQUlDO1FBSEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBUTtZQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBSyxVQUFrRDtRQUNyRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7YUFBTSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBWSxnQ0FBWTthQUF4QjtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlFLENBQUM7OztPQUFBO0lBbEVNLGlCQUFVLEdBQVcsTUFBTSxDQUFDO0lBQzVCLFlBQUssR0FBVyxtQkFBbUIsQ0FBQztJQWtFN0MsYUFBQztDQUFBO0FBcEVZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDRG5CO0lBaUJFLGVBQVksS0FBbUIsRUFBVSxPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQWhCeEQsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixpQ0FBNEIsR0FBZSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTVELFVBQUssR0FBNEM7WUFDdkQsSUFBSSxFQUFFLGNBQWM7WUFDcEIsTUFBTSxFQUFFLE1BQU07WUFDZCxlQUFlLEVBQUUsQ0FBQztTQUNuQixDQUFDO1FBT0EsSUFBTSxRQUFRLEdBQWU7WUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDbkUsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFWRCxzQkFBWSx3QkFBSzthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQVVELHVCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2QkFBYSxHQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCx5QkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw0QkFBWSxHQUFaO1FBQ0UsT0FBTztZQUNMLFdBQVc7WUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3pDLDJCQUEyQjtTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVPLHdCQUFRLEdBQWhCLFVBQWlCLEtBQWEsRUFBRSxPQUFXO1FBQVgscUNBQVc7UUFDekMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDO0FBOURZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWxCO0lBQUE7SUFnQkEsQ0FBQztJQWZRLGlDQUFpQixHQUF4QixVQUF5QixNQUFNLEVBQUUsS0FBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVztRQUNwRSxJQUFNLFdBQVcsR0FBaUIsQ0FBQztnQkFDakMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNWLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNYLENBQUMsQ0FBQztRQUNILEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQy9DLFdBQVcsQ0FBQyxJQUFJLENBQ2Q7Z0JBQ0UsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUMvRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUM7YUFDckQsQ0FDRixDQUFDO1NBQ0g7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDO0FBaEJZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGNUIsdUZBQWlDO0FBQ2pDLHdGQUFzRjtBQUN0RixnSEFBMkQ7QUFHM0QsSUFBTSxXQUFXLEdBQXVDO0lBQ3RELE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFDZCxHQUFHLEVBQUUsTUFBTTtDQUNaLENBQUM7QUFFRjtJQUErQiw2QkFBWTtJQVF6QztRQUFBLFlBQ0Usa0JBQU0sV0FBVyxDQUFDLFNBQ25CO1FBUk8sZUFBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxFQUFFLENBQUM7O0lBTTdCLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0UsbUJBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIscUJBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsbUJBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsa0JBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSwwQkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDUjtRQUNELElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRU8saUNBQWEsR0FBckI7UUFBQSxpQkFTQztRQVJDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUUsa0NBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2FBQ2hFLE9BQU8sQ0FBQyxvQkFBVTtZQUNqQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFLLENBQUMsS0FBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sNEJBQVEsR0FBaEI7UUFBQSxpQkFZQztRQVhDLElBQU0sbUJBQW1CLEdBQUcsa0NBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFakcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVSxFQUFFLEtBQUs7WUFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUSxDQUFDLEtBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFO2dCQUN2QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFNLENBQUMsS0FBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxtQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLDBCQUFNLEdBQWQ7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0JBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksMkJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sMkJBQU8sR0FBZjtRQUNFO1lBQ0UsSUFBSSxDQUFDLE1BQU07V0FDUixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLE1BQU07WUFDZCxJQUFJLENBQUMsY0FBYztZQUNuQixJQUFJLENBQUMsS0FBSztXQUNWLE9BQU8sQ0FBQyxVQUFDLENBQVksSUFBSyxRQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLHdCQUFJLEdBQVosVUFBYSxVQUFrRDtRQUEvRCxpQkErQkM7UUE5QkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQU07WUFDMUIsSUFBSSxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckQsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUMzQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDZDthQUFNLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQVE7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBTTtZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQUs7WUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDOUMsQ0FBQztJQUVPLHFDQUFpQixHQUF6QjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDRCQUFRLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLENBbkk4QixNQUFNLENBQUMsS0FBSyxHQW1JMUM7QUFuSVksOEJBQVM7QUFxSXRCLElBQU0sVUFBVSxHQUFpQztJQUMvQyxLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxTQUFTO0lBQ2hCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtJQUVqQixLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7UUFDeEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO0tBQzNCO0lBRUQsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLEtBQUs7U0FDYjtLQUNGO0lBRUQsTUFBTSxFQUFFLE1BQU07Q0FDZixDQUFDO0FBRVcsWUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvb3JkaW5hdGUgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQ2hlcnJ5IGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG9iamVjdE5hbWU6IHN0cmluZyA9ICdjaGVycnknO1xuICBzdGF0aWMgYXNzZXQ6IHN0cmluZyA9ICcuL2Fzc2V0cy9jaGVycnkucG5nJztcblxuICBwcml2YXRlIGNoZXJyeTogUGhhc2VyLlR5cGVzLlBoeXNpY3MuQXJjYWRlLlNwcml0ZVdpdGhTdGF0aWNCb2R5O1xuICBwcml2YXRlIHNjYWxlOiBudW1iZXIgPSAwLjU7XG4gIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDU7XG4gIHByaXZhdGUgaGVpZ2h0QWJvdmVQbGF0Zm9ybTogbnVtYmVyID0gODA7XG4gIHByaXZhdGUgZWF0aW5nRGlzdGFuY2U6IG51bWJlciA9IDQwO1xuXG4gIHN0YXRpYyBwcmVsb2FkKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiB2b2lkIHtcbiAgICBzY2VuZS5sb2FkLmltYWdlKENoZXJyeS5vYmplY3ROYW1lLCBDaGVycnkuYXNzZXQpO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgbG9jYXRpb246IENvb3JkaW5hdGUpIHtcbiAgICB0aGlzLmNoZXJyeSA9IHNjZW5lLnBoeXNpY3MuYWRkLnN0YXRpY1Nwcml0ZShsb2NhdGlvbi54LCBsb2NhdGlvbi55IC0gdGhpcy5oZWlnaHRBYm92ZVBsYXRmb3JtLCBDaGVycnkub2JqZWN0TmFtZSk7XG4gICAgdGhpcy5jaGVycnkuc2V0U2NhbGUodGhpcy5zY2FsZSk7XG4gICAgdGhpcy5jaGVycnkuYm9keS5zZXRTaXplKHRoaXMuc2NhbGUgKiB0aGlzLmNoZXJyeS53aWR0aCwgdGhpcy5zY2FsZSAqIHRoaXMuY2hlcnJ5LmhlaWdodCk7XG4gICAgdGhpcy5jaGVycnkuYm9keS54ID0gbG9jYXRpb24ueCAtIHRoaXMuc2NhbGUgLyAyICogdGhpcy5jaGVycnkud2lkdGg7XG4gICAgdGhpcy5jaGVycnkuYm9keS55ID0gbG9jYXRpb24ueSAtIHRoaXMuc2NhbGUgLyAyICogdGhpcy5jaGVycnkuaGVpZ2h0IC0gdGhpcy5oZWlnaHRBYm92ZVBsYXRmb3JtO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZXJyeS5kZXN0cm95KCk7XG4gIH1cblxuICBtb3ZlKGRlbHRhOiBDb29yZGluYXRlKTogdm9pZCB7XG4gICAgY29uc3QgZFggPSB0aGlzLnNwZWVkICogZGVsdGEueDtcbiAgICBjb25zdCBkWSA9IGRlbHRhLnk7XG4gICAgdGhpcy5jaGVycnkuc2V0WCh0aGlzLmNoZXJyeS54ICsgZFgpO1xuICAgIHRoaXMuY2hlcnJ5LnNldFkodGhpcy5jaGVycnkueSArIGRZKTtcbiAgICB0aGlzLmNoZXJyeS5ib2R5LnBvc2l0aW9uLnNldCh0aGlzLmNoZXJyeS5ib2R5LnBvc2l0aW9uLnggKyBkWCwgdGhpcy5jaGVycnkuYm9keS5wb3NpdGlvbi55ICsgZFkpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbVNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmNoZXJyeS52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jaGVycnkuYm9keS5wb3NpdGlvbi5zZXQodGhpcy5jaGVycnkuYm9keS5wb3NpdGlvbi55LCAtMTAwMCk7XG4gIH1cblxuICB3aXRoaW5FYXRpbmdEaXN0YW5jZShwbGF5ZXJMb2NhdGlvbjogQ29vcmRpbmF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLmNoZXJyeS5ib2R5LnggLSBwbGF5ZXJMb2NhdGlvbi54KSA8IHRoaXMuZWF0aW5nRGlzdGFuY2UgJiZcbiAgICAgICAgICAgTWF0aC5hYnModGhpcy5jaGVycnkuYm9keS55IC0gcGxheWVyTG9jYXRpb24ueSkgPCB0aGlzLmVhdGluZ0Rpc3RhbmNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvb3JkaW5hdGUgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQ2xvdWQgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBzdGF0aWMgb2JqZWN0TmFtZTogc3RyaW5nID0gJ2Nsb3VkJztcbiAgc3RhdGljIGFzc2V0OiBzdHJpbmcgPSAnLi9hc3NldHMvY2xvdWQucG5nJztcblxuICBwcml2YXRlIHNjYWxlOiBudW1iZXIgPSAwLjQgKyBNYXRoLnJhbmRvbSgpO1xuICBwcml2YXRlIGNsb3VkOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xuXG4gIHN0YXRpYyBwcmVsb2FkKHNjZW5lOiBQaGFzZXIuU2NlbmUpIHtcbiAgICBzY2VuZS5sb2FkLmltYWdlKENsb3VkLm9iamVjdE5hbWUsIENsb3VkLmFzc2V0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGxvY2F0aW9uOiBDb29yZGluYXRlKSB7XG4gICAgdGhpcy5jbG91ZCA9IHNjZW5lLmFkZC5zcHJpdGUobG9jYXRpb24ueCwgbG9jYXRpb24ueSwgQ2xvdWQub2JqZWN0TmFtZSk7XG4gICAgdGhpcy5jbG91ZC5zZXRTY2FsZSh0aGlzLnNjYWxlKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbG91ZC5kZXN0cm95KCk7XG4gIH1cblxuICBtb3ZlKGRlbHRhOiBDb29yZGluYXRlKSB7XG4gICAgdGhpcy5jbG91ZC5zZXRYKHRoaXMuY2xvdWQueCArIGRlbHRhLngpO1xuICAgIHRoaXMuY2xvdWQuc2V0WSh0aGlzLmNsb3VkLnkgKyBkZWx0YS55KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL21vZGVscy9jb29yZGluYXRlLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIEZ1bGxTY3JlZW5UZXh0IHtcbiAgcHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgcHJpdmF0ZSBzdHlsZTogUGhhc2VyLlR5cGVzLkdhbWVPYmplY3RzLlRleHQuVGV4dFN0eWxlID0ge1xuICAgIGZvbnQ6ICc0OHB4IENvdXJpZXInLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBzdHJva2U6ICcjMDAwJyxcbiAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gIH07XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5zY3JlZW5DZW50ZXIoc2NlbmUpO1xuICAgIHRoaXMudGV4dCA9IHNjZW5lLmFkZC50ZXh0KGxvY2F0aW9uLngsIGxvY2F0aW9uLnksICcnLCB0aGlzLnN0eWxlKS5zZXRPcmlnaW4oMC41KTtcbiAgfVxuXG4gIHVwZGF0ZShuZXdUZXh0OiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMudGV4dC5zZXRUZXh0KG5ld1RleHQpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRleHQuZGVzdHJveSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JlZW5DZW50ZXIoc2NlbmU6IFBoYXNlci5TY2VuZSk6IENvb3JkaW5hdGUge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBzY2VuZS5jYW1lcmFzLm1haW4ud29ybGRWaWV3LnggKyBzY2VuZS5jYW1lcmFzLm1haW4ud2lkdGggLyAyLFxuICAgICAgeTogc2NlbmUuY2FtZXJhcy5tYWluLndvcmxkVmlldy55ICsgc2NlbmUuY2FtZXJhcy5tYWluLmhlaWdodCAvIDJcbiAgICB9O1xuICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jaGVycnkuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY2xvdWQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZnVsbC1zY3JlZW4tdGV4dC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wbGF0Zm9ybS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc2NvcmUuY29tcG9uZW50JzsiLCJpbXBvcnQgeyBDb21wb25lbnQsIENvb3JkaW5hdGUgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0gaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBzdGF0aWMgb2JqZWN0TmFtZTogc3RyaW5nID0gJ3BsYXRmb3JtJztcbiAgc3RhdGljIGFzc2V0OiBzdHJpbmcgPSAnLi9hc3NldHMvcGxhdGZvcm0ucG5nJztcblxuICBwcml2YXRlIF9wbGF0Zm9ybTogUGhhc2VyLlR5cGVzLlBoeXNpY3MuQXJjYWRlLlNwcml0ZVdpdGhTdGF0aWNCb2R5O1xuICBwcml2YXRlIHNjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDU7XG4gIHByaXZhdGUgX2lzTW92aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCBib2R5KCk6IFBoYXNlci5UeXBlcy5QaHlzaWNzLkFyY2FkZS5TcHJpdGVXaXRoU3RhdGljQm9keSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtO1xuICB9XG5cbiAgc3RhdGljIHByZWxvYWQoc2NlbmU6IFBoYXNlci5TY2VuZSkge1xuICAgIHNjZW5lLmxvYWQuaW1hZ2UoUGxhdGZvcm0ub2JqZWN0TmFtZSwgUGxhdGZvcm0uYXNzZXQpO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgbG9jYXRpb246IENvb3JkaW5hdGUsIGZpcnN0UGxhdGZvcm0/OiBib29sZWFuKSB7XG4gICAgdGhpcy5fcGxhdGZvcm0gPSBzY2VuZS5waHlzaWNzLmFkZC5zdGF0aWNTcHJpdGUobG9jYXRpb24ueCwgbG9jYXRpb24ueSwgUGxhdGZvcm0ub2JqZWN0TmFtZSk7XG4gICAgdGhpcy5zY2FsZSA9IDAuMyArIDAuMyAqIE1hdGgucmFuZG9tKCk7XG4gICAgdGhpcy5yZXNpemUobG9jYXRpb24pO1xuICAgIHRoaXMuX3BsYXRmb3JtLmJvZHkuY2hlY2tDb2xsaXNpb24uZG93biA9IGZhbHNlO1xuICAgIHRoaXMuX3BsYXRmb3JtLmJvZHkuY2hlY2tDb2xsaXNpb24ucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLl9wbGF0Zm9ybS5ib2R5LmNoZWNrQ29sbGlzaW9uLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc01vdmluZyA9IGZpcnN0UGxhdGZvcm0gPyBmYWxzZSA6IE1hdGgucmFuZG9tKCkgPiAwLjg7XG4gIH1cblxuICBtb3ZlKGRlbHRhOiBDb29yZGluYXRlKTogdm9pZCB7XG4gICAgY29uc3QgZFggPSB0aGlzLnNwZWVkICogZGVsdGEueDtcbiAgICBjb25zdCBkWSA9IHRoaXMuX2lzTW92aW5nID8gZGVsdGEueSA6IDA7XG4gICAgdGhpcy5fcGxhdGZvcm0uc2V0WCh0aGlzLl9wbGF0Zm9ybS54ICsgZFgpO1xuICAgIHRoaXMuX3BsYXRmb3JtLnNldFkodGhpcy5fcGxhdGZvcm0ueSArIGRZKTtcbiAgICB0aGlzLl9wbGF0Zm9ybS5ib2R5LnBvc2l0aW9uLnNldCh0aGlzLl9wbGF0Zm9ybS5ib2R5LnBvc2l0aW9uLnggKyBkWCwgdGhpcy5fcGxhdGZvcm0uYm9keS5wb3NpdGlvbi55ICsgZFkpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wbGF0Zm9ybS5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZShvcmlnaW5hbExvY2F0aW9uOiBDb29yZGluYXRlKSB7XG4gICAgY29uc3Qgc2NhbGVkV2lkdGggPSBNYXRoLmZsb29yKHRoaXMuc2NhbGUgKiB0aGlzLl9wbGF0Zm9ybS53aWR0aCk7XG4gICAgY29uc3Qgc2NhbGVkSGVpZ2h0ID0gTWF0aC5mbG9vcih0aGlzLnNjYWxlICogdGhpcy5fcGxhdGZvcm0uaGVpZ2h0KTtcbiAgICB0aGlzLl9wbGF0Zm9ybS5zZXRTY2FsZSh0aGlzLnNjYWxlKTtcbiAgICB0aGlzLl9wbGF0Zm9ybS5ib2R5LnNldFNpemUoc2NhbGVkV2lkdGgsIHNjYWxlZEhlaWdodCk7XG4gICAgdGhpcy5fcGxhdGZvcm0uYm9keS54ID0gb3JpZ2luYWxMb2NhdGlvbi54IC0gMC41ICogc2NhbGVkV2lkdGg7XG4gICAgdGhpcy5fcGxhdGZvcm0uYm9keS55ID0gb3JpZ2luYWxMb2NhdGlvbi55IC0gMC41ICogc2NhbGVkSGVpZ2h0O1xuICB9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb29yZGluYXRlIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybS5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG9iamVjdE5hbWU6IHN0cmluZyA9ICdmcm9nJztcbiAgc3RhdGljIGFzc2V0OiBzdHJpbmcgPSAnLi9hc3NldHMvZnJvZy5wbmcnO1xuICByZWFkb25seSBzY2FsZTogbnVtYmVyID0gMC4zO1xuXG4gIHByaXZhdGUgcGxheWVyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlICYgeyBib2R5OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSB9O1xuICBwcml2YXRlIGVuZE9mU2NyZWVuWTogbnVtYmVyO1xuXG4gIHB1YmxpYyBnZXQgbG9jYXRpb24oKTogQ29vcmRpbmF0ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHRoaXMucGxheWVyLmJvZHkueCxcbiAgICAgIHk6IHRoaXMucGxheWVyLmJvZHkueVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJlbG9hZChzY2VuZTogUGhhc2VyLlNjZW5lKSB7XG4gICAgc2NlbmUubG9hZC5pbWFnZShQbGF5ZXIub2JqZWN0TmFtZSwgUGxheWVyLmFzc2V0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUpIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHsgeDogc2NlbmUuY2FtZXJhcy5tYWluLndpZHRoIC8gMywgeTogc2NlbmUuY2FtZXJhcy5tYWluLmhlaWdodCAqIDEgLyAyIH07XG4gICAgdGhpcy5wbGF5ZXIgPSBzY2VuZS5waHlzaWNzLmFkZC5zcHJpdGUobG9jYXRpb24ueCwgbG9jYXRpb24ueSwgUGxheWVyLm9iamVjdE5hbWUpO1xuICAgIHRoaXMucGxheWVyLnNldFNjYWxlKHRoaXMuc2NhbGUpO1xuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzLnBsYXllcik7XG4gICAgdGhpcy5wbGF5ZXIuYm9keS5zZXRTaXplKDE2MCwgMTYwKTtcbiAgICB0aGlzLnBsYXllci5ib2R5LnNldERyYWcoMTAwLCAxMDApO1xuICAgIHRoaXMuZW5kT2ZTY3JlZW5ZID0gc2NlbmUuY2FtZXJhcy5tYWluLmhlaWdodDtcbiAgfVxuXG4gIGlzRGVhZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIuYm9keS55ID4gdGhpcy5lbmRPZlNjcmVlblk7XG4gIH1cblxuICBhZGRDb2xsaWRlcihzY2VuZTogUGhhc2VyLlNjZW5lLCBwbGF0Zm9ybXM6IFBsYXRmb3JtW10pOiB2b2lkIHtcbiAgICBwbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgICBzY2VuZS5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgcGxhdGZvcm0uYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIG1vdmUoY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mZWV0T25Hcm91bmQgJiYgY3Vyc29yS2V5cy51cC5pc0Rvd24pIHtcbiAgICAgIHRoaXMucGxheWVyLmJvZHkuc2V0VmVsb2NpdHlZKC02NTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXllci5ib2R5LnNldFZlbG9jaXR5WSh0aGlzLnBsYXllci5ib2R5LnZlbG9jaXR5LnkgKyAxNSk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnNvcktleXMubGVmdC5pc0Rvd24pIHtcbiAgICAgIHRoaXMuZmFjZUxlZnQoKTtcbiAgICB9IGVsc2UgaWYgKGN1cnNvcktleXMucmlnaHQuaXNEb3duKSB7XG4gICAgICB0aGlzLmZhY2VSaWdodCgpO1xuICAgIH1cbiAgfVxuXG4gIGZhY2VMZWZ0KCkge1xuICAgIHRoaXMucGxheWVyLmZsaXBYID0gdHJ1ZTtcbiAgfVxuXG4gIGZhY2VSaWdodCgpIHtcbiAgICB0aGlzLnBsYXllci5mbGlwWCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZmVldE9uR3JvdW5kKCkge1xuICAgIHJldHVybiAhdGhpcy5wbGF5ZXIuYm9keS50b3VjaGluZy5ub25lICYmIHRoaXMucGxheWVyLmJvZHkudmVsb2NpdHkueSA9PT0gMDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL21vZGVscy9jb29yZGluYXRlLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFNjb3JlIHtcbiAgZGlzdGFuY2VUcmF2ZWxsZWQ6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBjaGVycmllczogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBuZXdIaXNjb3JlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgZGlzdGFuY2VGcm9tTGVmdEJvdHRvbUNvcm5lcjogQ29vcmRpbmF0ZSA9IHsgeDogNDAsIHk6IDgwIH07XG4gIHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gIHByaXZhdGUgc3R5bGU6IFBoYXNlci5UeXBlcy5HYW1lT2JqZWN0cy5UZXh0LlRleHRTdHlsZSA9IHtcbiAgICBmb250OiAnMjRweCBDb3VyaWVyJyxcbiAgICBzdHJva2U6ICcjMDAwJyxcbiAgICBzdHJva2VUaGlja25lc3M6IDIsXG4gIH07XG5cbiAgcHJpdmF0ZSBnZXQgc2NvcmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZVRyYXZlbGxlZCAvIDUgKyAxMDAgKiB0aGlzLmNoZXJyaWVzO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgcHJpdmF0ZSBoaXNjb3JlOiBudW1iZXIpIHtcbiAgICBjb25zdCBsb2NhdGlvbjogQ29vcmRpbmF0ZSA9IHtcbiAgICAgIHg6IHRoaXMuZGlzdGFuY2VGcm9tTGVmdEJvdHRvbUNvcm5lci54LFxuICAgICAgeTogc2NlbmUuY2FtZXJhcy5tYWluLmhlaWdodCAtIHRoaXMuZGlzdGFuY2VGcm9tTGVmdEJvdHRvbUNvcm5lci55XG4gICAgfTtcbiAgICB0aGlzLnRleHQgPSBzY2VuZS5hZGQudGV4dChsb2NhdGlvbi54LCBsb2NhdGlvbi55LCAnJywgdGhpcy5zdHlsZSkuc2V0T3JpZ2luKDApO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRleHQuZGVzdHJveSgpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dC5zZXRUZXh0KFtcbiAgICAgICdTY29yZTogICAnICsgdGhpcy5wYWRTY29yZSh0aGlzLnNjb3JlKSxcbiAgICAgICdIaXNjb3JlOiAnICsgdGhpcy5wYWRTY29yZSh0aGlzLmhpc2NvcmUpLFxuICAgIF0pO1xuICB9XG5cbiAgdXBkYXRlSGlzY29yZSgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmhpc2NvcmUgPCB0aGlzLnNjb3JlKSB7XG4gICAgICB0aGlzLmhpc2NvcmUgPSB0aGlzLnNjb3JlO1xuICAgICAgdGhpcy5uZXdIaXNjb3JlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5oaXNjb3JlO1xuICB9XG5cbiAgYWRkQ2hlcnJ5KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlcnJpZXMrKztcbiAgfVxuXG4gIGdhbWVPdmVyVGV4dCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdHYW1lIG92ZXInLFxuICAgICAgdGhpcy5uZXdIaXNjb3JlID8gJ05ldyBoaXNjb3JlIScgOiAnJyxcbiAgICAgICdTY29yZTogICAnICsgdGhpcy5wYWRTY29yZSh0aGlzLnNjb3JlKSxcbiAgICAgICdIaXNjb3JlOiAnICsgdGhpcy5wYWRTY29yZSh0aGlzLmhpc2NvcmUpLFxuICAgICAgJ1ByZXNzIHNwYWNlIHRvIHRyeSBhZ2Fpbi4nXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgcGFkU2NvcmUoc2NvcmU6IG51bWJlciwgcGFkZGluZyA9IDYpOiBzdHJpbmcge1xuICAgIHJldHVybiAobmV3IEFycmF5KHBhZGRpbmcgKyAxKS5qb2luKCcgJykgKyBzY29yZSkuc2xpY2UoLXBhZGRpbmcpO1xuICB9XG59IiwiaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlTG9naWMge1xuICBzdGF0aWMgcmFuZG9tQ29vcmRpbmF0ZXMoYW1vdW50LCBzdGFydDogQ29vcmRpbmF0ZSwgcGl0Y2gsIGZsdWN0dWF0aW9uKTogYW55W10ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzOiBDb29yZGluYXRlW10gPSBbe1xuICAgICAgeDogc3RhcnQueCxcbiAgICAgIHk6IHN0YXJ0LnlcbiAgICB9XTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYW1vdW50ICsgMTsgaW5kZXgrKykge1xuICAgICAgY29vcmRpbmF0ZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgIHg6IHN0YXJ0LnggKyBpbmRleCAqIChwaXRjaCArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wNSAqIHBpdGNoKSksXG4gICAgICAgICAgeTogc3RhcnQueSAtIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZsdWN0dWF0aW9uKVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IENoZXJyeSwgQ2xvdWQsIEZ1bGxTY3JlZW5UZXh0LCBQbGF0Zm9ybSwgUGxheWVyLCBTY29yZSB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb29yZGluYXRlTG9naWMgfSBmcm9tICcuL2xvZ2ljL2Nvb3JkaW5hdGUubG9naWMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0dhbWUnLFxufTtcblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XG4gIHByaXZhdGUgcGxhdGZvcm1zOiBQbGF0Zm9ybVtdID0gW107XG4gIHByaXZhdGUgY2hlcnJpZXM6IENoZXJyeVtdID0gW107XG4gIHByaXZhdGUgY2xvdWRzOiBDbG91ZFtdID0gW107XG4gIHByaXZhdGUgc2NvcmU6IFNjb3JlO1xuICBwcml2YXRlIGZ1bGxTY3JlZW5UZXh0OiBGdWxsU2NyZWVuVGV4dDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICBQbGF5ZXIucHJlbG9hZCh0aGlzKTtcbiAgICBQbGF0Zm9ybS5wcmVsb2FkKHRoaXMpO1xuICAgIENoZXJyeS5wcmVsb2FkKHRoaXMpO1xuICAgIENsb3VkLnByZWxvYWQodGhpcyk7XG4gICAgdGhpcy5kYXRhLnNldCgnaGlzY29yZScsIDApO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEJhY2tncm91bmQoKTtcbiAgICB0aGlzLmFkZFdvcmxkKCk7XG4gICAgdGhpcy5hZGRIVUQoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgIGlmICh0aGlzLmNoZWNrV2l0aGluQm91bmRzKCkpIHtcbiAgICAgIHRoaXMuc2NvcmUudXBkYXRlKCk7XG4gICAgICB0aGlzLm1vdmUoY3Vyc29yS2V5cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjdXJzb3JLZXlzLnNwYWNlLmlzRG93bikge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQmFja2dyb3VuZCgpOiB2b2lkIHtcbiAgICBjb25zdCBncmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKCk7XG4gICAgZ3JhcGhpY3MuZmlsbEdyYWRpZW50U3R5bGUoMHg0MTY5RTEsIDB4NDE2OUUxLCAweDg3Q0VFQiwgMHg4N0NFRUIpO1xuICAgIGdyYXBoaWNzLmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FtZXJhcy5tYWluLndpZHRoLCB0aGlzLmNhbWVyYXMubWFpbi53aWR0aCk7XG5cbiAgICBDb29yZGluYXRlTG9naWMucmFuZG9tQ29vcmRpbmF0ZXMoMzAsIHsgeDogMTAwLCB5OiAyMDAgfSwgMzUwLCAyMDApXG4gICAgICAuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgdGhpcy5jbG91ZHMucHVzaChuZXcgQ2xvdWQodGhpcywgY29vcmRpbmF0ZSkpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFdvcmxkKCk6IHZvaWQge1xuICAgIGNvbnN0IHBsYXRmb3JtQ29vcmRpbmF0ZXMgPSBDb29yZGluYXRlTG9naWMucmFuZG9tQ29vcmRpbmF0ZXMoMTAwLCB7IHg6IDQwMCwgeTogNjAwIH0sIDI1MCwgMzAwKTtcblxuICAgIHBsYXRmb3JtQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMucGxhdGZvcm1zLnB1c2gobmV3IFBsYXRmb3JtKHRoaXMsIGNvb3JkaW5hdGUsIGluZGV4ID09PSAwKSk7XG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMykge1xuICAgICAgICB0aGlzLmNoZXJyaWVzLnB1c2gobmV3IENoZXJyeSh0aGlzLCBjb29yZGluYXRlKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XG4gICAgdGhpcy5wbGF5ZXIuYWRkQ29sbGlkZXIodGhpcywgdGhpcy5wbGF0Zm9ybXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRIVUQoKTogdm9pZCB7XG4gICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSh0aGlzLCB0aGlzLmRhdGEuZ2V0KCdoaXNjb3JlJykpO1xuICAgIHRoaXMuZnVsbFNjcmVlblRleHQgPSBuZXcgRnVsbFNjcmVlblRleHQodGhpcyk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgW1xuICAgICAgdGhpcy5wbGF5ZXIsXG4gICAgICAuLi50aGlzLnBsYXRmb3JtcyxcbiAgICAgIC4uLnRoaXMuY2hlcnJpZXMsXG4gICAgICAuLi50aGlzLmNsb3VkcyxcbiAgICAgIHRoaXMuZnVsbFNjcmVlblRleHQsXG4gICAgICB0aGlzLnNjb3JlXG4gICAgXS5mb3JFYWNoKChjOiBDb21wb25lbnQpID0+IGMuZGVzdHJveSgpKTtcblxuICAgIHRoaXMucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5jbG91ZHMgPSBbXTtcbiAgICB0aGlzLmNoZXJyaWVzID0gW107XG4gIH1cblxuICBwcml2YXRlIG1vdmUoY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXMpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5tb3ZlKGN1cnNvcktleXMpO1xuXG4gICAgdGhpcy5jaGVycmllcy5mb3JFYWNoKGNoZXJyeSA9PiB7XG4gICAgICBpZiAoY2hlcnJ5LndpdGhpbkVhdGluZ0Rpc3RhbmNlKHRoaXMucGxheWVyLmxvY2F0aW9uKSkge1xuICAgICAgICBjaGVycnkucmVtb3ZlRnJvbVNjcmVlbigpO1xuICAgICAgICB0aGlzLnNjb3JlLmFkZENoZXJyeSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGNoYW5nZVggPSAwO1xuICAgIGNvbnN0IGNoYW5nZVkgPSA2ICogTWF0aC5zaW4oMC4wMDQgKiAodGhpcy50aW1lLm5vdykpO1xuICAgIGlmIChjdXJzb3JLZXlzLnJpZ2h0LmlzRG93bikge1xuICAgICAgY2hhbmdlWCA9IC0xO1xuICAgIH0gZWxzZSBpZiAoY3Vyc29yS2V5cy5sZWZ0LmlzRG93bikge1xuICAgICAgY2hhbmdlWCA9IDE7XG4gICAgfVxuXG4gICAgdGhpcy5wbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgICBwbGF0Zm9ybS5tb3ZlKHsgeDogY2hhbmdlWCwgeTogY2hhbmdlWSB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hlcnJpZXMuZm9yRWFjaChjaGVycnkgPT4ge1xuICAgICAgY2hlcnJ5Lm1vdmUoeyB4OiBjaGFuZ2VYLCB5OiAwIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jbG91ZHMuZm9yRWFjaChjbG91ZCA9PiB7XG4gICAgICBjbG91ZC5tb3ZlKHsgeDogY2hhbmdlWCwgeTogMCB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2NvcmUuZGlzdGFuY2VUcmF2ZWxsZWQgLT0gNSAqIGNoYW5nZVg7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrV2l0aGluQm91bmRzKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnBsYXllci5pc0RlYWQoKSkge1xuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnYW1lT3ZlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNjb3JlLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRhdGEuc2V0KCdoaXNjb3JlJywgdGhpcy5zY29yZS51cGRhdGVIaXNjb3JlKCkpO1xuICAgIHRoaXMuZnVsbFNjcmVlblRleHQudXBkYXRlKHRoaXMuc2NvcmUuZ2FtZU92ZXJUZXh0KCkpO1xuICB9XG59XG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnSnVtcCEnLFxuICBzY2VuZTogR2FtZVNjZW5lLFxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgfSxcbiAgfSxcblxuICBwYXJlbnQ6ICdnYW1lJyxcbn07XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==