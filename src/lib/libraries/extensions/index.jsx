/* eslint-disable max-len */
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {APP_NAME} from '../../brand';

import p5noiseIconURL from './p5-noise/48d03d1d2794e30b221465fc07da79f7.png';
import p5noiseInsetIconURL from './p5-noise/icon.svg';
import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';
import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import jgDebuggingIcon from './penguinmod/extensions/debugging.svg';
import posenet4scratchIcon from './izum00/posenet4scratch/icon.png';
import posenet4scratchThumb from './izum00/posenet4scratch/thumb.png';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import animatedTextIconURL from './penguinmod/extensions/text extension.png';
import animatedTextInsetIconURL from './penguinmod/extensions/text extension small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

// turbowarp & gallery icons
import twIcon from './tw/tw.svg';
import galleryIcon from './gallery/gallery.svg';
import customExtensionIcon from './custom/custom.svg';
import turbowarpIcon from './penguinmod/extensions/turbowarp_icon.svg';
import penguinmodLibraryExtensionIcon from './penguinmod/library.svg';
import sharkpoolGalleryIcon from './penguinmod/sharkpool-library.svg';

import ExtForgeIcon from './penguinmod/extforge.svg';
import turboBuilderIcon from './penguinmod/turbobuilder.png';
import turboBuilderDevIcon from './penguinmod/turbobuilder-dev.png';

import filesExtensionIcon from './penguinmod/extensions/files.svg';
import jgJSONExtensionIcon from './penguinmod/extensions/json.png';
import jgTailgatingExtensionIcon from './penguinmod/extensions/tailgating.png';
import jgRuntimeExtensionIcon from './penguinmod/extensions/runtime.svg';
import jgPrismExtensionIcon from './penguinmod/extensions/prism.png';

import jwProtoExtensionIcon from './penguinmod/extensions/proto.svg';
import jwUniteExtensionIcon from './penguinmod/extensions/Unite.png';
import jwXmlExtensionIcon from './penguinmod/extensions/xml.png';

import jwStructsExtensionIcon from './penguinmod/extensions/ooplogo.png';

import jwArrayExtensionThumb from './penguinmod/extensions/jwArray.svg';
import jwTargetsExtensionThumb from './penguinmod/extensions/jwTargets.svg';
import jwNumExtensionThumb from './penguinmod/extensions/jwNum.svg';
import jwColorExtensionThumb from './penguinmod/extensions/jwColor.svg';
import jwVectorExtensionThumb from './penguinmod/extensions/jwVector.svg';

import iygPerlinNoiseExtensionIcon from './penguinmod/extensions/perlinnoisebanner.png';

// thank yo godslayerakp for makin pmCamera :good:
import pmCameraExtensionIcon from './penguinmod/extensions/pmcamera_thumbnail.png';

// cl waw
// import cloudlinkThumb from './penguinmod/extensions/cloudlinkThumb.png';
import cloudlinkIcon from './penguinmod/extensions/cloudlinkIcon.svg';

// thx jeremey
import canvasExtensionBanner from './penguinmod/extensions/CanvasExtensionMenu.png';
import canvasExtensionIcon from './penguinmod/extensions/CanvasSmall.png';

// griffpatch stuff that hopefully we can keep pls plsplspl !!S!
import griffpatchPhysicsThumb from './penguinmod/extensions/griffpatch_physics.png';
import griffpatchPhysicsIcon from './penguinmod/extensions/griffpatch_physicsIcon.svg';

import gp from './penguinmod/extensions/gamepad.svg';
import clippingblending from './penguinmod/extensions/clippingblending.svg';

import pointerlockThumb from './penguinmod/extensions/pointerlock.png';
import cursorThumb from './penguinmod/extensions/cursor.svg';

// LilyMakesThings 🙏
// import lmsMcUtilsIcon from './penguinmod/extensions/mcutils.png';
import lilyTempVariablesExtensionIcon from './penguinmod/orgtw/TempVariables2.svg';

// more icons so they arent just red when the extension color is not red
import gsaTempVariablesExtensionIcon from './penguinmod/extensions/tempvariables.svg';
import gsaColorUtilExtensionIcon from './penguinmod/extensions/colorutil.png';
import jgIframeExtensionIcon from './penguinmod/extensions/iframe.png';
import jgExtendedAudioExtensionIcon from './penguinmod/extensions/extendedaudio.png';
import jgScratchAuthExtensionIcon from './penguinmod/extensions/scratchauth2.svg';
import jgPermissionExtensionIcon from './penguinmod/extensions/permissions.png';
import silvxrcatOddMessagesExtensionIcon from './penguinmod/extensions/oddmessages.svg';
import jgCloneManagerExtensionIcon from './penguinmod/extensions/clonemanager.png';
import pmInlineBlocksExtensionIcon from './penguinmod/extensions/inlineblocks.png';
import jgPackagerApplicationsExtensionIcon from './penguinmod/extensions/packagedApplications.png';
import jgPackagerApplicationsInsetExtensionIcon from './penguinmod/extensions/packagedApplications_inset.png';
import spJSONExtensionIcon from './penguinmod/extensions/sp_json.svg';

// import jgTweeningExtensionIcon from './penguinmod/extensions/tween.png';
import jgsilvxrcatInterfacesExtensionIcon from './penguinmod/extensions/interfaces2.png';

// 3D MAN WTF
import jg3dExtensionIcon from './penguinmod/extensions/3d.png';
import jg3dInsetExtensionIcon from './penguinmod/extensions/3dicon.png';
import jg3dVrExtensionIcon from './penguinmod/extensions/3dVr.png';
import jg3dVrInsetExtensionIcon from './penguinmod/extensions/3dVr_Inset.png';
import fr3dPhysicsExtensionIcon from './penguinmod/extensions/3d_physics.png';
import fr3dPhysicsInsetExtensionIcon from './penguinmod/extensions/3d_physics_icon_sized.png';

// virtal realty
import jgVrExtensionIcon from './penguinmod/extensions/vr_extension.png';

import theshovelCustomStylesIcon from './penguinmod/orgtw/CustomStyles.svg';
import theshovelCanvasEffectsIcon from './penguinmod/extensions/canvas_effects.svg';
import theshovelLzCompressIcon from './penguinmod/orgtw/lz-compress2.svg';
import theshovelColorPickerIcon from './penguinmod/orgtw/ColorPicker.svg';

// sharkpool
import sharkpoolLooksExpandedIcon from './penguinmod/extensions/looksExpanded.svg';
import sharkpoolPrintingIcon from './penguinmod/extensions/printing.svg';
import sharkpoolTuneIcon from './penguinmod/extensions/tuneShark.svg';
import sharkpoolMBPIcon from './penguinmod/extensions/myBlocksPlus.svg';
import sharkpoolBCIcon from './penguinmod/extensions/BetterComments.svg';
import sharkpoolPEIcon from './penguinmod/extensions/particleEngine.svg';
import jgScriptsExtensionIcon from './penguinmod/extensions/scripts.svg';

// events
import jgStorageExtensionIcon from './penguinmod/extensions/storage.png';
import jgTimersExtensionIcon from './penguinmod/extensions/multipletimers.png';
import jgAdvancedTextExtensionIcon from './penguinmod/extensions/advancedtext.png';

import jgJavascriptExtensionIcon from './penguinmod/extensions/javascript.png';
import jgPathfindingExtensionIcon from './penguinmod/extensions/pathfinding.png';
import jgAnimationExtensionIcon from './penguinmod/extensions/animation.png';

// category expansions
import pmMotionExpansionExtensionIcon from './penguinmod/extensions/motion_expanded.png';
import pmEventsExpansionExtensionIcon from './penguinmod/extensions/events_expanded.png';
import pmControlsExpansionExtensionIcon from './penguinmod/extensions/controls_expanded.png';
import pmSensingExpansionExtensionIcon from './penguinmod/extensions/sensing_expanded.png';
import pmOperatorsExpansionExtensionIcon from './penguinmod/extensions/operators_expanded.png';

// jg: default icon if you are too lazy to make one and you want me to make one instead lololololololol
// gsa: ololololololo
import defaultExtensionIcon from './penguinmod/extensions/placeholder.png';

const urlParams = new URLSearchParams(location.search);

const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetests');

