import java.lang.reflect.*;

public class ReflectionExample {
    public static void main(String[] args) {
        try {
            Class<?> cls = Class.forName("java.util.ArrayList");

            System.out.println("Class Name: " + cls.getName());

            Method[] methods = cls.getDeclaredMethods();
            System.out.println("\nMethods:");
            for (Method m : methods) {
                System.out.println(m.getName());
            }

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
