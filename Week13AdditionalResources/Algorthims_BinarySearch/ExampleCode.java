package Algorthims_BinarySearch;

/*
From youtube video: https://www.youtube.com/watch?v=hKI93hOfeIk&ab_channel=BillBarnum
 */

public class ExampleCode {

    public static int binSearch(int[] list, int target){
        int left = 0;
        int right = list.length - 1;

        while(left <= right){
            int middle = (left + right) / 2;
            if(target < list[middle]){
                //too high
                right = middle - 1;
            } else if(target > list[middle]){
                //too low
                left = middle + 1;
            }else{
                //just right, return target index
                return middle;
            }
        }

        return -1;
    }

}
