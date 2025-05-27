import java.io.*;
import java.net.*;

public class Client {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 1234);
        BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter output = new PrintWriter(socket.getOutputStream(), true);

        BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));
        String msg;

        while (true) {
            System.out.print("You: ");
            msg = userInput.readLine();
            output.println(msg);

            msg = input.readLine();
            System.out.println("Server: " + msg);
        }
    }
}
