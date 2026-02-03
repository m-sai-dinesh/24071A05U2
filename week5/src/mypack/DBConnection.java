package mypack;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static final String URL = "jdbc:oracle:thin:system/vnrvjiet@localhost:1521/XEPDB1";

    public static Connection getConnection() {
        try {
            System.out.println("🔥 Connecting to Oracle 21c XE...");
            Connection con = DriverManager.getConnection(URL);
            System.out.println("✅ SUCCESS - Oracle Connected!");
            System.out.println("Database: " + con.getCatalog());
            return con;
        } catch (SQLException e) {
            System.err.println("❌ FAILED: " + e.getMessage());
            return null;
        }
    }

    public static void main(String[] args) {
        System.out.println("1. STARTING ORACLE TEST");
        Connection con = getConnection();
        if (con != null) {
            System.out.println("2. ORACLE READY FOR CRUD!");
        }
        System.out.println("3. TEST COMPLETE");
    }
}
