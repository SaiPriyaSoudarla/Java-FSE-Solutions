import java.sql.*;

public class StudentDAO {
    Connection con;

    public StudentDAO() {
        try {
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/college", "root", "");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void insertStudent(int id, String name) throws SQLException {
        String sql = "INSERT INTO students (id, name) VALUES (?, ?)";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setInt(1, id);
        ps.setString(2, name);
        ps.executeUpdate();
        System.out.println("Student inserted.");
    }

    public void updateStudent(int id, String newName) throws SQLException {
        String sql = "UPDATE students SET name=? WHERE id=?";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setString(1, newName);
        ps.setInt(2, id);
        ps.executeUpdate();
        System.out.println("Student updated.");
    }

    public static void main(String[] args) throws SQLException {
        StudentDAO dao = new StudentDAO();
        dao.insertStudent(1, "Aarav");
        dao.updateStudent(1, "Aarav Kumar");
    }
}
