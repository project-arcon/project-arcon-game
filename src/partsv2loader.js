// here begin src/partsv2loader.js
(function () {
  window.partsV2 = [
    {
      "id": "arcon:mount_360",
      "cost": 36,
      "hp": 10,
      "mass": 30,
      "size": [2, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "mount": {
          "arc": 360,
          "attach_point": "standard_weapon_turret"
        }
      }
    },
    {
      "id": "arcon:mount_270",
      "cost": 21,
      "hp": 20,
      "mass": 10,
      "size": [2, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "mount": {
          "arc": 270,
          "attach_point": "standard_weapon_turret"
        }
      }
    },
    {
      "id": "arcon:mount_180",
      "cost": 12,
      "hp": 20,
      "mass": 10,
      "size": [2, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "mount": {
          "arc": 200,
          "attach_point": "standard_weapon_turret"
        }
      }
    },
    {
      "id": "arcon:mount_90",
      "cost": 9,
      "hp": 10,
      "mass": 5,
      "size": [2, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "mount": {
          "arc": 90,
          "attach_point": "standard_weapon_turret"
        }
      }
    },
    {
      "id": "arcon:mount_30",
      "cost": 3,
      "hp": 5,
      "mass": 5,
      "size": [2, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "mount": {
          "arc": 30,
          "attach_point": "standard_weapon_turret"
        }
      }
    },
    {
      "id": "arcon:mount_360_micro",
      "cost": 15,
      "hp": 20,
      "mass": 5,
      "size": [2, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "mount": {
          "arc": 360,
          "attach_point": "standard_weapon_turret"
        }
      }
    },
    {
      "id": "arcon:mount_10_range",
      "cost": 20,
      "hp": 1,
      "mass": 60,
      "size": [2, 4],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "mount": {
          "arc": 20,
          "attach_point": "standard_weapon_turret"
        },
        "weapon_modifier": {
          "pattern": "attached_weapon",
          "attribute_modifiers": [
            {
              "attribute": "range",
              "action": "add",
              "value": 500
            },
            {
              "attribute": "energy_per_shot",
              "action": "multiple",
              "value": 25
            }
          ]
        }
      }
    },
    {
      "id": "arcon:mount_10_demi",
      "cost": 7,
      "hp": 1,
      "mass": 15,
      "size": [4, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "mount": {
          "arc": 20,
          "attach_point": "standard_weapon_turret"
        },
        "weapon_modifier": {
          "pattern": "attached_weapon",
          "attribute_modifiers": [
            {
              "attribute": "range",
              "action": "add",
              "value": 250
            },
            {
              "attribute": "energy_per_shot",
              "action": "multiple",
              "value": 10
            }
          ]
        }
      }
    },
    {
      "id": "arcon:drone_body",
      "cost": 15,
      "hp": 5,
      "mass": 10,
      "size": [4, 4],
      "layer": "solid",
      "rotatable": false,
      "disabled": true,
      "components": {
        "mount": {
          "arc": 360,
          "attach_point": "standard_weapon_turret"
        }
      }
    },
    {
      "id": "arcon:pad_2x2",
      "cost": 36,
      "hp": 10,
      "mass": 30,
      "size": [2, 2],
      "layer": "solid",
      "disabled": true
    },
    {
      "id": "arcon:armor_heavy_2x2",
      "cost": 8,
      "hp": 64,
      "mass": 40,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x2",
      "cost": 4,
      "hp": 32,
      "mass": 20,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x1",
      "cost": 2,
      "hp": 16,
      "mass": 10,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x1",
      "cost": 4,
      "hp": 32,
      "mass": 20,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x1_angle",
      "cost": 1,
      "hp": 8,
      "mass": 5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x1_angle_back",
      "cost": 1,
      "hp": 8,
      "mass": 5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x2_angle",
      "cost": 8,
      "hp": 64,
      "mass": 40,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x2_angle_back",
      "cost": 8,
      "hp": 64,
      "mass": 40,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x2_front_1",
      "cost": 7,
      "hp": 56,
      "mass": 35,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x2_front_2",
      "cost": 6,
      "hp": 48,
      "mass": 30,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x2_front_1",
      "cost": 3,
      "hp": 24,
      "mass": 15,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x2_front_2",
      "cost": 2,
      "hp": 16,
      "mass": 10,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x2_back_1",
      "cost": 7,
      "hp": 56,
      "mass": 35,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x2_back_2",
      "cost": 6,
      "hp": 48,
      "mass": 30,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x2_back_1",
      "cost": 3,
      "hp": 24,
      "mass": 15,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x2_back_2",
      "cost": 2,
      "hp": 16,
      "mass": 10,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x2_curved",
      "cost": 8,
      "hp": 64,
      "mass": 40,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x1_curved",
      "cost": 2,
      "hp": 16,
      "mass": 10,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x2_curved",
      "cost": 2,
      "hp": 16,
      "mass": 10,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x2_angle_shadow",
      "cost": 8,
      "hp": 64,
      "mass": 40,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x2_shadow",
      "cost": 8,
      "hp": 64,
      "mass": 40,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x1_shadow",
      "cost": 4,
      "hp": 32,
      "mass": 20,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x1_shadow",
      "cost": 2,
      "hp": 16,
      "mass": 10,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x2_shadow",
      "cost": 4,
      "hp": 32,
      "mass": 20,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x2_curved_shadow",
      "cost": 8,
      "hp": 64,
      "mass": 40,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x1_angle_shadow",
      "cost": 1,
      "hp": 8,
      "mass": 5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x1_corner_shadow",
      "cost": 2,
      "hp": 16,
      "mass": 10,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x1_corner_inner_shadow",
      "cost": 2,
      "hp": 16,
      "mass": 10,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_2x1_curved_shadow",
      "cost": 2,
      "hp": 16,
      "mass": 10,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x2_curved_shadow",
      "cost": 2,
      "hp": 16,
      "mass": 10,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_heavy_1x2_front_1_shadow",
      "cost": 3,
      "hp": 24,
      "mass": 15,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_1x1",
      "cost": 10,
      "hp": 18,
      "mass": 1,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_1x2",
      "cost": 20,
      "hp": 36,
      "mass": 2,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_2x1",
      "cost": 20,
      "hp": 36,
      "mass": 2,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_1x1_angle",
      "cost": 5,
      "hp": 9,
      "mass": 0.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_1x1_angle_back",
      "cost": 5,
      "hp": 9,
      "mass": 0.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_2x2",
      "cost": 40,
      "hp": 72,
      "mass": 4,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_1x2_notch_1",
      "cost": 20,
      "hp": 36,
      "mass": 2,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_1x2_notch_2",
      "cost": 20,
      "hp": 36,
      "mass": 2,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_1x1_notch_1",
      "cost": 10,
      "hp": 18,
      "mass": 1,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_1x1_notch_2",
      "cost": 10,
      "hp": 18,
      "mass": 1,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_ultralight_1x1_spike",
      "cost": 5,
      "hp": 9,
      "mass": 0.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x2_side_bar",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x2_side_bar_filled",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x2_i_beam",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x2_corner4",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x2_end",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_corner1",
      "cost": 1,
      "hp": 5,
      "mass": 1.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_corner2",
      "cost": 1,
      "hp": 5,
      "mass": 1.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_corner3",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_hook",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_corner_back",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_2x2",
      "cost": 4,
      "hp": 20,
      "mass": 6,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x2",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1",
      "cost": 1,
      "hp": 5,
      "mass": 1.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_angle",
      "cost": 1,
      "hp": 5,
      "mass": 1.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_2x2_angle",
      "cost": 4,
      "hp": 20,
      "mass": 6,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_2x2_curved",
      "cost": 4,
      "hp": 20,
      "mass": 6,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_curved",
      "cost": 1,
      "hp": 5,
      "mass": 1.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_2x1_curved",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x2_curved",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_2x2_curved",
      "cost": 4,
      "hp": 20,
      "mass": 6,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_2x2_angle_shadow",
      "cost": 4,
      "hp": 20,
      "mass": 6,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_2x2_shadow",
      "cost": 4,
      "hp": 20,
      "mass": 6,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_2x1_shadow",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [2, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_shadow",
      "cost": 1,
      "hp": 5,
      "mass": 1.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x2_shadow",
      "cost": 2,
      "hp": 10,
      "mass": 3,
      "size": [1, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_2x2_curved_shadow",
      "cost": 4,
      "hp": 20,
      "mass": 6,
      "size": [2, 2],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_angle_shadow",
      "cost": 1,
      "hp": 5,
      "mass": 1.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_corner_shadow",
      "cost": 1,
      "hp": 5,
      "mass": 1.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:armor_volumetric_1x1_corner_inner_shadow",
      "cost": 1,
      "hp": 5,
      "mass": 1.5,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:energy_reactor_2x2",
      "cost": 100,
      "hp": 60,
      "mass": 100,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 62.5,
          "energy_capacity": 8000
        }
      }
    },
    {
      "id": "arcon:energy_reactor_1x2",
      "cost": 50,
      "hp": 30,
      "mass": 50,
      "size": [1, 2],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 15.5,
          "energy_capacity": 20000
        }
      }
    },
    {
      "id": "arcon:energy_reactor_2x1",
      "cost": 50,
      "hp": 30,
      "mass": 50,
      "size": [2, 1],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 15.5,
          "energy_capacity": 20000
        }
      }
    },
    {
      "id": "arcon:energy_reactor_1x1",
      "cost": 25,
      "hp": 15,
      "mass": 10,
      "size": [1, 1],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 10,
          "energy_capacity": 2000
        }
      }
    },
    {
      "id": "arcon:energy_solar_1x1",
      "cost": 4,
      "hp": 0,
      "mass": 2.5,
      "size": [1, 1],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 3,
          "energy_capacity": 0
        }
      }
    },
    {
      "id": "arcon:energy_solar_2x2",
      "cost": 16,
      "hp": 0,
      "mass": 10,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 12,
          "energy_capacity": 0
        }
      }
    },
    {
      "id": "arcon:energy_solar_3x3",
      "cost": 36,
      "hp": 0,
      "mass": 22.5,
      "size": [3, 3],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 27,
          "energy_capacity": 0
        }
      }
    },
    {
      "id": "arcon:energy_transfer",
      "cost": 30,
      "hp": 10,
      "mass": 30,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "transfer": {
          "rate": 60,
          "range": 800
        }
      }
    },
    {
      "id": "arcon:stasis_field",
      "cost": 25,
      "hp": 30,
      "mass": 6,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "hazard": {
          "hazards": [
            {
              "type": "stasis",
              "range": 290,
              "offset": [
                0, 100
              ],
              "decloak_user": true
            }
          ]
        },
        "cloak_disruption": {
          "decloak_rate": 0.06125
        }
      }
    },
    {
      "id": "arcon:supercapital_bridge",
      "cost": 100,
      "hp": 100,
      "mass": 500,
      "size": [4, 4],
      "layer": "solid",
      "disabled": true,
      "components": {
        "supercapital_bridge": {
          "limit_bonus": 500
        }
      }
    },
    {
      "id": "arcon:shield_generator_2x2",
      "cost": 50,
      "hp": 0,
      "mass": 40,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "shield": {
          "shield_generate": 1,
          "shield_capacity": 25,
          "energy_use": 110
        }
      }
    },
    {
      "id": "arcon:shield_generator_2x1",
      "cost": 30,
      "hp": 0,
      "mass": 1,
      "size": [2, 1],
      "layer": "solid",
      "components": {
        "shield": {
          "shield_generate": 0.1,
          "shield_capacity": 20,
          "energy_use": 9
        }
      }
    },
    {
      "id": "arcon:shield_generator_1x1",
      "cost": 10,
      "hp": 5,
      "mass": 5.5,
      "size": [1, 1],
      "layer": "solid",
      "components": {
        "shield": {
          "shield_generate": 0.04,
          "shield_capacity": 9,
          "energy_use": 0.5
        }
      }
    },
    {
      "id": "arcon:cloak_generator",
      "cost": 25,
      "hp": 5,
      "mass": 60,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "cloak": {
          "cloak_generate": 5.25,
          "energy_use": 23.75
        }
      }
    },
    {
      "id": "arcon:energy_battery_1x2",
      "cost": 20,
      "hp": 10,
      "mass": 20,
      "size": [1, 2],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 0,
          "energy_capacity": 16000
        }
      }
    },
    {
      "id": "arcon:energy_battery_1x1",
      "cost": 10,
      "hp": 5,
      "mass": 10,
      "size": [1, 1],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 0,
          "energy_capacity": 8000
        }
      }
    },
    {
      "id": "arcon:energy_battery_2x1",
      "cost": 20,
      "hp": 10,
      "mass": 20,
      "size": [2, 1],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 0,
          "energy_capacity": 16000
        }
      }
    },
    {
      "id": "arcon:energy_battery_2x2",
      "cost": 40,
      "hp": 20,
      "mass": 40,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "energy": {
          "energy_generate": 0,
          "energy_capacity": 32000
        }
      }
    },
    {
      "id": "arcon:thruster_ultraheavy_2x2",
      "cost": 80,
      "hp": 0,
      "mass": 700,
      "size": [2, 2],
      "layer": "solid",
      "rotatable": false,
      "disabled": true,
      "components": {
        "thruster": {
          "thrust": 1000,
          "energy_use": 30
        },
        "wing": {
          "turn_rate": 1
        }
      }
    },
    {
      "id": "arcon:thruster_bulk_2x2",
      "cost": 47,
      "hp": 0,
      "mass": 135,
      "size": [2, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "thruster": {
          "thrust": 271,
          "energy_use": 4
        },
        "wing": {
          "turn_rate": 1
        }
      }
    },
    {
      "id": "arcon:thruster_bulk_1x3",
      "cost": 35,
      "hp": 0,
      "mass": 100,
      "size": [1, 3],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "thruster": {
          "thrust": 200,
          "energy_use": 3
        },
        "wing": {
          "turn_rate": 1
        }
      }
    },
    {
      "id": "arcon:thruster_cruiser_1x3",
      "cost": 65,
      "hp": 0,
      "mass": 60,
      "size": [1, 3],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "thruster": {
          "thrust": 270,
          "energy_use": 13
        },
        "wing": {
          "turn_rate": 4
        }
      }
    },
    {
      "id": "arcon:thruster_cruiser_2x1",
      "cost": 44,
      "hp": 0,
      "mass": 40,
      "size": [2, 1],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "thruster": {
          "thrust": 180,
          "energy_use": 9
        },
        "wing": {
          "turn_rate": 4
        }
      }
    },
    {
      "id": "arcon:thruster_scout_1x2",
      "cost": 20,
      "hp": 0,
      "mass": 15,
      "size": [1, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "thruster": {
          "thrust": 90,
          "energy_use": 10
        },
        "wing": {
          "turn_rate": 1
        }
      }
    },
    {
      "id": "arcon:thruster_scout_2x1",
      "cost": 20,
      "hp": 0,
      "mass": 15,
      "size": [2, 1],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "thruster": {
          "thrust": 90,
          "energy_use": 10
        },
        "wing": {
          "turn_rate": 1
        }
      }
    },
    {
      "id": "arcon:thruster_legacy_engine06",
      "cost": 55,
      "hp": 0,
      "mass": 60,
      "size": [2, 2],
      "layer": "solid",
      "rotatable": false,
      "disabled": true,
      "components": {
        "thruster": {
          "thrust": 157,
          "energy_use": 25
        },
        "wing": {
          "turn_rate": 3
        }
      }
    },
    {
      "id": "arcon:thruster_fighter_1x2",
      "cost": 45,
      "hp": 0,
      "mass": 15,
      "size": [1, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "thruster": {
          "thrust": 135,
          "energy_use": 12
        },
        "wing": {
          "turn_rate": 1
        }
      }
    },
    {
      "id": "arcon:thruster_fighter_2x1",
      "cost": 45,
      "hp": 0,
      "mass": 15,
      "size": [2, 1],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "thruster": {
          "thrust": 135,
          "energy_use": 12
        },
        "wing": {
          "turn_rate": 1
        }
      }
    },
    {
      "id": "arcon:thruster_ultrafast_2x2",
      "cost": 145,
      "hp": 0,
      "mass": 80,
      "size": [2, 2],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "thruster": {
          "thrust": 900,
          "energy_use": 169
        },
        "wing": {
          "turn_rate": 4
        }
      }
    },
    {
      "id": "arcon:jump_generator",
      "cost": 50,
      "hp": 50,
      "mass": 15,
      "size": [2, 1],
      "layer": "solid",
      "rotatable": false,
      "components": {
        "jump_drive": {
          "jump_drives_count": 3,
          "jump_generate": 775,
          "energy_use": 10
        },
        "cloak_disruption": {
          "decloak_rate": 0.06125
        }
      }
    },
    {
      "id": "arcon:wing_2x2",
      "cost": 32,
      "hp": 16,
      "mass": 8,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "wing": {
          "turn_rate": 30
        }
      }
    },
    {
      "id": "arcon:wing_1x2",
      "cost": 16,
      "hp": 8,
      "mass": 4,
      "size": [1, 2],
      "layer": "solid",
      "components": {
        "wing": {
          "turn_rate": 15
        }
      }
    },
    {
      "id": "arcon:wing_2x1",
      "cost": 12,
      "hp": 6,
      "mass": 3,
      "size": [2, 1],
      "layer": "solid",
      "components": {
        "wing": {
          "turn_rate": 11.25
        }
      }
    },
    {
      "id": "arcon:wing_1x1_angle",
      "cost": 8,
      "hp": 4,
      "mass": 2,
      "size": [1, 1],
      "layer": "solid",
      "components": {
        "wing": {
          "turn_rate": 7.5
        }
      }
    },
    {
      "id": "arcon:wing_1x1_round",
      "cost": 8,
      "hp": 4,
      "mass": 2,
      "size": [1, 1],
      "layer": "solid",
      "components": {
        "wing": {
          "turn_rate": 7.5
        }
      }
    },
    {
      "id": "arcon:wing_1x1_notch",
      "cost": 4,
      "hp": 0,
      "mass": 0.1,
      "size": [1, 1],
      "layer": "solid",
      "components": {
        "wing": {
          "turn_rate": 3.15
        }
      }
    },
    {
      "id": "arcon:weapon_pd_beam",
      "cost": 5,
      "hp": 10,
      "mass": 10,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "instant",
          "projectile": "PDLaserBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true,
            "can_hit_missile": true
          },
          "attributes": {
            "reload_time": 40,
            "range": 400,
            "range_min": -1000,
            "projectile_speed": 2000,
            "energy_per_shot": 1100,
            "overshoot": 1,
            "damages": [
              {
                "damage_value": 18,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_pd_buckshot",
      "cost": 5,
      "hp": 10,
      "mass": 30,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "HeavyPDBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true,
            "can_hit_missile": true
          },
          "attributes": {
            "reload_time": 52,
            "range": 405,
            "range_min": -1000,
            "projectile_speed": 55,
            "energy_per_shot": 4000,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 60,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_fusion_ring_dispenser",
      "cost": 5,
      "hp": 10,
      "mass": 20,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "RingBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 80,
            "range": 330,
            "range_min": -1000,
            "projectile_speed": 35,
            "energy_per_shot": 4000,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 100,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_legacy_kinetic_ram",
      "cost": 5,
      "hp": 10,
      "mass": 10,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "disabled": true,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "RamBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 96,
            "range": 125,
            "range_min": -1000,
            "projectile_speed": 35,
            "energy_per_shot": 1200,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 80,
                "damage_type": "genetic"
              },
              {
                "damage_value": 300,
                "damage_type": "force"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_torpedo_launcher",
      "cost": 5,
      "hp": 15,
      "mass": 10,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "TorpBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 52,
            "range": 1250,
            "range_min": -1000,
            "projectile_speed": 16,
            "energy_per_shot": 1100,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 24,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_missile_launcher",
      "cost": 5,
      "hp": 10,
      "mass": 20,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "MissileBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 31,
            "range": 1000,
            "range_min": -1000,
            "projectile_speed": 19,
            "energy_per_shot": 2650,
            "overshoot": 1.5,
            "damages": [
              {
                "damage_value": 27,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_artillery_launcher",
      "cost": 5,
      "hp": 10,
      "mass": 65,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile_exact",
          "projectile": "ArtilleryBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true,
            "can_hit_cloak": true
          },
          "attributes": {
            "reload_time": 89,
            "range": 1700,
            "range_min": 675,
            "projectile_speed": 9,
            "energy_per_shot": 4100,
            "blast_radius": 210,
            "overshoot": 1,
            "damages": [
              {
                "damage_value": 120,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_sidewinder_launcher",
      "cost": 10,
      "hp": 15,
      "mass": 7.5,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "SidewinderBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 80,
            "range": 800,
            "range_min": -1000,
            "projectile_speed": 20,
            "energy_per_shot": 1950,
            "overshoot": 1.5,
            "damages": [
              {
                "damage_value": 38,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_plasma_double_cannon",
      "cost": 5,
      "hp": 10,
      "mass": 40,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "PlasmaBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 52,
            "range": 820,
            "range_min": -1000,
            "projectile_speed": 20,
            "energy_per_shot": 4800,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 53,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_plasma_cannon",
      "cost": 5,
      "hp": 10,
      "mass": 10,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "disabled": true,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "LightPlasmaBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 64,
            "range": 950,
            "range_min": -1000,
            "projectile_speed": 22,
            "energy_per_shot": 1700,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 26,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_light_beam",
      "cost": 5,
      "hp": 10,
      "mass": 5,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "instant",
          "projectile": "LightBeam",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 7,
            "range": 350,
            "range_min": -1000,
            "projectile_speed": 15,
            "energy_per_shot": 560,
            "overshoot": 1,
            "damages": [
              {
                "damage_value": 9,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_heavy_beam",
      "cost": 5,
      "hp": 10,
      "mass": 40,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "instant",
          "projectile": "HeavyBeam",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 40,
            "range": 610,
            "range_min": -1000,
            "projectile_speed": 2000,
            "energy_per_shot": 5000,
            "overshoot": 1,
            "damages": [
              {
                "damage_value": 38,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_flak_cannon",
      "cost": 5,
      "hp": 10,
      "mass": 30,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile_exact",
          "projectile": "FlackBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true,
            "can_hit_cloak": true
          },
          "attributes": {
            "reload_time": 16,
            "range": 460,
            "range_min": -1000,
            "projectile_speed": 27,
            "energy_per_shot": 1600,
            "blast_radius": 210,
            "overshoot": 1,
            "damages": [
              {
                "damage_value": 18,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_legacy_sniper_gun",
      "cost": 5,
      "hp": 10,
      "mass": 80,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "disabled": true,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "SniperLaser",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true,
            "can_hit_cloak": true
          },
          "attributes": {
            "reload_time": 120,
            "range": 1700,
            "range_min": 300,
            "projectile_speed": 15,
            "energy_per_shot": 100000,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 500,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_emp_gun",
      "cost": 5,
      "hp": 10,
      "mass": 2,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "EMPOrb",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 61,
            "range": 620,
            "range_min": -1000,
            "projectile_speed": 36,
            "energy_per_shot": 3600,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 24,
                "damage_type": "genetic"
              },
              {
                "damage_value": 4200,
                "damage_type": "capacity"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_orb_dispenser",
      "cost": 5,
      "hp": 10,
      "mass": 20,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "EMPOrb2",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 32,
            "range": 1400,
            "range_min": 450,
            "projectile_speed": 44,
            "energy_per_shot": 1400,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 8,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_phase_bomb_launcher",
      "cost": 5,
      "hp": 10,
      "mass": 22,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile_exact",
          "projectile": "Bomb",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true,
            "can_hit_cloak": true
          },
          "attributes": {
            "reload_time": 57,
            "range": 650,
            "range_min": -1000,
            "projectile_speed": 16,
            "energy_per_shot": 3500,
            "blast_radius": 100,
            "overshoot": 1,
            "damages": [
              {
                "damage_value": 150,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_burst_autocannon",
      "cost": 10,
      "hp": 15,
      "mass": 8,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "AutoBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 42,
            "range": 560,
            "range_min": -1000,
            "projectile_speed": 40,
            "energy_per_shot": 1775,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 40,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_legacy_shotgun",
      "cost": 5,
      "hp": 10,
      "mass": 15,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "disabled": true,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "AutoBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 96,
            "range": 450,
            "range_min": -1000,
            "projectile_speed": 30,
            "energy_per_shot": 1775,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 72,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_legacy_machinegun",
      "cost": 5,
      "hp": 10,
      "mass": 10,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "disabled": true,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "MachineBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 5,
            "range": 780,
            "range_min": -1000,
            "projectile_speed": 100,
            "energy_per_shot": 200,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 4,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_arcing_tesla_projector",
      "cost": 5,
      "hp": 10,
      "mass": 40,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "instant",
          "projectile": "TeslaBolt",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true
          },
          "attributes": {
            "reload_time": 10,
            "range": 540,
            "range_min": -1000,
            "projectile_speed": 2000,
            "energy_per_shot": 1375,
            "overshoot": 1,
            "damages": [
              {
                "damage_value": 11,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_kinetic_wave_pull",
      "cost": 5,
      "hp": 10,
      "mass": 10,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "WavePullArch",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true,
            "can_hit_cloak": true
          },
          "attributes": {
            "reload_time": 64,
            "range": 850,
            "range_min": -1000,
            "projectile_speed": 35,
            "energy_per_shot": 1200,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 4,
                "damage_type": "genetic"
              },
              {
                "damage_value": -0.55,
                "damage_type": "force"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_kinetic_wave_push",
      "cost": 5,
      "hp": 10,
      "mass": 10,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "WavePushArch",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true,
            "can_hit_cloak": true
          },
          "attributes": {
            "reload_time": 64,
            "range": 775,
            "range_min": -1000,
            "projectile_speed": 35,
            "energy_per_shot": 1200,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 5,
                "damage_type": "genetic"
              },
              {
                "damage_value": 0.55,
                "damage_type": "force"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weapon_flamethrower",
      "cost": 3,
      "hp": 10,
      "mass": 14,
      "size": [2, 2],
      "layer": "attachment",
      "rotatable": false,
      "components": {
        "weapon": {
          "class": "projectile",
          "projectile": "FlameBullet",
          "attach_point": "standard_weapon_turret",
          "targeting": {
            "can_hit_unit": true,
            "can_hit_cloak": true
          },
          "attributes": {
            "reload_time": 8,
            "range": 360,
            "range_min": -1000,
            "projectile_speed": 16,
            "energy_per_shot": 400,
            "overshoot": 1.3,
            "damages": [
              {
                "damage_value": 3,
                "damage_type": "genetic"
              },
              {
                "damage_value": 21,
                "damage_type": "burn"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:warhead_blast",
      "cost": 6,
      "hp": 0,
      "mass": 10,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "weapon": {
          "life": 16,
          "attributes": {
            "blast_radius": 390,
            "damages": [
              {
                "damage_value": 16,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:warhead_emp",
      "cost": 15,
      "hp": 0,
      "mass": 5,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "weapon": {
          "life": 16,
          "attributes": {
            "blast_radius": 300,
            "damages": [
              {
                "damage_value": 6000,
                "damage_type": "capacity"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:warhead_flame",
      "cost": 5,
      "hp": 0,
      "mass": 5,
      "size": [2, 2],
      "layer": "solid",
      "disabled": true,
      "components": {
        "weapon": {
          "life": 25,
          "attributes": {
            "blast_radius": 250,
            "damages": [
              {
                "damage_value": 5,
                "damage_type": "genetic"
              },
              {
                "damage_value": 50,
                "damage_type": "burn"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:warhead_shaped",
      "cost": 5,
      "hp": 25,
      "mass": 25,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "weapon": {
          "shaped": true,
          "attributes": {
            "blast_radius": 110,
            "damages": [
              {
                "damage_value": 90,
                "damage_type": "genetic"
              }
            ]
          }
        }
      }
    },
    {
      "id": "arcon:weaponmod_range",
      "cost": 20,
      "hp": 10,
      "mass": 30,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "weapon_modifier": {
          "pattern": "standard_2x2_mod",
          "share_penalty": 0.85,
          "attribute_modifiers": [
            {
              "attribute": "range",
              "action": "multiple",
              "value": 20
            },
            {
              "attribute": "range",
              "action": "add",
              "value": 80
            },
            {
              "attribute": "reload_time",
              "action": "multiple",
              "value": 30
            }
          ]
        }
      }
    },
    {
      "id": "arcon:weaponmod_damage",
      "cost": 10,
      "hp": 10,
      "mass": 10,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "weapon_modifier": {
          "pattern": "standard_2x2_mod",
          "share_penalty": 0.85,
          "attribute_modifiers": [
            {
              "attribute": "damage",
              "action": "multiple",
              "value": 30
            },
            {
              "attribute": "reload_time",
              "action": "multiple",
              "value": 15
            }
          ]
        }
      }
    },
    {
      "id": "arcon:weaponmod_reload",
      "cost": 25,
      "hp": 10,
      "mass": 10,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "weapon_modifier": {
          "pattern": "standard_2x2_mod",
          "share_penalty": 0.85,
          "attribute_modifiers": [
            {
              "attribute": "reload_time",
              "action": "multiple",
              "value": -34
            }
          ]
        }
      }
    },
    {
      "id": "arcon:weaponmod_speed",
      "cost": 5,
      "hp": 5,
      "mass": 1,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "weapon_modifier": {
          "pattern": "standard_2x2_mod",
          "share_penalty": 0.85,
          "attribute_modifiers": [
            {
              "attribute": "range",
              "action": "add",
              "value": 50
            },
            {
              "attribute": "projectile_speed",
              "action": "multiple",
              "value": 50
            },
            {
              "attribute": "reload_time",
              "action": "multiple",
              "value": 15
            }
          ]
        }
      }
    },
    {
      "id": "arcon:weaponmod_energy",
      "cost": 5,
      "hp": 10,
      "mass": 5,
      "size": [2, 2],
      "layer": "solid",
      "components": {
        "weapon_modifier": {
          "pattern": "standard_2x2_mod",
          "share_penalty": 0.85,
          "attribute_modifiers": [
            {
              "attribute": "projectile_speed",
              "action": "multiple",
              "value": -8
            },
            {
              "attribute": "energy_per_shot",
              "action": "multiple",
              "value": -26.5
            }
          ]
        }
      }
    },
    {
      "id": "arcon:weaponmod_ai_1",
      "cost": 5,
      "hp": 0,
      "mass": 1,
      "size": [1, 1],
      "layer": "solid",
      "disabled": true
    },
    {
      "id": "arcon:weaponmod_ai_2",
      "cost": 1,
      "hp": 4,
      "mass": 1,
      "size": [1, 1],
      "layer": "solid"
    },
    {
      "id": "arcon:weaponmod_ai_3",
      "cost": 50,
      "hp": 0,
      "mass": 10,
      "size": [1, 1],
      "layer": "solid",
      "disabled": true
    },
    {
      "id": "arcon:weaponmod_ai_4",
      "cost": 50,
      "hp": 0,
      "mass": 10,
      "size": [1, 1],
      "layer": "solid",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_1",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_2",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_3",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_4",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_5",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_6",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_7",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_8",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_9",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_10",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_11",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_12",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_13",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_14",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_15",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_16",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_17",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_18",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_19",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_20",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_21",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_22",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_23",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_24",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_25",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_26",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_27",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_28",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_symbol_29",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_30",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_31",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_32",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_33",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_34",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_35",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_36",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_37",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_38",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_39",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_symbol_40",
      "size": [2, 2],
      "layer": "decal",
      "disabled": true
    },
    {
      "id": "arcon:decal_stripe_1x1",
      "size": [1, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_1x1_corner",
      "size": [1, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_1x2",
      "size": [1, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_2x1",
      "size": [2, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_2x2",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_2x2_corner",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_2x2_round",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_double_2x1",
      "size": [2, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_double_2x2",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_1x1_slash",
      "size": [1, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_1x1_slash_inside",
      "size": [1, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_2x2_slash",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_2x2_end",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_1x1_fill1",
      "size": [1, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_1x1_fill2",
      "size": [1, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_1x1_fill3",
      "size": [1, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_1x1_fill4",
      "size": [1, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_1x1_fill5",
      "size": [1, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_stripe_1x1_fill6",
      "size": [1, 1],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_a",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_b",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_c",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_d",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_e",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_f",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_g",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_h",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_i",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_j",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_k",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_l",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_m",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_n",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_o",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_p",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_q",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_r",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_s",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_t",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_u",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_v",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_w",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_x",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_y",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_z",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_pound",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_dot",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_0",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_1",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_2",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_3",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_4",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_5",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_6",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_7",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_8",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:decal_letter_9",
      "size": [2, 2],
      "layer": "decal"
    },
    {
      "id": "arcon:faction_insignia_1",
      "cost": 1,
      "hp": 4,
      "mass": 1,
      "size": [2, 2],
      "layer": "solid",
      "disabled": true
    },
    {
      "id": "arcon:faction_insignia_2",
      "cost": 1,
      "hp": 4,
      "mass": 1,
      "size": [2, 2],
      "layer": "solid",
      "disabled": true
    },
    {
      "id": "arcon:faction_insignia_3",
      "cost": 1,
      "hp": 4,
      "mass": 1,
      "size": [2, 2],
      "layer": "solid",
      "disabled": true
    },
    {
      "id": "arcon:faction_insignia_4",
      "cost": 1,
      "hp": 4,
      "mass": 1,
      "size": [2, 2],
      "layer": "solid",
      "disabled": true
    },
    {
      "id": "arcon:faction_insignia_5",
      "cost": 1,
      "hp": 4,
      "mass": 1,
      "size": [2, 2],
      "layer": "solid",
      "disabled": true
    },
    {
      "id": "arcon:faction_insignia_6",
      "cost": 1,
      "hp": 4,
      "mass": 1,
      "size": [2, 2],
      "layer": "solid",
      "disabled": true
    },
    {
      "id": "arcon:faction_insignia_7",
      "cost": 1,
      "hp": 4,
      "mass": 1,
      "size": [2, 2],
      "layer": "solid",
      "disabled": true
    }
  ];
  window.partsV2Describer = []; 

}.call(this));
