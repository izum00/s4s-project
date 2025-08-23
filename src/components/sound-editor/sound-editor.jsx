import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import {defineMessages, FormattedMessage, injectIntl, intlShape} from 'react-intl';

import Waveform from '../waveform/waveform.jsx';
import Label from '../forms/label.jsx';
import Input from '../forms/input.jsx';

import BufferedInputHOC from '../forms/buffered-input-hoc.jsx';
import AudioSelector from '../../containers/audio-selector.jsx';
import IconButton from '../icon-button/icon-button.jsx';
import {SOUND_BYTE_LIMIT} from '../../lib/audio/audio-util.js';

import styles from './sound-editor.css';

import { ReactComponent as PlayIcon } from './icon--play.svg';
import { ReactComponent as StopIcon } from './icon--stop.svg';
import { ReactComponent as RedoIcon } from './icon--redo.svg';
import { ReactComponent as UndoIcon } from './icon--undo.svg';
import { ReactComponent as ModifyIcon } from './icon--modify.svg';
import { ReactComponent as FormatIcon } from './icon--format.svg';
import { ReactComponent as FasterIcon } from './icon--faster.svg';
import { ReactComponent as SlowerIcon } from './icon--slower.svg';
import { ReactComponent as LouderIcon } from './icon--louder.svg';
import { ReactComponent as SofterIcon } from './icon--softer.svg';
import { ReactComponent as RobotIcon } from './icon--robot.svg';
import { ReactComponent as EchoIcon } from './icon--echo.svg';
import { ReactComponent as HighpassIcon } from './icon--highpass.svg';
import { ReactComponent as LowpassIcon } from './icon--lowpass.svg';
import { ReactComponent as ReverseIcon } from './icon--reverse.svg';
import { ReactComponent as FadeOutIcon } from './icon--fade-out.svg';
import { ReactComponent as FadeInIcon } from './icon--fade-in.svg';
import { ReactComponent as MuteIcon } from './icon--mute.svg';

import { ReactComponent as DeleteIcon } from './icon--delete.svg';
import { ReactComponent as CopyIcon } from './icon--copy.svg';
import { ReactComponent as PasteIcon } from './icon--paste.svg';
import { ReactComponent as CopyToNewIcon } from './icon--copy-to-new.svg';

const BufferedInput = BufferedInputHOC(Input);

const messages = defineMessages({
    sound: {
        id: 'gui.soundEditor.sound',
        description: 'Label for the name of the sound',
        defaultMessage: 'Sound'
    },
    play: {
        id: 'gui.soundEditor.play',
        description: 'Title of the button to start playing the sound',
        defaultMessage: 'Play'
    },
    stop: {
        id: 'gui.soundEditor.stop',
        description: 'Title of the button to stop the sound',
        defaultMessage: 'Stop'
    },
    copy: {
        id: 'gui.soundEditor.copy',
        description: 'Title of the button to copy the sound',
        defaultMessage: 'Copy'
    },
    paste: {
        id: 'gui.soundEditor.paste',
        description: 'Title of the button to paste the sound',
        defaultMessage: 'Paste'
    },
    copyToNew: {
        id: 'gui.soundEditor.copyToNew',
        description: 'Title of the button to copy the selection into a new sound',
        defaultMessage: 'Copy to New'
    },
    delete: {
        id: 'gui.soundEditor.delete',
        description: 'Title of the button to delete the sound',
        defaultMessage: 'Delete'
    },
    save: {
        id: 'gui.soundEditor.save',
        description: 'Title of the button to save trimmed sound',
        defaultMessage: 'Save'
    },
    undo: {
        id: 'gui.soundEditor.undo',
        description: 'Title of the button to undo',
        defaultMessage: 'Undo'
    },
    redo: {
        id: 'gui.soundEditor.redo',
        description: 'Title of the button to redo',
        defaultMessage: 'Redo'
    },
    faster: {
        id: 'gui.soundEditor.faster',
        description: 'Title of the button to apply the faster effect',
        defaultMessage: 'Faster'
    },
    slower: {
        id: 'gui.soundEditor.slower',
        description: 'Title of the button to apply the slower effect',
        defaultMessage: 'Slower'
    },
    echo: {
        id: 'gui.soundEditor.echo',
        description: 'Title of the button to apply the echo effect',
        defaultMessage: 'Echo'
    },
    robot: {
        id: 'gui.soundEditor.robot',
        description: 'Title of the button to apply the robot effect',
        defaultMessage: 'Robot'
    },
    louder: {
        id: 'gui.soundEditor.louder',
        description: 'Title of the button to apply the louder effect',
        defaultMessage: 'Louder'
    },
    softer: {
        id: 'gui.soundEditor.softer',
        description: 'Title of the button to apply thr.softer effect',
        defaultMessage: 'Softer'
    },
    reverse: {
        id: 'gui.soundEditor.reverse',
        description: 'Title of the button to apply the reverse effect',
        defaultMessage: 'Reverse'
    },
    fadeOut: {
        id: 'gui.soundEditor.fadeOut',
        description: 'Title of the button to apply the fade out effect',
        defaultMessage: 'Fade out'
    },
    fadeIn: {
        id: 'gui.soundEditor.fadeIn',
        description: 'Title of the button to apply the fade in effect',
        defaultMessage: 'Fade in'
    },
    mute: {
        id: 'gui.soundEditor.mute',
        description: 'Title of the button to apply the mute effect',
        defaultMessage: 'Mute'
    }
});

