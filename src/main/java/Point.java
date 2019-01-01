public class Point {
    private int id;
    private float x;
    private float y;
    private int r;
    private String validX;
    private String validY;
    private String validR;
    private boolean success;

    public Point() {}

    public boolean validate_r() {
        boolean correctR = false;
        for (int i = 1; i <= 5; i++) {
            if (r== i) {
                correctR = true;
            }
        }

        if(!correctR) {
            validR = "R must be 1, 2, 3, 4 or 5";
            return false;
        }

        validR = "from 1 to 5";
        return true;
    }

    public boolean validate_y() {
        if (y <= -5 || y >= 5) {
            validY = "Y must be between -5 and 5 and not equal -5 or 5";
            return false;
        }

        validY = "in (-5; 5)";
        return true;
    }

    public boolean validate_x() {
        boolean correctX = false;
        for (int i = -2; i <= 2; i++) {
            if (x ==i) {
                correctX = true;
            }
        }

        if(!correctX) {
            validX = "R must be 1, 2, 3, 4 or 5";
            return false;
        }

        validX = "from -2 to 2";
        return true;
    }

    @Override
    public String toString() {
        return "{\"id\":" + this.id + "," +
                "\"x\":" + this.x + "," +
                "\"y\":" + this.y + "," +
                "\"r\":\"" + this.r + "\"," +
                "\"success\":" + this.success +
                "}";
    }

    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public String getValidX() {
        return validX;
    }

    public String getValidY() {
        return validY;
    }

    public void setValidX(String validX) {
        this.validX = validX;
    }

    public void setValidY(String validY) {
        this.validY = validY;
    }

    public void setY(float y) {
        this.y = y;
    }

    public void setX(float x) {
        this.x = x;
    }

    public void setValidR(String validR) {
        this.validR = validR;
    }

    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getValidR() {
        return validR;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isSuccess() {
        return success;
    }
}
