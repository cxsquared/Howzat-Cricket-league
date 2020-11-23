import app from 'flarum/app';

export default class UpdateTypeUtils {
    static types() {
        return {
            'pointTask': app.translator.trans("hcl.forum.updates.types.pointTask"),
            'minorPointTask': app.translator.trans("hcl.forum.updates.types.minorPointTask"),
            'welfare': app.translator.trans("hcl.forum.updates.types.welfare"),
            'affiliate': app.translator.trans("hcl.forum.updates.types.affiliate"),
            'pressConference': app.translator.trans("hcl.forum.updates.types.pressConference"),
            'activityCheck': app.translator.trans("hcl.forum.updates.types.activityCheck"),
            'job': app.translator.trans("hcl.forum.updates.types.job"),
            'predictions': app.translator.trans("hcl.forum.updates.types.predictions"),
            'other': app.translator.trans("hcl.forum.updates.types.other")
        }
    }

    static getTpe(type) {
        switch (type) {
            case 'pointTask':
                return 6;
            case 'minorPointTask': // fall-through
            case 'welfare': 
                return 3;
            case 'pressConference':
                return 2;
            case 'activityCheck':
                return 1;
            case 'predictions': // fall-through
            case 'job': // fall-through
            case 'affiliate': // fall-through
            case 'other': // fall-through
            default:
                return null;
        }
    }

    static getCommentRequired(type) {
        return type === 'other' || type === 'job';
    }
}