const formatTime = timeSeconds => {
    const minutes = (Math.floor(timeSeconds / 60))
        .toString()
        .padStart(2, '0');
    const seconds = (timeSeconds % 60)
        .toFixed(2)
        .padStart(5, '0');
    return `${minutes}:${seconds}`;
};

const formatDuration = (playheadPercent, trimStartPercent, trimEndPercent, durationSeconds) => {
    trimStartPercent = trimStartPercent === null ? 0 : trimStartPercent;
    trimEndPercent = trimEndPercent === null ? 1 : trimEndPercent;
    playheadPercent = playheadPercent === null ? trimStartPercent : playheadPercent;
    const trimSize = (trimEndPercent - trimStartPercent) || 1;
    const trimDuration = trimSize * durationSeconds;
    const progressInTrim = (playheadPercent - trimStartPercent) / trimSize;
    const currentTime = progressInTrim * trimDuration;
    return `${formatTime(currentTime)} / ${formatTime(trimDuration)}`;
};

const formatSoundSize = bytes => {
    if (bytes > 1000 * 1000) {
        return `${(bytes / 1000 / 1000).toFixed(2)}MB`;
    }
    return `${(bytes / 1000).toFixed(2)}KB`;
};

const SoundEditor = props => (
    <div
        className={styles.editorContainer}
        ref={props.setRef}
        onMouseDown={props.onContainerClick}
    >
        <div className={styles.row}>
            <div className={styles.inputGroup}>
                <Label text={props.intl.formatMessage(messages.sound)}>
                    <BufferedInput
                        tabIndex="1"
                        type="text"
                        value={props.name}
                        onSubmit={props.onChangeName}
                        className={styles.nameInput}
                    />
                </Label>
                <div className={styles.buttonGroup}>
                    <button
                        className={styles.button}
                        disabled={!props.canUndo}
                        title={props.intl.formatMessage(messages.undo)}
                        onClick={props.onUndo}
                    >
                        <UndoIcon className={styles.undoIcon} />
                    </button>
                    <button
                        className={styles.button}
                        disabled={!props.canRedo}
                        title={props.intl.formatMessage(messages.redo)}
                        onClick={props.onRedo}
                    >
                        <RedoIcon className={styles.redoIcon} />
                    </button>
                </div>
            </div>
            <div className={styles.inputGroup}>
                <IconButton
                    className={styles.toolButton}
                    img={<CopyIcon />}
                    title={props.intl.formatMessage(messages.copy)}
                    onClick={props.onCopy}
                />
                <IconButton
                    className={styles.toolButton}
                    disabled={props.canPaste === false}
                    img={<PasteIcon />}
                    title={props.intl.formatMessage(messages.paste)}
                    onClick={props.onPaste}
                />
                <IconButton
                    className={classNames(styles.toolButton, styles.flipInRtl)}
                    img={<CopyToNewIcon />}
                    title={props.intl.formatMessage(messages.copyToNew)}
                    onClick={props.onCopyToNew}
                />
            </div>
            <IconButton
                className={styles.toolButton}
                disabled={props.trimStart === null}
                img={<DeleteIcon />}
                title={props.intl.formatMessage(messages.delete)}
                onClick={props.onDelete}
            />
        </div>
        <div className={styles.row}>
            <div className={styles.waveformContainer}>
                <Waveform
                    data={props.chunkLevels}
                    height={160}
                    width={600}
                />
                <AudioSelector
                    playhead={props.playhead}
                    trimEnd={props.trimEnd}
                    trimStart={props.trimStart}
                    onPlay={props.onPlay}
                    onSetTrim={props.onSetTrim}
                    onStop={props.onStop}
                />
            </div>
        </div>
        <div className={classNames(styles.row, styles.rowReverse)}>
            <div className={classNames(styles.roundButtonOuter, styles.inputGroup)}>
                {props.playhead ? (
                    <button
                        className={classNames(styles.roundButton, styles.stopButtonn)}
                        title={props.intl.formatMessage(messages.stop)}
                        onClick={props.onStop}
                    >
                        <StopIcon />
                    </button>
                ) : (
                    <button
                        className={classNames(styles.roundButton, styles.playButton)}
                        title={props.intl.formatMessage(messages.play)}
                        onClick={props.onPlay}
                    >
                        <PlayIcon />
                    </button>
                )}
            </div>
            <div className={styles.effects}>
                <IconButton
                    className={styles.effectButton}
                    img={<ModifyIcon />}
                    title={<FormattedMessage {...messages.modify} />}
                    onClick={props.onModifySound}
                />
                <IconButton
                    className={styles.effectButton}
                    img={<FasterIcon />}
                    title={<FormattedMessage {...messages.faster} />}
                    onClick={props.onFaster}
                />
                <IconButton
                    className={styles.effectButton}
                    img={<SlowerIcon />}
                    title={<FormattedMessage {...messages.slower} />}
                    onClick={props.onSlower}
                />
                <IconButton
                    disabled={props.tooLoud}
                    className={classNames(styles.effectButton, styles.flipInRtl)}
                    img={<LouderIcon />}
                    title={<FormattedMessage {...messages.louder} />}
                    onClick={props.onLouder}
                />
                <IconButton
                    className={classNames(styles.effectButton, styles.flipInRtl)}
                    img={<SofterIcon />}
                    title={<FormattedMessage {...messages.softer} />}
                    onClick={props.onSofter}
                />
                <IconButton
                    className={classNames(styles.effectButton, styles.flipInRtl)}
                    img={<MuteIcon />}
                    title={<FormattedMessage {...messages.mute} />}
                    onClick={props.onMute}
                />
                <IconButton
                    className={styles.effectButton}
                    img={<FadeInIcon />}
                    title={<FormattedMessage {...messages.fadeIn} />}
                    onClick={props.onFadeIn}
                />
                <IconButton
                    className={styles.effectButton}
                    img={<FadeOutIcon />}
                    title={<FormattedMessage {...messages.fadeOut} />}
                    onClick={props.onFadeOut}
                />
                <IconButton
                    className={styles.effectButton}
                    img={<ReverseIcon />}
                    title={<FormattedMessage {...messages.reverse} />}
                    onClick={props.onReverse}
                />
                <IconButton
                    className={styles.effectButton}
                    img={<RobotIcon />}
                    title={<FormattedMessage {...messages.robot} />}
                    onClick={props.onRobot}
                />
                <IconButton
                    className={styles.effectButton}
                    img={<EchoIcon />}
                    title={<FormattedMessage {...messages.echo} />}
                    onClick={props.onEcho}
                />
                <IconButton
                    className={styles.effectButton}
                    img={<LowpassIcon />}
                    title={"Low Pass"}
                    onClick={props.onLowPass}
                />
                <IconButton
                    className={styles.effectButton}
                    img={<HighpassIcon />}
                    title={"High Pass"}
                    onClick={props.onHighPass}
                />
                <IconButton
                    className={styles.effectButton}
                    img={<FormatIcon />}
                    title={"Format"}
                    onClick={props.onFormatSound}
                />
            </div>
        </div>
        <div className={styles.infoRow}>
            <div className={styles.duration}>
                {formatDuration(props.playhead, props.trimStart, props.trimEnd, props.duration)}
            </div>
            <div className={styles.advancedInfo}>
                {props.sampleRate}
                {'Hz '}
                {`${String(props.dataFormat).toUpperCase()} `}
                {props.isStereo ? (
                    <FormattedMessage
                        defaultMessage="Stereo"
                        description="Refers to a 'Stereo Sound' (2 channels)"
                        id="tw.stereo"
                    />
                ) : (
                    <FormattedMessage
                        defaultMessage="Mono"
                        description="Refers to a 'Mono Sound' (1 channel)"
                        id="tw.mono"
                    />
                )}
                {` (${formatSoundSize(props.size)})`}
            </div>
        </div>
        {props.size >= SOUND_BYTE_LIMIT && (
            <div className={classNames(styles.alert, styles.tooLarge)}>
                <FormattedMessage
                    defaultMessage="This sound could be too large to upload to PenguinMod."
                    description="Message that appears when a sound exceeds the PenguinMod sound size limit."
                    id="pm.tooLarge"
                />
            </div>
        )}
        {(props.dataFormat === "mp3" || props.dataFormat === "ogg" || props.dataFormat === "flac") && (
            <div className={classNames(styles.alert, styles.stereo)}>
                <FormattedMessage
                    defaultMessage="Editing this sound will irreversibly convert it to a much larger, WAV format sound."
                    description="Message that appears when editing an mp3, ogg or flac sound."
                    id="pm.formatAlert"
                />
            </div>
        )}
        {(props.dataFormat === "ogg") && (
            <div className={classNames(styles.alert, styles.tooLarge)}>
                <FormattedMessage
                    defaultMessage="Users on iOS and MacOS will need to update their browser or device to hear any OGG sounds."
                    description="Message that appears when editing an ogg sound."
                    id="pm.oggSafariAlert"
                />
            </div>
        )}
        {props.isStereo && (
            <div className={classNames(styles.alert, styles.stereo)}>
                <FormattedMessage
                    defaultMessage="Editing this stereo sound will irreversibly convert it to mono."
                    description="Message that appears when editing a stereo sound."
                    id="tw.stereoAlert"
                />
            </div>
        )}
    </div>
);


