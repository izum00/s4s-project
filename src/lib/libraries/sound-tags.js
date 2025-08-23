import messages from './tag-messages.js';
import {FormattedMessage} from 'react-intl';

export default [
    {tag: 'penguinmod', intlLabel: messages.penguinmod},
    {type: 'divider'},
    {type: 'subtitle', intlLabel: <FormattedMessage id="gui.extension.types" defaultMessage="Types" />},
    {tag: 'themes', intlLabel: messages.themes},
    {tag: 'loops', intlLabel: messages.loops},
    {tag: 'effects', intlLabel: messages.effects},
    {type: 'divider'},
    {type: 'subtitle', intlLabel: <FormattedMessage id="gui.extension.general" defaultMessage="General" />},
    {tag: 'animals', intlLabel: messages.animals},
    {tag: 'monster', intlLabel: messages.monsters},
    {tag: 'notes', intlLabel: messages.notes},
    {tag: 'percussion', intlLabel: messages.percussion},
    {tag: 'voice', intlLabel: messages.voice},
    {tag: 'wacky', intlLabel: messages.wacky},
    {tag: 'ui', intlLabel: messages.ui},
    {type: 'divider'},
    {type: 'subtitle', intlLabel: <FormattedMessage id="gui.extension.objects" defaultMessage="Objects" />},
    {tag: 'footsteps', intlLabel: messages.footsteps},
    {tag: 'space', intlLabel: messages.space},
    {tag: 'sports', intlLabel: messages.sports},
    {tag: 'swords', intlLabel: messages.swords},
    {tag: 'guns', intlLabel: messages.guns},
    {type: 'divider'},
    {type: 'subtitle', intlLabel: <FormattedMessage id="gui.extension.materials" defaultMessage="Materials" />},
    {tag: 'metal', intlLabel: messages.metal}
];
