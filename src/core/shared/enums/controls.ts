
export enum CONTROLS {
    NEXT_CAMERA,
    LOOK_LEFT_RIGHT,
    LOOK_UP_DOWN,
    LOOK_UP_ONLY,
    LOOK_DOWN_ONLY,
    LOOK_LEFT_ONLY,
    LOOK_RIGHT_ONLY,
    CINEMATIC_SLOW_MO,
    FLY_UP_DOWN,
    FLY_LEFT_RIGHT,
    SCRIPTED_FLY_Z_UP,
    SCRIPTED_FLY_Z_DOWN,
    WEAPON_WHEEL_UP_DOWN,
    WEAPON_WHEEL_LEFT_RIGHT,
    WEAPON_WHEEL_NEXT,
    WEAPON_WHEEL_PREV,
    SELECT_NEXT_WEAPON,
    SELECT_PREV_WEAPON,
    SKIP_CUTSCENE,
    CHARACTER_WHEEL,
    MULTIPLAYER_INFO,
    SPRINT,
    JUMP,
    ENTER,
    ATTACK,
    AIM,
    LOOK_BEHIND,
    PHONE,
    SPECIAL_ABILITY,
    SPECIAL_ABILITY_SECONDARY,
    MOVE_LEFT_RIGHT,
    MOVE_UP_DOWN,
    MOVE_UP_ONLY,
    MOVE_DOWN_ONLY,
    MOVE_LEFT_ONLY,
    MOVE_RIGHT_ONLY,
    DUCK,
    SELECT_WEAPON,
    PICKUP,
    SNIPER_ZOOM,
    SNIPER_ZOOM_IN_ONLY,
    SNIPER_ZOOM_OUT_ONLY,
    SNIPER_ZOOM_IN_SECONDARY,
    SNIPER_ZOOM_OUT_SECONDARY,
    COVER,
    RELOAD,
    TALK,
    DETONATE,
    HUD_SPECIAL,
    ARREST,
    ACCURATE_AIM,
    CONTEXT,
    CONTEXT_SECONDARY,
    WEAPON_SPECIAL,
    WEAPON_SPECIAL2,
    DIVE,
    DROP_WEAPON,
    DROP_AMMO,
    THROW_GRENADE,
    VEHICLE_MOVE_LEFT_RIGHT,
    VEHICLE_MOVE_UP_DOWN,
    VEHICLE_MOVE_UP_ONLY,
    VEHICLE_MOVE_DOWN_ONLY,
    VEHICLE_MOVE_LEFT_ONLY,
    VEHICLE_MOVE_RIGHT_ONLY,
    VEHICLE_SPECIAL,
    VEHICLE_GUN_LEFT_RIGHT,
    VEHICLE_GUN_UP_DOWN,
    VEHICLE_AIM,
    VEHICLE_ATTACK,
    VEHICLE_ATTACK2,
    VEHICLE_ACCELERATE,
    VEHICLE_BRAKE,
    VEHICLE_DUCK,
    VEHICLE_HEADLIGHT,
    VEHICLE_EXIT,
    VEHICLE_HANDBRAKE,
    VEHICLE_HOTWIRE_LEFT,
    VEHICLE_HOTWIRE_RIGHT,
    VEHICLE_LOOK_BEHIND,
    VEHICLE_CIN_CAM,
    VEHICLE_NEXT_RADIO,
    VEHICLE_PREV_RADIO,
    VEHICLE_NEXT_RADIO_TRACK,
    VEHICLE_PREV_RADIO_TRACK,
    VEHICLE_RADIO_WHEEL,
    VEHICLE_HORN,
    VEHICLE_FLY_THROTTLE_UP,
    VEHICLE_FLY_THROTTLE_DOWN,
    VEHICLE_FLY_YAW_LEFT,
    VEHICLE_FLY_YAW_RIGHT,
    VEHICLE_PASSENGER_AIM,
    VEHICLE_PASSENGER_ATTACK,
    VEHICLE_SPECIAL_ABILITY_FRANKLIN,
    VEHICLE_STUNT_UP_DOWN,
    VEHICLE_CINEMATIC_UP_DOWN,
    VEHICLE_CINEMATIC_UP_ONLY,
    VEHICLE_CINEMATIC_DOWN_ONLY,
    VEHICLE_CINEMATIC_LEFT_RIGHT,
    VEHICLE_SELECT_NEXT_WEAPON,
    VEHICLE_SELECT_PREV_WEAPON,
    VEHICLE_ROOF,
    VEHICLE_JUMP,
    VEHICLE_GRAPPLING_HOOK,
    VEHICLE_SHUFFLE,
    VEHICLE_DROP_PROJECTILE,
    VEHICLE_MOUSE_CONTROL_OVERRIDE,
    VEHICLE_FLY_ROLL_LEFT_RIGHT,
    VEHICLE_FLY_ROLL_LEFT_ONLY,
    VEHICLE_FLY_ROLL_RIGHT_ONLY,
    VEHICLE_FLY_PITCH_UP_DOWN,
    VEHICLE_FLY_PITCH_UP_ONLY,
    VEHICLE_FLY_PITCH_DOWN_ONLY,
    VEHICLE_FLY_UNDER_CARRIAGE,
    VEHICLE_FLY_ATTACK,
    VEHICLE_FLY_SELECT_NEXT_WEAPON,
    VEHICLE_FLY_SELECT_PREV_WEAPON,
    VEHICLE_FLY_SELECT_TARGET_LEFT,
    VEHICLE_FLY_SELECT_TARGET_RIGHT,
    VEHICLE_FLY_VERTICAL_FLIGHT_MODE,
    VEHICLE_FLY_DUCK,
    VEHICLE_FLY_ATTACK_CAMERA,
    VEHICLE_FLY_MOUSE_CONTROL_OVERRIDE,
    VEHICLE_SUB_TURN_LEFT_RIGHT,
    VEHICLE_SUB_TURN_LEFT_ONLY,
    VEHICLE_SUB_TURN_RIGHT_ONLY,
    VEHICLE_SUB_PITCH_UP_DOWN,
    VEHICLE_SUB_PITCH_UP_ONLY,
    VEHICLE_SUB_PITCH_DOWN_ONLY,
    VEHICLE_SUB_THROTTLE_UP,
    VEHICLE_SUB_THROTTLE_DOWN,
    VEHICLE_SUB_ASCEND,
    VEHICLE_SUB_DESCEND,
    VEHICLE_SUB_TURN_HARD_LEFT,
    VEHICLE_SUB_TURN_HARD_RIGHT,
    VEHICLE_SUBMOUSE_CONTROL_OVERRIDE,
    VEHICLE_PUSHBIKE_PEDAL,
    VEHICLE_PUSHBIKE_SPRINT,
    VEHICLE_PUSHBIKE_FRONT_BRAKE,
    VEHICLE_PUSHBIKE_REAR_BRAKE,
    MELEE_ATTACK_LIGHT,
    MELEE_ATTACK_HEAVY,
    MELEE_ATTACK_ALTERNATE,
    MELEE_BLOCK,
    PARACHUTE_DEPLOY,
    PARACHUTE_DETACH,
    PARACHUTE_TURN_LEFT_RIGHT,
    PARACHUTE_TURN_LEFT_ONLY,
    PARACHUTE_TURN_RIGHT_ONLY,
    PARACHUTE_PITCH_UP_DOWN,
    PARACHUTE_PITCH_UP_ONLY,
    PARACHUTE_PITCH_DOWN_ONLY,
    PARACHUTE_BRAKE_LEFT,
    PARACHUTE_BRAKE_RIGHT,
    PARACHUTE_SMOKE,
    PARACHUTE_PRECISION_LANDING,
    MAP,
    SELECT_WEAPON_UNARMED,
    SELECT_WEAPON_MELEE,
    SELECT_WEAPON_HANDGUN,
    SELECT_WEAPON_SHOTGUN,
    SELECT_WEAPON_SMG,
    SELECT_WEAPON_AUTO_RIFLE,
    SELECT_WEAPON_SNIPER,
    SELECT_WEAPON_HEAVY,
    SELECT_WEAPON_SPECIAL,
    SELECT_CHARACTER_MICHAEL,
    SELECT_CHARACTER_FRANKLIN,
    SELECT_CHARACTER_TREVOR,
    SELECT_CHARACTER_MULTIPLAYER,
    SAVE_REPLAY_CLIP,
    SPECIAL_ABILITY_PC,
    PHONE_UP,
    PHONE_DOWN,
    PHONE_LEFT,
    PHONE_RIGHT,
    PHONE_SELECT,
    PHONE_CANCEL,
    PHONE_OPTION,
    PHONE_EXTRA_OPTION,
    PHONE_SCROLL_FORWARD,
    PHONE_SCROLL_BACKWARD,
    PHONE_CAMERA_FOCUS_LOCK,
    PHONE_CAMERA_GRID,
    PHONE_CAMERA_SELFIE,
    PHONE_CAMERA_DOF,
    PHONE_CAMERA_EXPRESSION,
    FRONTEND_DOWN,
    FRONTEND_UP,
    FRONTEND_LEFT,
    FRONTEND_RIGHT,
    FRONTEND_RDOWN,
    FRONTEND_RUP,
    FRONTEND_RLEFT,
    FRONTEND_RRIGHT,
    FRONTEND_AXIS_X,
    FRONTEND_AXIS_Y,
    FRONTEND_RIGHT_AXIS_X,
    FRONTEND_RIGHT_AXIS_Y,
    FRONTEND_PAUSE,
    FRONTEND_PAUSE_ALTERNATE,
    FRONTEND_ACCEPT,
    FRONTEND_CANCEL,
    FRONTEND_X,
    FRONTEND_Y,
    FRONTEND_LB,
    FRONTEND_RB,
    FRONTEND_LT,
    FRONTEND_RT,
    FRONTEND_LS,
    FRONTEND_RS,
    FRONTEND_LEADERBOARD,
    FRONTEND_SOCIAL_CLUB,
    FRONTEND_SOCIAL_CLUB_SECONDARY,
    FRONTEND_DELETE,
    FRONTEND_ENDSCREEN_ACCEPT,
    FRONTEND_ENDSCREEN_EXPAND,
    FRONTEND_SELECT,
    SCRIPT_LEFT_AXIS_X,
    SCRIPT_LEFT_AXIS_Y,
    SCRIPT_RIGHT_AXIS_X,
    SCRIPT_RIGHT_AXIS_Y,
    SCRIPT_RUP,
    SCRIPT_RDOWN,
    SCRIPT_RLEFT,
    SCRIPT_RRIGHT,
    SCRIPT_LB,
    SCRIPT_RB,
    SCRIPT_LT,
    SCRIPT_RT,
    SCRIPT_LS,
    SCRIPT_RS,
    SCRIPT_PAD_UP,
    SCRIPT_PAD_DOWN,
    SCRIPT_PAD_LEFT,
    SCRIPT_PAD_RIGHT,
    SCRIPT_SELECT,
    CURSOR_ACCEPT,
    CURSOR_CANCEL,
    CURSOR_X,
    CURSOR_Y,
    CURSOR_SCROLL_UP,
    CURSOR_SCROLL_DOWN,
    ENTER_CHEAT_CODE,
    INTERACTION_MENU,
    MP_TEXT_CHAT_ALL,
    MP_TEXT_CHAT_TEAM,
    MP_TEXT_CHAT_FRIENDS,
    MP_TEXT_CHAT_CREW,
    PUSH_TO_TALK,
    CREATOR_LS,
    CREATOR_RS,
    CREATOR_LT,
    CREATOR_RT,
    CREATOR_MENU_TOGGLE,
    CREATOR_ACCEPT,
    CREATOR_DELETE,
    ATTACK_2,
    RAPPEL_JUMP,
    RAPPEL_LONG_JUMP,
    RAPPEL_SMASH_WINDOW,
    PREV_WEAPON,
    NEXT_WEAPON,
    MELEE_ATTACK1,
    MELEE_ATTACK2,
    WHISTLE,
    MOVE_LEFT,
    MOVE_RIGHT,
    MOVE_UP,
    MOVE_DOWN,
    LOOK_LEFT,
    LOOK_RIGHT,
    LOOK_UP,
    LOOK_DOWN,
    SNIPER_ZOOM_IN,
    SNIPER_ZOOM_OUT,
    SNIPER_ZOOM_IN_ALTERNATE,
    SNIPER_ZOOM_OUT_ALTERNATE,
    VEHICLE_MOVE_LEFT,
    VEHICLE_MOVE_RIGHT,
    VEHICLE_MOVE_UP,
    VEHICLE_MOVE_DOWN,
    VEHICLE_GUN_LEFT,
    VEHICLE_GUN_RIGHT,
    VEHICLE_GUN_UP,
    VEHICLE_GUN_DOWN,
    VEHICLE_LOOK_LEFT,
    VEHICLE_LOOK_RIGHT,
    REPLAY_START_STOP_RECORDING,
    REPLAY_START_STOP_RECORDING_SECONDARY,
    SCALED_LOOK_LEFT_RIGHT,
    SCALED_LOOK_UP_DOWN,
    SCALED_LOOK_UP_ONLY,
    SCALED_LOOK_DOWN_ONLY,
    SCALED_LOOK_LEFT_ONLY,
    SCALED_LOOK_RIGHT_ONLY,
    REPLAY_MARKER_DELETE,
    REPLAY_CLIP_DELETE,
    REPLAY_PAUSE,
    REPLAY_REWIND,
    REPLAY_FFWD,
    REPLAY_NEWMARKER,
    REPLAY_RECORD,
    REPLAY_SCREENSHOT,
    REPLAY_HIDEHUD,
    REPLAY_STARTPOINT,
    REPLAY_ENDPOINT,
    REPLAY_ADVANCE,
    REPLAY_BACK,
    REPLAY_TOOLS,
    REPLAY_RESTART,
    REPLAY_SHOWHOTKEY,
    REPLAY_CYCLE_MARKER_LEFT,
    REPLAY_CYCLE_MARKER_RIGHT,
    REPLAY_FOV_INCREASE,
    REPLAY_FOV_DECREASE,
    REPLAY_CAMERA_UP,
    REPLAY_CAMERA_DOWN,
    REPLAY_SAVE,
    REPLAY_TOGGLETIME,
    REPLAY_TOGGLETIPS,
    REPLAY_PREVIEW,
    REPLAY_TOGGLE_TIMELINE,
    REPLAY_TIMELINE_PICKUP_CLIP,
    REPLAY_TIMELINE_DUPLICATE_CLIP,
    REPLAY_TIMELINE_PLACE_CLIP,
    REPLAY_CTRL,
    REPLAY_TIMELINE_SAVE,
    REPLAY_PREVIEW_AUDIO,
    VEHICLE_DRIVE_LOOK,
    VEHICLE_DRIVE_LOOK2,
    VEHICLE_FLY_ATTACK2,
    RADIO_WHEEL_UP_DOWN,
    RADIO_WHEEL_LEFT_RIGHT,
    VEHICLE_SLOW_MO_UP_DOWN,
    VEHICLE_SLOW_MO_UP_ONLY,
    VEHICLE_SLOW_MO_DOWN_ONLY,
    VEHICLE_HYDRAULICS_CONTROL_TOGGLE,
    VEHICLE_HYDRAULICS_CONTROL_LEFT,
    VEHICLE_HYDRAULICS_CONTROL_RIGHT,
    VEHICLE_HYDRAULICS_CONTROL_UP,
    VEHICLE_HYDRAULICSVCONTROL_DOWN,
    VEHICLE_HYDRAULICS_CONTROL_LEFT_RIGHT,
    VEHICLE_HYDRAULICS_CONTROL_UPDOWN,
    SWITCH_VISOR,
    VEHICLE_MELEE_HOLD,
    VEHICLE_MELEE_LEFT,
    VEHICLE_MELEE_RIGHT,
    MAP_POINT_OF_INTEREST,
    REPLAY_SNAPMATIC_PHOTO,
    VEHICLE_CAR_JUMP,   
    VEHICLE_ROCKET_BOOST,
    VEHICLE_PARACHUTE,
    VEHICLE_BIKE_WINGS,
    VEHICLE_FLY_BOMBBAY,
    VEHICLE_FLY_COUNTER,
    VEHICLE_FLY_TRANSFORM,
    QUAD_LOCO_REVERSE,
    RESPAWN_FASTER,
    HUDMARKER_SELECT,
}
