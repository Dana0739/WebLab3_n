import static java.lang.StrictMath.pow;
import static java.lang.StrictMath.sqrt;

class Figure {
    public float r;

    public Figure(float r) {
        this.r = r;
    }

    private boolean fits2(Point point) {
        if (point.getY() > 0 || point.getX() > 0 || point.getX() < - this.r || point.getY() < - this.r) return false;

        return Math.abs(point.getY()) <= sqrt(pow(this.r, 2) - pow(point.getX(), 2));
    }

    private boolean fits3(Point point) {
        return
                (point.getX() >= 0) &&
                        (point.getX() <= this.r / 2) &&
                        (point.getY() >= 0) &&
                        (point.getY() <= this.r);
    }

    private boolean fits4(Point point) {
        if (point.getX() < 0 || point.getY() > 0) return false;
        return point.getY() >= 2 * point.getX() - this.r;
    }

    boolean fits(Point point) {
        return (this.fits2(point) || this.fits3(point) || this.fits4(point));
    }

}