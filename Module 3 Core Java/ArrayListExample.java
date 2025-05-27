import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> students = new ArrayList<>();

        System.out.print("Enter number of students: ");
        int count = sc.nextInt();
        sc.nextLine(); // Consume newline

        for (int i = 0; i < count; i++) {
            System.out.print("Enter student name: ");
            String name = sc.nextLine();
            students.add(name);
        }

        System.out.println("Student List:");
        for (String name : students) {
            System.out.println(name);
        }

        sc.close();
    }
}
