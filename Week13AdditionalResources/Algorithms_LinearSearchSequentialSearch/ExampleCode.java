package Algorithms_LinearSearchSequentialSearch;

/*
From youtube video: https://youtu.be/aqFTmGbKajI
 */

public class ExampleCode {

    public static int seqSearch(int[] list, int target){

        for(int j = 0; j < list.length; j++){
            if(list[j] == target) {
                //returns index of found target
                return j;
            }
        }

        return -1;

    }

}
