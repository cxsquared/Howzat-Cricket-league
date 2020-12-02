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

    static tpa(stats) {
        return stats.reduce((t, n) => {
            if (Number.isInteger(n)) {
                var tpa = n - 40;
                var totalTpa = 0;

                while (tpa > 0) {
                    if (tpa > 50) {
                        totalTpa += 10;
                    } else if (tpa > 40) {
                        totalTpa += 5;
                    } else if (tpa > 35) {
                        totalTpa += 3;
                    } else if (tpa > 30) {
                        totalTpa += 2;
                    } else {
                        totalTpa += 1;
                    }

                    tpa--;
                }

                return t + totalTpa;
            }

            return t;
        }, 0)
    }
}
