package Mulltithreading;

public class MultithreadExtendThread extends Thread{

    private int threadNumber;


    public MultithreadExtendThread(int threadNumber) {
        this.threadNumber = threadNumber;
    }

    @Override
    public void run(){
        for(int i = 1; i <= 5; i++){
            System.out.println("Thread " + threadNumber + ": " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }

}