SoundEditor.propTypes = {
    isStereo: PropTypes.bool.isRequired,
    duration: PropTypes.number.isRequired,
    dataFormat: PropTypes.number.isRequired,
    size: PropTypes.bool.isRequired,
    sampleRate: PropTypes.number.isRequired,
    canPaste: PropTypes.bool.isRequired,
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    chunkLevels: PropTypes.arrayOf(PropTypes.number).isRequired,
    intl: intlShape,
    name: PropTypes.string.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onContainerClick: PropTypes.func.isRequired,
    onCopy: PropTypes.func.isRequired,
    onCopyToNew: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
    onEcho: PropTypes.func.isRequired,
    onLowPass: PropTypes.func.isRequired,
    onHighPass: PropTypes.func.isRequired,
    onFadeIn: PropTypes.func.isRequired,
    onFadeOut: PropTypes.func.isRequired,
    onFaster: PropTypes.func.isRequired,
    onModifySound: PropTypes.func.isRequired,
    onFormatSound: PropTypes.func.isRequired,
    onLouder: PropTypes.func.isRequired,
    onMute: PropTypes.func.isRequired,
    onPaste: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onRedo: PropTypes.func.isRequired,
    onReverse: PropTypes.func.isRequired,
    onRobot: PropTypes.func.isRequired,
    onSetTrim: PropTypes.func,
    onSlower: PropTypes.func.isRequired,
    onSofter: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    onUndo: PropTypes.func.isRequired,
    playhead: PropTypes.number,
    setRef: PropTypes.func,
    tooLoud: PropTypes.bool.isRequired,
    trimEnd: PropTypes.number,
    trimStart: PropTypes.number
};

export default injectIntl(SoundEditor);
