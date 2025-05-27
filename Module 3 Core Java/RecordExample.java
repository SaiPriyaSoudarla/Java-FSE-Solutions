import java.util.*;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Aarav", 22),
            new Person("Divya", 18),
            new Person("Ravi", 25)
        );

        for (Person p : people) {
            System.out.println(p);
        }

        // Filter based on age
        people.stream()
              .filter(p -> p.age() > 20)
              .forEach(p -> System.out.println("Over 20: " + p.name()));
    }
}
