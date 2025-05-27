import java.util.*;

public class LambdaSortExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Priya", "Anu", "Kiran", "Zara");

        System.out.println("Before sorting: " + names);

        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println("After sorting: " + names);
    }
}
