export default class TpeUtils {
    static cost(tpe) {
        if (tpe < 70) return 1;

        if (tpe < 75) return 2;

        if (tpe < 80) return 3;

        if (tpe < 90) return 5;

        return 10;
    }

    static decrementCost(tpe) {
        if (tpe > 90) return -10;

        if (tpe > 80) return -5;

        if (tpe > 75) return -3;

        if (tpe > 70) return -2;

        return -1;
    }
}