let menuItems = [
    {
        name: (
            <FormattedMessage
                defaultMessage="TMPose2Scratch"
                description="Name for the 'TMPose2Scratch' extension"
                id="gui.extension.tmpose2scratch.name"
            />
        ),
        extensionId: "tmpose2scratch",
        collaborator: "Tsukurusha, YengawaLab and Google",
        iconURL: "https://github.com/champierre/tmpose2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/tmpose2scratch/tmpose2scratch.png",
        insetIconURL: "https://github.com/champierre/tmpose2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/tmpose2scratch/tmpose2scratch-small.png",
        description: (
            <FormattedMessage
                defaultMessage="Recognize your own poses."
                description="Recognize your own poses."
                id="gui.extension.tmpose2scratchblocks.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        translationMap: {
            ja: {
                "gui.extension.tmpose2scratchblocks.description": "ポーズを学習させよう。"
            },
            "ja-Hira": {
                "gui.extension.tmpose2scratchblocks.description": "ポーズをがくしゅうさせよう。"
            },
            en: {
                "gui.extension.tmpose2scratchblocks.description": "Recognize your own poses."
            },
            ko: {
                "gui.extension.tmpose2scratchblocks.description": "나의 몸동작 포즈를 인식해볼까요"
            }
        }
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="ImageClassifier2Scratch"
                description="Name for the 'ImageClassifier2Scratch' extension"
                id="gui.extension.imageclassifier2scratch.name"
            />
        ),
        extensionId: "ic2scratch",
        collaborator: "champierre",
        iconURL: "https://github.com/champierre/ic2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/ic2scratch/ic2scratch.png",
        insetIconURL: "https://github.com/champierre/ic2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/ic2scratch/ic2scratch-small.png",
        description: (
            <FormattedMessage
                defaultMessage="Image Classifier Blocks."
                description="Image Classifier Blocks."
                id="gui.extension.ic2scratchblocks.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="BlockAI"
                description="Name for the 'BlockAI' extension"
                id="gui.extension.blockai.name"
            />
        ),
        extensionId: "https://huggingface.co/datasets/soiz1/my-scratch-ai-extensions/raw/main/block-ai.js",
        collaborator: "TheShovel",
        iconURL: "https://extensions.penguinmod.com/images/TheShovel/thumbnail-blockAI.png",
        insetIconURL: "https://huggingface.co/datasets/soiz1/my-scratch-ai-extensions/resolve/main/BlockAI-ICON.png?download=true",
        description: (
            <FormattedMessage
                defaultMessage="geminiでコーディングのサポートをします。実験的で、間違った情報などを返す場合があります。"
                description="geminiでコーディングのサポートをします。実験的で、間違った情報などを返す場合があります。"
                id="gui.extension.blockai.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="NewHandpose2Scratch"
                description="Name for the 'NewHandpose2Scratch' extension"
                id="gui.extension.newhandpose2scratch.name"
            />
        ),
        extensionId: "newhandpose2scratch",
        collaborator: "champierre",
        iconURL: "https://github.com/champierre/handpose2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch.png",
        insetIconURL: "https://github.com/champierre/handpose2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch-small.png",
        description: (
            <FormattedMessage
                defaultMessage="新しい手の形を認識する拡張機能です。かなり高速で、奥行き(z座標)は検出できません。"
                description="新しい手の形を認識する拡張機能です。かなり高速で、奥行き(z座標)は検出できません。"
                id="gui.extension.newhandpose2scratchblocks.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: "https://champierre.github.io/handpose2scratch/"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Handpose2Scratch"
                description="Name for the 'Handpose2Scratch' extension"
                id="gui.extension.handpose2scratch.name"
            />
        ),
        extensionId: "handpose2scratch",
        collaborator: "champierre",
        iconURL: "https://github.com/champierre/handpose2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch.png",
        insetIconURL: "https://github.com/champierre/handpose2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch-small.png",
        description: (
            <FormattedMessage
                defaultMessage="これは古い手のポーズトラッキングで、少し処理が遅いです。奥行き(z座標)も取得できます。"
                description="これは古い手のポーズトラッキングで、少し処理が遅いです。奥行き(z座標)も取得できます。"
                id="gui.extension.handpose2scratchblocks.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: "https://champierre.github.io/handpose2scratch/"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TM2Scratch"
                description="Name for the 'TM2Scratch' extension"
                id="gui.extension.tm2scratch.name"
            />
        ),
        extensionId: "tm2scratch",
        collaborator: "Tsukurusha, YengawaLab and Google",
        iconURL: "https://github.com/champierre/tm2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/tm2scratch/tm2scratch.png",
        insetIconURL: "https://github.com/champierre/tm2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/tm2scratch/tm2scratch-small.png",
        description: (
            <FormattedMessage
                defaultMessage="画像や音声を学習させよう。"
                description="画像や音声を学習させよう。"
                id="gui.extension.tm2scratchblocks.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        translationMap: {
            ja: {
                "gui.extension.tm2scratchblocks.description": "画像や音声を学習させよう。"
            },
            "ja-Hira": {
                "gui.extension.tm2scratchblocks.description": "がぞうやおんせいをがくしゅうさせよう。"
            },
            en: {
                "gui.extension.tm2scratchblocks.description": "Recognize your own images and sounds."
            },
            "zh-cn": {
                "gui.extension.tm2scratchblocks.description": "Recognize your own images and sounds."
            },
            ko: {
                "gui.extension.tm2scratchblocks.description": "나의 이미지와 소리를 인식해볼까요"
            },
            "zh-tw": {
                "gui.extension.tm2scratchblocks.description": "Recognize your own images and sounds."
            }
        }
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="ML2Scratch"
                description="Name for the 'ML2Scratch' extension"
                id="gui.extension.ml2scratch.name"
            />
        ),
        extensionId: "ml2scratch",
        extensionURL: "ml2scratch",
        collaborator: "champierre",
        iconURL: "https://github.com/champierre/ml2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/ml2scratch/ml2scratch.png",
        insetIconURL: "https://github.com/champierre/ml2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/ml2scratch/ml2scratch-small.png",
        description: (
            <FormattedMessage
                defaultMessage="プロジェクト内でカメラやステージの画像を学習・認識できます。"
                description="プロジェクト内でカメラやステージの画像を学習・認識できます。"
                id="gui.extension.ml2scratch.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        helpLink: "https://github.com/champierre/ml2scratch/"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Posenet2Scratch"
                description="Name for the 'Posenet2Scratch' extension"
                id="gui.extension.posenet2scratch.name"
            />
        ),
        extensionId: "posenet2scratch",
        iconURL: "https://www.adacraft.org/studio/static/assets/cc4d68fe9d6a77c7f35f9d5461b60967.png",
        insetIconURL: "https://raw.githubusercontent.com/champierre/posenet2scratch/master/scratch-gui/src/lib/libraries/extensions/posenet2scratch/posenet2scratch-small.png",
        collaborator: "champierre",
        internetConnectionRequired: true,
        tags: ["other_mods", "ai"],
        description: (
            <FormattedMessage
                defaultMessage="特別なデバイスを使わずに、通常のWebカメラで人間のポーズを迅速かつ正確に検出します"
                description="Description for the 'Posenet2Scratch' extension"
                id="gui.extension.posenet2scratch.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Facemesh2scratch"
                description="Name for the 'Facemesh2scratch' extension"
                id="gui.extension.facemesh2scratch.name"
            />
        ),
        extensionId: "facemesh2scratch",
        iconURL: "https://raw.githubusercontent.com/champierre/facemesh2scratch/master/scratch-gui/src/lib/libraries/extensions/facemesh2scratch/facemesh2scratch.png",
        insetIconURL: "https://raw.githubusercontent.com/champierre/facemesh2scratch/master/scratch-gui/src/lib/libraries/extensions/facemesh2scratch/facemesh2scratch-small.png",
        collaborator: "champierre",
        internetConnectionRequired: true,
        tags: ["other_mods", "ai"],
        description: (
            <FormattedMessage
                defaultMessage="プロジェクトでフェイストラッキングを活用しましょう!"
                description="Description for the 'Facemesh2scratch' extension"
                id="gui.extension.facemesh2scratch.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Handpose2scratch"
                description="Name for the 'Handpose2scratch' extension"
                id="gui.extension.handpose2scratch2.name"
            />
        ),
        extensionId: "handpose2scratch",
        iconURL: "https://raw.githubusercontent.com/champierre/handpose2scratch/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch.png",
        insetIconURL: "https://raw.githubusercontent.com/champierre/handpose2scratch/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch-small.png",
        collaborator: "champierre",
        internetConnectionRequired: true,
        tags: ["other_mods"],
        description: (
            <FormattedMessage
                defaultMessage="手の細かい部位の座標を取得・トラッキングできます。"
                description="Description for the 'Handpose2scratch' extension"
                id="gui.extension.handpose2scratch2.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="p5js"
                description="Name for the 'p5js' extension"
                id="gui.extension.p5js.name"
            />
        ),
        extensionId: "https://huggingface.co/datasets/soiz1/my-scratch-ai-extensions/raw/main/p5js.js",
        iconURL: p5noiseIconURL,
        insetIconURL: p5noiseInsetIconURL,
        collaborator: "adacraft",
        internetConnectionRequired: true,
        tags: [],
        description: (
            <FormattedMessage
                defaultMessage="p5.js ライブラリを使用するいくつかのブロック。"
                description="Description for the 'p5js' extension"
                id="gui.extension.p5js.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: "music",
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        customInsetColor: "#CF63CF",
        tags: ["scratch", "noisemaker"],
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: "pen",
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        tags: ["scratch", "graphics"],
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Animated Text"
                description="Name for the 'Animated Text' extension"
                id="gui.extension.animatedtext.name"
            />
        ),
        extensionId: "text",
        iconURL: animatedTextIconURL,
        insetIconURL: animatedTextInsetIconURL,
        customInsetColor: "#9A66FF",
        tags: ["scratch"],
        description: (
            <FormattedMessage
                defaultMessage="文字に命を吹き込みます。元々、Scratch公式が開発中のものでした。"
                description="Description for the 'Animated Text' extension"
                id="gui.extension.animatedtext.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: "videoSensing",
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        customInsetColor: "#74BDDC",
        tags: ["scratch", "hardware"],
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: "text2speech",
        collaborator: "Amazon Web Services",
        credits: "Google TTS",
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        customInsetColor: "#9966FF",
        tags: ["scratch", "noisemaker"],
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: "translate",
        collaborator: "Google",
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        customInsetColor: "#5CB1D6",
        tags: ["scratch"],
        description: (
            <FormattedMessage
                defaultMessage="テキストを多くの言語に翻訳します。"
                description="テキストを多くの言語に翻訳します。"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Looks Expanded"
                description="Name for the 'Looks Expanded' extension"
                id="gui.extension.looksexpanded.name"
            />
        ),
        extensionId: "https://sharkpools-extensions.vercel.app/extension-code/Looks-Expanded.js",
        iconURL: sharkpoolLooksExpandedIcon,
        tags: ["penguinmod", "categoryexpansion", "graphics"],
        description: (
            <FormattedMessage
                defaultMessage="Expansion of the Looks Category."
                description="Description for the 'Looks Expanded' extension"
                id="gui.extension.looksexpanded.description"
            />
        ),
        extDeveloper: "SharkPool, CST1229",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Sensing Plus"
                description="Name for the 'Sensing Plus' extension"
                id="gui.extension.sensingplus.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/obviousAlexC/SensingPlus.js",
        collaborator: "ObviousAlexC",
        iconURL: "https://extensions.turbowarp.org/images/obviousAlexC/SensingPlus.svg",
        tags: ["turbowarp"],
        description: (
            <FormattedMessage
                defaultMessage="An extension to the sensing category."
                description="Description for the 'Sensing Plus' extension"
                id="gui.extension.sensingplus.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Window Controls"
                description="Name for the 'Window Controls' extension"
                id="gui.extension.windowcontrols.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/CubesterYT/WindowControls.js",
        collaborator: "Created:BlueDome77 Updated:CubesterYT.",
        iconURL: "https://extensions.turbowarp.org/images/CubesterYT/WindowControls.svg",
        tags: ["turbowap"],
        description: (
            <FormattedMessage
                defaultMessage="Move, resize, rename the window, enter fullscreen, get screen size, and more."
                description="Description for the 'Window Controls' extension"
                id="gui.extension.windowcontrols.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Stretch"
                description="Name for the 'Stretch' extension"
                id="gui.extension.stretch.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/stretch.js",
        iconURL: "https://extensions.turbowarp.org/images/stretch.svg",
        tags: ["turbowap"],
        description: (
            <FormattedMessage
                defaultMessage="Stretch sprites horizontally or vertically."
                description="Description for the 'Stretch' extension"
                id="gui.extension.stretch.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Makey Makey"
                description="Name for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.name"
            />
        ),
        extensionId: "makeymakey",
        collaborator: "JoyLabz",
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        customInsetColor: "#E64D00",
        tags: ["scratch", "hardware"],
        description: (
            <FormattedMessage
                defaultMessage="何でもキーに変えられます。"
                description="何でもキーに変えられます。"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Stage Camera"
                description="Name for the 'Stage Camera' extension"
                id="gui.extension.stagecamera.name"
            />
        ),
        extensionId: "pmCamera",
        iconURL: pmCameraExtensionIcon,
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="Allows the camera to move around anywhere on the stage."
                description="Description for the 'Stage Camera' extension"
                id="gui.extension.stagecamera.description"
            />
        ),
        credits: "Inspired by⠀⠀⠀⠀⠀⠀ DT-is-not-available",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Files"
                description="Name for the 'Files' extension"
                id="gui.extension.files.name"
            />
        ),
        extensionId: "twFiles",
        twDeveloper: "GarboMuffin",
        iconURL: filesExtensionIcon,
        insetIconURL: turbowarpIcon,
        tags: ["turbowarp", "datamgmt"],
        description: (
            <FormattedMessage
                defaultMessage="Blocks for reading and creating files."
                description="Description for the 'Files' extension"
                id="gui.extension.files.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Zip"
                description="Name for the 'Zip' extension"
                id="gui.extension.zip.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/CST1229/zip.js",
        iconURL: "https://extensions.turbowarp.org/images/CST1229/zip.svg",
        insetIconURL: turbowarpIcon,
        tags: ["turbowarp", "datamgmt"],
        description: (
            <FormattedMessage
                defaultMessage="Create and edit .zip format files, including .sb3, .pmp and .s4s.txt files."
                description="Description for the 'Zip' extension"
                id="gui.extension.zip.description"
            />
        ),
        twDeveloper: "CST1229",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen+"
                description="Name for the 'Pen+' extension"
                id="gui.extension.penplus.name"
            />
        ),
        extensionId: "https://extensions.penguinmod.com/extensions/ObviousAlexC/PenPlus.js",
        tags: ["categoryexpansion", "graphics"],
        iconURL: "https://extensions.penguinmod.com/images/ObviousAlexC/PenPlus.svg",
        description: (
            <FormattedMessage
                defaultMessage="An extension to the Pen category! Adds blocks for drawing triangles using textures and tints, drawing images and editing their pixels, etc."
                description="Description for the 'Pen+' extension"
                id="gui.extension.penplus.description"
            />
        ),
        featured: true,
        extDeveloper: "pinksheep2917"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Sound Systems"
                description="Name for the 'Sound Systems' extension"
                id="gui.extension.soundsystems.name"
            />
        ),
        extensionId: "jgExtendedAudio",
        iconURL: jgExtendedAudioExtensionIcon,
        tags: ["penguinmod", "categoryexpansion", "noisemaker"],
        description: (
            <FormattedMessage
                defaultMessage="An audio grouping system for more intensive audio work."
                description="Description for the 'Sound Systems' extension"
                id="gui.extension.soundsystems.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Tune Shark V3"
                description="Name for the 'Tune Shark V3' extension"
                id="gui.extension.tunesharkv3.name"
            />
        ),
        extensionId: "https://sharkpools-extensions.vercel.app/extension-code/Tune-Shark-V3.js",
        iconURL: sharkpoolTuneIcon,
        tags: ["penguinmod", "categoryexpansion", "noisemaker"],
        description: (
            <FormattedMessage
                defaultMessage="Advanced audio engine with complex sound control, multiple audio effects and more!"
                description="Description for the 'Tune Shark V3' extension"
                id="gui.extension.tunesharkv3.description"
            />
        ),
        extDeveloper: "SharkPool",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Sound Waves"
                description="Name for the 'Sound Waves' extension"
                id="gui.extension.soundwaves.name"
            />
        ),
        extensionId: "https://extensions.penguinmod.com/extensions/SharkPool/Sound-Waves.js",
        iconURL: "https://extensions.penguinmod.com/images/SharkPool/Sound-Waves.svg",
        tags: ["penguinmod", "noisemaker"],
        description: (
            <FormattedMessage
                defaultMessage="音を作ろう！"
                description="音を作ろう！"
                id="gui.extension.soundwaves.description"
            />
        ),
        extDeveloper: "SharkPool",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Motion Expansion"
                description="Name for the 'Motion Expansion' extension"
                id="gui.extension.motionexpansion.name"
            />
        ),
        extensionId: "pmMotionExpansion",
        iconURL: pmMotionExpansionExtensionIcon,
        tags: ["penguinmod", "categoryexpansion"],
        description: (
            <FormattedMessage
                defaultMessage="移動や衝突のための小さなモーション ブロックが増えました。"
                description="移動や衝突のための小さなモーション ブロックが増えました。"
                id="gui.extension.motionexpansion.description"
            />
        ),
        featured: true,
        credits: "Some blocks from NexusKitten"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Events Expansion"
                description="Name for the 'Events Expansion' extension"
                id="gui.extension.eventsexpansion.name"
            />
        ),
        extensionId: "pmEventsExpansion",
        iconURL: pmEventsExpansionExtensionIcon,
        tags: ["penguinmod", "categoryexpansion"],
        description: (
            <FormattedMessage
                defaultMessage="情報の送受信、特定のスプライトの通知、または物事が起こるタイミングをより適切に制御するためのイベントが増えます。"
                description="情報の送受信、特定のスプライトの通知、または物事が起こるタイミングをより適切に制御するためのイベントが増えます。"
                id="gui.extension.eventsexpansion.description"
            />
        ),
        featured: true,
        credits: "Some blocks from LilyMakesThings"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Controls Expansion"
                description="Name for the 'Controls Expansion' extension"
                id="gui.extension.controlsexpansion.name"
            />
        ),
        extensionId: "pmControlsExpansion",
        iconURL: pmControlsExpansionExtensionIcon,
        tags: ["penguinmod", "categoryexpansion"],
        description: (
            <FormattedMessage
                defaultMessage="アニメーション、複雑なシステム、またはよりクリーンな 1 回限りの使用ブロック用のコントロール ブロックが増えました。"
                description="アニメーション、複雑なシステム、またはよりクリーンな 1 回限りの使用ブロック用のコントロール ブロックが増えました。"
                id="gui.extension.controlsexpansion.description"
            />
        ),
        featured: true,
        credits: '"new thread" by CubesterYT, CST1229, SharkPool'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Sensing Expansion"
                description="Name for the 'Sensing Expansion' extension"
                id="gui.extension.sensingexpansion.name"
            />
        ),
        extensionId: "pmSensingExpansion",
        iconURL: pmSensingExpansionExtensionIcon,
        tags: ["penguinmod", "categoryexpansion"],
        description: (
            <FormattedMessage
                defaultMessage="特定のユースケースやユーザーのデバイスとの対話のための、より多くのセンシング ブロック。"
                description="特定のユースケースやユーザーのデバイスとの対話のための、より多くのセンシング ブロック。"
                id="gui.extension.sensingexpansion.description"
            />
        ),
        credits: "Some blocks from SharkPool-SP",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Operators Expansion"
                description="Name for the 'Operators Expansion' extension"
                id="gui.extension.operatorsexpansion.name"
            />
        ),
        extensionId: "pmOperatorsExpansion",
        iconURL: pmOperatorsExpansionExtensionIcon,
        tags: ["penguinmod", "categoryexpansion", "math"],
        description: (
            <FormattedMessage
                defaultMessage="NAND、NOR、文字コードから文字への変換、複数行のテキストを行ごとに読み取るなどの演算子。"
                description="NAND、NOR、文字コードから文字への変換、複数行のテキストを行ごとに読み取るなどの演算子。"
                id="gui.extension.operatorsexpansion.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="My Blocks+"
                description="Name for the 'My Blocks+' extension"
                id="gui.extension.myblocksplus.name"
            />
        ),
        extensionId: "https://sharkpools-extensions.vercel.app/extension-code/My-Blocks-Plus.js",
        iconURL: sharkpoolMBPIcon,
        tags: ["penguinmod", "categoryexpansion"],
        description: (
            <FormattedMessage
                defaultMessage="カスタム入力、色などを使用して、プライベートまたはグローバルのカスタム ブロックを作成します。"
                description="カスタム入力、色などを使用して、プライベートまたはグローバルのカスタム ブロックを作成します。"
                id="gui.extension.myblocksplus.description"
            />
        ),
        extDeveloper: "SharkPool, CST1229, 0znzw",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Better Comments"
                description="Name for the 'Better Comments' extension"
                id="gui.extension.bettercomments.name"
            />
        ),
        extensionId: "https://sharkpools-extensions.vercel.app/extension-code/Better-Comments.js",
        iconURL: sharkpoolBCIcon,
        tags: ["penguinmod", "categoryexpansion"],
        description: (
            <FormattedMessage
                defaultMessage="カスタマイズとマークダウンのサポートにより、コメントの見た目を良くします。"
                description="カスタマイズとマークダウンのサポートにより、コメントの見た目を良くします。"
                id="gui.extension.bettercomments.description"
            />
        ),
        extDeveloper: "SharkPool",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="JSON"
                description="Name for the 'JSON' extension"
                id="gui.extension.json.name"
            />
        ),
        extensionId: "jgJSON",
        iconURL: jgJSONExtensionIcon,
        tags: ["penguinmod", "datamgmt"],
        description: (
            <FormattedMessage
                defaultMessage="JSON オブジェクトと配列を処理するためのブロック。"
                description="JSON オブジェクトと配列を処理するためのブロック。"
                id="gui.extension.json.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Swift JSON"
                description="Name for the 'Swift JSON' extension"
                id="gui.extension.swiftjson.name"
            />
        ),
        extensionId: "https://sharkpools-extensions.vercel.app/extension-code/JSON-Array.js",
        iconURL: spJSONExtensionIcon,
        tags: ["penguinmod", "datamgmt"],
        extDeveloper: "SharkPool",
        description: (
            <FormattedMessage
                defaultMessage="潜在的に危険ですが、JSONオブジェクトと配列の処理を高速化する拡張機能です。プロジェクトでJSONを頻繁に使用する場合に推奨されます。"
                description="潜在的に危険ですが、JSONオブジェクトと配列の処理を高速化する拡張機能です。プロジェクトでJSONを頻繁に使用する場合に推奨されます。"
                id="gui.extension.swiftjson.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Particle Engine"
                description="Name for the 'Particle Engine' extension"
                id="gui.extension.particleengine.name"
            />
        ),
        extensionId: "https://sharkpools-extensions.vercel.app/extension-code/Particle-Engine.js",
        iconURL: sharkpoolPEIcon,
        tags: ["penguinmod", "graphics"],
        description: (
            <FormattedMessage
                defaultMessage="クローンなしで強力なパーティクルエンジンを作成する"
                description="クローンなしで強力なパーティクルエンジンを作成する"
                id="gui.extension.particleengine.description"
            />
        ),
        extDeveloper: "SharkPool",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Styles"
                description="Name for the 'Custom Styles' extension"
                id="gui.extension.customstyles.name"
            />
        ),
        extensionId: "shovelcss",
        iconURL: theshovelCustomStylesIcon,
        tags: ["penguinmod", "graphics"],
        description: (
            <FormattedMessage
                defaultMessage="プロジェクト内の変数モニターとプロンプトの外観をカスタマイズします。"
                description="プロジェクト内の変数モニターとプロンプトの外観をカスタマイズします。"
                id="gui.extension.customstyles.description"
            />
        ),
        extDeveloper: "TheShovel",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Physics"
                description="Name for the 'Physics' extension"
                id="gui.extension.physics.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/box2d.js",
        tags: ["turbowarp"],
        extDeveloper: "griffpatch",
        iconURL: griffpatchPhysicsThumb,
        insetIconURL: griffpatchPhysicsIcon,
        description: (
            <FormattedMessage
                defaultMessage="Griffpatch によって作成された物理処理をとても簡単にするBox2D拡張機能。"
                description="Griffpatch によって作成された物理処理をとても簡単にするBox2D拡張機能。"
                id="gui.extension.physics.description"
            />
        ),
        customInsetColor: "#D9F0FF",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Tweening"
                description="Name for the 'Tweening' extension"
                id="gui.extension.tweening.name"
            />
        ),
        extensionId: "jgTween",
        credits: "easings.net, Arrow & GarboMuffin",
        description: (
            <FormattedMessage
                defaultMessage="さまざまなイージング関数と方向を使用して値をスムーズにアニメーション化します。"
                description="さまざまなイージング関数と方向を使用して値をスムーズにアニメーション化します。"
                id="gui.extension.tweening.description"
            />
        ),
        iconURL: "https://extensions.turbowarp.org/images/JeremyGamer13/tween.svg",
        tags: ["penguinmod"],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Tailgating"
                description="Name for the 'Tailgating' extension"
                id="gui.extension.tailgating.name"
            />
        ),
        extensionId: "jgTailgating",
        description: (
            <FormattedMessage
                defaultMessage="RPG のパーティ メンバーのように、スプライトとクローンを他のスプライトとクローンの後ろをオフセットで追従させます。"
                description="RPG のパーティ メンバーのように、スプライトとクローンを他のスプライトとクローンの後ろをオフセットで追従させます。"
                id="gui.extension.tailgating.description"
            />
        ),
        iconURL: jgTailgatingExtensionIcon,
        tags: ["penguinmod"],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Tile Grids"
                description="Name for the 'Tile Grids' extension"
                id="gui.extension.tilegrids.name"
            />
        ),
        extensionId: "https://extensions.penguinmod.com/extensions/SharkPool/Tile-Grids.js",
        iconURL: "https://extensions.penguinmod.com/images/SharkPool/Tile-Grids.svg",
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="スプライトをグリッド上に配置します。"
                description="スプライトをグリッド上に配置します。"
                id="gui.extension.tilegrids.description"
            />
        ),
        extDeveloper: "SharkPool-SP",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Canvas Effects"
                description="Name for the 'Canvas Effects' extension"
                id="gui.extension.canvaseffects.name"
            />
        ),
        extensionId: "theshovelcanvaseffects",
        iconURL: theshovelCanvasEffectsIcon,
        tags: ["penguinmod", "graphics"],
        description: (
            <FormattedMessage
                defaultMessage="ステージ全体に視覚効果を適用します。"
                description="ステージ全体に視覚効果を適用します。"
                id="gui.extension.canvaseffects.description"
            />
        ),
        extDeveloper: "TheShovel",
        credits: "SharkPool",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Clones+"
                description="Name for the 'Clones+' extension"
                id="gui.extension.clonesplus.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/Lily/ClonesPlus.js",
        tags: ["turbowarp", "categoryexpansion"],
        iconURL: "https://extensions.turbowarp.org/images/Lily/ClonesPlus.svg",
        insetIconURL: turbowarpIcon,
        description: (
            <FormattedMessage
                defaultMessage="Scratchのクローン機能を拡張します。"
                description="Scratchのクローン機能を拡張します。"
                id="gui.extension.clonesplus.description"
            />
        ),
        featured: true,
        twDeveloper: "LilyMakesThings"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Skins"
                description="Name for the 'Skins' extension"
                id="gui.extension.skins.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/Lily/Skins.js",
        tags: ["turbowarp", "graphics"],
        iconURL: "https://extensions.turbowarp.org/images/Lily/Skins.svg",
        insetIconURL: turbowarpIcon,
        description: (
            <FormattedMessage
                defaultMessage="スプライトを他の画像や衣装として表示します。"
                description="スプライトを他の画像や衣装として表示します。"
                id="gui.extension.skins.description"
            />
        ),
        featured: true,
        twDeveloper: "LilyMakesThings"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Multiple Timers"
                description="Name for the 'Multiple Timers' extension"
                id="gui.extension.multipletimers.name"
            />
        ),
        extensionId: "jgTimers",
        iconURL: jgTimersExtensionIcon,
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="個別に制御できるタイマーを作成します。"
                description="個別に制御できるタイマーを作成します。"
                id="gui.extension.multipletimers.description"
            />
        ),
        eventSubmittor: "Arrow",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Temporary Variables"
                description="Name for the 'Temporary Variables' extension"
                id="gui.extension.temporaryvariables.name"
            />
        ),
        extensionId: "tempVars",
        iconURL: gsaTempVariablesExtensionIcon,
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="1つのブロックスタック内でのみ使用する変数を作成します。一度しか使用しない変数で変数リストが乱雑になるのを防ぐのに役立ちます。"
                description="1つのブロックスタック内でのみ使用する変数を作成します。一度しか使用しない変数で変数リストが乱雑になるのを防ぐのに役立ちます。"
                id="gui.extension.temporaryvariables.description"
            />
        ),
        credits: "LilyMakesThings",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Temporary Variables"
                description="Name for the 'TurboWarp Temporary Variables' extension"
                id="gui.extension.turbowarptemporaryvariables.name"
            />
        ),
        extensionId: "lmsTempVars2",
        iconURL: lilyTempVariablesExtensionIcon,
        tags: ["turbowarp"],
        description: (
            <FormattedMessage
                defaultMessage="使い捨てのランタイム変数またはスレッド変数を作成します。"
                description="使い捨てのランタイム変数またはスレッド変数を作成します。"
                id="gui.extension.turbowarptemporaryvariables.description"
            />
        ),
        insetIconURL: turbowarpIcon,
        credits: "LilyMakesThings",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Runtime Modifications"
                description="Name for the 'Runtime Modifications' extension"
                id="gui.extension.runtimemodifications.name"
            />
        ),
        extensionId: "jgRuntime",
        tags: ["penguinmod"],
        iconURL: jgRuntimeExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="ステージやスプライトなどの Scratch オブジェクトを更新するためのブロック。"
                description="ステージやスプライトなどの Scratch オブジェクトを更新するためのブロック。"
                id="gui.extension.runtimemodifications.description"
            />
        ),
        credits: "TheShovel, showierdata9978, SharkPool",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Font Manager"
                description="Name for the 'Font Manager' extension"
                id="gui.extension.fontmanager.name"
            />
        ),
        extensionId: "https://extensions.penguinmod.com/extensions/SharkPool/Font-Manager.js",
        iconURL: "https://extensions.penguinmod.com/images/SharkPool/Font-Manager.svg",
        tags: ["penguinmod", "graphics"],
        description: (
            <FormattedMessage
                defaultMessage="フォントを管理、作成、削除します。"
                description="フォントを管理、作成、削除します。"
                id="gui.extension.fontmanager.description"
            />
        ),
        credits: "SharkPool, Ashimee",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Storage"
                description="Name for the 'Storage' extension"
                id="gui.extension.storage.name"
            />
        ),
        extensionId: "jgStorage",
        iconURL: jgStorageExtensionIcon,
        tags: ["penguinmod", "datamgmt"],
        description: (
            <FormattedMessage
                defaultMessage="プロジェクトが閉じられた後でもデータを保存します。基本サーバーストレージも含まれます。"
                description="プロジェクトが閉じられた後でもデータを保存します。基本サーバーストレージも含まれます。"
                id="gui.extension.storage.description"
            />
        ),
        eventSubmittor: "Fir & silvxrcat",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="HTTP"
                description="Name for the 'HTTP' extension"
                id="gui.extension.http.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/godslayerakp/http.js",
        iconURL: "https://extensions.turbowarp.org/images/godslayerakp/http.svg",
        insetIconURL: turbowarpIcon,
        tags: ["turbowarp"],
        description: (
            <FormattedMessage
                defaultMessage="外部 Web サイトとやりとりするための包括的な拡張機能。"
                description="外部 Web サイトとやりとりするための包括的な拡張機能。"
                id="gui.extension.http.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
        customInsetColor: "#ff4d4d"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="CloudLink"
                description="Name for the 'CloudLink' extension"
                id="gui.extension.cloudlink.name"
            />
        ),
        extensionId: "https://extensions.penguinmod.com/extensions/MikeDev101/cloudlink.js",
        tags: ["turbowarp", "penguinmod"],
        insetIconURL: cloudlinkIcon,
        iconURL: "https://extensions.penguinmod.com/images/MikeDev101/cloudlink.svg",
        description: (
            <FormattedMessage
                defaultMessage="強力なWebSocket拡張機能。"
                description="強力なWebSocket拡張機能。"
                id="gui.extension.cloudlink.description"
            />
        ),
        featured: true,
        extDeveloper: "MikeDev",
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Scripts"
                description="Name for the 'Scripts' extension"
                id="gui.extension.scripts.name"
            />
        ),
        extensionId: "jgScripts",
        iconURL: jgScriptsExtensionIcon,
        tags: ["penguinmod", "datamgmt"],
        description: (
            <FormattedMessage
                defaultMessage="プロジェクトの実行中にブロックを使用してコンパイルされたスクリプトを作成します。"
                description="プロジェクトの実行中にブロックを使用してコンパイルされたスクリプトを作成します。"
                id="gui.extension.scripts.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pang API"
                description="Name for the 'Pang API' extension"
                id="gui.extension.pangapi.name"
            />
        ),
        extensionId: "https://extensions.penguinmod.com/extensions/SammerLOL/pangapi.js",
        iconURL: "https://extensions.penguinmod.com/images/SammerLOL/pangapi.png",
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="PenguinMod APIから情報を取得します。"
                description="PenguinMod APIから情報を取得します。"
                id="gui.extension.pangapi.description"
            />
        ),
        extDeveloper: "oc9x97, Ianyourgod",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="3D Math"
                description="Name for the '3D Math' extension"
                id="gui.extension.3dmath.name"
            />
        ),
        extensionId: "https://extensions.penguinmod.com/extensions/ObviousAlexC/3DMath.js",
        iconURL: "https://extensions.penguinmod.com/images/ObviousAlexC/3DMath.svg",
        tags: ["penguinmod", "3d", "graphics", "math"],
        description: (
            <FormattedMessage
                defaultMessage="独自のスプライトベースの 3D エンジンを作成するためのユーティリティ。"
                description="独自のスプライトベースの 3D エンジンを作成するためのユーティリティ。"
                id="gui.extension.3dmath.description"
            />
        ),
        extDeveloper: "pinksheep2917",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Random Utilities"
                description="Name for the 'Random Utilities' extension"
                id="gui.extension.randomutilities.name"
            />
        ),
        extensionId: "https://extensions.penguinmod.com/extensions/Gen1x/random_utils.js",
        iconURL: "https://extensions.penguinmod.com/images/Gen1x/randomutils.png",
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="シードベースの数値生成、真の数値生成、UUID、ランダム文字列など、ランダム値の生成に関連する多くのブロック。"
                description="シードベースの数値生成、真の数値生成、UUID、ランダム文字列など、ランダム値の生成に関連する多くのブロック。"
                id="gui.extension.randomutilities.description"
            />
        ),
        extDeveloper: "G1nX",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="LZ Compress"
                description="Name for the 'LZ Compress' extension"
                id="gui.extension.lzcompress.name"
            />
        ),
        extensionId: "shovellzcompresss",
        iconURL: theshovelLzCompressIcon,
        tags: ["penguinmod", "datamgmt"],
        description: (
            <FormattedMessage
                defaultMessage="lz-stringを使用してテキストを圧縮および解凍します。"
                description="lz-stringを使用してテキストを圧縮および解凍します。"
                id="gui.extension.lzcompress.description"
            />
        ),
        extDeveloper: "TheShovel",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Prism"
                description="Name for the 'Prism' extension"
                id="gui.extension.prism.name"
            />
        ),
        extensionId: "jgPrism",
        tags: ["penguinmod", "datamgmt"],
        iconURL: jgPrismExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="特定のユースケースまたは主要な利便性のためのブロック。"
                description="特定のユースケースまたは主要な利便性のためのブロック。"
                id="gui.extension.prism.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Vector"
                description="Name for the 'Vector' extension"
                id="gui.extension.vector.name"
            />
        ),
        extensionId: "jwVector",
        iconURL: jwVectorExtensionThumb,
        tags: ["penguinmod", "math"],
        description: (
            <FormattedMessage
                defaultMessage="Vector type for calculating with X and Y coordinates."
                description="Description for the 'Vector' extension"
                id="gui.extension.vector.description"
            />
        ),
        extDeveloper: "jwklong",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Odd Messages"
                description="Name for the 'Odd Messages' extension"
                id="gui.extension.oddmessages.name"
            />
        ),
        extensionId: "oddMessage",
        tags: ["penguinmod"],
        iconURL: silvxrcatOddMessagesExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="ログ記録と変数の利用。"
                description="ログ記録と変数の利用。"
                id="gui.extension.oddmessages.description"
            />
        ),
        featured: true,
        extDeveloper: "silvxrcat"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="HTML iframe Elements"
                description="Name for the 'HTML iframe Elements' extension"
                id="gui.extension.htmliframeelements.name"
            />
        ),
        extensionId: "jgIframe",
        iconURL: jgIframeExtensionIcon,
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="HTML コンテンツまたは Web サイトを含むフレームを配置および移動するためのブロック。"
                description="HTML コンテンツまたは Web サイトを含むフレームを配置および移動するためのブロック。"
                id="gui.extension.htmliframeelements.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Color Picker"
                description="Name for the 'Color Picker' extension"
                id="gui.extension.colorpicker.name"
            />
        ),
        extensionId: "shovelColorPicker",
        iconURL: theshovelColorPickerIcon,
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="ユーザーが組み込みのカラーピッカーを使用して色を選択できるようにすることで、独自にカラーピッカーを作成する必要はありません。"
                description="ユーザーが組み込みのカラーピッカーを使用して色を選択できるようにすることで、独自にカラーピッカーを作成する必要はありません。"
                id="gui.extension.colorpicker.description"
            />
        ),
        extDeveloper: "TheShovel",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Color Utility Blocks"
                description="Name for the 'Color Utility Blocks' extension"
                id="gui.extension.colorutilityblocks.name"
            />
        ),
        extensionId: "colors",
        iconURL: gsaColorUtilExtensionIcon,
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="16 進数、RGB、HSV、10 進数の色やその他の色関連のコンバーター。"
                description="16 進数、RGB、HSV、10 進数の色やその他の色関連のコンバーター。"
                id="gui.extension.colorutilityblocks.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="All Menus"
                description="Name for the 'All Menus' extension"
                id="gui.extension.allmenus.name"
            />
        ),
        extensionId: "https://extensions.penguinmod.com/extensions/Lily/AllMenus.js",
        iconURL: "https://extensions.penguinmod.com/images/Lily/AllMenus.svg",
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="各ブロックのすべてのドロップダウンメニューを抽出します。"
                description="各ブロックのすべてのドロップダウンメニューを抽出します。"
                id="gui.extension.allmenus.description"
            />
        ),
        extDeveloper: "LilyMakesThings",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Labels"
                description="Name for the 'Labels' extension"
                id="gui.extension.labels.name"
            />
        ),
        extensionId: "jwProto",
        iconURL: jwProtoExtensionIcon,
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="Labelling and Placeholders."
                description="Description for the 'Labels' extension"
                id="gui.extension.labels.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Perlin Noise"
                description="Name for the 'Perlin Noise' extension"
                id="gui.extension.perlinnoise.name"
            />
        ),
        extensionId: "iygPerlin",
        tags: ["penguinmod"],
        iconURL: iygPerlinNoiseExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Perlinノイズを生成・使用するためのブロック。地形や雲などの生成に適しています。"
                description="Perlinノイズを生成・使用するためのブロック。地形や雲などの生成に適しています。"
                id="gui.extension.perlinnoise.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="GamePad"
                description="Name for the 'GamePad' extension"
                id="gui.extension.gamepad.name"
            />
        ),
        extensionId: "Gamepad",
        tags: ["turbowarp", "hardware"],
        insetIconURL: turbowarpIcon,
        twDeveloper: "GarboMuffin",
        iconURL: gp,
        description: (
            <FormattedMessage
                defaultMessage="ボタンをキーにマッピングするのではなく、ゲームパッドに直接アクセスします。"
                description="ボタンをキーにマッピングするのではなく、ゲームパッドに直接アクセスします。"
                id="gui.extension.gamepad.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Printing"
                description="Name for the 'Printing' extension"
                id="gui.extension.printing.name"
            />
        ),
        extensionId: "sharkpoolPrinting",
        iconURL: sharkpoolPrintingIcon,
        description: (
            <FormattedMessage
                defaultMessage="テキスト、画像、カスタム HTML をプリンターに印刷するためのダイアログを表示できます。"
                description="テキスト、画像、カスタム HTML をプリンターに印刷するためのダイアログを表示できます。"
                id="gui.extension.printing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Clipping and Blending"
                description="Name for the 'Clipping and Blending' extension"
                id="gui.extension.clippingandblending.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/Xeltalliv/clippingblending.js",
        iconURL: clippingblending,
        tags: ["turbowarp", "graphics"],
        insetIconURL: turbowarpIcon,
        description: (
            <FormattedMessage
                defaultMessage="指定された長方形領域の外側をクリッピングし、加法的なカラーブレンドを行います。"
                description="指定された長方形領域の外側をクリッピングし、加法的なカラーブレンドを行います。"
                id="gui.extension.clippingandblending.description"
            />
        ),
        featured: true,
        twDeveloper: "Vadik1"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pointer Lock"
                description="Name for the 'Pointer Lock' extension"
                id="gui.extension.pointerlock.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/pointerlock.js",
        tags: ["turbowarp"],
        insetIconURL: turbowarpIcon,
        iconURL: pointerlockThumb,
        description: (
            <FormattedMessage
                defaultMessage="マウスカーソルをステージ上に固定する拡張機能。"
                description="マウスカーソルをステージ上に固定する拡張機能。"
                id="gui.extension.pointerlock.description"
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: "GarboMuffin"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Mouse Cursor"
                description="Name for the 'Mouse Cursor' extension"
                id="gui.extension.mousecursor.name"
            />
        ),
        extensionId: "https://extensions.turbowarp.org/cursor.js",
        tags: ["turbowarp"],
        insetIconURL: turbowarpIcon,
        iconURL: "https://extensions.turbowarp.org/images/cursor.png",
        description: (
            <FormattedMessage
                defaultMessage="ステージ上でのマウス カーソルの外観を変更する拡張機能。"
                description="ステージ上でのマウス カーソルの外観を変更する拡張機能。"
                id="gui.extension.mousecursor.description"
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: "GarboMuffin"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Scratch Authentication"
                description="Name for the 'Scratch Authentication' extension"
                id="gui.extension.scratchauthentication.name"
            />
        ),
        extensionId: "jgScratchAuthenticate",
        iconURL: jgScratchAuthExtensionIcon,
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="Scratch 認証と対話して、プレーヤーが実際の Scratch ユーザーであることを証明します。"
                description="Scratch 認証と対話して、プレーヤーが実際の Scratch ユーザーであることを証明します。"
                id="gui.extension.scratchauthentication.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="JavaScript"
                description="Name for the 'JavaScript' extension"
                id="gui.extension.javascript.name"
            />
        ),
        extensionId: "SPjavascriptV2",
        iconURL: jgJavascriptExtensionIcon,
        tags: ["penguinmod", "programminglanguage"],
        description: (
            <FormattedMessage
                defaultMessage="JavaScript で記述された独自のカスタム コードを実行しましょう。"
                description="JavaScript で記述された独自のカスタム コードを実行しましょう。"
                id="gui.extension.javascript.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Arrays"
                description="Name for the 'Arrays' extension"
                id="gui.extension.arrays.name"
            />
        ),
        extensionId: "jwArray",
        iconURL: jwArrayExtensionThumb,
        tags: ["penguinmod", "datamgmt"],
        description: (
            <FormattedMessage
                defaultMessage="多目的配列にデータを効率的に保存します。"
                description="多目的配列にデータを効率的に保存します。"
                id="gui.extension.arrays.description"
            />
        ),
        extDeveloper: "jwklong",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Targets"
                description="Name for the 'Targets' extension"
                id="gui.extension.targets.name"
            />
        ),
        extensionId: "jwTargets",
        iconURL: jwTargetsExtensionThumb,
        tags: ["penguinmod"],
        description: (
            <FormattedMessage
                defaultMessage="スプライトとそのクローンへの直接アクセス。"
                description="スプライトとそのクローンへの直接アクセス。"
                id="gui.extension.targets.description"
            />
        ),
        extDeveloper: "jwklong",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Infinity"
                description="Name for the 'Infinity' extension"
                id="gui.extension.infinity.name"
            />
        ),
        extensionId: "jwNum",
        iconURL: jwNumExtensionThumb,
        tags: ["penguinmod", "math"],
        description: (
            <FormattedMessage
                defaultMessage="非常に大きな数値を扱える高度な数値タイプです。"
                description="非常に大きな数値を扱える高度な数値タイプです。"
                id="gui.extension.infinity.description"
            />
        ),
        extDeveloper: "jwklong",
        credits: "Naruyoko for ExpantaNum.js",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Color"
                description="Name for the 'Color' extension"
                id="gui.extension.color.name"
            />
        ),
        extensionId: "jwColor",
        iconURL: jwColorExtensionThumb,
        tags: ["penguinmod", "graphics"],
        description: (
            <FormattedMessage
                defaultMessage="色に関わるあらゆるもののためのユーティリティ。"
                description="色に関わるあらゆるもののためのユーティリティ。"
                id="gui.extension.color.description"
            />
        ),
        extDeveloper: "jwklong",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="micro:bit"
                description="Name for the 'micro:bit' extension"
                id="gui.extension.microbit.name"
            />
        ),
        extensionId: "microbit",
        collaborator: "micro:bit",
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        tags: ["scratch", "hardware"],
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: "https://scratch.mit.edu/microbit"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="LEGO MINDSTORMS EV3"
                description="Name for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.legomindstormsev3.name"
            />
        ),
        extensionId: "ev3",
        collaborator: "LEGO",
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        tags: ["scratch", "hardware"],
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.legomindstormsev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        customInsetColor: "#FFBF00",
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.legomindstormsev3.connectingMessage"
            />
        ),
        helpLink: "https://scratch.mit.edu/ev3"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="LEGO BOOST"
                description="Name for the 'LEGO BOOST' extension"
                id="gui.extension.legoboost.name"
            />
        ),
        extensionId: "boost",
        collaborator: "LEGO",
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        tags: ["scratch", "hardware"],
        description: (
            <FormattedMessage
                defaultMessage="ロボット作品に命を吹き込みます。"
                description="ロボット作品に命を吹き込みます。"
                id="gui.extension.legoboost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        customInsetColor: "#FFAB19",
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.legoboost.connectingMessage"
            />
        ),
        helpLink: "https://scratch.mit.edu/boost"
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="LEGO Education WeDo 2.0"
                description="Name for the 'LEGO Education WeDo 2.0' extension"
                id="gui.extension.legowedo2.name"
            />
        ),
        extensionId: "wedo2",
        collaborator: "LEGO",
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="モーターとセンサーを使って組み立てます。"
                description="モーターとセンサーを使って組み立てます。"
                id="gui.extension.legowedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        tags: ['scratch', 'hardware'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        customInsetColor: '#FF6680',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        customInsetColor: '#4C97FF',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="押す、引く、動く、回転するといった動作を感知します。"
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="ペンギンモッドの拡張機能"
                description="Name of library item to open the Extra Extensions gallery"
                id="pm.extraLibraryExtensions.name"
            />
        ),
        href: 'https://extensions.penguinmod.com/',
        extensionId: 'special_penguinmodExtensionLibrary',
        iconURL: penguinmodLibraryExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Penguinmodユーザーが投稿した拡張機能をいくつかご覧ください。新しいタブで開きます。"
                description="Description of library item to open the Extra Extensions gallery"
                id="pm.extraLibraryExtensions.description"
            />
        ),
        tags: ['penguinmod', 'library'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Extension Gallery"
                description="Name of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.name"
                values={{
                    APP_NAME: "TurboWarp"
                }}
            />
        ),
        href: 'https://extensions.turbowarp.org/',
        extensionId: 'special_turbowarpExtensionLibrary',
        iconURL: galleryIcon,
        description: (
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="ここでは多くの TurboWarp 拡張機能をリストしていますが、extensions.turbowarp.org でさらに多くの拡張機能を見つけることができます。"
                description="Description of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.description"
            />
        ),
        tags: ['tw', 'turbowarp', 'library'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage={'SharkPool\'s Extension Collection'}
                description="Name for the 'ExtForge' extension"
                id="gui.extension.sharkpoolExt.name"
            />
        ),
        href: "https://soiz1-sharkpool-extensions.hf.space?originPM=true",
        extensionId: "special_sharkpoolExtensionLibrary",
        iconURL: sharkpoolGalleryIcon,
        description: (
            <FormattedMessage
                defaultMessage={"SharkPool によって作成された多数の拡張機能。\nこのメニューが開いているときに拡張機能をクリックすると、プロジェクトに追加されます。CORS制限のため、別のホストですが機能は同じで自動更新されます。"}
                description={"SharkPool によって作成された多数の拡張機能。\nこのメニューが開いているときに拡張機能をクリックすると、プロジェクトに追加されます。CORS制限のため、別のホストですが機能は同じで自動更新されます。"}
                id="gui.extension.sharkpoolextensioncollection.description"
            />
        ),
        credits: "Listed in the site",
        tags: ["library"],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="ExtForge"
                description="Name for the 'ExtForge' extension"
                id="gui.extension.extforge.name"
            />
        ),
        href: "https://jwklong.github.io/extforge",
        extensionId: "special_extforge",
        iconURL: ExtForgeIcon,
        description: (
            <FormattedMessage
                defaultMessage="ブロックベースのUIを使用して拡張機能を作成します。"
                description="ブロックベースのUIを使用して拡張機能を作成します。"
                id="gui.extension.extforge.description"
            />
        ),
        extDeveloper: "jwklong",
        isNew: true,
        tags: ["extcreate"],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name for the 'Custom Extension' extension"
                id="gui.extension.customextension.name"
            />
        ),
        extensionId: "",
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="好きな拡張機能を読み込むことができます。"
                description="好きな拡張機能を読み込むことができます。"
                id="gui.extension.customextension.description"
            />
        ),
        featured: true
    }
];

