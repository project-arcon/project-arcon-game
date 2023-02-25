//from src/menus.js
// Generated by CoffeeScript 1.12.7
(function () {
  var menuButtons;

  eval(onecup["import"]());

  ui.menu = function () {
    ui.menuFrame("mainmenu", function () {
      menuButtons();
      return ui.dlcs();
    });
    return ui.quickOptions();
  };

  ui.quickOptions = function () {
    div(function () {
      position("absolute");
      top(0);
      left(0);
      return img(
        ".hover-black",
        {
          src: "img/ui/back.png",
          width: 64,
          height: 64,
        },
        function () {
          position("absolute");
          top(0);
          left(0);
          return onclick(function () {
            return ui.go("battle");
          });
        }
      );
    });
    div(function () {
      position("absolute");
      bottom(0);
      right(0);
      width(200);
      text_align("right");
      span(function () {
        var imgSrc;
        display("inline-block");
        padding(10);
        if (isFullScreen()) {
          imgSrc = "img/ui/fullscreen.png";
        } else {
          imgSrc = "img/ui/window.png";
        }
        return img(
          {
            src: imgSrc,
            width: 40,
            height: 40,
          },
          function () {
            return onclick(function () {
              return toggleFullScreen();
            });
          }
        );
      });
      return span(function () {
        var imgSrc;
        display("inline-block");
        padding(10);
        if (localStorage.mute !== "true") {
          imgSrc = "img/ui/mute.png";
        } else {
          imgSrc = "img/ui/unmute.png";
        }
        return img(
          {
            src: imgSrc,
            width: 40,
            height: 40,
          },
          function () {
            return onclick(function () {
              if (localStorage.mute !== "true") {
                return (localStorage.mute = "true");
              } else {
                return (localStorage.mute = "false");
              }
            });
          }
        );
      });
    });
    return div(function () {
      var siteLink;
      position("absolute");
      top(0);
      right(0);
      text_align("right");
      padding(10);
      width((window.innerWidth - 600) / 2);
      siteLink = function (name, url) {
        return span(".hover-text-glow", function () {
          color("white");
          display("inline-bock");
          font_size(20);
          margin(10);
          text(name);
          return onclick(function () {
            return onecup.newTab(url);
          });
        });
      };
      siteLink("blog", "https://medium.com/@treeform");
      siteLink("reddit", "http://reddit.com/r/istrolid/");
      siteLink("discord", "https://discord.gg/stX3pmF");
      return siteLink("twitter", "https://twitter.com/treeform");
    });
  };

  css(".hover-text-glow:hover", function () {
    return text_shadow("0 0 3px white");
  });

  ui.div_hover_blur = function (cb) {
    return div(".hover-blur", function () {
      div(".blur", function () {
        return cb();
      });
      return div(".top", function () {
        return cb();
      });
    });
  };

  ui.menuFrame = function (name, fn) {
    return div("#" + name, function () {
      var m;
      position("relative");
      margin("0px auto");
      height(window.innerHeight);
      width(600);
      background_color("rgba(0,0,0,.6)");
      color("white");
      overflow_y("scroll");
      m = 600 / 2;
      img(
        {
          src: "img/ui/menu_logo.png",
          width: 330,
          height: 145,
        },
        function () {
          position("absolute");
          top(40);
          return left(m - 330 / 2);
        }
      );
      div(function () {
        position("absolute");
        top(0);
        width("100%");
        height(200);
        overflow("hidden");
        return div(function () {
          position("absolute");
          top(30);
          right(-50);
          padding("6px 0px");
          font_size(18);
          font_weight("bold");
          text_align("center");
          text("1." + VERSION + "." + MINOR_VERSION);
          color("white");
          background("black");
          width(200);
          return transform("rotate(45deg)");
        });
      });
      return fn();
    });
  };

  menuButtons = function () {
    var bottomRow, m, s;
    m = 600 / 2;
    s = 50;
    div("#galaxybuttons", function () {
      position("absolute");
      top(220);
      width("100%");
      height(221);
      background_color("rgba(0,0,0,.6)");
      ui.div_hover_blur(function () {
        position("absolute");
        padding(5);
        width(120);
        top(26);
        left(s);
        text_align("center");
        img({
          src: "img/ui/menu_multiplayer.png",
          width: 80,
          height: 80,
        });
        text("Multiplayer");
        return onclick(function () {
          return ui.go("multiplayer");
        });
      });
      ui.div_hover_blur(function () {
        position("absolute");
        top(26);
        left(m - 150 / 2);
        padding(5);
        width(150);
        text_align("center");
        img({
          src: "img/ui/menu_campaign.png",
          width: 130,
          height: 130,
        });
        text("Campaign");
        return onclick(function (e) {
          console.log("galaxy on click", e);
          return ui.go("galaxy");
        });
      });
      return ui.div_hover_blur(function () {
        position("absolute");
        padding(5);
        width(120);
        top(26);
        right(s);
        text_align("center");
        img({
          src: "img/ui/challenges.png",
          width: 80,
          height: 80,
        });
        text("Challenges");
        return onclick(function () {
          return ui.go("challenges");
        });
      });
    });
    bottomRow = window.innerHeight - 120;
    if (bottomRow < 370 + 240) {
      bottomRow = 370 + 240;
    }
    ui.div_hover_blur(function () {
      position("absolute");
      padding(5);
      width(120);
      top(bottomRow);
      left(s * 2);
      text_align("center");
      div(function () {
        return img({
          src: "img/ui/design.png",
          width: 64,
          height: 64,
        });
      });
      text("Design");
      return onclick(function () {
        battleMode.joinLocal();
        return ui.go("design");
      });
    });
    ui.div_hover_blur(function () {
      position("absolute");
      padding(5);
      width(120);
      top(bottomRow);
      left(m - 120 / 2);
      text_align("center");
      div(function () {
        return img({
          src: "img/ui/fleet.png",
          width: 64,
          height: 64,
        });
      });
      text("Fleet");
      return onclick(function () {
        return ui.go("fleet");
      });
    });
    ui.div_hover_blur(function () {
      position("absolute");
      padding(5);
      width(120);
      top(bottomRow);
      right(s * 2);
      text_align("center");
      div(function () {
        return img({
          src: "img/ui/settings.png",
          width: 64,
          height: 64,
        });
      });
      text("Settings");
      return onclick(function () {
        return ui.go("settings");
      });
    });
    if (typeof internal !== "undefined" && internal !== null) {
      return ui.div_hover_blur(function () {
        position("absolute");
        padding(5);
        top(590);
        left(200);
        right(200);
        height(40);
        font_size(20);
        text_align("center");
        line_height(40);
        text("Quit Game");
        return onclick(function () {
          return account.closeAndSave();
        });
      });
    }
  };

  css(".hover-bright:hover", function () {
    return filter("saturate(160%)");
  });

  ui.dlcs = function () {
    var drawDlc;
    drawDlc = function (name, image, url, fn) {
      return div(function () {
        fn();
        overflow("hidden");
        img(
          ".hover-bright",
          {
            src: image,
            width: 260,
            height: 100,
          },
          function () {
            return onclick(function () {
              return open(url, "_blank");
            });
          }
        );
        if (typeof internal !== "undefined" && internal !== null ? internal.DLCs[name] : void 0) {
          return div(function () {
            position("absolute");
            top(30);
            right(-48);
            padding(5);
            font_size(20);
            font_weight("bold");
            text_align("center");
            color("white");
            background("rgba(200,0,0,1)");
            width(200);
            transform("rotate(45deg)");
            return text("THANKS!");
          });
        }
      });
    };
    drawDlc("Paint Job", "img/ui/dlc/dlc1.png", "steam://store/472490", function () {
      position("absolute");
      top(465);
      left(25);
      width(260);
      return height(100);
    });
    return drawDlc("Curves and Shadows", "img/ui/dlc/dlc2.png", "steam://store/614180", function () {
      position("absolute");
      top(465);
      right(25);
      width(260);
      return height(100);
    });
  };
}.call(this));
