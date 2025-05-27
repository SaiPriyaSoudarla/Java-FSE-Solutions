public class VirtualThreadDemo {
    public static void main(String[] args) {
        Runnable task = () -> {
            System.out.println("Running in virtual thread: " + Thread.currentThread());
        };

        Thread.startVirtualThread(task);

        // Wait a moment to let the virtual thread finish
        try { Thread.sleep(100); } catch (InterruptedException e) {}
    }
}
