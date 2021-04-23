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
        this.cloud = scene.add.sprite(location.x, location.y, Cloud.objectName);
        this.scale = 0.4 + Math.random();
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
        var location = this.screenCenter(scene);
        this.text = scene.add.text(location.x, location.y, '', { font: '48px Courier', align: 'center' }).setOrigin(0.5);
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
        var location = {
            x: this.distanceFromLeftBottomCorner.x,
            y: scene.cameras.main.height - this.distanceFromLeftBottomCorner.y
        };
        this.text = scene.add.text(location.x, location.y, '', { font: '24px Courier' }).setOrigin(0);
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
        return _super.call(this, sceneConfig) || this;
    }
    GameScene.prototype.preload = function () {
        components_1.Player.preload(this);
        components_1.Platform.preload(this);
        components_1.Cherry.preload(this);
        components_1.Cloud.preload(this);
        this.data.set('hiscore', 0);
    };
    GameScene.prototype.create = function () {
        this.platforms = [];
        this.clouds = [];
        this.cherries = [];
        this.addBackground();
        this.createWorld();
        this.components = __spreadArrays([
            this.player
        ], this.platforms, this.cherries, this.clouds, [
            this.fullScreenText,
            this.score
        ]);
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
        this.score = new components_1.Score(this, this.data.get('hiscore'));
        this.fullScreenText = new components_1.FullScreenText(this);
    };
    GameScene.prototype.createWorld = function () {
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
    GameScene.prototype.destroy = function () {
        this.components.forEach(function (c) { return c.destroy(); });
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
    backgroundColor: '#87CEEB',
};
exports.game = new Phaser.Game(gameConfig);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hlcnJ5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jbG91ZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZnVsbC1zY3JlZW4tdGV4dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxhdGZvcm0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BsYXllci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2NvcmUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dpYy9jb29yZGluYXRlLmxvZ2ljLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QUNoQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sNEJBQVEsR0FBaEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQ0FuSThCLE1BQU0sQ0FBQyxLQUFLLEdBbUkxQztBQW5JWSw4QkFBUztBQXFJdEIsSUFBTSxVQUFVLEdBQWlDO0lBQy9DLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLFNBQVM7SUFDaEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBRWpCLEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVTtRQUN4QixNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVc7S0FDM0I7SUFFRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsUUFBUTtRQUNqQixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsS0FBSztTQUNiO0tBQ0Y7SUFFRCxNQUFNLEVBQUUsTUFBTTtJQUNkLGVBQWUsRUFBRSxTQUFTO0NBQzNCLENBQUM7QUFFVyxZQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBDaGVycnkgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBzdGF0aWMgb2JqZWN0TmFtZTogc3RyaW5nID0gJ2NoZXJyeSc7XG4gIHN0YXRpYyBhc3NldDogc3RyaW5nID0gJy4vYXNzZXRzL2NoZXJyeS5wbmcnO1xuXG4gIHByaXZhdGUgY2hlcnJ5OiBQaGFzZXIuVHlwZXMuUGh5c2ljcy5BcmNhZGUuU3ByaXRlV2l0aFN0YXRpY0JvZHk7XG4gIHByaXZhdGUgc2NhbGU6IG51bWJlciA9IDAuNTtcbiAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gNTtcbiAgcHJpdmF0ZSBoZWlnaHRBYm92ZVBsYXRmb3JtOiBudW1iZXIgPSA4MDtcbiAgcHJpdmF0ZSBlYXRpbmdEaXN0YW5jZTogbnVtYmVyID0gNDA7XG5cbiAgc3RhdGljIHByZWxvYWQoc2NlbmU6IFBoYXNlci5TY2VuZSk6IHZvaWQge1xuICAgIHNjZW5lLmxvYWQuaW1hZ2UoQ2hlcnJ5Lm9iamVjdE5hbWUsIENoZXJyeS5hc3NldCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBsb2NhdGlvbjogQ29vcmRpbmF0ZSkge1xuICAgIHRoaXMuY2hlcnJ5ID0gc2NlbmUucGh5c2ljcy5hZGQuc3RhdGljU3ByaXRlKGxvY2F0aW9uLngsIGxvY2F0aW9uLnkgLSB0aGlzLmhlaWdodEFib3ZlUGxhdGZvcm0sIENoZXJyeS5vYmplY3ROYW1lKTtcbiAgICB0aGlzLmNoZXJyeS5zZXRTY2FsZSh0aGlzLnNjYWxlKTtcbiAgICB0aGlzLmNoZXJyeS5ib2R5LnNldFNpemUodGhpcy5zY2FsZSAqIHRoaXMuY2hlcnJ5LndpZHRoLCB0aGlzLnNjYWxlICogdGhpcy5jaGVycnkuaGVpZ2h0KTtcbiAgICB0aGlzLmNoZXJyeS5ib2R5LnggPSBsb2NhdGlvbi54IC0gdGhpcy5zY2FsZSAvIDIgKiB0aGlzLmNoZXJyeS53aWR0aDtcbiAgICB0aGlzLmNoZXJyeS5ib2R5LnkgPSBsb2NhdGlvbi55IC0gdGhpcy5zY2FsZSAvIDIgKiB0aGlzLmNoZXJyeS5oZWlnaHQgLSB0aGlzLmhlaWdodEFib3ZlUGxhdGZvcm07XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlcnJ5LmRlc3Ryb3koKTtcbiAgfVxuXG4gIG1vdmUoZGVsdGE6IENvb3JkaW5hdGUpOiB2b2lkIHtcbiAgICBjb25zdCBkWCA9IHRoaXMuc3BlZWQgKiBkZWx0YS54O1xuICAgIGNvbnN0IGRZID0gZGVsdGEueTtcbiAgICB0aGlzLmNoZXJyeS5zZXRYKHRoaXMuY2hlcnJ5LnggKyBkWCk7XG4gICAgdGhpcy5jaGVycnkuc2V0WSh0aGlzLmNoZXJyeS55ICsgZFkpO1xuICAgIHRoaXMuY2hlcnJ5LmJvZHkucG9zaXRpb24uc2V0KHRoaXMuY2hlcnJ5LmJvZHkucG9zaXRpb24ueCArIGRYLCB0aGlzLmNoZXJyeS5ib2R5LnBvc2l0aW9uLnkgKyBkWSk7XG4gIH1cblxuICByZW1vdmVGcm9tU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlcnJ5LnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmNoZXJyeS5ib2R5LnBvc2l0aW9uLnNldCh0aGlzLmNoZXJyeS5ib2R5LnBvc2l0aW9uLnksIC0xMDAwKTtcbiAgfVxuXG4gIHdpdGhpbkVhdGluZ0Rpc3RhbmNlKHBsYXllckxvY2F0aW9uOiBDb29yZGluYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuY2hlcnJ5LmJvZHkueCAtIHBsYXllckxvY2F0aW9uLngpIDwgdGhpcy5lYXRpbmdEaXN0YW5jZSAmJlxuICAgICAgICAgICBNYXRoLmFicyh0aGlzLmNoZXJyeS5ib2R5LnkgLSBwbGF5ZXJMb2NhdGlvbi55KSA8IHRoaXMuZWF0aW5nRGlzdGFuY2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZCBpbXBsZW1lbnRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBvYmplY3ROYW1lOiBzdHJpbmcgPSAnY2xvdWQnO1xuICBzdGF0aWMgYXNzZXQ6IHN0cmluZyA9ICcuL2Fzc2V0cy9jbG91ZC5wbmcnO1xuXG4gIHByaXZhdGUgc2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBjbG91ZDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcblxuICBzdGF0aWMgcHJlbG9hZChzY2VuZTogUGhhc2VyLlNjZW5lKSB7XG4gICAgc2NlbmUubG9hZC5pbWFnZShDbG91ZC5vYmplY3ROYW1lLCBDbG91ZC5hc3NldCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBsb2NhdGlvbjogQ29vcmRpbmF0ZSkge1xuICAgIHRoaXMuY2xvdWQgPSBzY2VuZS5hZGQuc3ByaXRlKGxvY2F0aW9uLngsIGxvY2F0aW9uLnksIENsb3VkLm9iamVjdE5hbWUpO1xuICAgIHRoaXMuc2NhbGUgPSAwLjQgKyBNYXRoLnJhbmRvbSgpO1xuICAgIHRoaXMuY2xvdWQuc2V0U2NhbGUodGhpcy5zY2FsZSk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvdWQuZGVzdHJveSgpO1xuICB9XG5cbiAgbW92ZShkZWx0YTogQ29vcmRpbmF0ZSkge1xuICAgIHRoaXMuY2xvdWQuc2V0WCh0aGlzLmNsb3VkLnggKyBkZWx0YS54KTtcbiAgICB0aGlzLmNsb3VkLnNldFkodGhpcy5jbG91ZC55ICsgZGVsdGEueSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9tb2RlbHMvY29vcmRpbmF0ZS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBGdWxsU2NyZWVuVGV4dCB7XG4gIHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5zY3JlZW5DZW50ZXIoc2NlbmUpO1xuICAgIHRoaXMudGV4dCA9IHNjZW5lLmFkZC50ZXh0KGxvY2F0aW9uLngsIGxvY2F0aW9uLnksICcnLCB7IGZvbnQ6ICc0OHB4IENvdXJpZXInLCBhbGlnbjogJ2NlbnRlcicgfSkuc2V0T3JpZ2luKDAuNSk7XG4gIH1cblxuICB1cGRhdGUobmV3VGV4dDogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnRleHQuc2V0VGV4dChuZXdUZXh0KTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50ZXh0LmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgc2NyZWVuQ2VudGVyKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBDb29yZGluYXRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogc2NlbmUuY2FtZXJhcy5tYWluLndvcmxkVmlldy54ICsgc2NlbmUuY2FtZXJhcy5tYWluLndpZHRoIC8gMixcbiAgICAgIHk6IHNjZW5lLmNhbWVyYXMubWFpbi53b3JsZFZpZXcueSArIHNjZW5lLmNhbWVyYXMubWFpbi5oZWlnaHQgLyAyXG4gICAgfTtcbiAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlcnJ5LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Nsb3VkLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Z1bGwtc2NyZWVuLXRleHQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGxhdGZvcm0uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGxheWVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Njb3JlLmNvbXBvbmVudCc7IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb29yZGluYXRlIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG9iamVjdE5hbWU6IHN0cmluZyA9ICdwbGF0Zm9ybSc7XG4gIHN0YXRpYyBhc3NldDogc3RyaW5nID0gJy4vYXNzZXRzL3BsYXRmb3JtLnBuZyc7XG5cbiAgcHJpdmF0ZSBfcGxhdGZvcm06IFBoYXNlci5UeXBlcy5QaHlzaWNzLkFyY2FkZS5TcHJpdGVXaXRoU3RhdGljQm9keTtcbiAgcHJpdmF0ZSBzY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSA1O1xuICBwcml2YXRlIF9pc01vdmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBnZXQgYm9keSgpOiBQaGFzZXIuVHlwZXMuUGh5c2ljcy5BcmNhZGUuU3ByaXRlV2l0aFN0YXRpY0JvZHkge1xuICAgIHJldHVybiB0aGlzLl9wbGF0Zm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBwcmVsb2FkKHNjZW5lOiBQaGFzZXIuU2NlbmUpIHtcbiAgICBzY2VuZS5sb2FkLmltYWdlKFBsYXRmb3JtLm9iamVjdE5hbWUsIFBsYXRmb3JtLmFzc2V0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGxvY2F0aW9uOiBDb29yZGluYXRlLCBmaXJzdFBsYXRmb3JtPzogYm9vbGVhbikge1xuICAgIHRoaXMuX3BsYXRmb3JtID0gc2NlbmUucGh5c2ljcy5hZGQuc3RhdGljU3ByaXRlKGxvY2F0aW9uLngsIGxvY2F0aW9uLnksIFBsYXRmb3JtLm9iamVjdE5hbWUpO1xuICAgIHRoaXMuc2NhbGUgPSAwLjMgKyAwLjMgKiBNYXRoLnJhbmRvbSgpO1xuICAgIHRoaXMucmVzaXplKGxvY2F0aW9uKTtcbiAgICB0aGlzLl9wbGF0Zm9ybS5ib2R5LmNoZWNrQ29sbGlzaW9uLmRvd24gPSBmYWxzZTtcbiAgICB0aGlzLl9wbGF0Zm9ybS5ib2R5LmNoZWNrQ29sbGlzaW9uLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5fcGxhdGZvcm0uYm9keS5jaGVja0NvbGxpc2lvbi5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5faXNNb3ZpbmcgPSBmaXJzdFBsYXRmb3JtID8gZmFsc2UgOiBNYXRoLnJhbmRvbSgpID4gMC44O1xuICB9XG5cbiAgbW92ZShkZWx0YTogQ29vcmRpbmF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IGRYID0gdGhpcy5zcGVlZCAqIGRlbHRhLng7XG4gICAgY29uc3QgZFkgPSB0aGlzLl9pc01vdmluZyA/IGRlbHRhLnkgOiAwO1xuICAgIHRoaXMuX3BsYXRmb3JtLnNldFgodGhpcy5fcGxhdGZvcm0ueCArIGRYKTtcbiAgICB0aGlzLl9wbGF0Zm9ybS5zZXRZKHRoaXMuX3BsYXRmb3JtLnkgKyBkWSk7XG4gICAgdGhpcy5fcGxhdGZvcm0uYm9keS5wb3NpdGlvbi5zZXQodGhpcy5fcGxhdGZvcm0uYm9keS5wb3NpdGlvbi54ICsgZFgsIHRoaXMuX3BsYXRmb3JtLmJvZHkucG9zaXRpb24ueSArIGRZKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcGxhdGZvcm0uZGVzdHJveSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpemUob3JpZ2luYWxMb2NhdGlvbjogQ29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHNjYWxlZFdpZHRoID0gTWF0aC5mbG9vcih0aGlzLnNjYWxlICogdGhpcy5fcGxhdGZvcm0ud2lkdGgpO1xuICAgIGNvbnN0IHNjYWxlZEhlaWdodCA9IE1hdGguZmxvb3IodGhpcy5zY2FsZSAqIHRoaXMuX3BsYXRmb3JtLmhlaWdodCk7XG4gICAgdGhpcy5fcGxhdGZvcm0uc2V0U2NhbGUodGhpcy5zY2FsZSk7XG4gICAgdGhpcy5fcGxhdGZvcm0uYm9keS5zZXRTaXplKHNjYWxlZFdpZHRoLCBzY2FsZWRIZWlnaHQpO1xuICAgIHRoaXMuX3BsYXRmb3JtLmJvZHkueCA9IG9yaWdpbmFsTG9jYXRpb24ueCAtIDAuNSAqIHNjYWxlZFdpZHRoO1xuICAgIHRoaXMuX3BsYXRmb3JtLmJvZHkueSA9IG9yaWdpbmFsTG9jYXRpb24ueSAtIDAuNSAqIHNjYWxlZEhlaWdodDtcbiAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4vcGxhdGZvcm0uY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFBsYXllciBpbXBsZW1lbnRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBvYmplY3ROYW1lOiBzdHJpbmcgPSAnZnJvZyc7XG4gIHN0YXRpYyBhc3NldDogc3RyaW5nID0gJy4vYXNzZXRzL2Zyb2cucG5nJztcbiAgcmVhZG9ubHkgc2NhbGU6IG51bWJlciA9IDAuMztcblxuICBwcml2YXRlIHBsYXllcjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSAmIHsgYm9keTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHkgfTtcbiAgcHJpdmF0ZSBlbmRPZlNjcmVlblk6IG51bWJlcjtcblxuICBwdWJsaWMgZ2V0IGxvY2F0aW9uKCk6IENvb3JkaW5hdGUge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLnBsYXllci5ib2R5LngsXG4gICAgICB5OiB0aGlzLnBsYXllci5ib2R5LnlcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByZWxvYWQoc2NlbmU6IFBoYXNlci5TY2VuZSkge1xuICAgIHNjZW5lLmxvYWQuaW1hZ2UoUGxheWVyLm9iamVjdE5hbWUsIFBsYXllci5hc3NldCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB7IHg6IHNjZW5lLmNhbWVyYXMubWFpbi53aWR0aCAvIDMsIHk6IHNjZW5lLmNhbWVyYXMubWFpbi5oZWlnaHQgKiAxIC8gMiB9O1xuICAgIHRoaXMucGxheWVyID0gc2NlbmUucGh5c2ljcy5hZGQuc3ByaXRlKGxvY2F0aW9uLngsIGxvY2F0aW9uLnksIFBsYXllci5vYmplY3ROYW1lKTtcbiAgICB0aGlzLnBsYXllci5zZXRTY2FsZSh0aGlzLnNjYWxlKTtcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcy5wbGF5ZXIpO1xuICAgIHRoaXMucGxheWVyLmJvZHkuc2V0U2l6ZSgxNjAsIDE2MCk7XG4gICAgdGhpcy5wbGF5ZXIuYm9keS5zZXREcmFnKDEwMCwgMTAwKTtcbiAgICB0aGlzLmVuZE9mU2NyZWVuWSA9IHNjZW5lLmNhbWVyYXMubWFpbi5oZWlnaHQ7XG4gIH1cblxuICBpc0RlYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyLmJvZHkueSA+IHRoaXMuZW5kT2ZTY3JlZW5ZO1xuICB9XG5cbiAgYWRkQ29sbGlkZXIoc2NlbmU6IFBoYXNlci5TY2VuZSwgcGxhdGZvcm1zOiBQbGF0Zm9ybVtdKTogdm9pZCB7XG4gICAgcGxhdGZvcm1zLmZvckVhY2gocGxhdGZvcm0gPT4ge1xuICAgICAgc2NlbmUucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHBsYXRmb3JtLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5kZXN0cm95KCk7XG4gIH1cblxuICBtb3ZlKGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmVldE9uR3JvdW5kICYmIGN1cnNvcktleXMudXAuaXNEb3duKSB7XG4gICAgICB0aGlzLnBsYXllci5ib2R5LnNldFZlbG9jaXR5WSgtNjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5ZXIuYm9keS5zZXRWZWxvY2l0eVkodGhpcy5wbGF5ZXIuYm9keS52ZWxvY2l0eS55ICsgMTUpO1xuICAgIH1cblxuICAgIGlmIChjdXJzb3JLZXlzLmxlZnQuaXNEb3duKSB7XG4gICAgICB0aGlzLmZhY2VMZWZ0KCk7XG4gICAgfSBlbHNlIGlmIChjdXJzb3JLZXlzLnJpZ2h0LmlzRG93bikge1xuICAgICAgdGhpcy5mYWNlUmlnaHQoKTtcbiAgICB9XG4gIH1cblxuICBmYWNlTGVmdCgpIHtcbiAgICB0aGlzLnBsYXllci5mbGlwWCA9IHRydWU7XG4gIH1cblxuICBmYWNlUmlnaHQoKSB7XG4gICAgdGhpcy5wbGF5ZXIuZmxpcFggPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGZlZXRPbkdyb3VuZCgpIHtcbiAgICByZXR1cm4gIXRoaXMucGxheWVyLmJvZHkudG91Y2hpbmcubm9uZSAmJiB0aGlzLnBsYXllci5ib2R5LnZlbG9jaXR5LnkgPT09IDA7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9tb2RlbHMvY29vcmRpbmF0ZS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBTY29yZSB7XG4gIGRpc3RhbmNlVHJhdmVsbGVkOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgY2hlcnJpZXM6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgbmV3SGlzY29yZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGRpc3RhbmNlRnJvbUxlZnRCb3R0b21Db3JuZXI6IENvb3JkaW5hdGUgPSB7IHg6IDQwLCB5OiA4MCB9O1xuICBwcml2YXRlIHRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuXG4gIHByaXZhdGUgZ2V0IHNjb3JlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2VUcmF2ZWxsZWQgLyA1ICsgMTAwICogdGhpcy5jaGVycmllcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHByaXZhdGUgaGlzY29yZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbG9jYXRpb246IENvb3JkaW5hdGUgPSB7XG4gICAgICB4OiB0aGlzLmRpc3RhbmNlRnJvbUxlZnRCb3R0b21Db3JuZXIueCxcbiAgICAgIHk6IHNjZW5lLmNhbWVyYXMubWFpbi5oZWlnaHQgLSB0aGlzLmRpc3RhbmNlRnJvbUxlZnRCb3R0b21Db3JuZXIueVxuICAgIH07XG4gICAgdGhpcy50ZXh0ID0gc2NlbmUuYWRkLnRleHQobG9jYXRpb24ueCwgbG9jYXRpb24ueSwgJycsIHsgZm9udDogJzI0cHggQ291cmllcicgfSkuc2V0T3JpZ2luKDApO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRleHQuZGVzdHJveSgpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dC5zZXRUZXh0KFtcbiAgICAgICdTY29yZTogICAnICsgdGhpcy5wYWRTY29yZSh0aGlzLnNjb3JlKSxcbiAgICAgICdIaXNjb3JlOiAnICsgdGhpcy5wYWRTY29yZSh0aGlzLmhpc2NvcmUpLFxuICAgIF0pO1xuICB9XG5cbiAgdXBkYXRlSGlzY29yZSgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmhpc2NvcmUgPCB0aGlzLnNjb3JlKSB7XG4gICAgICB0aGlzLmhpc2NvcmUgPSB0aGlzLnNjb3JlO1xuICAgICAgdGhpcy5uZXdIaXNjb3JlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5oaXNjb3JlO1xuICB9XG5cbiAgYWRkQ2hlcnJ5KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlcnJpZXMrKztcbiAgfVxuXG4gIGdhbWVPdmVyVGV4dCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdHYW1lIG92ZXInLFxuICAgICAgdGhpcy5uZXdIaXNjb3JlID8gJ05ldyBoaXNjb3JlIScgOiAnJyxcbiAgICAgICdTY29yZTogICAnICsgdGhpcy5wYWRTY29yZSh0aGlzLnNjb3JlKSxcbiAgICAgICdIaXNjb3JlOiAnICsgdGhpcy5wYWRTY29yZSh0aGlzLmhpc2NvcmUpLFxuICAgICAgJ1ByZXNzIHNwYWNlIHRvIHRyeSBhZ2Fpbi4nXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgcGFkU2NvcmUoc2NvcmU6IG51bWJlciwgcGFkZGluZyA9IDYpOiBzdHJpbmcge1xuICAgIHJldHVybiAobmV3IEFycmF5KHBhZGRpbmcgKyAxKS5qb2luKCcgJykgKyBzY29yZSkuc2xpY2UoLXBhZGRpbmcpO1xuICB9XG59IiwiaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlTG9naWMge1xuICBzdGF0aWMgcmFuZG9tQ29vcmRpbmF0ZXMoYW1vdW50LCBzdGFydDogQ29vcmRpbmF0ZSwgcGl0Y2gsIGZsdWN0dWF0aW9uKTogYW55W10ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzOiBDb29yZGluYXRlW10gPSBbe1xuICAgICAgeDogc3RhcnQueCxcbiAgICAgIHk6IHN0YXJ0LnlcbiAgICB9XTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYW1vdW50ICsgMTsgaW5kZXgrKykge1xuICAgICAgY29vcmRpbmF0ZXMucHVzaChcbiAgICAgICAge1xuICAgICAgICAgIHg6IHN0YXJ0LnggKyBpbmRleCAqIChwaXRjaCArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wNSAqIHBpdGNoKSksXG4gICAgICAgICAgeTogc3RhcnQueSAtIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZsdWN0dWF0aW9uKVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IENoZXJyeSwgQ2xvdWQsIEZ1bGxTY3JlZW5UZXh0LCBQbGF0Zm9ybSwgUGxheWVyLCBTY29yZSB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb29yZGluYXRlTG9naWMgfSBmcm9tICcuL2xvZ2ljL2Nvb3JkaW5hdGUubG9naWMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0dhbWUnLFxufTtcblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XG4gIHByaXZhdGUgcGxhdGZvcm1zOiBQbGF0Zm9ybVtdO1xuICBwcml2YXRlIGNoZXJyaWVzOiBDaGVycnlbXTtcbiAgcHJpdmF0ZSBjbG91ZHM6IENsb3VkW107XG4gIHByaXZhdGUgc2NvcmU6IFNjb3JlO1xuICBwcml2YXRlIGZ1bGxTY3JlZW5UZXh0OiBGdWxsU2NyZWVuVGV4dDtcbiAgcHJpdmF0ZSBjb21wb25lbnRzOiBDb21wb25lbnRbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICBQbGF5ZXIucHJlbG9hZCh0aGlzKTtcbiAgICBQbGF0Zm9ybS5wcmVsb2FkKHRoaXMpO1xuICAgIENoZXJyeS5wcmVsb2FkKHRoaXMpO1xuICAgIENsb3VkLnByZWxvYWQodGhpcyk7XG4gICAgdGhpcy5kYXRhLnNldCgnaGlzY29yZScsIDApO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMuY2xvdWRzID0gW107XG4gICAgdGhpcy5jaGVycmllcyA9IFtdO1xuXG4gICAgdGhpcy5hZGRCYWNrZ3JvdW5kKCk7XG4gICAgdGhpcy5jcmVhdGVXb3JsZCgpO1xuXG4gICAgdGhpcy5jb21wb25lbnRzID0gW1xuICAgICAgdGhpcy5wbGF5ZXIsXG4gICAgICAuLi50aGlzLnBsYXRmb3JtcyxcbiAgICAgIC4uLnRoaXMuY2hlcnJpZXMsXG4gICAgICAuLi50aGlzLmNsb3VkcyxcbiAgICAgIHRoaXMuZnVsbFNjcmVlblRleHQsXG4gICAgICB0aGlzLnNjb3JlXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgIGlmICh0aGlzLmNoZWNrV2l0aGluQm91bmRzKCkpIHtcbiAgICAgIHRoaXMuc2NvcmUudXBkYXRlKCk7XG4gICAgICB0aGlzLm1vdmUoY3Vyc29yS2V5cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjdXJzb3JLZXlzLnNwYWNlLmlzRG93bikge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQmFja2dyb3VuZCgpOiB2b2lkIHtcbiAgICBjb25zdCBncmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKCk7XG4gICAgZ3JhcGhpY3MuZmlsbEdyYWRpZW50U3R5bGUoMHg0MTY5RTEsIDB4NDE2OUUxLCAweDg3Q0VFQiwgMHg4N0NFRUIpO1xuICAgIGdyYXBoaWNzLmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FtZXJhcy5tYWluLndpZHRoLCB0aGlzLmNhbWVyYXMubWFpbi53aWR0aCk7XG5cbiAgICBDb29yZGluYXRlTG9naWMucmFuZG9tQ29vcmRpbmF0ZXMoMzAsIHsgeDogMTAwLCB5OiAyMDAgfSwgMzUwLCAyMDApXG4gICAgICAuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgdGhpcy5jbG91ZHMucHVzaChuZXcgQ2xvdWQodGhpcywgY29vcmRpbmF0ZSkpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnNjb3JlID0gbmV3IFNjb3JlKHRoaXMsIHRoaXMuZGF0YS5nZXQoJ2hpc2NvcmUnKSk7XG4gICAgdGhpcy5mdWxsU2NyZWVuVGV4dCA9IG5ldyBGdWxsU2NyZWVuVGV4dCh0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlV29ybGQoKTogdm9pZCB7XG4gICAgY29uc3QgcGxhdGZvcm1Db29yZGluYXRlcyA9IENvb3JkaW5hdGVMb2dpYy5yYW5kb21Db29yZGluYXRlcygxMDAsIHsgeDogNDAwLCB5OiA2MDAgfSwgMjUwLCAzMDApO1xuXG4gICAgcGxhdGZvcm1Db29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5wbGF0Zm9ybXMucHVzaChuZXcgUGxhdGZvcm0odGhpcywgY29vcmRpbmF0ZSwgaW5kZXggPT09IDApKTtcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4zKSB7XG4gICAgICAgIHRoaXMuY2hlcnJpZXMucHVzaChuZXcgQ2hlcnJ5KHRoaXMsIGNvb3JkaW5hdGUpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcbiAgICB0aGlzLnBsYXllci5hZGRDb2xsaWRlcih0aGlzLCB0aGlzLnBsYXRmb3Jtcyk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goYyA9PiBjLmRlc3Ryb3koKSk7XG4gIH1cblxuICBwcml2YXRlIG1vdmUoY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXMpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5tb3ZlKGN1cnNvcktleXMpO1xuXG4gICAgdGhpcy5jaGVycmllcy5mb3JFYWNoKGNoZXJyeSA9PiB7XG4gICAgICBpZiAoY2hlcnJ5LndpdGhpbkVhdGluZ0Rpc3RhbmNlKHRoaXMucGxheWVyLmxvY2F0aW9uKSkge1xuICAgICAgICBjaGVycnkucmVtb3ZlRnJvbVNjcmVlbigpO1xuICAgICAgICB0aGlzLnNjb3JlLmFkZENoZXJyeSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGNoYW5nZVggPSAwO1xuICAgIGNvbnN0IGNoYW5nZVkgPSA2ICogTWF0aC5zaW4oMC4wMDQgKiAodGhpcy50aW1lLm5vdykpO1xuICAgIGlmIChjdXJzb3JLZXlzLnJpZ2h0LmlzRG93bikge1xuICAgICAgY2hhbmdlWCA9IC0xO1xuICAgIH0gZWxzZSBpZiAoY3Vyc29yS2V5cy5sZWZ0LmlzRG93bikge1xuICAgICAgY2hhbmdlWCA9IDE7XG4gICAgfVxuXG4gICAgdGhpcy5wbGF0Zm9ybXMuZm9yRWFjaChwbGF0Zm9ybSA9PiB7XG4gICAgICBwbGF0Zm9ybS5tb3ZlKHsgeDogY2hhbmdlWCwgeTogY2hhbmdlWSB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hlcnJpZXMuZm9yRWFjaChjaGVycnkgPT4ge1xuICAgICAgY2hlcnJ5Lm1vdmUoeyB4OiBjaGFuZ2VYLCB5OiAwIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jbG91ZHMuZm9yRWFjaChjbG91ZCA9PiB7XG4gICAgICBjbG91ZC5tb3ZlKHsgeDogY2hhbmdlWCwgeTogMCB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2NvcmUuZGlzdGFuY2VUcmF2ZWxsZWQgLT0gNSAqIGNoYW5nZVg7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrV2l0aGluQm91bmRzKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnBsYXllci5pc0RlYWQoKSkge1xuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnYW1lT3ZlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNjb3JlLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRhdGEuc2V0KCdoaXNjb3JlJywgdGhpcy5zY29yZS51cGRhdGVIaXNjb3JlKCkpO1xuICAgIHRoaXMuZnVsbFNjcmVlblRleHQudXBkYXRlKHRoaXMuc2NvcmUuZ2FtZU92ZXJUZXh0KCkpO1xuICB9XG59XG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnSnVtcCEnLFxuICBzY2VuZTogR2FtZVNjZW5lLFxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgfSxcbiAgfSxcblxuICBwYXJlbnQ6ICdnYW1lJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzg3Q0VFQicsXG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=