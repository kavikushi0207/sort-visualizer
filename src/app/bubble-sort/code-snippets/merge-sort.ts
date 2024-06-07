export const mergeSortJavaScript = `
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
`;
export const mergeSortPython = `
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    middle = len(arr) // 2
    left = arr[:middle]
    right = arr[middle:]
    return merge(merge_sort(left), merge_sort(right))
`;
export const mergeSortJava = `
public static void mergeSort(int[] arr) {
    mergeSort(arr, 0, arr.length - 1);
}
public static void mergeSort(int[] arr, int l, int r) {
    if (l < r) {
        int m = (l + r) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
`;
export const mergeSortC = `
void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = (l + r) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
`;
export const mergeSortCPP = `
void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = (l + r) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
`;
export const mergeSortCSharp = `
public static void MergeSort(int[] arr) {
    MergeSort(arr, 0, arr.Length - 1);
}
public static void MergeSort(int[] arr, int l, int r) {
    if (l < r) {
        int m = (l + r) / 2;
        MergeSort(arr, l, m);
        MergeSort(arr, m + 1, r);
        Merge(arr, l, m, r);
    }
}
`;
export const mergeSortTypeScript = `
mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return this.merge(this.mergeSort(left), this.mergeSort(right));
}
`;