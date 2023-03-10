// here begin src/unit.js
(function () {
  var _color,
    _offset,
    _pipPos,
    _vel,
    _where,
    legacyParts,
    bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    },
    extend = function (child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    hasProp = {}.hasOwnProperty;

  window.thumb_cache = {};

  window.turnAngle = function (a, b, speed) {
    var turn;
    speed = speed;
    turn = b - a;
    if (turn > Math.PI) {
      a += 2 * Math.PI;
    } else if (turn < -Math.PI) {
      a -= 2 * Math.PI;
    }
    turn = b - a;
    if (turn < speed && turn > -speed) {
      return b;
    }
    if (turn > speed) {
      turn = speed;
    }
    if (turn < -speed) {
      turn = -speed;
    }
    return a + turn;
  };

  window.angleBetween = function (a, b) {
    var turn;
    turn = b - a;
    while (turn > Math.PI) {
      turn -= 2 * Math.PI;
    }
    while (turn < -Math.PI) {
      turn += 2 * Math.PI;
    }
    return turn;
  };

  _pipPos = v2.create();

  types.Unit = (function () {
    Unit.prototype.name = "";

    Unit.prototype.canCapture = true;

    Unit.prototype.multiShoot = false;

    Unit.prototype.unit = true;

    Unit.prototype.maxHP = 10;

    Unit.prototype.buildHP = 0;

    Unit.prototype.buildSpeed = 10;

    Unit.prototype.buildRadius = 500;

    Unit.prototype.radius = 60;

    Unit.prototype.fixed = false;

    Unit.prototype.maxSpeed = 100;

    Unit.prototype.turnSpeed = 1;

    Unit.prototype.cloak = 0;

    Unit.prototype.burn = 0;

    Unit.prototype.jump = 0;

    Unit.prototype.minJump = 150;

    Unit.prototype.limitBonus = 0;

    Unit.prototype.cost = 100;

    Unit.prototype.image = null;

    Unit.prototype.size = [1, 1];

    Unit.prototype.building = false;

    Unit.prototype.gotoMode = null;

    Unit.prototype.target = null;

    Unit.prototype.holdPosition = false;

    Unit.prototype.stopFriction = 0.9;

    Unit.prototype.underPlayerControl = false;

    Unit.prototype.orders = null;

    function Unit(spec1) {
      this.spec = spec1;
      this.closestUncloaked = bind(this.closestUncloaked, this);
      this.closestEnemy = bind(this.closestEnemy, this);
      if (this.spec === null) {
        this.spec = [];
      }
      this.id = typeof sim !== "undefined" && sim !== null ? sim.nid() : void 0;
      this.side = 0;
      this.color = [255, 0, 0, 255];
      this.z = Math.random();
      this.center = v2.create();
      this.parts = [];
      this.weapons = [];
      this.fromSpec(this.spec);
      this.dead = false;
      this.pos = v2.create();
      this.vel = v2.create();
      this.active = true;
      this.rot = 0;
      this.warpIn = 0;
      this.testIntp = [];
      this.testStep = [];
      this.orders = [];
      this.preOrders = [];
      this.closestEnemiesCache = null;
      this.closestFriendsCache = null;
      this.closestEnemyBulletsCache = null;
    }

    Unit.prototype.fromSpec = function (spec) {
      var data, i, j, l, len, len1, len2, len3, len4, n, o, p, part, partNum, q, reachRange, ref, ref1, ref2, ref3, ref4, results, stasisRange, thrust, w, hasCloak;
      hasCloak = false;
      this.cost = 0;
      this.hp = 5;
      this.jumpDistance = 0;
      this.jumpCount = 0;
      this.speed = 0;
      this.turnSpeed = 1;
      this.mass = 0;
      this.energy = 0;
      this.baseGenEnergy = 2.5;
      this.genEnergy = this.baseGenEnergy;
      this.storeEnergy = 0;
      this.genShield = 0;
      this.shield = 0;
      this.cloak = 0;
      this.maxSlow = 0;
      this.radius = 20;
      this.weaponArc = 0;
      this.minArc = 0;
      this.maxRange = 0;
      thrust = 0;
      data = fromShort(spec);
      this.name = data.name || "";
      this.aiRules = data.aiRules || [];
      // BUILD PARTS
      ref = data.parts;
      /*for (partNum = j = 0, len = ref.length; j < len; partNum = ++j) {
        p = ref[partNum];
        if (!window.parts[p.type]) {
          continue;
        }
        part = new window.parts[p.type]();
        part.unit = this;
        part.pos = v2.create(p.pos);
        part.dir = p.dir || 0;
        part.partNum = partNum;
        if (part.weapon) {
          this.weapons.push(part);
        }
        this.parts.push(part);
        this.cost += part.cost || 0;
        this.hp += part.hp || 0;
        thrust += part.thrust || 0;
        this.mass += part.mass;
        this.turnSpeed += part.turnSpeed || 0;
        this.genEnergy += part.genEnergy || 0;
        this.storeEnergy += part.storeEnergy || 0;
        this.genShield += part.genShield || 0;
        this.shield += part.shield || 0;
        this.jumpCount += part.jumpCount || 0;
        this.limitBonus += part.limitBonus || 0;
        if (part.arc && this.weaponArc < part.arc) {
          this.weaponArc = part.arc;
        }
        if (part.arc && (this.minArc === 0 || this.minArc > part.arc)) {
          this.minArc = part.arc;
        }
        if (p.type === "EnergyTransfer") {
          if (part.range > this.maxRange) {
            this.maxRange = part.range;
          }
        }
        if (p.type === "StasisField") {
          stasisRange = part.range + v2.distance(part.pos, this.center) + 100;
          if (stasisRange > this.maxRange) {
            this.maxRange = stasisRange;
          }
        }
        if (!hasCloak && p.type === "CloakGenerator") {
          hasCloak = true;
        }
      }*/
      for (partNum = j = 0, len = ref.length; j < len; partNum = ++j) {
        p = ref[partNum];
        part = new PartV2(p.type, this);
        if (!part) {
          continue;
        }
        part.unit = this;
        part.pos = v2.create(p.pos);
        part.dir = p.dir || 0;
        part.partNum = partNum;
        if (part.weapon) {
          this.weapons.push(part);
        }
        this.parts.push(part);
        part.BuildOnUnit();
        part.RunForComp("cloak", comp => {
          if (comp.cloak_generate > 0) {
            hasCloak = true;
          }
        })
      }
      // BUILD PARTS END
      this.maxHP = this.hp;
      this.energy = this.storeEnergy;
      this.turnSpeed = this.turnSpeed / this.mass;
      this.maxSpeed = thrust !== 0 ? (thrust / this.mass) * 9 : 0;
      this.maxShield = this.shield;
      this.damageRatio = 1;
      this.jumpDistance = this.jump = this.jumpCount !== 0 ? Math.min(1, (41 * this.jumpCount) / this.mass) * 600 : 0;
      this.computeCenter();
      if (hasCloak) {
        this.cloak = this.mass;
      }
      ref1 = this.parts;
      for (l = 0, len1 = ref1.length; l < len1; l++) {
        part = ref1[l];
        if (typeof part.init === "function") {
          part.init();
        }
      }
      this.computeRadius();
      this.weaponRange = 0;
      this.weaponDPS = 0;
      this.weaponDamage = 0;
      ref2 = this.weapons;
      for (n = 0, len2 = ref2.length; n < len2; n++) {
        w = ref2[n];
        w.applyBuffs();
        w.reloadTime = Math.ceil(w.reloadTime);
        if (w.reloadTime < 1) {
          w.reloadTime = 1;
        }
        if (w.range > this.weaponRange) {
          this.weaponRange = w.range;
        }
        reachRange = w.range + v2.distance(w.pos, this.center);
        if (reachRange > this.maxRange) {
          this.maxRange = reachRange;
        }
        w.dps = w.damage / w.reloadTime;
        this.weaponDamage += w.damage;
        this.weaponDPS += w.dps;
      }
      this.weapons.sort(function (a, b) {
        return b.dps - a.dps;
      });
      this.mainWeapon = this.weapons[0];
      ref3 = this.weapons;
      for (i = o = 0, len3 = ref3.length; o < len3; i = ++o) {
        w = ref3[i];
        w.turretNum = i;
      }
      this.moveEnergy = 0;
      this.fireEnergy = 0;
      this.maxSlow = 0;
      ref4 = this.parts;
      results = [];
      for (q = 0, len4 = ref4.length; q < len4; q++) {
        part = ref4[q];
        if (part.thrust > 0) {
          this.moveEnergy += part.useEnergy;
        }
        if (part.fireEnergy > 0) {
          this.fireEnergy += part.fireEnergy;
        }
        if (part.maxSlow > 0) {
          results.push((this.maxSlow += part.maxSlow));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Unit.prototype.toSpecObj = function () {
      var j, len, part, partSpec, ref, specParts;
      specParts = [];
      ref = this.parts;
      for (j = 0, len = ref.length; j < len; j++) {
        part = ref[j];
        partSpec = {
          pos: [part.pos[0], part.pos[1]],
          type: part.constructor.name,
          dir: part.dir,
        };
        specParts.push(partSpec);
      }
      return {
        parts: specParts,
        name: this.name,
        aiRules: this.aiRules,
      };
    };

    Unit.prototype.toSpec = function () {
      return toShort(this.toSpecObj());
    };

    Unit.prototype.computeCenter = function () {
      var ix, iy, j, len, part, partArea, ref, totalArea;
      ix = 0;
      iy = 0;
      totalArea = 0;
      ref = this.parts;
      for (j = 0, len = ref.length; j < len; j++) {
        part = ref[j];
        if (part.mass > 0 && !(part instanceof Turret)) {
          partArea = part.size[0] * part.size[1];
          totalArea += partArea;
          ix += partArea * part.pos[0];
          iy += partArea * part.pos[1];
        }
      }
      if (totalArea > 0) {
        this.center[0] = ix / totalArea;
        return (this.center[1] = iy / totalArea);
      } else {
        this.center[0] = 0;
        return (this.center[1] = 0);
      }
    };

    var partOccupiedGrid = function (part) {
      var xsize, ysize;
      var result = [];
      if (part.dir % 2 === 0) {
        xsize = part.size[0];
        ysize = part.size[1];
      } else {
        xsize = part.size[1];
        ysize = part.size[0];
      }
      var basex = part.pos[0] - ((xsize - 1) / 2) * 20;
      var basey = part.pos[1] - ((ysize - 1) / 2) * 20;
      for (var x = 0; x < xsize; x++) {
        for (var y = 0; y < ysize; y++) {
          result.push([basex + x * 20, basey + y * 20]);
        }
      }
      return result;
    };

    var partCorners = function (part) {
      var xsize, ysize;
      var result = [];
      if (part.dir % 2 === 0) {
        xsize = part.size[0];
        ysize = part.size[1];
      } else {
        xsize = part.size[1];
        ysize = part.size[0];
      }
      var xmin = part.pos[0] - ((xsize - 1) / 2) * 20;
      var ymin = part.pos[1] - ((ysize - 1) / 2) * 20;
      var xmax = xmin + (xsize - 1) * 20;
      var ymax = ymin + (ysize - 1) * 20;

      result.push([xmin, ymin]);
      if (xmin !== xmax) {
        result.push([xmax, ymin]);
      }
      if (ymin !== ymax) {
        result.push([xmin, ymax]);
      }
      if (xmin !== xmax && ymin !== ymax) {
        result.push([xmax, ymax]);
      }

      return result;
    };

    Unit.prototype.computeRadius = function () {
      var j, len, part, radius, ref, v;
      v = v2.create();
      ref = this.parts;
      for (j = 0, len = ref.length; j < len; j++) {
        part = ref[j];
        if (!!part.decal) {
          continue;
        }
        //var grids = partCorners(part);
        var grids = [part.pos];
        for (let i = 0; i < grids.length; i++) {
          const pos = grids[i];
          v2.set(pos, v);
          v2.sub(v, this.center);
          radius = v2.mag(v);
          if (radius > this.radius) {
            this.radius = radius;
          }
        }
      }
    };

    Unit.prototype.applyDamage = function (d) {
      this.shield -= d;
      if (this.shield < 0) {
        this.hp += this.shield;
        this.shield = 0;
      }
    };

    Unit.prototype.applyEnergyDamage = function (d) {
      return (this.energy -= d);
    };

    Unit.prototype.applyBurnAmount = function (d) {
      this.maxBurn = (this.hp + this.shield) * 1.0;
      if (this.burn < this.maxBurn) {
        this.burn += d;
        if (this.burn > this.maxBurn) {
          return (this.burn = this.maxBurn);
        }
      }
    };

    Unit.prototype.postDeath = function () {
      var j, len, part, ref;
      ref = this.parts;
      for (j = 0, len = ref.length; j < len; j++) {
        part = ref[j];
        if (typeof part.postDeath === "function") {
          part.postDeath();
        }
      }
      return (sim.deaths += 1);
    };

    Unit.prototype.createDebree = function () {
      var exp, j, len, part, ref, results;
      ref = this.parts;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        part = ref[j];
        if (Math.random() < 0.5 || part.decal) {
          continue;
        }
        exp = new types.Debree();
        if (part.stripe) {
          exp.image = "parts/gray-" + part.image;
        } else if (part.vturret || part.vblock) {
          exp.scale = [0.5, 0.5];
          exp.image = "vparts/" + part.image;
        } else {
          exp.image = "parts/" + part.image;
        }
        exp.z = this.z + rand() * 0.01;
        exp.pos = [0, 0];
        part.computeWorldPos();
        v2.set(part.worldPos, exp.pos);
        v2.set(this.vel, exp.vel);
        exp.vel[0] += (part.worldPos[0] - this.pos[0]) * 0.1 + rand();
        exp.vel[1] += (part.worldPos[1] - this.pos[1]) * 0.1 + rand();
        exp.rot = this.rot;
        exp.vrot = rand();
        results.push((intp.particles[exp.id] = exp));
      }
      return results;
    };

    Unit.prototype.gotoAndStop = function (goto) {
      return this.setOrder({
        type: "Move",
        dest: goto,
        noStop: true,
      });
    };

    Unit.prototype.gotoNoStop = function (goto) {
      return this.setOrder({
        type: "Move",
        dest: goto,
        noStop: true,
      });
    };

    Unit.prototype.cloaked = function () {
      return this.cloakFade > 0;
    };

    Unit.prototype.shouldDie = function () {
      return this.requiredDead || (!this.frozen && (this.warheadExplode || this.hp <= 0));
    };

    Unit.prototype.tick = function () {
      var burnTick, cloakOn, cloakRange, exp, j, l, len, len1, len2, n, part, ref, ref1, ref2, ref3, sound, speed, target;
      ref = this.parts;
      for (j = 0, len = ref.length; j < len; j++) {
        part = ref[j];
        part.computeWorldPos();
      }
      this.slowed = false;
      if (this.warpIn < 1) {
        this.warpIn += 1 / 16;
      } else {
        this.warpIn = 1;
      }
      this.closestEnemiesCache = null;
      this.closestFriendsCache = null;
      this.closestEnemyBulletsCache = null;
      this.cloakFade = 0;
      if (this.cloak > 0) {
        speed = v2.mag(this.vel);
        if (speed > 1) {
          this.cloak -= (0.2 / 16) * this.mass;
        }
        this.cloak -= (0.01 / 16) * this.mass;
        /*
        if (sim.step % 16 === 0) {
          this.cloak -= 0.01 * this.mass;
        }
        */
        cloakOn = this.mass * 0.5;
        if (this.cloak > cloakOn) {
          cloakRange = this.mass - cloakOn;
          this.cloakFade = (this.cloak - cloakOn) / cloakRange;
        }
      }
      if (this.cloak > 0) {
        target = this.closestEnemy();
        if (target && v2.distance(target.pos, this.pos) - target.radius - this.radius < 100) {
          this.cloak = 0;
        }
      }
      if (this.cloak < 0) {
        this.cloak = 0;
      }
      if (this.topOrderIs("Follow") && sim.things[this.orders[0].targetId] != null && sim.things[this.orders[0].targetId].side !== this.side) {
        this.target = sim.things[this.orders[0].targetId];
      }
      if (this.energy < -this.genEnergy * 16 * 3) {
        this.energy = -this.genEnergy * 16 * 3;
      }
      this.energy += this.baseGenEnergy;
      ref1 = this.parts;
      for (l = 0, len1 = ref1.length; l < len1; l++) {
        part = ref1[l];
        if (part.genEnergy) {
          this.energy += part.genEnergy;
        }
      }

      sim.timeStart("parts");
      ref2 = this.parts;
      for (n = 0, len2 = ref2.length; n < len2; n++) {
        part = ref2[n];
        part.tick();
      }
      sim.timeEnd("parts");
      if (this.energy > this.storeEnergy) {
        this.energy = this.storeEnergy;
      }
      if (this.shield > this.maxShield) {
        this.shield = this.maxShield;
      }
      if ((ref3 = this.target) != null ? ref3.dead : void 0) {
        this.target = null;
      }
      if (this.burn > 4) {
        burnTick = (this.burn * 0.04) / 16;
        this.applyDamage(Math.max(0, Math.min(burnTick, this.shield + this.hp - 4)));
        this.burn -= burnTick;
      } else {
        this.burn = 0;
      }
      if (this.shouldDie()) {
        this.kill();
      }
    };

    Unit.prototype.postTick = function () {
      sim.timeStart("parts");
      ref2 = this.parts;
      for (n = 0, len2 = ref2.length; n < len2; n++) {
        part = ref2[n];
        if (typeof part.postTick === "function") {
          part.postTick();
        }
      }
      sim.timeEnd("parts");
    };

    Unit.prototype.kill = function () {
      if (!this.vanishDestroyMode && !this.superSpecial) {
        sound = this.maxHP < 100 ? "sounds/weapons/explode1.wav" : this.maxHP < 600 ? "sounds/weapons/explode3.wav" : "sounds/weapons/explode4.wav";
        exp = new types.ShipExplosion(sound);
        exp.z = 1000;
        exp.pos = [this.pos[0], this.pos[1]];
        exp.vel = [0, 0];
        exp.rot = 0;
        exp.radius = Math.max(this.mass / 5, 50);
        sim.things[exp.id] = exp;
      }
      this.dead = true;
      if (this.building) {
        return (this.building.dead = true);
      }
    };

    Unit.prototype.canBuildHere = function () {
      return true;
    };

    Unit.prototype.move = function () {
      this.movement();
      if (this.orders.length === 0) {
        return this.idleAI();
      }
    };

    Unit.prototype.movement = function () {
      var curspeed, s;
      this.runOrders();
      v2.scale(this.vel, this.stopFriction);
      curspeed = v2.mag(this.vel);
      if (curspeed < 0.01) {
        this.vel[0] = 0;
        this.vel[1] = 0;
      } else {
        v2.add(this.pos, this.vel);
      }
      s = 20000;
      if (this.pos[0] > s) {
        this.pos[0] = s;
      }
      if (this.pos[0] < -s) {
        this.pos[0] = -s;
      }
      if (this.pos[1] > s) {
        this.pos[1] = s;
      }
      if (this.pos[1] < -s) {
        return (this.pos[1] = -s);
      }
    };

    Unit.prototype.lookAt = function (goto) {
      var rot;
      v2.sub(goto, this.pos, _where);
      rot = v2.angle(_where);
      if (rot != null) {
        return (this.rot = turnAngle(this.rot, rot, this.turnSpeed));
      }
    };

    Unit.prototype.moveTo = function (goto, noStop) {
      var arriveIn, curspeed, force, j, len, part, ratio, ref, rot, stopSpeed, turnIn;
      if (noStop == null) {
        noStop = false;
      }
      if (goto == null) {
        return;
      }
      v2.sub(goto, this.pos, _where);
      this.gotoDistance = v2.mag(_where);
      rot = v2.angle(_where);
      if (rot != null) {
        this.rot = turnAngle(this.rot, rot, this.turnSpeed);
      }
      if (this.holdPosition) {
        return;
      }
      arriveIn = this.gotoDistance / this.maxSpeed;
      turnIn = Math.abs(angleBetween(this.rot, rot)) / this.turnSpeed;
      curspeed = v2.mag(this.vel);
      this.stopDistance = 0;
      if (!noStop) {
        stopSpeed = curspeed;
        while (stopSpeed > 1) {
          this.stopDistance += stopSpeed;
          stopSpeed = stopSpeed * this.stopFriction;
        }
      }
      if (turnIn < arriveIn * 0.2 && this.gotoDistance > this.stopDistance && this.energy > 0) {
        force = 0;
        ref = this.parts;
        for (j = 0, len = ref.length; j < len; j++) {
          part = ref[j];
          if (part.thrust) {
            if (part.useEnergy < this.energy) {
              ratio = 1;
            } else {
              ratio = this.energy / part.useEnergy;
            }
            force += part.thrust * ratio;
            this.energy -= part.useEnergy * ratio;
          }
        }
        v2.pointTo(_where, this.rot);
        v2.scale(_where, force / this.mass);
        v2.add(this.vel, _where);
      }
    };

    Unit.prototype.closestEnemies = function () {
      if (this.closestEnemiesCache === null) {
        this.closestEnemiesCache = [];
        sim.unitSpaces[otherSide(this.side)].findInRange(
          this.pos,
          this.maxRange + 500,
          (function (_this) {
            return function (u) {
              if (u.id !== _this.id) {
                _this.closestEnemiesCache.push(u);
              }
              return false;
            };
          })(this)
        );
        this.closestEnemiesCache.sort(
          (function (_this) {
            return function (a, b) {
              return v2.distanceSq(a.pos, _this.pos) - v2.distanceSq(b.pos, _this.pos);
            };
          })(this)
        );
      }
      return this.closestEnemiesCache;
    };

    Unit.prototype.closestFriends = function () {
      if (this.closestFriendsCache === null) {
        this.closestFriendsCache = [];
        sim.unitSpaces[this.side].findInRange(
          this.pos,
          this.maxRange + 500,
          (function (_this) {
            return function (u) {
              if (u.id !== _this.id) {
                _this.closestFriendsCache.push(u);
              }
              return false;
            };
          })(this)
        );
        this.closestFriendsCache.sort(
          (function (_this) {
            return function (a, b) {
              return v2.distanceSq(a.pos, _this.pos) - v2.distanceSq(b.pos, _this.pos);
            };
          })(this)
        );
      }
      return this.closestFriendsCache;
    };

    Unit.prototype.closestEnemyBullets = function () {
      if (this.closestEnemyBulletsCache === null) {
        this.closestEnemyBulletsCache = [];
        sim.bulletSpaces[otherSide(this.side)].findInRange(
          this.pos,
          this.maxRange + this.radius + 500,
          (function (_this) {
            return function (b) {
              _this.closestEnemyBulletsCache.push(b);
              return false;
            };
          })(this)
        );
        this.closestEnemyBulletsCache.sort(
          (function (_this) {
            return function (a, b) {
              return v2.distanceSq(a.pos, _this.pos) - v2.distanceSq(b.pos, _this.pos);
            };
          })(this)
        );
      }
      return this.closestEnemyBulletsCache;
    };

    Unit.prototype.closestEnemy = function () {
      var enemy, j, len, ref, u;
      enemy = null;
      ref = this.closestEnemies();
      for (j = 0, len = ref.length; j < len; j++) {
        u = ref[j];
        enemy = u;
        break;
      }
      return enemy;
    };

    Unit.prototype.closestUncloaked = function (range) {
      var enemyC, j, len, ref, u;
      enemyC = null;
      ref = this.closestEnemies();
      for (j = 0, len = ref.length; j < len; j++) {
        u = ref[j];
        if (u.cloaked() && !enemyC) {
          enemyC = u;
        } else {
          return u;
        }
      }
      return enemyC;
    };

    Unit.prototype.idleAI = function () {
      var dist, lookAt, rot, target;
      if (this.target) {
        this.softTarget = this.target;
      } else if (sim.step % 16 === 0) {
        this.softTarget = null;
        target = this.closestUncloaked();
        if (target && v2.distance(target.pos, this.pos) < this.weaponRange * 3) {
          this.softTarget = target;
        }
      }
      if (this.softTarget && this.minArc < 360) {
        lookAt = this.softTarget.pos;
        v2.sub(lookAt, this.pos, _where);
        rot = v2.angle(_where);
        dist = v2.mag(_where);
        return (this.rot = turnAngle(this.rot, rot, this.turnSpeed));
      }
    };

    Unit.prototype.draw = function () {
      var a, color, j, l, len, len1, part, partNum, r, ref, ref1, s, t, value;
      if (this.dead) {
        return;
      }
      ref = this.parts;
      for (j = 0, len = ref.length; j < len; j++) {
        part = ref[j];
        if (typeof part.preDraw === "function") {
          part.preDraw();
        }
        part.computeWorldPos();
      }
      if (this.maxShield > 0) {
        s = this.warpIn * 2 - 1;
        if (s > 0) {
          color = [this.color[0], this.color[1], this.color[2], ((255 * this.shield) / this.maxShield) * s];
          r = (this.radius + 40) / 255;
          baseAtlas.drawSprite("img/point02.png", this.pos, [r, r], 0, color);
        }
      }
      if (this.warpIn < 1) {
        this.warpIn += 1 / 60;
      }
      ref1 = this.parts;
      for (partNum = l = 0, len1 = ref1.length; l < len1; partNum = ++l) {
        part = ref1[partNum];
        value = part.pos[1] / 700 - 0.5 + this.warpIn;
        if (value > 0) {
          part.draw();
        } else if (value > -0.2) {
          a = -Math.sin((value / Math.PI) * 50);
          baseAtlas.drawSprite("img/unitBar/fire02.png", part.worldPos, [1, 1], 0, [255, 255, 255, 255 * a]);
          continue;
        }
      }
      if (this.energy / this.storeEnergy < 0.05) {
        t = Math.abs(Math.sin(Date.now() / 300));
        baseAtlas.drawSprite("img/unitBar/energy1.png", [this.pos[0], this.pos[1] + 100 + this.radius], [1, 1], 0, [255, 100, 100, t * 200]);
      }
      if (control.debug && this._pos2 != null && this._pos) {
        a = 16;
        _offset[0] = this._pos2[0] + (this._pos[0] - this._pos2[0]) * a;
        _offset[1] = this._pos2[1] + (this._pos[1] - this._pos2[1]) * a;
        baseAtlas.drawSprite("img/pip1.png", this._pos, [1, 1], 0, [0, 255, 0, 255]);
        baseAtlas.drawSprite("img/pip1.png", this.pos, [1, 1], 0);
        return baseAtlas.drawSprite("img/pip1.png", this._pos2, [1, 1], 0, [255, 0, 0, 255]);
      }
    };

    Unit.prototype.createFlameEffect = function () {
      var exp, part, s;
      if (Math.random() < 0.8) {
        return;
      }
      part = choose(this.parts);
      if (part) {
        exp = new types.FlameBulletGhost();
        exp.main = false;
        exp.image = "parts/fireFlame" + chooseInt(1, 4) + ".png";
        exp.z = this.z + rand() * 0.01;
        exp.pos = [0, 0];
        v2.set(part.worldPos, exp.pos);
        exp.vel[0] = rand() - 0.5;
        exp.vel[1] = rand() - 0.5;
        s = 0.3 + 0.4 * Math.random();
        exp.size = [s, s];
        exp.maxRadius = 300;
        exp.radius = 10;
        exp.rot = rand() * Math.PI * 2;
        exp.vrot = 0;
        exp.maxLife = 100;
        exp._pos = v2.create(exp.pos);
        exp._pos2 = v2.create(exp.pos);
        exp.rot = exp.rot;
        exp._rot = exp.rot;
        exp._rot2 = exp.rot;
        return (intp.particles[exp.id] = exp);
      }
    };

    Unit.prototype.clientTick = function () {
      var cloakOn, cloakRange, j, len, ref, w;
      ref = this.weapons;
      for (j = 0, len = ref.length; j < len; j++) {
        w = ref[j];
        if (typeof w.clientTick === "function") {
          w.clientTick();
        }
      }
      if (this.burn > 0) {
        this.createFlameEffect();
      }
      this.cloakFade = 0;
      if (this.cloak > 0) {
        cloakOn = this.mass * 0.5;
        if (this.cloak > cloakOn) {
          cloakRange = this.mass - cloakOn;
          return (this.cloakFade = (this.cloak - cloakOn) / cloakRange);
        }
      }
    };

    Unit.prototype.thumb = function () {
      var image_data_url, j, k, len, part, ref, ref1, scale;
      k = JSON.stringify(this.spec) + this.color;
      if (!thumb_cache[k]) {
        baseAtlas.startOffscreenFrame();
        scale = (this.radius / 64) * 1.5;
        if (scale < 1) {
          scale = 1;
        }
        baseAtlas.beginSprites([0, 0], scale, [0, 0, -baseAtlas.rtt.width, baseAtlas.rtt.height]);
        ref = this.parts;
        for (j = 0, len = ref.length; j < len; j++) {
          part = ref[j];
          part.working = true;
        }
        this.draw();
        if (((ref1 = this.aiRules) != null ? ref1.length : void 0) > 0) {
          baseAtlas.drawSprite("img/pip1.png", [-scale * 64, -scale * 64], [scale, scale], 0, [0, 0, 0, 255]);
        }
        baseAtlas.finishSprites(false);
        image_data_url = baseAtlas.endOffscreenFrame();
        thumb_cache[k] = image_data_url;
        return image_data_url;
      }
      return thumb_cache[k];
    };

    Unit.prototype.drawSelection = function () {
      var alpha, angle, distance, i, j, len, order, orders, prev, results, target;
      this.drawHPBar();
      this.drawEnergyBar();
      if (this.holdPosition) {
        baseAtlas.drawSprite("img/unitBar/circle.png", this.pos, [1, 1], 0, [255, 255, 255, 100]);
      }
      while (this.preOrders.length > 0 && this.preOrders[0].id < this.onOrderId) {
        this.preOrders.shift();
      }
      if (!battleMode.shiftOrder && battleMode.ordering) {
        return;
      }
      if (this.owner === commander.number) {
        prev = this.pos;
        orders = this.preOrders;
        results = [];
        for (i = j = 0, len = orders.length; j < len; i = ++j) {
          order = orders[i];
          if (order.type === "Move") {
            if (order.dest == null) {
              continue;
            }
            distance = v2.distance(order.dest, prev);
            if (i === 0 && distance < 255 + 10) {
              alpha = distance - 10;
            } else {
              alpha = 255;
            }
            angle = v2.angle(v2.sub(order.dest, prev, v2.create()));
            if (orders.length - 1 === i) {
              baseAtlas.drawSprite("img/arrow01.png", order.dest, [0.9, 0.9], angle, [255, 255, 255, alpha]);
            } else {
              baseAtlas.drawSprite("img/arrow01.png", order.dest, [0.8, 0.8], angle, [255, 255, 255, alpha]);
            }
            results.push((prev = order.dest));
          } else if (order.type === "Follow") {
            target = intp.things[order.targetId];
            if (target != null) {
              results.push(baseAtlas.drawSprite("img/unitBar/target.png", target.pos, [1, 1], 0, [255, 0, 0, 100]));
            } else {
              results.push(void 0);
            }
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    };

    Unit.prototype.drawEnergyBar = function () {
      var color, healthScale, i, j, max, number, pipScale, ref, results, s;
      max = this.storeEnergy;
      if (max < 30000) {
        healthScale = 1000;
        pipScale = 0.5;
      } else {
        healthScale = 10000;
        pipScale = 1;
      }
      number = Math.floor(this.storeEnergy / healthScale);
      results = [];
      for (i = j = 0, ref = number; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        s = 20;
        _pipPos[0] = (i * s - (number * s) / 2 - s / 2) * pipScale;
        _pipPos[1] = 100;
        if (i < this.energy / healthScale) {
          color = [169, 208, 232, 255];
        } else {
          color = [20, 20, 20, 50];
        }
        v2.add(this.pos, _pipPos, _pipPos);
        results.push(baseAtlas.drawSprite("img/unitBar/energyPip.png", _pipPos, [pipScale, pipScale], 0, color));
      }
      return results;
    };

    Unit.prototype.drawHPBar = function () {
      var burnColor, color, healthScale, i, j, max, number, pipScale, ref, results, s;
      burnColor = colors.blackOrWhite(this.color);
      max = this.maxHP + this.maxShield;
      if (max < 300) {
        healthScale = 10;
        pipScale = 0.5;
      } else {
        healthScale = 100;
        pipScale = 1;
      }
      number = Math.floor(this.maxHP / healthScale) + Math.floor(this.maxShield / healthScale);
      results = [];
      for (i = j = 0, ref = number; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        s = 20;
        _pipPos[0] = (i * s - (number * s) / 2 - s / 2) * pipScale;
        _pipPos[1] = 60;
        if (i < Math.floor(this.maxHP / healthScale)) {
          if (i < this.hp / healthScale) {
            color = [this.color[0], this.color[1], this.color[2], 255];
          } else {
            color = [20, 20, 20, 50];
          }
          if (i < ((this.cloak / this.mass) * this.maxHP) / healthScale) {
            color[3] = 100;
          } else if (this.cloakFade > 0) {
            color[3] = 175;
          }
        } else {
          if (i < Math.floor(this.maxHP / healthScale) + this.shield / healthScale) {
            color = [this.color[0], this.color[1], this.color[2], 100];
          } else {
            color = [0, 0, 0, 50];
          }
        }
        v2.add(this.pos, _pipPos, _pipPos);
        baseAtlas.drawSprite("img/pip1.png", _pipPos, [pipScale, pipScale], 0, color);
        if ((this.burn * 1) / healthScale > i) {
          results.push(baseAtlas.drawSprite("img/unitBar/flame.png", _pipPos, [pipScale * 0.25, pipScale * 0.25], Math.PI, burnColor));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Unit.prototype.addOrder = function (order) {
      if (this.orders.length < 50) {
        return this.orders.push(order);
      }
    };

    Unit.prototype.setOrder = function (order) {
      this.orders = [order];
      return (this.target = null);
    };

    Unit.prototype.aiOrder = function (order) {
      order.ai = true;
      if (this.orders.length > 0 && (this.orders[0].ai || this.orders[0].rally)) {
        return (this.orders[0] = order);
      } else {
        return this.orders.unshift(order);
      }
    };

    Unit.prototype.stopAi = function () {
      if (this.orders.length && this.orders[0].ai) {
        this.orders.shift();
        return (this.onOrderId += 1);
      }
    };

    Unit.prototype.hasHumanOrder = function () {
      var j, len, order, ref;
      ref = this.orders;
      for (j = 0, len = ref.length; j < len; j++) {
        order = ref[j];
        if (!order.ai) {
          return true;
        }
      }
      return false;
    };

    Unit.prototype.giveOrder = function (order, additive) {
      if (additive) {
        return this.addOrder(order);
      } else {
        return this.setOrder(order);
      }
    };

    Unit.prototype.topOrderIs = function (type) {
      return this.orders.length > 0 && this.orders[0].type === type;
    };

    Unit.prototype.runOrders = function () {
      var running, topOrder;
      if (this.dead || this.orders.length === 0) {
        return;
      }
      while (this.orders.length > 0) {
        topOrder = this.orders[0];
        this.onOrderId = topOrder.id;
        running = this.runOrder(topOrder);
        if (running || topOrder.ai) {
          break;
        }
        this.orders.shift();
        this.onOrderId += 1;
      }
    };

    Unit.prototype.runOrder = function (order) {
      var dest, dir, dist, pos, range, ref, target;
      switch (order.type) {
        case "Follow":
          target = sim.things[order.targetId];
          if (!target || target.dead) {
            this.target = null;
            return false;
          }
          if (target.side !== this.side) {
            this.target = target;
          }
          if (!order.range) {
            if (this.warhead) {
              order.range = 0;
            } else {
              if (target.side !== this.side && this.weapons.length > 0) {
                order.range = this.mainWeapon.range * 0.95;
              } else {
                order.range = (this.radius + target.radius) * 1.5;
              }
            }
          }
          range = order.range;
          if (target.side !== this.side && this.weapons.length > 0) {
            dir = v2.norm(v2.sub(target.pos, this.pos, v2.create()));
            range = Math.max(0, (this.mainWeapon.range * (this.mainWeapon.bulletSpeed - v2.dot(target.vel, dir))) / this.mainWeapon.bulletSpeed);
          }
          if (target.cloak > 0 && target.cloaked() && target.side !== this.side) {
            range = Math.min(range, 150);
          }
          if (this.maxSlow > 0 && target.side !== this.side) {
            range = 150;
          }
          return this.moveWithinRange(target.pos, range, order.noStop) || this.orders.length === 1 || target.side !== this.side || !(this.target = null);
        case "Move":
          if (order.dest == null) {
            return false;
          }
          range = (ref = order.range) != null ? ref : 0;
          if (this.orders.length > 1) {
            range += this.radius * 3;
          }
          if (order.begun) {
            if (this.gotoDistance <= this.stopDistance && v2.dot(v2.sub(order.dest, this.pos, _where), this.vel) > 0) {
              return false;
            }
          } else {
            order.begun = true;
          }
          return this.moveWithinRange(order.dest, range, order.noStop);
        case "Flee":
          pos = order.pos;
          if (!pos) {
            pos = order.target.pos;
          }
          if (!order.distance) {
            order.distance = 10000;
          }
          dist = v2.distance(this.pos, pos);
          if (dist > order.distance) {
            return order.noFinish;
          }
          dest = v2.create();
          v2.sub(this.pos, pos, dest);
          v2.scale(dest, order.distance / v2.mag(dest));
          v2.add(dest, this.pos);
          return this.moveWithinRange(dest, 0, order.noStop, order.noFinish);
        case "Stop":
          return true;
        default:
          print("invalid order" + JSON.stringify(order));
      }
      return true;
    };

    Unit.prototype.selfDestruct = function () {
      this.requiredDead = true;
      //return this.hp = 0;
    };

    Unit.prototype.toggleHoldPosition = function () {
      return (this.holdPosition = !this.holdPosition);
    };

    Unit.prototype.stopAndClearOrders = function () {
      if (this.orders.length > 0) {
        this.onOrderId = this.orders.last().id + 1;
        this.orders = [];
      }
      this.holdPosition = false;
      return (this.target = null);
    };

    Unit.prototype.moveWithinRange = function (pos, range, noStop) {
      var dist, jumpDist, jumpVec;
      if (!isFiniteV2Array(pos)) {
        return false;
      }
      dist = v2.distance(this.pos, pos);
      if (dist < range || (noStop && dist <= this.maxSpeed)) {
        if (noStop || !this.shouldLookAt(pos)) {
          this.stopDistance = 0;
          this.gotoDistance = Number.MAX_SAFE_INTEGER;
          return false;
        }
        return true;
      }
      if ((this.jump >= this.minJump || this.forcedOneJump) && !this.holdPosition) {
        jumpDist = Math.min(this.jumpDistance, this.jump);
        if (v2.distance(this.pos, pos) < jumpDist || this.forcedOneJump) {
          this.cloak = Math.max(0, this.cloak - 0.25 * this.mass);
          jumpVec = v2.create();
          v2.sub(pos, this.pos, jumpVec);
          v2.add(this.pos, jumpVec);
          v2.zero(this.vel);
          this.warpIn = 0;
          this.jumped = true;
          if (!this.forcedOneJump) {
            this.jump = 0;
          }
          this.rot = v2.angle(jumpVec);
          return false;
        }
      }
      this.moveTo(pos, noStop);
      return true;
    };

    Unit.prototype.shouldLookAt = function (pos) {
      var dif, rot;
      dif = v2.create();
      v2.sub(pos, this.pos, dif);
      if (v2.mag(dif) < 0.1) {
        return false;
      }
      rot = v2.angle(dif);
      if (Math.abs(rot - this.rot) < 0.1) {
        return false;
      } else {
        this.lookAt(pos);
        return true;
      }
    };

    return Unit;
  })();

  window.toShort = function (spec) {
    if (!spec) {
      return null;
    }
    return JSON.stringify(spec);
  };

  legacyParts = [
    null,
    "Mount360",
    "Mount180",
    "Mount270",
    "Mount90",
    "Mount30",
    "HArmor2x2",
    "HArmor1x2",
    "HArmor1x1",
    "HArmor2x1",
    "HArmor1x1Angle",
    "UArmor1x1",
    "UArmor1x2",
    "UArmor2x1",
    "UArmor1x1Angle",
    "Reactor2x2",
    "Reactor1x2",
    "Reactor1x1",
    "Reactor2x1",
    "EnergyTransfer",
    "ShieldGen2x2",
    "ShieldGen2x1",
    "Battery1x2",
    "Battery1x1",
    "Battery2x1",
    "Battery2x2",
    "Engine01",
    "Engine02",
    "Engine03",
    "Engine04",
    "Engine05",
    "Engine06",
    "Engine07",
    "HArmor2x2Front1",
    "HArmor2x2Front2",
    "HArmor1x2Font1",
    "HArmor1x2Front2",
    "HArmor2x2Back1",
    "HArmor2x2Back2",
    "HArmor1x2Back1",
    "HArmor1x2Back2",
    "Wing1x2",
    "Wing2x2",
    "Wing2x1",
    "Wing1x1Notch",
    "Wing1x1Angle",
    "Wing1x1Round",
    "PDTurret",
    "HeavyPDTurret",
    "RingTurret",
    "TorpTurret",
    "MissileTurret",
    "ArtilleryTurret",
    "PlasmaTurret",
    "LightBeamTurret",
    "HeavyBeamTurret",
    "FlackTurret",
    "SniperGun",
    "EMPGun",
    "AOEWarhead",
    "TargetingMod",
    "DamageMod",
    "ReloaderMod",
    "BulletSpeedMod",
    "Ai1",
    "OverKillAi",
    "Ai3",
    "Ai4",
    "ShapedWarhead",
    "BombGun",
    "HArmor1x1AngleBack",
    "UArmor1x1AngleBack",
    "HArmor2x2Angle",
    "HArmor2x2AngleBack",
    "VArmor1x2SideBar",
    "VArmor1x2SideBarFilled",
    "VArmor1x2IBeam",
    "VArmor1x2Corner4",
    "VArmor1x2End",
    "VArmor1x1Corner1",
    "VArmor1x1Corner2",
    "VArmor1x1Corner3",
    "VArmor1x1Hook",
    "VArmor1x1CornerBack",
    "Mount360Micro",
    "AutoTurret",
    "TeslaTurret",
    "WavePullTurret",
    "ShieldGen1x1",
    "WavePushTurret",
    "CloakGenerator",
    "SymbolDecal1",
    "SymbolDecal2",
    "SymbolDecal3",
    "SymbolDecal4",
    "SymbolDecal5",
    "SymbolDecal6",
    "SymbolDecal7",
    "SymbolDecal8",
    "SymbolDecal9",
    "SymbolDecal10",
    "SymbolDecal11",
    "SymbolDecal12",
    "SymbolDecal13",
    "SymbolDecal14",
    "SymbolDecal15",
    "SymbolDecal16",
    "SymbolDecal17",
    "SymbolDecal18",
    "SymbolDecal19",
    "SymbolDecal20",
    "SymbolDecal21",
    "SymbolDecal22",
    "SymbolDecal23",
    "SymbolDecal24",
    null,
    null,
    null,
    null,
    null,
    "UArmor2x2",
    "UArmor1x2Notch1",
    "UArmor1x2Notch2",
    "UArmor1x1Notch1",
    "UArmor1x1Notch2",
    "UArmor1x1Spike",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "VArmor2x2",
    "VArmor1x2",
    "VArmor1x1",
    "VArmor1x1Angle",
    "VArmor2x2Angle",
    "VArmor2x2Curve",
    "VArmor1x1Curve",
    null,
    null,
    null,
    "HAarmor1x2Curved",
    "HArmor2x2Curved",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "Stripe1x1",
    "Stripe1x1Corner",
    "Stripe1x2",
    "Stripe2x1",
    "Stripe2x2",
    "Stripe2x2Corner",
    "Stripe2x2Round",
    "StripeDouble2x1",
    "StripeDouble2x2",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "LetterA",
    "LetterB",
    "LetterC",
    "LetterD",
    "LetterE",
    "LetterF",
    "LetterG",
    "LetterH",
    "LetterI",
    "LetterJ",
    "LetterK",
    "LetterL",
    "LetterM",
    "LetterN",
    "LetterO",
    "LetterP",
    "LetterQ",
    "LetterR",
    "LetterS",
    "LetterT",
    "LetterU",
    "LetterV",
    "LetterW",
    "LetterX",
    "LetterY",
    "LetterZ",
    "LetterPound",
    "LetterDot",
    null,
    null,
    "Letter0",
    "Letter1",
    "Letter2",
    "Letter3",
    "Letter4",
    "Letter5",
    "Letter6",
    "Letter7",
    "Letter8",
    "Letter9",
    "DroneBody",
    "Mount10Range",
    "FlameTurret",
    "StasisField",
    "Faction2",
    "Faction3",
    "Faction4",
    "Faction5",
    "Faction6",
    "Faction7",
    "Faction1",
    null,
    null,
    null,
    null,
  ];

  window.fromShort = function (rawShort) {
    var bin, e, i, j, ref, short, spec, type;
    if (!rawShort) {
      return {
        parts: [],
      };
    }
    try {
      if (typeof rawShort === "object") {
        if (rawShort.parts != null) {
          return rawShort;
        }
      }
      if (rawShort[0] === "{") {
        spec = JSON.parse(rawShort);
        if (!spec.parts) {
          spec = {
            parts: [],
          };
        }
        return spec;
      } else {
        short = decodeURIComponent(rawShort);
        bin = new Uint8Array(
          atob(short)
            .split("")
            .map(function (c) {
              return c.charCodeAt(0);
            })
        );
        spec = [];
        for (i = j = 0, ref = bin.length / 3; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
          type = legacyParts[bin[i * 3 + 2]];
          if (type) {
            spec.push({
              pos: [(bin[i * 3 + 0] - 20) * 10, (bin[i * 3 + 1] - 20) * 10],
              type: type,
            });
          }
        }
        return {
          parts: spec,
        };
      }
    } catch (error) {
      e = error;
      console.log("Can't decode ship", e, rawShort);
    }
    return {
      parts: [],
    };
  };

  window.specCost = function (spec) {
    var cost, limitBonus, j, len, part, partCls, ref;
    cost = 0;
    limitBonus = 0;
    if (!Array.isArray(spec)) {
      spec = fromShort(spec);
    }
    ref = spec.parts;
    for (j = 0, len = ref.length; j < len; j++) {
      part = ref[j];
      partCls = window.parts[part.type];
      if (partCls) {
        cost += partCls.prototype.cost ?? 0;
        limitBonus += partCls.prototype.limitBonus ?? 0;
      }
    }
    return true ? cost : Math.ceil(cost <= sim.costLimit + limitBonus ? cost : cost * (0.5 + (0.5 * cost) / (sim.costLimit + limitBonus)));
  };
}.call(this));
