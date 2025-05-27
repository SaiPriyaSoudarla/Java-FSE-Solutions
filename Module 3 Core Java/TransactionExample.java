import java.sql.*;

public class TransactionExample {
    public static void main(String[] args) {
        try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/bank", "root", "")) {
            con.setAutoCommit(false);

            PreparedStatement debit = con.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            PreparedStatement credit = con.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");

            debit.setInt(1, 1000);
            debit.setInt(2, 1); // from account
            credit.setInt(1, 1000);
            credit.setInt(2, 2); // to account

            debit.executeUpdate();
            credit.executeUpdate();

            con.commit();
            System.out.println("Transaction successful!");

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Transaction failed, rolling back...");
        }
    }
}
