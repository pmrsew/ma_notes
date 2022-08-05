package Mulltithreading;

public class Multithreading {

    public static void main(String[] args){

        /* First way to create threads is to create a class that extends the Thread class */
        for(int i = 1; i <= 4; i++){
            MultithreadExtendThread firstThreadLoop = new MultithreadExtendThread(i);
            firstThreadLoop.start();
        }

        /* Second way to create threads is to create a class that implements the Runnable interface */
        for(int i = 5; i <= 8; i++){
            MultithreadImplementRunnable secondThreadLoop = new MultithreadImplementRunnable(i);
            Thread myThread = new Thread(secondThreadLoop);
            myThread.start();
        }


    }

}
