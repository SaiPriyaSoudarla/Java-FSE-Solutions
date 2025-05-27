import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(1234);
        System.out.println("Server started. Waiting for client...");

        Socket socket = server.accept();
        BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter output = new PrintWriter(socket.getOutputStream(), true);

        BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));
        String msg;

        while (true) {
            msg = input.readLine();
            System.out.println("Client: " + msg);

            System.out.print("You: ");
            msg = userInput.readLine();
            output.println(msg);
        }
    }
}
