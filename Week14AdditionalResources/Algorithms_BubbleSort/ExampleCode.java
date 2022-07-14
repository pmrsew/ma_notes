package Algorithms_BubbleSort;
/*Algorithms: Bubble Sort - HackerRank*/
/*https://youtu.be/6Gv8vg0kcHc*/
public class ExampleCode {

    public static void bubbleSort(int[] array){
        boolean isSorted = false;

        //add optimization so whole array isn't being read each time
        //the last-most element will be in place after full pass
        int lastUnsorted = array.length - 1;

        while(!isSorted){
            isSorted = true;
            for(int i = 0; i < lastUnsorted; i++){
                if(array[i] > array[i + 1]){
                    swap(array, i, i + 1);
                    isSorted = false;
                }
            }
            lastUnsorted--;
        }
    }

    public static void swap(int[] array, int i, int j){
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
