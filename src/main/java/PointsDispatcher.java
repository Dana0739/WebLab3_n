import javax.annotation.PostConstruct;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;
import java.util.ArrayList;
import java.util.Map;

@ApplicationScoped
@ManagedBean
public class PointsDispatcher {
    @PostConstruct
    public void reset() {
        this.Points = new ArrayList<>();
        //add from db
        this.pointsJsons = new ArrayList<>();
        //add in loop
        this.point = new Point();
        this.x = 0;
        this.y = 0;
        this.r = 1;
        this.validY = "in (-5; 5)";
        this.validX = "from -2 to 2";
        this.validR = "from 1 to 5";
    }

    private Point point;
    private ArrayList<Point> Points;
    private ArrayList<String> pointsJsons;
    private float x;
    private float y;
    private int r;
    private String validX;
    private String validY;
    private String validR;
    private String addFromPlot;

    public void setAddFromPlot(String addFromPlot) {
        this.addFromPlot = addFromPlot;
    }

    public String getAddFromPlot() {
        return addFromPlot;
    }

    public void addPoint() {
        point.setX(this.x);
        point.setY(this.y);
        point.setR(this.r);
        if (point.validate_x() && point.validate_y() && point.validate_r()) {
            point.setId(GetId());
            this.validX = point.getValidX();
            this.validY = point.getValidY();
            this.validR = point.getValidR();
            Figure figure = new Figure(r);
            point.setSuccess(figure.fits(point));
            setPoint(point);
            this.point = new Point();
            pointsJsons = newJsons();
            //add to oracle through jdbc
        }
    }
/*
    public void addFromPlot() {
        FacesContext fc = FacesContext.getCurrentInstance();
        Map<String,String> params = fc.getExternalContext().getRequestParameterMap();
        this.x = Float.parseFloat(params.get("x"));
        this.y = Float.parseFloat(params.get("y"));
        addPoint();
    }
*/
    private ArrayList<String> newJsons() {
        ArrayList<String> result = new ArrayList<String>();
        for (int i = 0; i < this.Points.size(); i++){
            result.add(this.Points.get(i).toString());
        }
        return result;
    }

    public void setPoint(Point point) {
        Points.add(point);
    }

    public ArrayList<Point> getPoints() {
        return Points;
    }

    public void setR(int r) {
        this.r = r;
    }

    public int getR() {
        return r;
    }

    public int GetId() {
        return Points.size();
    }

    public void setPointsJsons(ArrayList<String> pointsJsons) {
        this.pointsJsons = pointsJsons;
    }

    public ArrayList<String> getPointsJsons() {
        return pointsJsons;
    }

    public void setValidR(String validR) {
        this.validR = validR;
    }

    public String getValidR() {
        return validR;
    }

    public Point getPoint() {
        return this.point;
    }

    public void setX(float x) {
        this.x = x;
    }

    public void setY(float y) {
        this.y = y;
    }

    public void setValidY(String validY) {
        this.validY = validY;
    }

    public void setValidX(String validX) {
        this.validX = validX;
    }

    public String getValidY() {
        return validY;
    }

    public String getValidX() {
        return validX;
    }

    public float getY() {
        return y;
    }

    public float getX() {
        return x;
    }

    public void setR1() {
        this.r = 1;
    }
    public void setR2() {
        this.r = 2;
    }
    public void setR3() {
        this.r = 3;
    }
    public void setR4() {
        this.r = 4;
    }
    public void setR5() {
        this.r = 5;
    }
}