/*
----------------------------------------------
### NOTE TO PENGUINMOD FORKS: ###
Please DO NOT make the extensions below accessible in the editor without livetests!
They are NOT fully developed for people to use and create full projects with!

These extensions could have missing features, cause random errors, broken projects, or even crash the editor!
Moving these into the main extension list will cause people who use your fork to assume they are ready for them to use!

Please keep these in livetests to reduce bug reports on your fork! :)
----------------------------------------------
*/
if (IsLocal || IsLiveTests) {
    const extras = [
        {
            name: (
                <FormattedMessage
                    defaultMessage="HTML Canvas"
                    description="Name of Text extension"
                    id="canvas.name"
                />
            ),
            extensionId: 'newCanvas',
            iconURL: canvasExtensionBanner,
            tags: ['penguinmod'],
            insetIconURL: canvasExtensionIcon,
            customInsetColor: '#0094FF',
            description: (
                <FormattedMessage
                    defaultMessage="HTML キャンバスを使用した追加の描画ツール。他の拡張機能と併用すると効果的です。"
                    description="Description of Text extension"
                    id="text.description"
                />
            ),
            featured: true
        },
        {
            name: 'OLD Canvas',
            extensionId: 'canvas',
            iconURL: canvasExtensionBanner,
            tags: ['penguinmod'],
            insetIconURL: canvasExtensionIcon,
            customInsetColor: '#0094FF',
            description: 'HTML Canvas の非推奨バージョン。',
            featured: true
        },
        {
            name: 'Legacy Files',
            extensionId: 'jgFiles',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: 'ファイルの基本ブロック。これはTurboWarpファイル拡張子に置き換えられました。',
            featured: true
        },
        {
            name: 'Clone Communication',
            extensionId: 'jgClones',
            iconURL: jgCloneManagerExtensionIcon,
            tags: ['penguinmod'],
            description: 'クローンとメインスプライト間のデータ共有が主な機能ですが、他にもいくつかの小さな機能があります。この機能はTurboWarp Clones+拡張機能に置き換えられました。',
            featured: true
        },
        {
            name: 'Easy Save',
            extensionId: 'jgEasySave',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: '変数、リスト、および追加情報をファイルに保存し、それらを再度読み込みます。',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="TurboWarp Blocks"
                    description="Name of TW extension"
                    id="tw.twExtension.name"
                    values={{
                        APP_NAME: "TurboWarp"
                    }}
                />
            ),
            extensionId: 'tw',
            twDeveloper: 'GarboMuffin',
            tags: ['turbowarp'],
            insetIconURL: turbowarpIcon,
            iconURL: twIcon,
            description: '奇妙な新しいブロック。感知拡張に置き換えられました。',
            featured: true
        },
        {
            name: 'the doo doo extension',
            extensionId: 'jgDooDoo',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'joke'],
            description: 'dr bob eae',
            featured: true
        },
        {
            name: 'Christmas',
            extensionId: 'jgChristmas',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/christmas.png',
            tags: ['penguinmod', 'joke'],
            description: 'hooraye',
            featured: true
        },
        {
            name: 'an amazing extension',
            extensionId: 'jgBestExtension',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epic.png',
            internetConnectionRequired: true,
            tags: ['penguinmod', 'joke'],
            description: 'これは本当に良い拡張機能です。今すぐ使ってください。',
            featured: true
        },
        {
            name: 'Epic utilities',
            extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/AprilFools.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epicutils.png',
            tags: ['penguinmod', 'joke'],
            description: '本日のスポンサーである sharkpool (the epic utilities) がお届けする、非常に優れたユーティリティ',
            featured: true
        },
        {
            name: 'CATS',
            extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/CATS.js',
            iconURL: 'https://extensions.penguinmod.com/images/Gen1x/cats.png',
            tags: ['penguinmod', 'joke'],
            description: '猫に関するブロック。',
            extDeveloper: 'G1nX',
            featured: true
        },
        {
            name: 'McUtils',
            extensionId: 'https://extensions.turbowarp.org/Lily/McUtils.js',
            tags: ['turbowarp', 'joke'],
            iconURL: 'https://extensions.turbowarp.org/images/Lily/McUtils.png',
            insetIconURL: turbowarpIcon,
            description: 'ファーストフード店員のための基本的なユーティリティ',
            featured: true,
            twDeveloper: 'LilyMakesThings'
        },
        {
            name: 'image blocks',
            extensionId: 'https://extensions.penguinmod.com/extensions/Ashime/funneimageblocks.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/screenshot1.png',
            tags: ['penguinmod', 'joke'],
            internetConnectionRequired: true,
            description: 'ペンギンブロックがあるのに猫ブロックなんて必要ない',
            extDeveloper: 'Ashimee, 0znzw, CST1229',
            featured: true
        },
        {
            name: 'fire in the hole',
            extensionId: 'https://extensions.penguinmod.com/extensions/JeremyGamer13/FireInTheHole.js',
            iconURL: 'https://library.penguinmod.com/files/emojis/cluelesssmile.png',
            tags: ['penguinmod', 'joke'],
            internetConnectionRequired: true,
            description: 'エイプリルフールは長すぎたね、このジョークはもう面白くない',
            featured: true
        },
        {
            name: 'Unite',
            extensionId: 'jwUnite',
            iconURL: jwUniteExtensionIcon,
            tags: ['penguinmod'],
            description: '最終的にデフォルトのツールボックスに統合されたレガシー拡張機能。',
            featured: true
        },
        {
            name: 'XML',
            extensionId: 'jwXml',
            iconURL: jwXmlExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: 'XMLデータの作成と取得を可能にします。データの変更はまだできません。',
            extDeveloper: 'jwklong',
            featured: true
        },
        {
            name: 'Debugging',
            extensionId: 'jgDebugging',
            iconURL: jgDebuggingIcon,
            tags: ['penguinmod'],
            description: '情報をログに記録し、コマンドを実行します。パッケージ化されたプロジェクトのデバッグや、ちょっとした変更に最適です。',
            featured: true
        },
        {
            name: 'Test Extension Loader',
            href: 'https://studio.penguinmod.com/loadExt.html',
            extensionId: 'special_testExtensionLibrary',
            iconURL: defaultExtensionIcon,
            description: 'ライブラリから拡張機能を読み込むテスト。開発者向け。',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="OOP"
                    description="Name of OOP extension"
                    id="jwStructs.jwStructsExtension.name"
                />
            ),
            extensionId: 'jwStructs',
            tags: ['penguinmod'],
            iconURL: jwStructsExtensionIcon,
            description: (
                <FormattedMessage
                    defaultMessage="リストから削除されました。OOP ブロック。OOp は、オブジェクトとその相互作用を使用してアプリケーションやコンピュータ プログラムを設計するプログラミングパラダイムです。"
                    description="Description of OOP extension"
                    id="jwStructs.jwStructsExtension.description"
                />
            ),
            featured: true
        },
        {
            name: 'PenguinMod Permissions',
            extensionId: 'JgPermissionBlocks',
            iconURL: jgPermissionExtensionIcon,
            tags: ['penguinmod'],
            description: 'レガシー拡張機能。古いブロックはもはや本来の用途を果たせません。PenguinModが特定のタスクを実行する際に要求する権限を管理するための直接ブロックです。',
            featured: true
        },
        {
            name: 'Jeremys Dev Tools',
            extensionId: 'jgDev',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: '拡張機能をテストして、可能かどうかを確認します。\nブロックは変更される可能性があり、プロジェクトが破損する可能性があるため、本番環境では使用しないでください。',
            credits: 'Some features added from LilyMakesThings, CubesterYT, TheShovel',
            featured: true
        },
        {
            name: '3D',
            extensionId: 'jg3d',
            iconURL: jg3dExtensionIcon,
            tags: ['penguinmod', '3d'],
            customInsetColor: '#B200FF',
            insetIconURL: jg3dInsetExtensionIcon,
            description: '3D の魔法を使ってプロジェクトに彩りを添えましょう。',
            featured: true
        },
        {
            name: '3D Physics',
            extensionId: 'fr3d',
            iconURL: fr3dPhysicsExtensionIcon,
            tags: ['penguinmod', '3d'],
            customInsetColor: '#D066FE',
            insetIconURL: fr3dPhysicsInsetExtensionIcon,
            description: '3D 拡張のための物理。',
            featured: true
        },
        {
            name: '3D Virtual Reality',
            extensionId: 'jg3dVr',
            iconURL: jg3dVrExtensionIcon,
            tags: ['penguinmod', 'hardware', '3d'],
            customInsetColor: '#B200FF',
            insetIconURL: jg3dVrInsetExtensionIcon,
            description: '開発中。互換性が損なわれる可能性があります。プレイヤーがあなたの世界に飛び込めるようにしましょう！',
            featured: true,
            extensionWarningOnImport: true
        },
        {
            name: 'Interfaces',
            extensionId: 'jgInterfaces',
            iconURL: jgsilvxrcatInterfacesExtensionIcon,
            credits: 'silvxrcat',
            tags: ['penguinmod'],
            description: '開発中',
            featured: true
        },
        {
            name: 'Packager Applications',
            extensionId: 'jgPackagerApplications',
            iconURL: jgPackagerApplicationsExtensionIcon,
            insetIconURL: jgPackagerApplicationsInsetExtensionIcon,
            twDeveloper: 'CubesterYT',
            customInsetColor: '#66B8FF',
            tags: ['penguinmod', 'packager'],
            description: '開発中。Web サイトでできないことをパッケージ アプリケーションで実現できます。',
            featured: true
        },
        
        {
            name: 'Inline Blocks',
            extensionId: 'pmInlineBlocks',
            iconURL: pmInlineBlocksExtensionIcon,
            tags: ['penguinmod'],
            description: '簡単なタスク用のクイックブロックを作成します。任意の円形の場所に挿入して、任意の値を返すように設定できます。',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="Pathfinding"
                    description="Name of Pathfinding extension"
                    id="jgPathfinding.Pathfinding.name"
                />
            ),
            extensionId: 'jgPathfinding',
            tags: ['penguinmod'],
            iconURL: jgPathfindingExtensionIcon,
            description: (
                <FormattedMessage
                    defaultMessage="(不安定または遅延あり。さらなる作業が必要です) スプライトがゲーム内の障害物にクリップするのではなく、障害物を回避できるようにします。"
                    description="Description of Pathfinding extension"
                    id="jgPathfinding.Pathfinding.description"
                />
            ),
            featured: true
        },
        {
            name: 'Animation',
            extensionId: 'jgAnimation',
            iconURL: jgAnimationExtensionIcon,
            tags: ['penguinmod'],
            description: '開発中。現在バグがあり、機能が不足しています。',
            featured: true
        },
        {
            name: 'Virtual Reality',
            extensionId: 'jgVr',
            iconURL: jgVrExtensionIcon,
            tags: ['penguinmod', 'hardware'],
            description: '開発中',
            extDeveloper: "JeremyGamer13",
            extraLabels: [
                {
                    name: "Uses code from",
                    value: '"Augmented Reality" by Vadik1'
                }
            ],
            extensionWarningOnImport: true,
            featured: true
        }
    ];
    extras.forEach(ext => {
        menuItems.push(ext);
    });
}
const filteredMenuItems = (typeof ENV !== 'undefined' && ENV.CanLoadCustomExtension === false)
    ? menuItems.filter(item => item.extensionId !== '')
    : menuItems;

export default filteredMenuItems;